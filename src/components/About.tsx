import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const advantages = [
    {
      icon: "Award",
      title: "Сертифицированное качество",
      description:
        "Все оборудование сертифицировано и соответствует международным стандартам",
    },
    {
      icon: "Zap",
      title: "Высокая эффективность",
      description:
        "Степень очистки газов до 99.9% при минимальном энергопотреблении",
    },
    {
      icon: "Clock",
      title: "Быстрые сроки",
      description:
        "Сокращенные сроки поставки благодаря собственному производству",
    },
    {
      icon: "Headphones",
      title: "Техподдержка 24/7",
      description:
        "Круглосуточная техническая поддержка и оперативное решение проблем",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              О компании
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                <strong className="text-gray-900">Универсальная Система</strong>{" "}
                — ведущий производитель высокотехнологичного газоочистного
                оборудования для металлургической промышленности с 5-летним
                опытом работы на рынке.
              </p>
              <p>
                Компания специализируется на полном цикле услуг: от
                проектирования и производства до монтажа и пусконаладки систем
                газоочистки для сталеплавильных производств. Обеспечиваем
                соответствие самым строгим экологическим стандартам и нормативам
                промышленной безопасности.
              </p>
              <p>
                Наш высококвалифицированный инженерно-технический персонал
                осуществляет непрерывную модернизацию технологических процессов
                и внедрение передовых решений в сфере промышленной экологии и
                энергоэффективности.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-800">50+</div>
                <div className="text-sm text-gray-600">
                  Реализованных проектов
                </div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-800">25+</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-blue-600 shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={advantage.icon as any}
                        className="text-blue-600"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
