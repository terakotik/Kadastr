import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Map, FileText, ClipboardList, GitMerge, MapPin, MessageSquare } from "lucide-react";

const services = [
  {
    icon: <Map className="w-10 h-10 text-primary" />,
    title: "Межевание земельных участков",
    description: "Точное определение границ вашего участка. Проведение кадастровых работ для получения межевого плана и постановки участка на кадастровый учёт."
  },
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: "Технический план",
    description: "Подготовка техплана для регистрации строений, зданий, сооружений и объектов незавершённого строительства."
  },
  {
    icon: <ClipboardList className="w-10 h-10 text-primary" />,
    title: "Акт обследования",
    description: "Подготовка акта для снятия объекта с кадастрового учёта после его сноса или разрушения."
  },
  {
    icon: <GitMerge className="w-10 h-10 text-primary" />,
    title: "Раздел/Объединение участков",
    description: "Оформление документов для раздела или объединения земельных участков с сохранением прав собственности."
  },
  {
    icon: <MapPin className="w-10 h-10 text-primary" />,
    title: "Вынос точек в натуру",
    description: "Точное определение и закрепление границ земельного участка на местности."
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-primary" />,
    title: "Консультации",
    description: "Полная и подробная консультация по всем вопросам кадастрового учёта и оформления документов."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Наши услуги</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Полный спектр кадастровых услуг для физических и юридических лиц.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="p-4 bg-primary/10 rounded-full inline-block">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground flex-grow">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
