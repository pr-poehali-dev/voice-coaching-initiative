
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1560439514-e960a3ef5019?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Елена Некрасова
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 font-light">
            Педагог по технике речи, эксперт по распаковке голоса и работе на камере
          </h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Помогаю звучать убедительно, говорить грамотно и выступать уверенно
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-purple-900 hover:bg-purple-100">
              Записаться на консультацию
              <Icon name="Calendar" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Узнать больше
              <Icon name="ArrowRight" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default HeroSection;
