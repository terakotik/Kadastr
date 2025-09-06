import Link from "next/link";
import { Phone, Mail, MapPin } from 'lucide-react';
import AnimatedLogo from "./animated-logo";

export default function Footer() {
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
                <a href="mailto:info@geosolutions.pro" className="hover:text-primary">info@geosolutions.pro</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Санкт‑Петербург, Лиговский пр., д. 74 Д, оф. 5</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Татьяна Иванова. Все права защищены.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-primary">Политика конфиденциальности</Link>
            <Link href="#" className="hover:text-primary">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
