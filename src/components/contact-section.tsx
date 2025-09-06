"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Loader2, CheckCircle, Send } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const services = [
  "Межевание земельных участков",
  "Технический план",
  "Акт обследования",
  "Раздел/Объединение участков",
  "Вынос точек в натуру",
  "Консультация"
];

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать не менее 2 символов."),
  phone: z.string().min(10, "Введите корректный номер телефона."),
  service: z.string().optional(),
  message: z.string().min(5, "Пожалуйста, опишите вашу задачу подробнее.").optional().or(z.literal('')),
})

const benefits = [
    { text: "Бесплатная консультация" },
    { text: "Расчёт стоимости в течение часа" },
    { text: "Начало работ в день обращения" },
]

export default function ContactSection() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  const { formState: { isSubmitting } } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(values)
    toast({
      title: "Спасибо за заявку!",
      description: "Я свяжусь с вами в ближайшее время, чтобы обсудить детали.",
    })
    form.reset()
  }

  return (
    <section id="contacts" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Готовы начать <span className="text-primary">работу?</span></h2>
                 <p className="text-muted-foreground mt-4 text-lg">
                    Оставьте заявку прямо сейчас и получите бесплатную консультацию по вашему проекту.
                 </p>
                 <ul className="mt-8 space-y-4 max-w-md mx-auto lg:mx-0">
                     {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3 text-left">
                            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                            <span className="font-medium">{benefit.text}</span>
                        </li>
                     ))}
                 </ul>
            </div>
            <Card className="w-full max-w-lg mx-auto">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">Оставить заявку</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
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
                            <FormControl>
                              <Input type="tel" placeholder="Номер телефона" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Выберите услугу" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service} value={service}>
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea placeholder="Описание задачи" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? (
                           <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                           <Send className="mr-2 h-4 w-4" />
                        )}
                        Отправить заявку
                      </Button>
                    </form>
                  </Form>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  )
}
