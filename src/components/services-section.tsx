import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Map, FileText, ClipboardList, GitMerge, MapPin, MessageSquare, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Map className="w-8 h-8 text-primary" />,
    title: "Межевание земельных участков",
    description: "Точное определение границ вашего участка. Проведение кадастровых работ для получения межевого плана и постановки участка на кадастровый учёт."
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "Технический план",
    description: "Подготовка техплана для регистрации строений, зданий, сооружений и объектов незавершённого строительства."
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-primary" />,
    title: "Акт обследования",
    description: "Подготовка акта для снятия объекта с кадастрового учёта после его сноса или разрушения."
  },
  {
    icon: <GitMerge className="w-8 h-8 text-primary" />,
    title: "Раздел/Объединение участков",
    description: "Оформление документов для раздела или объединения земельных участков с сохранением прав собственности."
  },
  {
    icon: <MapPin className="w-8 h-8 text-primary" />,
    title: "Вынос точек в натуру",
    description: "Точное определение и закрепление границ земельного участка на местности."
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    title: "Консультации",
    description: "Полная и подробная консультация по всем вопросам кадастрового учёта и оформления документов."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Наши услуги</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Полный спектр кадастровых услуг для физических и юридических лиц.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col bg-secondary/50 group hover:bg-secondary transition-all duration-300">
              <CardHeader className="flex-row items-start gap-4">
                <div className="p-3 bg-background rounded-lg">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground flex-grow">{service.description}</p>
              </CardContent>
              <CardFooter>
                 <Button variant="link" asChild className="p-0 h-auto text-primary">
                    <Link href="#contacts">
                        Заказать услугу <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
