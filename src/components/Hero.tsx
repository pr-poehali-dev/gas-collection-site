import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Газоочистное оборудование
                <span className="block text-blue-300">нового поколения</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Проектирование, производство и монтаж систем газоочистки для
                металлургических предприятий с гарантией качества
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Получить консультацию
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3"
              >
                <Icon name="FileText" className="mr-2" size={20} />
                Скачать каталог
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-600">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">15+</div>
                <div className="text-sm text-gray-400">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">200+</div>
                <div className="text-sm text-gray-400">проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">99%</div>
                <div className="text-sm text-gray-400">эффективность</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-slate-500/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/30">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Промышленное оборудование"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    className="text-green-400"
                    size={20}
                  />
                  <span>Соответствие ГОСТ и европейским стандартам</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    className="text-green-400"
                    size={20}
                  />
                  <span>Полный цикл производства</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    className="text-green-400"
                    size={20}
                  />
                  <span>Техническая поддержка 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
