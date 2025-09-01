import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-background overflow-hidden">
      <div className="container mx-auto min-h-[calc(100vh-80px)] flex items-center justify-center py-20 md:py-32">
        <div className="absolute inset-0 bg-primary/10 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background to-transparent opacity-40"></div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-tight">
            Татьяна Иванова — <br />
            Ваш Кадастровый Инженер
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Оформление недвижимости — просто, быстро, надёжно. Современные решения для ваших кадастровых задач.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#contacts">Получить консультацию</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#services">Наши Услуги</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
