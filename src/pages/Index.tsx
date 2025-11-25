import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-2xl">ASKONA 3.0</div>
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center gap-6 text-white/80 text-sm">
                <a href="#goal" className="hover:text-white transition-colors">Цель</a>
                <a href="#results" className="hover:text-white transition-colors">Результаты</a>
                <a href="#stages" className="hover:text-white transition-colors">Этапы</a>
              </nav>
              <Button 
                variant="outline" 
                className="bg-white text-black hover:bg-white/90 border-0"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/847632b3-b4a2-4e9c-b24d-caa528588ce6/files/1293afd6-c0cf-46aa-9e3c-079d2f5b04fd.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <p className="text-white/80 uppercase tracking-wider mb-4">next level IT architecture</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Проектирование <br />ИТ-архитектуры <br />для кратного роста
            </h1>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Data driven решения для централизованного масштабирования платформы Askona 3.0
            </p>
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6"
              onClick={() => document.getElementById('goal')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Узнать подробнее
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={32} />
        </div>
      </section>

      {/* Goal Section */}
      <section id="goal" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Цель проекта</h2>
            <div className="bg-black text-white p-12 md:p-16 rounded-lg">
              <p className="text-2xl md:text-3xl leading-relaxed">
                Проектирование ИТ-архитектуры для принятия <span className="text-primary">data driven решений</span> с целью кратного роста и централизованного масштабирования платформы
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Результаты проекта</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-shadow bg-white border-0">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                <Icon name="Network" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Целевая архитектура</h3>
              <p className="text-muted-foreground">
                Полное описание архитектуры Askona 3.0 с учетом всех бизнес-требований
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow bg-white border-0">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                <Icon name="Layers" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Технологический стек</h3>
              <p className="text-muted-foreground">
                Подбор оптимальных технологий и инструментов для реализации
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow bg-white border-0">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                <Icon name="Map" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">RoadMap 2026</h3>
              <p className="text-muted-foreground">
                Детальный план развития платформы на следующий год
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow bg-white border-0">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                <Icon name="Users" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Проектная команда</h3>
              <p className="text-muted-foreground">
                Описание целевых процессов и состава команды для реализации
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section id="stages" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Этапы работы</h2>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Stage 1 */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-24 h-24 bg-black text-white rounded-full flex items-center justify-center text-3xl font-bold">
                01
              </div>
              <div className="ml-32">
                <h3 className="text-3xl font-bold mb-6">Проектирование архитектуры</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 border-l-4 border-l-black">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Icon name="FileText" size={20} />
                      Формализация
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Потребностей и требований</li>
                      <li>• Бизнес-модели использования</li>
                      <li>• Структур данных по блокам</li>
                      <li>• Модели функциональных блоков</li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-black">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Icon name="Globe" size={20} />
                      Локализация
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Модель изменений по странам</li>
                      <li>• Платежные сервисы</li>
                      <li>• Сервисы доставки</li>
                      <li>• Коммуникационные шлюзы</li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-black">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Icon name="Gauge" size={20} />
                      Показатели качества
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Производительность</li>
                      <li>• Надежность и безопасность</li>
                      <li>• Масштабируемость</li>
                      <li>• Актуальность данных</li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-black">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Icon name="Database" size={20} />
                      Объемные показатели
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Количество товаров и цен</li>
                      <li>• База клиентов</li>
                      <li>• Промо и заказы</li>
                      <li>• Остатки и складская логистика</li>
                    </ul>
                  </Card>
                </div>
                <div className="mt-8 bg-black text-white p-6 rounded-lg">
                  <p className="font-bold flex items-center gap-2">
                    <Icon name="Target" size={20} />
                    Результат этапа:
                  </p>
                  <p className="text-lg mt-2">Целевая архитектура Askona 3.0</p>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="relative mt-20">
              <div className="absolute left-0 top-0 w-24 h-24 bg-black text-white rounded-full flex items-center justify-center text-3xl font-bold">
                02
              </div>
              <div className="ml-32">
                <h3 className="text-3xl font-bold mb-6">Проектирование решения</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 border-l-4 border-l-black">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Icon name="GitBranch" size={20} />
                      Интеграционная архитектура
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Модели целевых интеграций</li>
                      <li>• Архитектура ландшафта</li>
                      <li>• Решение бизнес-задач</li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-black">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Icon name="AlertCircle" size={20} />
                      Анализ интеграций
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Проблемность внешних систем</li>
                      <li>• Оценка рисков интеграции</li>
                      <li>• Стратегия миграции</li>
                    </ul>
                  </Card>
                </div>
                <div className="mt-8 bg-black text-white p-6 rounded-lg">
                  <p className="font-bold flex items-center gap-2">
                    <Icon name="Target" size={20} />
                    Результат этапа:
                  </p>
                  <p className="text-lg mt-2">Целевая архитектура Askona 3.0 в окружении интеграций</p>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="relative mt-20">
              <div className="absolute left-0 top-0 w-24 h-24 bg-black text-white rounded-full flex items-center justify-center text-3xl font-bold">
                03
              </div>
              <div className="ml-32">
                <h3 className="text-3xl font-bold mb-6">Дорожная карта внедрения</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 border-l-4 border-l-black">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Icon name="Calendar" size={20} />
                      Планирование этапов
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Определение этапов развития</li>
                      <li>• Согласование milestone внедрений</li>
                      <li>• Создание карты зависимостей</li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-black">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Icon name="TrendingUp" size={20} />
                      Оценка и риски
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Оценка основных рисков</li>
                      <li>• Бюджеты внедрений</li>
                      <li>• Презентация дорожной карты</li>
                    </ul>
                  </Card>
                </div>
                <div className="mt-8 bg-black text-white p-6 rounded-lg">
                  <p className="font-bold flex items-center gap-2">
                    <Icon name="Target" size={20} />
                    Результат этапа:
                  </p>
                  <p className="text-lg mt-2">Roadmap развития Askona 3.0 на 2026 год</p>
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="relative mt-20">
              <div className="absolute left-0 top-0 w-24 h-24 bg-black text-white rounded-full flex items-center justify-center text-3xl font-bold">
                04
              </div>
              <div className="ml-32">
                <h3 className="text-3xl font-bold mb-6">Процессы и команда</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 border-l-4 border-l-black">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Icon name="Settings" size={20} />
                      Формализация потребностей
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Ограничения на внедрение</li>
                      <li>• Бюджеты и локация</li>
                      <li>• Адаптация модели процессов</li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-black">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Icon name="Users" size={20} />
                      Проектирование решения
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Ретроспективный анализ</li>
                      <li>• Рекомендации инструментов</li>
                      <li>• Модель процессов разработки</li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-black col-span-2">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Icon name="Briefcase" size={20} />
                      Организационная структура
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Формализация модели процессов</li>
                      <li>• Роли, обязанности и требуемые знания</li>
                      <li>• Форматы взаимодействия</li>
                      <li>• Оценка объёма ролей</li>
                      <li>• Презентация модели процессов и орг структуры</li>
                    </ul>
                  </Card>
                </div>
                <div className="mt-8 bg-black text-white p-6 rounded-lg">
                  <p className="font-bold flex items-center gap-2">
                    <Icon name="Target" size={20} />
                    Результат этапа:
                  </p>
                  <p className="text-lg mt-2">Целевые процессы и проектная команда</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Предварительный roadmap</h2>
            
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-6 gap-4 mb-8 text-center text-sm font-medium text-muted-foreground">
                  <div className="text-left">Состав работ</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-6 gap-4 items-center">
                    <div className="text-sm">
                      <span className="text-primary font-bold">Этап 1.</span> Проектирование архитектуры в соответствии с представленным ТЗ
                    </div>
                    <div className="col-span-3 h-12 bg-primary rounded"></div>
                    <div className="col-span-2"></div>
                  </div>

                  <div className="grid grid-cols-6 gap-4 items-center">
                    <div className="text-sm">
                      <span className="text-primary font-bold">Этап 2.</span> Определение технологических ориентиров платформы
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-4 h-12 bg-primary rounded"></div>
                  </div>

                  <div className="grid grid-cols-6 gap-4 items-center">
                    <div className="text-sm">
                      <span className="text-primary font-bold">Этап 3.</span> Создание дорожной карты внедрения
                    </div>
                    <div className="col-span-3"></div>
                    <div className="col-span-2 h-12 bg-primary rounded"></div>
                  </div>

                  <div className="grid grid-cols-6 gap-4 items-center">
                    <div className="text-sm">
                      <span className="text-primary font-bold">Этап 4.</span> Ретроспектива процессов и формирование проектной команды
                    </div>
                    <div className="col-span-5 h-12 bg-primary rounded"></div>
                  </div>
                </div>

                <div className="mt-6 text-right text-sm font-medium text-muted-foreground">
                  Длительность, недель
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Стоимость</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="text-left py-4 px-4 font-bold">Этап</th>
                    <th className="text-left py-4 px-4 font-bold">Длительность этапа</th>
                    <th className="text-left py-4 px-4 font-bold text-primary">Стоимость (руб. без НДС)</th>
                    <th className="text-left py-4 px-4 font-bold text-primary">Стоимость (руб. с НДС)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-4">
                      <p className="font-medium">Этап 1. Проектирование архитектуры в соответствии с представленным ТЗ</p>
                    </td>
                    <td className="py-4 px-4">3 недели</td>
                    <td className="py-4 px-4 text-primary font-bold text-lg">608 484</td>
                    <td className="py-4 px-4 text-primary font-bold text-lg">730 181</td>
                  </tr>
                  
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-4">
                      <p className="font-medium">Этап 2. Определение технологических ориентиров платформы карты внедрения проектируемой архитектуры</p>
                    </td>
                    <td className="py-4 px-4">3 недели</td>
                    <td className="py-4 px-4 text-primary font-bold text-lg">968 704</td>
                    <td className="py-4 px-4 text-primary font-bold text-lg">1 162 445</td>
                  </tr>

                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-4">
                      <p className="font-medium">Этап 3. Создание дорожной карты внедрения</p>
                    </td>
                    <td className="py-4 px-4">2 недели</td>
                    <td className="py-4 px-4 text-primary font-bold text-lg">287 153</td>
                    <td className="py-4 px-4 text-primary font-bold text-lg">344 583</td>
                  </tr>

                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-4">
                      <p className="font-medium">Этап 4. Ретроспектива процессов и формирование проектной команды</p>
                    </td>
                    <td className="py-4 px-4">5 недель</td>
                    <td className="py-4 px-4 text-primary font-bold text-lg">454 236</td>
                    <td className="py-4 px-4 text-primary font-bold text-lg">545 083</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-8 bg-muted/30 border-0">
                <p className="text-sm text-muted-foreground mb-2">Итого за проект</p>
                <p className="text-4xl font-bold text-primary mb-2">3 294 142 руб.</p>
                <p className="text-xl text-muted-foreground">без НДС</p>
                <p className="text-lg text-muted-foreground mt-2">3 952 971 руб. с НДС</p>
              </Card>

              <Card className="p-8 bg-muted/30 border-0">
                <p className="text-sm text-muted-foreground mb-2">Длительность проекта</p>
                <p className="text-4xl font-bold text-primary">5 недель</p>
                <p className="text-lg text-muted-foreground mt-4">Параллельное выполнение этапов</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Почему это важно?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold mb-4 text-primary">10x</div>
                <h3 className="text-xl font-bold mb-3">Кратный рост</h3>
                <p className="text-white/70">
                  Правильная архитектура обеспечивает возможность масштабирования бизнеса в десятки раз
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-4 text-primary">Data</div>
                <h3 className="text-xl font-bold mb-3">Driven решения</h3>
                <p className="text-white/70">
                  Принятие решений на основе данных увеличивает точность прогнозов и снижает риски
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-4 text-primary">360°</div>
                <h3 className="text-xl font-bold mb-3">Комплексный подход</h3>
                <p className="text-white/70">
                  Учет всех аспектов: от технологий до команды и процессов разработки
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="contact" 
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/847632b3-b4a2-4e9c-b24d-caa528588ce6/files/6a7f5ea2-8e3e-443b-809e-fbc6f03e33ce.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы масштабировать вашу платформу?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Свяжитесь с нами для обсуждения проекта архитектуры Askona 3.0
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6"
              >
                Написать нам
                <Icon name="Mail" className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                Заказать звонок
                <Icon name="Phone" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">ASKONA 3.0</div>
            <div className="text-white/60 text-sm">
              © 2025 Проектирование ИТ-архитектуры
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;