"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "Обо мне" },
  { href: "#services", label: "Услуги" },
  { href: "#progress", label: "Процесс" },
  { href: "#prices", label: "Прайс-лист" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-sm border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="#home" className="flex items-center gap-3">
            <svg width="48" height="48" viewBox="0 0 100 100">
                <rect x="5" y="5" width="90" height="90" fill="none" stroke="#4285F4" strokeWidth="6"></rect>
                <rect x="20" y="20" width="60" height="60" fill="none" stroke="#ef4444" strokeWidth="8"></rect>
                <circle cx="50" cy="50" r="5" fill="#ef4444"></circle>
            </svg>
          <div>
            <span className="text-xl font-bold font-headline text-foreground leading-tight">
              Татьяна Иванова
            </span>
            <p className="text-xs text-muted-foreground">Кадастровый инженер</p>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <Button asChild>
            <a href="tel:+79119448000">
              <Phone className="mr-2 h-4 w-4" />
              Связаться
            </a>
          </Button>
        </div>
        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Открыть меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full h-full bg-background p-0 flex flex-col data-[state=open]:duration-300 data-[state=closed]:duration-300">
               <div className="flex flex-col h-full">
                  <div className="p-4 flex justify-between items-center border-b">
                    <Link href="#home" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg width="40" height="40" viewBox="0 0 100 100">
                            <rect x="5" y="5" width="90" height="90" fill="none" stroke="#4285F4" strokeWidth="6"></rect>
                            <rect x="20" y="20" width="60" height="60" fill="none" stroke="#ef4444" strokeWidth="8"></rect>
                            <circle cx="50" cy="50" r="5" fill="#ef4444"></circle>
                        </svg>
                        <div>
                          <span className="text-lg font-bold font-headline text-foreground leading-tight">
                            Татьяна Иванова
                          </span>
                          <p className="text-xs text-muted-foreground">Кадастровый инженер</p>
                        </div>
                      </Link>
                  </div>
                  <nav className="flex flex-col flex-grow justify-center items-center gap-6 text-center">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="text-3xl font-headline text-foreground transition-colors hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="p-4 border-t text-center">
                    <SheetClose asChild>
                        <Button asChild size="lg" className="w-full max-w-sm mx-auto mb-4">
                          <Link href="#contacts" onClick={() => setIsMobileMenuOpen(false)}>
                              <Phone className="mr-2 h-5 w-5" />
                              Оставить заявку
                          </Link>
                        </Button>
                    </SheetClose>
                    <div className="text-sm text-muted-foreground space-y-2">
                        <a href="tel:+79119448000" className="flex items-center justify-center gap-2 hover:text-primary">
                            <Phone className="w-4 h-4"/>
                            +7 911 944 8000
                        </a>
                        <a href="mailto:info@egrnkadastr.ru" className="flex items-center justify-center gap-2 hover:text-primary">
                            <Mail className="w-4 h-4"/>
                            info@egrnkadastr.ru
                        </a>
                    </div>
                  </div>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
