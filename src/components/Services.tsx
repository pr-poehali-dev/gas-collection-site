import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Cog",
      title: "Проектирование систем",
      description:
        "Разработка индивидуальных решений газоочистки с учетом специфики производства",
    },
    {
      icon: "Factory",
      title: "Производство оборудования",
      description:
        "Изготовление газоочистного оборудования на собственных производственных мощностях",
    },
    {
      icon: "Wrench",
      title: "Монтаж и наладка",
      description:
        "Профессиональный монтаж, пусконаладочные работы и обучение персонала",
    },
    {
      icon: "Shield",
      title: "Сервисное обслуживание",
      description:
        "Техническое обслуживание, ремонт и модернизация установленного оборудования",
    },
    {
      icon: "Package",
      title: "Брикетирование пыли",
      description:
        "Переработка уловленной пыли в товарные брикеты для повторного использования в производстве",
    },
    {
      icon: "BarChart3",
      title: "Экологический мониторинг",
      description:
        "Системы контроля выбросов и автоматизация процессов газоочистки",
    },
    {
      icon: "Users",
      title: "Консультации и экспертиза",
      description:
        "Техническое консультирование и экспертная оценка существующих систем",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр решений для газоочистки металлургических производств
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon
                    name={service.icon as any}
                    className="text-blue-800"
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
