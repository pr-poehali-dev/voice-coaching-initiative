
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ResultsSection = () => {
  const results = [
    {
      title: "Знаете, как готовить выступление/презентацию",
      icon: "FilePresentation",
      description: "Структурированный подход к подготовке, который работает всегда"
    },
    {
      title: "Способны наладить контакт с аудиторией",
      icon: "Users",
      description: "Техники взаимодействия и удержания внимания слушателей"
    },
    {
      title: "Контролируете волнение, управляете голосом",
      icon: "HeartPulse",
      description: "Практические методы справиться со стрессом и сохранить уверенность"
    },
    {
      title: "Играючи настраиваетесь на эфир/коммуникацию",
      icon: "Radio",
      description: "Быстрые и эффективные техники подготовки к любому формату выступления"
    },
    {
      title: "Работа на камеру больше не пугает",
      icon: "Camera",
      description: "Уверенное поведение перед камерой в любых обстоятельствах"
    }
  ];

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6 text-purple-800">Результаты обучения</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          После работы со мной вы получите конкретные навыки, которые изменят ваш подход к коммуникации
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {results.map((result, index) => (
          <Card key={index} className="hover:shadow-md transition-all duration-300 h-full border-l-4 border-l-purple-500">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <Icon name={result.icon} className="text-purple-700" />
                </div>
                <h3 className="font-bold text-lg">{result.title}</h3>
              </div>
              <p className="text-gray-600 mt-auto">{result.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-purple-100 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-6 text-purple-800">Отзывы моих клиентов</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((testimonial) => (
            <Card key={testimonial} className="bg-white overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    <Icon name="Quote" className="text-purple-300 h-10 w-10" />
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "Благодаря Елене я смогла преодолеть свой страх публичных выступлений. Теперь я уверенно выступаю на корпоративных мероприятиях."
                  </p>
                  <div className="mt-auto pt-4 border-t w-full">
                    <p className="font-medium">Анна Петрова</p>
                    <p className="text-gray-500 text-sm">Руководитель отдела продаж</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
