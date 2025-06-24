import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      link: "tel:+74951234567",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@universystem.ru",
      link: "mailto:info@universystem.ru",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "г. Москва, ул. Промышленная, д. 25",
      link: "#",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      value: "Пн-Пт: 9:00-18:00",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Связаться с нами</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Получите персональную консультацию по газоочистному оборудованию
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name={info.icon as any} size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{info.title}</div>
                    <a
                      href={info.link}
                      className="text-lg hover:text-blue-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-600 rounded-lg">
              <h4 className="text-lg font-bold mb-2">Экстренная поддержка</h4>
              <p className="text-blue-100 mb-4">
                Техническая поддержка работает круглосуточно для решения
                критических вопросов
              </p>
              <Button
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Icon name="Phone" className="mr-2" size={16} />
                +7 (495) 123-45-68
              </Button>
            </div>
          </div>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Оставить заявку
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Имя *
                    </label>
                    <Input
                      placeholder="Введите ваше имя"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Компания
                    </label>
                    <Input
                      placeholder="Название компании"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Телефон *
                    </label>
                    <Input
                      placeholder="+7 (___) ___-__-__"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Опишите ваши требования к газоочистному оборудованию..."
                    rows={4}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
