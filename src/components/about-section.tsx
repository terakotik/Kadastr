import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Обо мне</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Профессиональный подход и многолетний опыт для решения ваших задач.
          </p>
        </div>
        <Card className="overflow-hidden">
            <div className="grid md:grid-cols-5 items-center">
              <div className="md:col-span-2">
                <Image
                  src="https://picsum.photos/600/800"
                  alt="Портрет Татьяны Ивановой"
                  width={600}
                  height={800}
                  data-ai-hint="professional woman portrait"
                  className="object-cover w-full h-full max-h-[500px] md:max-h-full"
                />
              </div>
              <div className="md:col-span-3 p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4">Татьяна Иванова</h3>
                <p className="text-muted-foreground mb-6">
                  Я, Татьяна Иванова, кадастровый инженер с более чем 12-летним опытом работы в сфере землеустройства и недвижимости. С 2011 года я помогаю своим клиентам в сложных вопросах, связанных с кадастровым учётом и регистрацией прав. За это время я оформила более 2 000 объектов, включая земельные участки, жилые и нежилые строения, а также линейные объекты.
                </p>
                <p className="text-muted-foreground">
                  Я стремлюсь к тому, чтобы каждый мой клиент получил безупречный сервис и гарантированный результат. **Надёжность, скорость, точность и законность** — это принципы, которыми я руководствуюсь в своей работе. Моя цель — минимизировать ваше участие в процессе, выполняя большинство работ удалённо, чтобы вы могли сэкономить своё время и силы.
                </p>
              </div>
            </div>
        </Card>
      </div>
    </section>
  );
}
