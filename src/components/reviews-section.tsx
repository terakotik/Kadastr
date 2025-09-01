import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Что говорят клиенты</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Нам важна обратная связь, и мы гордимся результатами нашей работы.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
      </div>
    </section>
  );
}
