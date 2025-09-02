import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-background overflow-hidden">
       <Image
        src="https://buroburo.ru/upload/iblock/935/93588be0eb7ea81176bc13fee7190704.jpg"
        alt="Кадастровые работы"
        fill
        className="object-cover object-center z-0"
        data-ai-hint="map blueprint"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto min-h-[calc(100vh-80px)] flex items-center justify-center py-20 md:py-32 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-tight">
            Татьяна Иванова — <br />
            Ваш Кадастровый Инженер
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-200">
            Оформление недвижимости — просто, быстро, надёжно. Современные решения для ваших кадастровых задач.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#contacts">Получить консультацию</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Link href="#services">Наши Услуги</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
