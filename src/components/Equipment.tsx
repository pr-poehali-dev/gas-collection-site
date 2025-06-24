import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Equipment = () => {
  const equipment = [
    {
      title: "Рукавные фильтры",
      description: "Высокоэффективные системы очистки от твердых частиц",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: [
        "Эффективность 99.9%",
        "Автоматическая регенерация",
        "Длительный срок службы",
      ],
    },
    {
      title: "Технологическая линия брикетирования пыли",
      description:
        "Комплексная система переработки пыли после газоочистки в брикеты",
      image:
        "https://cdn.poehali.dev/files/153a8202-013d-425c-aa5d-21e3a4e74913.jpg",
      features: [
        "Утилизация отходов газоочистки",
        "Получение товарного продукта",
        "Экологичная переработка пыли",
      ],
    },
    {
      title: "Циклоны",
      description: "Механические сепараторы для грубой очистки газов",
      image:
        "https://cdn.poehali.dev/files/794b6015-b5c1-4c95-8af6-257ba19b7671.jpg",
      features: [
        "Простота конструкции",
        "Высокая надежность",
        "Низкие эксплуатационные расходы",
      ],
    },
  ];

  return (
    <section id="equipment" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Оборудование
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современные технологические решения для эффективной газоочистки
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-2 mb-6">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon name="Check" className="text-green-500" size={16} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="Info" className="mr-2" size={16} />
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
