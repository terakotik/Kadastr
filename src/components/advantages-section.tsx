"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BadgeCheck, Gauge, MapPin, Award } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from '@/hooks/use-mobile';

const advantages = [
  {
    icon: <BadgeCheck className="w-10 h-10 text-primary" />,
    title: "Надёжность",
    description: "Гарантирую юридическую чистоту и правильность оформления документов."
  },
  {
    icon: <Gauge className="w-10 h-10 text-primary" />,
    title: "Скорость",
    description: "Оперативная обработка запросов и выполнение работ в сжатые сроки."
  },
  {
    icon: <MapPin className="w-10 h-10 text-primary" />,
    title: "Точность",
    description: "Использование современного оборудования для точного определения границ."
  },
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Профессионализм",
    description: "12-летний опыт и тысячи успешно выполненных проектов."
  }
];

export default function AdvantagesSection() {
  const isMobile = useIsMobile();

  const DesktopView = () => (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {advantages.map((advantage, index) => (
        <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
          <CardHeader>
            <div className="p-4 bg-primary/10 rounded-full inline-block mx-auto">
              {advantage.icon}
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
            <p className="text-muted-foreground">{advantage.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const MobileView = () => (
     <Accordion type="single" collapsible className="w-full space-y-4">
      {advantages.map((advantage, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="bg-secondary/30 border rounded-lg shadow-sm">
          <AccordionTrigger className="p-4 text-lg font-semibold hover:no-underline">
            <div className="flex items-center gap-4">
               <div className="flex-shrink-0 w-10 h-10">
                {advantage.icon}
               </div>
              <span className="text-left">{advantage.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <p className="text-muted-foreground ml-14">{advantage.description}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <section id="advantages" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Наши преимущества</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Почему клиенты выбирают именно нас для решения своих кадастровых вопросов.
          </p>
        </div>
        {isMobile ? <MobileView /> : <DesktopView />}
      </div>
    </section>
  );
}