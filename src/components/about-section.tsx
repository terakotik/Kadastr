import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Татьяна Иванова — ваш <span className="text-primary">надёжный партнёр</span> в мире кадастра</h2>
                 <p className="text-muted-foreground mb-4">
                  Я, Татьяна Иванова, кадастровый инженер с более чем 12-летним опытом работы в сфере землеустройства и недвижимости. С 2011 года я помогаю своим клиентам в сложных вопросах, связанных с кадастровым учётом и регистрацией прав.
                </p>
                <p className="text-muted-foreground">
                   За это время я оформила более 2000 объектов, включая земельные участки, жилые и нежилые строения, а также линейные объекты. Моя цель — минимизировать ваше участие в процессе, выполняя большинство работ удалённо, чтобы вы могли сэкономить своё время и силы.
                </p>
                 <div className="mt-8 grid grid-cols-2 gap-6 text-center">
                    <div className="p-4 bg-background rounded-lg shadow-sm">
                        <p className="text-3xl font-bold text-primary">12+</p>
                        <p className="text-sm text-muted-foreground">лет опыта</p>
                    </div>
                     <div className="p-4 bg-background rounded-lg shadow-sm">
                        <p className="text-3xl font-bold text-primary">2000+</p>
                        <p className="text-sm text-muted-foreground">объектов оформлено</p>
                    </div>
                 </div>
            </div>
             <div className="order-1 lg:order-2 relative h-[300px] lg:h-[600px] overflow-hidden lg:overflow-visible">
                <div className="absolute inset-0 lg:transform lg:translate-y-[128px]">
                    <Image
                      src="http://egrnkadastr.ru/d/t.webp"
                      alt="Кадастровая карта"
                      fill
                      data-ai-hint="map blueprint"
                      className="object-contain object-bottom"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
