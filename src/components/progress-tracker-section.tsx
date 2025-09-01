import { FileText, Search, DraftingCompass, Landmark, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Консультация',
    description: 'Анализ вашей ситуации и документов.'
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: 'Полевые работы',
    description: 'Геодезические измерения на объекте.'
  },
  {
    icon: <DraftingCompass className="h-8 w-8 text-primary" />,
    title: 'Подготовка документов',
    description: 'Создание межевого или технического плана.'
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: 'Подача в Росреестр',
    description: 'Регистрация и постановка на учет.'
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: 'Готовый результат',
    description: 'Передача вам полного комплекта документов.'
  }
];

export default function ProgressTrackerSection() {
  return (
    <section id="progress" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Процесс работы</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Мы придерживаемся прозрачного и понятного процесса, чтобы вы всегда были в курсе, на каком этапе находится ваш проект.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
               <div className="flex items-center justify-center bg-background rounded-full h-20 w-20 border-4 border-primary/20 mb-4">
                  {step.icon}
               </div>
               <h3 className="font-bold text-lg mb-1">{step.title}</h3>
               <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
