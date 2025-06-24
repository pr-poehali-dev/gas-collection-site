import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Factory" className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Универсальная Система</h3>
                <p className="text-sm text-gray-400">
                  Газоочистное оборудование
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Ведущий производитель систем газоочистки для металлургической
              промышленности
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Проектирование
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Производство
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Монтаж
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Сервис
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Оборудование</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Рукавные фильтры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Электрофильтры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Скрубберы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Циклоны
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Информация</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@universystem.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Пн-Пт: 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Универсальная Система. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Facebook" size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Twitter" size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Linkedin" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
