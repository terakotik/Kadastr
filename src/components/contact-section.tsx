"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать не менее 2 символов.",
  }),
  phone: z.string().min(10, {
    message: "Введите корректный номер телефона.",
  }),
  message: z.string().optional(),
})

export default function ContactSection() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  })

  const { formState: { isSubmitting } } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(values)
    toast({
      title: "Спасибо за заявку!",
      description: "Я свяжусь с вами в ближайшее время, чтобы обсудить детали.",
    })
    form.reset()
  }

  return (
    <section id="contacts" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Свяжитесь со мной</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Готовы начать? Заполните форму ниже, и я свяжусь с вами для консультации.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Имя</FormLabel>
                        <FormControl>
                          <Input placeholder="Ваше имя" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Номер телефона</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+7 (999) 999-99-99" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Описание услуги или комментарий</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Кратко опишите вашу задачу..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Отправить заявку
                  </Button>
                </form>
              </Form>
            </div>
            <div className="relative hidden md:block">
               <Image 
                src="https://picsum.photos/800/1000" 
                alt="Карта местности" 
                fill
                className="object-cover"
                data-ai-hint="map aerial"
               />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
