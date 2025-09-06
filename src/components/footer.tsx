"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from 'lucide-react';
import AnimatedLogo from "./animated-logo";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Footer() {
  const [isMapVisible, setIsMapVisible] = useState(false);

  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="#home" className="flex items-center gap-3">
               <AnimatedLogo className="h-12 w-12" />
                <div>
                    <span className="text-xl font-bold font-headline text-foreground leading-tight">
                        Татьяна Иванова
                    </span>
                    <p className="text-xs text-muted-foreground">Кадастровый инженер</p>
                </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Ваш надёжный кадастровый инженер.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-headline font-semibold text-foreground">Навигация</h4>
            <ul className="space-y-2 text-sm">
                <li><Link href="#about" className="text-muted-foreground hover:text-primary">Обо мне</Link></li>
                <li><Link href="#services" className="text-muted-foreground hover:text-primary">Услуги</Link></li>
                <li><Link href="#prices" className="text-muted-foreground hover:text-primary">Прайс-лист</Link></li>
                <li><Link href="#contacts" className="text-muted-foreground hover:text-primary">Контакты</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-headline font-semibold text-foreground">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+79119448000" className="hover:text-primary">+7 911 944 8000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@egrnkadastr.ru" className="hover:text-primary">info@egrnkadastr.ru</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Санкт‑Петербург, Лиговский пр., д. 74 Д, оф. 5</span>
              </li>
            </ul>
             <Button 
                onClick={() => setIsMapVisible(!isMapVisible)} 
                variant="outline" 
                className="hidden md:inline-flex mt-2"
              >
                <MapPin className="mr-2 h-4 w-4"/>
                {isMapVisible ? 'Скрыть карту' : 'Показать на карте'}
            </Button>
          </div>
        </div>
        
        <div className={cn(
            "overflow-hidden transition-[max-height] duration-500 ease-in-out",
            isMapVisible ? 'mt-8 max-h-[600px]' : 'max-h-0'
          )}>
            <div className="aspect-video w-full rounded-lg overflow-hidden border">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.6190860132178!2d30.35357197715147!3d59.9218688749067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631b17079facb%3A0x9d70ed640bc232b!2z0JvQuNCz0L7QstGB0LrQuNC5INC_0YAuLCA3NCwgNSwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjywgMTkxMDQw!5e0!3m2!1sru!2sid!4v1757177613924!5m2!1sru!2sid" 
                    width="100%" 
                    height="100%" 
                    style={{ border:0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Татьяна Иванова. Все права защищены.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="hover:text-primary">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
