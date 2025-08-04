import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={32} className="text-primary" />
              <span className="text-xl font-bold">CyberGuard</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#advantages" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
              <a href="#cases" className="text-sm font-medium hover:text-primary transition-colors">Кейсы</a>
              <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">Команда</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>Консультация</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6" variant="secondary">
              Профессиональная защита данных
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Комплексная информационная безопасность
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Защищаем ваш бизнес от киберугроз с помощью передовых технологий и экспертизы мирового уровня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Получить консультацию
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр решений для защиты вашей информационной инфраструктуры
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Lock" size={24} className="text-primary" />
                </div>
                <CardTitle>Аудит безопасности</CardTitle>
                <CardDescription>
                  Комплексная оценка уровня защищенности IT-инфраструктуры
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ShieldCheck" size={24} className="text-primary" />
                </div>
                <CardTitle>Тестирование на проникновение</CardTitle>
                <CardDescription>
                  Выявление уязвимостей методами этичного хакинга
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Network" size={24} className="text-primary" />
                </div>
                <CardTitle>Защита сети</CardTitle>
                <CardDescription>
                  Настройка межсетевых экранов и систем обнаружения вторжений
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Database" size={24} className="text-primary" />
                </div>
                <CardTitle>Защита данных</CardTitle>
                <CardDescription>
                  Шифрование, резервное копирование и контроль доступа к данным
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <CardTitle>Обучение персонала</CardTitle>
                <CardDescription>
                  Повышение уровня информационной грамотности сотрудников
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" size={24} className="text-primary" />
                </div>
                <CardTitle>Мониторинг 24/7</CardTitle>
                <CardDescription>
                  Круглосуточное наблюдение за безопасностью инфраструктуры
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы обеспечиваем максимальный уровень защиты для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">15+ лет опыта</h3>
              <p className="text-muted-foreground">Экспертиза в области информационной безопасности</p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">500+ проектов</h3>
              <p className="text-muted-foreground">Успешно реализованных решений</p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 поддержка</h3>
              <p className="text-muted-foreground">Круглосуточная техническая поддержка</p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">99.9% надежность</h3>
              <p className="text-muted-foreground">Гарантированная защита от угроз</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Кейсы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры наших успешных проектов по защите информации
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 animate-scale-in">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-t-lg flex items-center justify-center">
                <Icon name="Building" size={48} className="text-primary" />
              </div>
              <CardHeader>
                <CardTitle>Банковский сектор</CardTitle>
                <CardDescription>
                  Реализация комплексной системы защиты для крупного банка с оборотом более 100 млрд рублей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Финансы</Badge>
                  <Badge variant="secondary">Шифрование</Badge>
                  <Badge variant="secondary">Аудит</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-scale-in">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-t-lg flex items-center justify-center">
                <Icon name="Factory" size={48} className="text-primary" />
              </div>
              <CardHeader>
                <CardTitle>Промышленное предприятие</CardTitle>
                <CardDescription>
                  Защита производственных систем и промышленных сетей от кибератак
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Промышленность</Badge>
                  <Badge variant="secondary">ICS/SCADA</Badge>
                  <Badge variant="secondary">Мониторинг</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-scale-in">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-t-lg flex items-center justify-center">
                <Icon name="Stethoscope" size={48} className="text-primary" />
              </div>
              <CardHeader>
                <CardTitle>Медицинский центр</CardTitle>
                <CardDescription>
                  Обеспечение конфиденциальности медицинских данных в соответствии с требованиями ФЗ-152
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Медицина</Badge>
                  <Badge variant="secondary">ФЗ-152</Badge>
                  <Badge variant="secondary">Персональные данные</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Эксперты мирового уровня в области информационной безопасности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={40} className="text-primary-foreground" />
                </div>
                <CardTitle>Александр Иванов</CardTitle>
                <CardDescription>Технический директор</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  15+ лет в области кибербезопасности, сертификат CISSP
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={40} className="text-primary-foreground" />
                </div>
                <CardTitle>Мария Петрова</CardTitle>
                <CardDescription>Ведущий эксперт</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Специалист по пентестингу, сертификат CEH
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={40} className="text-primary-foreground" />
                </div>
                <CardTitle>Дмитрий Соколов</CardTitle>
                <CardDescription>Архитектор безопасности</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Эксперт по защите промышленных систем
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={40} className="text-primary-foreground" />
                </div>
                <CardTitle>Елена Козлова</CardTitle>
                <CardDescription>Аналитик угроз</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Специалист по анализу инцидентов и киберразведке
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Получите бесплатную консультацию по вопросам информационной безопасности
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span>info@cyberguard.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <span>Москва, ул. Тверская, 15, оф. 201</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <span>Пн-Пт: 9:00-18:00</span>
                  </div>
                </div>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Оставить заявку</CardTitle>
                    <CardDescription>
                      Мы свяжемся с вами в течение рабочего дня
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Имя" />
                      <Input placeholder="Фамилия" />
                    </div>
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Телефон" type="tel" />
                    <Textarea placeholder="Опишите вашу задачу" rows={4} />
                    <Button className="w-full">
                      Отправить заявку
                      <Icon name="Send" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Shield" size={32} className="text-primary" />
              <span className="text-xl font-bold">CyberGuard</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground">
                © 2024 CyberGuard. Все права защищены.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Профессиональные услуги по информационной безопасности
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;