
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Обо мне */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-800">О себе</h2>
            <p className="text-lg mb-4">
              Я, Елена Некрасова — педагог по технике речи, эксперт по распаковке голоса и по формированию навыков работы в кадре.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Icon name="Check" className="text-purple-600 mr-2 mt-1 flex-shrink-0" />
                <span>Ведущая теле- и радиоэфиров, интервьюер, редактор (опыт в журналистике 20+)</span>
              </li>
              <li className="flex items-start">
                <Icon name="Check" className="text-purple-600 mr-2 mt-1 flex-shrink-0" />
                <span>Преподаватель Уральского федерального университета</span>
              </li>
              <li className="flex items-start">
                <Icon name="Check" className="text-purple-600 mr-2 mt-1 flex-shrink-0" />
                <span>Тренер-наставник онлайн-курса «Голос может» Седы Каспаровой</span>
              </li>
              <li className="flex items-start">
                <Icon name="Check" className="text-purple-600 mr-2 mt-1 flex-shrink-0" />
                <span>Наставник в Школе ораторского искусства «СкажиМи»</span>
              </li>
              <li className="flex items-start">
                <Icon name="Check" className="text-purple-600 mr-2 mt-1 flex-shrink-0" />
                <span>Автор статей в журналах: National Business, Банзай, Собака.Екб</span>
              </li>
            </ul>
            <Button className="bg-purple-700 hover:bg-purple-800">
              Связаться со мной
              <Icon name="ArrowRight" />
            </Button>
          </div>
          <div className="flex justify-center">
            <Avatar className="w-72 h-72 rounded-full border-4 border-purple-200 shadow-xl">
              <AvatarImage src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Елена Некрасова" />
              <AvatarFallback className="text-4xl bg-purple-100 text-purple-800">ЕН</AvatarFallback>
            </Avatar>
          </div>
        </section>

        <Separator className="bg-purple-200" />

        {/* Обучение */}
        <ServicesSection />

        <Separator className="bg-purple-200" />

        {/* Результаты */}
        <ResultsSection />

        {/* Профессиональные интересы */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Зона моих профессиональных интересов</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
            {[
              "Освобождение и настройка голоса/тела",
              "Основы работы в кадре: как подружиться с камерой",
              "ЧТО и КАК: говорить так, чтобы запомнили",
              "Как приручить страх выступлений",
              "Голос автора: какой месседж отправляю окружающим",
              "Свобода в голосе = успех"
            ].map((interest, index) => (
              <Card key={index} className="hover:shadow-md transition duration-300 bg-white hover:bg-purple-50">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <Icon name="Mic" className="text-purple-700" />
                    </div>
                    <p>{interest}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="bg-purple-200" />

        {/* Футер */}
        <footer className="text-center py-8">
          <p className="text-xl font-semibold text-purple-800 mb-4">
            ГОЛОС - это Личный бренд, а также инструмент влияния.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Instagram" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Facebook" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Mail" />
            </Button>
          </div>
          <p className="mt-6 text-gray-600">© 2025 Елена Некрасова. Все права защищены.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
