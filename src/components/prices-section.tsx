import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react";

const priceItems = [
  {
    title: "Межевание земельного участка",
    price: "от 12 000 ₽",
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
    details: [
      "Измерение параметров объекта на месте",
      "Подготовка техплана для регистрации прав",
      "Внесение изменений в ЕГРН"
    ]
  },
  {
    title: "Акт обследования",
    price: "от 5 000 ₽",
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
                  <span className="font-bold text-primary ml-auto text-xl whitespace-nowrap pl-4">{item.price}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
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
