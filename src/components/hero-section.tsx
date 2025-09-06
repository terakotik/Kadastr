import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Phone, MessageCircle, Send } from "lucide-react";

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
            КАДАСТРОВЫЕ РАБОТЫ
            <br />
            И ГЕОДЕЗИЯ В ПЕТЕРБУРГЕ И
            <br />
            ЛЕН ОБЛАСТИ
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-200">
            Введите ваш номер телефона для консультации или свяжитесь с кадастровым инженером напрямую в чате WhatsApp или Telegram
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
             <Input type="tel" placeholder="Ваш номер телефона" className="h-12 text-lg text-center sm:text-left"/>
             <Button size="lg" className="w-full sm:w-auto">
                <Send className="mr-2 h-5 w-5"/>
                Отправить
             </Button>
          </div>
           <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
               <Button asChild variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                  <Link href="https://wa.me/79119448000" target="_blank">
                     <MessageCircle className="mr-2 h-5 w-5"/>
                     WhatsApp
                  </Link>
               </Button>
               <Button asChild variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                  <Link href="https://t.me/ваш_username" target="_blank">
                     <Send className="mr-2 h-5 w-5"/>
                     Telegram
                  </Link>
               </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
