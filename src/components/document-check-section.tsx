"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { automatedDocumentCheck, AutomatedDocumentCheckOutput } from '@/ai/flows/automated-document-check';
import { UploadCloud, FileWarning, FileCheck2, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  document: z.any().refine((files) => files?.length > 0, 'Пожалуйста, выберите файл.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function DocumentCheckSection() {
  const [result, setResult] = useState<AutomatedDocumentCheckOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const fileToDataUri = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const file = data.document[0];
      const documentDataUri = await fileToDataUri(file);
      const response = await automatedDocumentCheck({ documentDataUri });
      setResult(response);
    } catch (e) {
      setError('Произошла ошибка при проверке документа. Пожалуйста, попробуйте еще раз.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const fileRef = form.register('document');

  return (
    <section id="ai-check" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">AI-Проверка Документов</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Загрузите скан документа, и наш AI-помощник проверит его на наличие недостающей информации и возможных несоответствий.
          </p>
        </div>
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Автоматическая проверка документов</CardTitle>
            <CardDescription>Загрузите один файл (JPG, PNG, PDF) для анализа.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="document"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Файл документа</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type="file" 
                            className="w-full h-12 opacity-0 z-10 absolute inset-0 cursor-pointer"
                            accept=".jpg,.jpeg,.png,.pdf"
                            {...fileRef}
                            onChange={(e) => {
                                field.onChange(e.target.files);
                                setFileName(e.target.files?.[0]?.name || '');
                            }}
                          />
                          <div className="flex items-center justify-center w-full h-32 px-4 border-2 border-dashed rounded-lg text-muted-foreground">
                            <div className="text-center">
                                <UploadCloud className="mx-auto h-8 w-8 mb-2"/>
                                <p>{fileName || 'Нажмите, чтобы выбрать файл или перетащите его сюда'}</p>
                            </div>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Проверка...
                    </>
                  ) : (
                    'Проверить документ'
                  )}
                </Button>
              </form>
            </Form>

            {error && (
              <Alert variant="destructive" className="mt-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Ошибка</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {result && (
              <div className="mt-8 space-y-6">
                <h3 className="text-2xl font-bold text-center">Результаты проверки</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Alert>
                    <FileWarning className="h-4 w-4" />
                    <AlertTitle>Недостающая информация</AlertTitle>
                    <AlertDescription>
                      {result.missingInformation.length > 0 ? (
                        <ul className="mt-2 list-disc list-inside">
                          {result.missingInformation.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      ) : (
                        <p className="mt-2">Недостающей информации не найдено.</p>
                      )}
                    </AlertDescription>
                  </Alert>

                  <Alert>
                    <FileCheck2 className="h-4 w-4" />
                    <AlertTitle>Потенциальные несоответствия</AlertTitle>
                    <AlertDescription>
                      {result.potentialDiscrepancies.length > 0 ? (
                        <ul className="mt-2 list-disc list-inside">
                          {result.potentialDiscrepancies.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      ) : (
                        <p className="mt-2">Потенциальных несоответствий не найдено.</p>
                      )}
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
