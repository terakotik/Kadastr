import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle, Clock } from "lucide-react";

const priceItems = [
  {
    title: "Межевание земельного участка",
    price: "от 12 000 ₽",
    duration: "от 15 дней",
    details: [
      "Выезд кадастрового инженера на объект",
      "Подготовка межевого плана",
      "Согласование границ с соседями",
      "Постановка участка на кадастровый учёт"
    ]
  },
  {
    title: "Технический план",
    price: "от 8 000 ₽",
    duration: "от 10 дней",
    details: [
      "Измерение параметров объекта на месте",
      "Подготовка техплана для регистрации прав",
      "Внесение изменений в ЕГРН"
    ]
  },
  {
    title: "Акт обследования",
    price: "от 5 000 ₽",
    duration: "от 5 дней",
    details: [
      "Выезд специалиста для осмотра объекта",
      "Подготовка акта для снятия с учёта",
      "Снятие объекта с кадастрового учёта"
    ]
  }
];

export default function PricesSection() {
  return (
    <section id="prices" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Прайс-лист</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Прозрачное ценообразование без скрытых платежей.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {priceItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg shadow-sm">
                <AccordionTrigger className="p-6 text-lg hover:no-underline">
                  <span className="font-bold text-left">{item.title}</span>
                  <div className="flex items-center ml-auto pl-4">
                     <div className="text-right mr-4 hidden sm:block">
                        <div className="font-bold text-primary text-xl">{item.price}</div>
                        <div className="text-sm text-muted-foreground flex items-center justify-end">
                            <Clock className="w-4 h-4 mr-1.5"/>
                            {item.duration}
                        </div>
                     </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="sm:hidden text-lg font-bold text-primary mb-4">{item.price}</div>
                   <div className="sm:hidden text-sm text-muted-foreground flex items-center mb-4">
                        <Clock className="w-4 h-4 mr-1.5"/>
                        {item.duration}
                    </div>
                  <ul className="space-y-3 text-muted-foreground">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
