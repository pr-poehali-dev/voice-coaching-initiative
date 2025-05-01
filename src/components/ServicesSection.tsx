
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      title: "Звучать убедительно",
      icon: "Volume2"
    },
    {
      title: "Говорить грамотно",
      icon: "BookOpen"
    },
    {
      title: "Общаться легко",
      icon: "Users"
    },
    {
      title: "Выступать уверенно",
      icon: "Presentation"
    },
    {
      title: "Рассказывать истории увлекательно",
      icon: "BookMarked"
    },
    {
      title: "Доносить свою ценность грамотно",
      icon: "Award"
    },
    {
      title: "Работать на камеру естественно",
      icon: "Video"
    }
  ];

  const offerings = [
    {
      title: "Индивидуальные консультации",
      icon: "UserPlus",
      description: "Персональная работа над вашим голосом и техникой речи"
    },
    {
      title: "Групповое обучение",
      icon: "Users",
      description: "Эффективные тренинги и воркшопы в малых группах"
    },
    {
      title: "Диагностика",
      icon: "Stethoscope",
      description: "Анализ вашего голоса и речи с рекомендациями"
    },
    {
      title: "Подготовка спикера",
      icon: "Mic",
      description: "Комплексная подготовка к важным выступлениям"
    },
    {
      title: "Личная работа под ваш запрос",
      icon: "PersonStanding",
      description: "Индивидуальная программа с учетом ваших целей"
    },
    {
      title: "Проведение практикумов",
      icon: "GraduationCap",
      description: "Интенсивные практические занятия для быстрого роста"
    }
  ];

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6 text-purple-800">Чему я обучаю</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Развивайте свои коммуникативные навыки и овладевайте техниками, которые помогут вам в любой ситуации.
        </p>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-16">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="bg-purple-100 p-3 rounded-full mb-4">
              <Icon name={service.icon} className="text-purple-700 h-6 w-6" />
            </div>
            <h3 className="font-medium">{service.title}</h3>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Мои предложения</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {offerings.map((offer, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-100 p-4 rounded-full mb-4">
                  <Icon name={offer.icon} className="text-purple-700 h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
