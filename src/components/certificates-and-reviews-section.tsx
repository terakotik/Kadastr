import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const reviews = [
  {
    name: "Александр К.",
    initials: "АК",
    image: "https://picsum.photos/id/237/100",
    text: "Татьяна помогла мне с межеванием участка, всё прошло очень быстро и без проблем. Я даже не ожидал такой скорости! Документы оформили точно в срок. Настоящий профессионал своего дела."
  },
  {
    name: "Елена С.",
    initials: "ЕС",
    image: "https://picsum.photos/id/238/100",
    text: "Очень благодарна Татьяне за подробную консультацию. Она ответила на все мои вопросы и помогла составить технический план для моего дома. Работа выполнена на высшем уровне."
  }
];

const diplomas = [
    {
      src: "http://egrnkadastr.ru/d/d1.jpg",
      alt: "Квалификационный аттестат кадастрового инженера"
    },
    {
      src: "http://egrnkadastr.ru/d/d2.jpg",
      alt: "Членство в СРО"
    },
    {
      src: "http://egrnkadastr.ru/d/d3.jpg",
      alt: "Диплом о высшем образовании"
    },
    {
      src: "http://egrnkadastr.ru/d/d4.jpg",
      alt: "Уведомление о включении в реестр"
    },
    {
      src: "http://egrnkadastr.ru/d/d5.jpg",
      alt: "Сертификат соответствия"
    },
    {
      src: "http://egrnkadastr.ru/d/d6.jpg",
      alt: "Свидетельство о повышении квалификации"
    }
];

export default function CertificatesAndReviewsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Подтверждённый опыт</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Моя квалификация и репутация, подкреплённые документами и отзывами клиентов.
          </p>
        </div>
        <Tabs defaultValue="reviews" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 max-w-sm mx-auto h-12">
            <TabsTrigger value="reviews" className="text-lg">Отзывы</TabsTrigger>
            <TabsTrigger value="documents" className="text-lg">Документы</TabsTrigger>
          </TabsList>
          <TabsContent value="reviews" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={review.image} alt={`Фото ${review.name}`} data-ai-hint="person avatar" />
                        <AvatarFallback>{review.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold">{review.name}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      «{review.text}»
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="documents" className="mt-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {diplomas.map((diploma, index) => (
                    <Card key={index} className="overflow-hidden group flex flex-col">
                       <div className="aspect-[4/5.6] w-full overflow-hidden">
                         <Image
                           src={diploma.src}
                           alt={diploma.alt}
                           width={400}
                           height={560}
                           data-ai-hint="document certificate"
                           className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                         />
                       </div>
                       <CardFooter className="p-4 bg-background/50 border-t mt-auto">
                          <p className="text-sm font-medium text-center w-full">{diploma.alt}</p>
                       </CardFooter>
                    </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
