import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
              <Icon name="Factory" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Универсальная Система
              </h1>
              <p className="text-sm text-gray-600">Газоочистное оборудование</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-800 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-800 transition-colors"
            >
              О компании
            </a>
            <a
              href="#equipment"
              className="text-gray-700 hover:text-blue-800 transition-colors"
            >
              Оборудование
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-800 transition-colors"
            >
              Контакты
            </a>
            <Button className="bg-blue-800 hover:bg-blue-900">
              Связаться с нами
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name="Menu" size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700">
                Услуги
              </a>
              <a href="#about" className="text-gray-700">
                О компании
              </a>
              <a href="#equipment" className="text-gray-700">
                Оборудование
              </a>
              <a href="#contact" className="text-gray-700">
                Контакты
              </a>
              <Button className="bg-blue-800 hover:bg-blue-900 w-full">
                Связаться с нами
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
