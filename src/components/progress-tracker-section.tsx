import { FileText, Search, DraftingCompass, Landmark, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Первичная консультация и анализ документов',
    duration: '1-2 дня',
    description: 'Оценка вашей ситуации, проверка предоставленных документов и составление плана работ.'
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: 'Полевые работы и замеры',
    duration: '2-5 дней',
    description: 'Выезд инженера на объект для проведения точных геодезических измерений с использованием современного оборудования.'
  },
  {
    icon: <DraftingCompass className="h-8 w-8 text-primary" />,
    title: 'Камеральная обработка и подготовка документов',
    duration: '5-10 дней',
    description: 'Обработка данных, полученных в ходе полевых работ, и подготовка межевого или технического плана.'
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: 'Подача документов в Росреестр',
    duration: '7-12 рабочих дней',
    description: 'Подача подготовленных документов в регистрирующий орган для постановки на кадастровый учет и/или регистрации прав.'
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: 'Получение готовых документов',
    duration: '1-2 дня',
    description: 'Получение выписки из ЕГРН и передача полного комплекта документов клиенту.'
  }
];

export default function ProgressTrackerSection() {
  return (
    <section id="progress" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Процесс работы</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Мы придерживаемся прозрачного и понятного процесса, чтобы вы всегда были в курсе, на каком этапе находится ваш проект.
          </p>
        </div>
        <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-border rounded-full md:block hidden"></div>
            <div className="space-y-12">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center md:gap-8 group">
                        <div className={`flex-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                            <Card className="hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-primary/10 rounded-full">
                                            {step.icon}
                                        </div>
                                        <div>
                                            <CardTitle>{step.title}</CardTitle>
                                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                                                <Clock className="w-4 h-4 mr-1.5" />
                                                <span>{step.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold z-10 md:order-2 my-4 md:my-0">
                            {index + 1}
                        </div>
                         <div className="flex-1 md:block hidden md:order-2"></div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
