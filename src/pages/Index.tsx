import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const cases = [
    {
      client: 'Интернет-магазин электроники',
      industry: 'E-commerce',
      trafficGrowth: [
        { month: 'Янв', value: 12000 },
        { month: 'Фев', value: 15000 },
        { month: 'Мар', value: 22000 },
        { month: 'Апр', value: 28000 },
        { month: 'Май', value: 35000 },
        { month: 'Июн', value: 42000 },
      ],
      conversionGrowth: [
        { month: 'Янв', value: 1.2 },
        { month: 'Фев', value: 1.5 },
        { month: 'Мар', value: 2.1 },
        { month: 'Апр', value: 2.8 },
        { month: 'Май', value: 3.4 },
        { month: 'Июн', value: 4.2 },
      ],
      results: '+250% трафика, +300% конверсии за 6 месяцев',
    },
    {
      client: 'B2B SaaS платформа',
      industry: 'IT / Software',
      trafficGrowth: [
        { month: 'Янв', value: 5000 },
        { month: 'Фев', value: 8000 },
        { month: 'Мар', value: 13000 },
        { month: 'Апр', value: 19000 },
        { month: 'Май', value: 26000 },
        { month: 'Июн', value: 32000 },
      ],
      conversionGrowth: [
        { month: 'Янв', value: 2.5 },
        { month: 'Фев', value: 3.2 },
        { month: 'Мар', value: 4.1 },
        { month: 'Апр', value: 5.3 },
        { month: 'Май', value: 6.7 },
        { month: 'Июн', value: 7.8 },
      ],
      results: '+540% трафика, +212% конверсии за 6 месяцев',
    },
    {
      client: 'Производственная компания',
      industry: 'Производство',
      trafficGrowth: [
        { month: 'Янв', value: 3000 },
        { month: 'Фев', value: 4500 },
        { month: 'Мар', value: 7000 },
        { month: 'Апр', value: 10500 },
        { month: 'Май', value: 14000 },
        { month: 'Июн', value: 18000 },
      ],
      conversionGrowth: [
        { month: 'Янв', value: 1.8 },
        { month: 'Фев', value: 2.3 },
        { month: 'Мар', value: 3.0 },
        { month: 'Апр', value: 3.9 },
        { month: 'Май', value: 4.6 },
        { month: 'Июн', value: 5.4 },
      ],
      results: '+500% трафика, +200% конверсии за 6 месяцев',
    },
  ];

  const services = [
    {
      icon: 'Search',
      title: 'SEO-оптимизация',
      description: 'Комплексное продвижение в поисковых системах с гарантией результата',
    },
    {
      icon: 'MousePointerClick',
      title: 'Контекстная реклама',
      description: 'Настройка и ведение рекламных кампаний Google Ads и Яндекс.Директ',
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика и аудит',
      description: 'Глубокий анализ сайта и конкурентов с разработкой стратегии',
    },
    {
      icon: 'PenTool',
      title: 'Контент-маркетинг',
      description: 'Создание продающего контента и управление контент-стратегией',
    },
  ];

  const advantages = [
    {
      icon: 'Target',
      title: 'Прозрачная отчетность',
      description: 'Еженедельные отчеты с реальными метриками и KPI',
    },
    {
      icon: 'Users',
      title: 'Личный менеджер',
      description: 'Выделенный специалист на связи 24/7',
    },
    {
      icon: 'TrendingUp',
      title: 'Гарантия результата',
      description: 'Достижение согласованных показателей или возврат средств',
    },
    {
      icon: 'Zap',
      title: 'Быстрый старт',
      description: 'Запуск работ в течение 3 рабочих дней',
    },
  ];

  const pricing = [
    {
      name: 'Старт',
      price: '50 000 ₽',
      period: '/месяц',
      features: ['SEO-аудит сайта', 'Базовая оптимизация', 'Ежемесячные отчеты', 'Email поддержка'],
    },
    {
      name: 'Бизнес',
      price: '120 000 ₽',
      period: '/месяц',
      features: [
        'Полный комплекс SEO',
        'Контекстная реклама',
        'Контент-маркетинг',
        'Еженедельные отчеты',
        'Личный менеджер',
      ],
      popular: true,
    },
    {
      name: 'Энтерпрайз',
      price: 'От 300 000 ₽',
      period: '/месяц',
      features: [
        'Индивидуальная стратегия',
        'Все каналы продвижения',
        'Выделенная команда',
        'Ежедневные отчеты',
        '24/7 поддержка',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Алексей Петров',
      position: 'CEO, TechCorp',
      text: 'За 6 месяцев работы трафик вырос в 4 раза, а количество заявок увеличилось в 5 раз. Отличная команда профессионалов.',
    },
    {
      name: 'Мария Иванова',
      position: 'Маркетолог, RetailPlus',
      text: 'Прозрачная работа, понятные отчеты и главное - реальные результаты. Рекомендую всем!',
    },
    {
      name: 'Дмитрий Сидоров',
      position: 'Директор, IndustrialGroup',
      text: 'Сотрудничаем уже год. Постоянный рост показателей, быстрая реакция на изменения рынка.',
    },
  ];

  const faq = [
    {
      question: 'Как быстро появятся первые результаты?',
      answer:
        'Первые изменения в позициях видны через 2-3 недели. Существенный рост трафика начинается с 2-3 месяца работы. Контекстная реклама дает результаты уже в первую неделю.',
    },
    {
      question: 'Какие гарантии вы даете?',
      answer:
        'Мы гарантируем достижение согласованных KPI. Если результаты не достигнуты по нашей вине - возвращаем деньги. Все условия прописываются в договоре.',
    },
    {
      question: 'Нужен ли доступ к сайту?',
      answer:
        'Да, для проведения технической оптимизации нам потребуется доступ к CMS и серверу. Все действия согласовываются и документируются.',
    },
    {
      question: 'Можно ли продвигать сайт на зарубежных рынках?',
      answer:
        'Да, у нас есть опыт продвижения на международных рынках. Работаем с Google, Bing и другими поисковыми системами.',
    },
    {
      question: 'Какие отчеты вы предоставляете?',
      answer:
        'Еженедельные сводки по основным метрикам и подробные ежемесячные отчеты с анализом динамики, рекомендациями и планом на следующий период.',
    },
  ];

  const currentCase = cases[selectedCase];
  const maxTraffic = Math.max(...currentCase.trafficGrowth.map((d) => d.value));
  const maxConversion = Math.max(...currentCase.conversionGrowth.map((d) => d.value));

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="TrendingUp" className="text-primary" size={28} />
            <span className="text-xl font-bold">SEO Pro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#cases" className="text-sm font-medium hover:text-primary transition-colors">
              Кейсы
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Цены
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>
          <Button>Получить консультацию</Button>
        </div>
      </header>

      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Увеличим трафик вашего сайта в{' '}
              <span className="text-primary">3-5 раз</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Комплексное продвижение сайтов с гарантией результата. Прозрачная отчетность, измеримые KPI и рост
              продаж.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать аудит
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Смотреть кейсы
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Проектов</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">+320%</div>
                <div className="text-sm text-muted-foreground">Средний рост</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр инструментов для роста вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon name={advantage.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Реальные кейсы</h2>
            <p className="text-xl text-muted-foreground">
              Интерактивные графики роста наших клиентов
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {cases.map((c, index) => (
              <Button
                key={index}
                variant={selectedCase === index ? 'default' : 'outline'}
                onClick={() => setSelectedCase(index)}
                className="flex-shrink-0"
              >
                {c.client}
              </Button>
            ))}
          </div>

          <Card className="max-w-5xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">{currentCase.client}</CardTitle>
              <CardDescription className="text-base">
                {currentCase.industry} • {currentCase.results}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-12">
              <div>
                <h3 className="text-lg font-semibold mb-6">Рост трафика (посетители/месяц)</h3>
                <div className="relative h-64">
                  <div className="absolute inset-0 flex items-end justify-between gap-4 px-4">
                    {currentCase.trafficGrowth.map((data, index) => {
                      const height = (data.value / maxTraffic) * 100;
                      return (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                          <div
                            className="w-full bg-primary rounded-t-lg transition-all duration-1000 ease-out hover:bg-primary/80 relative group"
                            style={{
                              height: `${height}%`,
                              animationDelay: `${index * 100}ms`,
                            }}
                          >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                              {data.value.toLocaleString()}
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground font-medium">{data.month}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-6">Рост конверсии (%)</h3>
                <div className="relative h-64">
                  <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <polyline
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      points={currentCase.conversionGrowth
                        .map((data, index) => {
                          const x = (index / (currentCase.conversionGrowth.length - 1)) * 600;
                          const y = 200 - (data.value / maxConversion) * 180;
                          return `${x},${y}`;
                        })
                        .join(' ')}
                      className="animate-[draw_2s_ease-out]"
                    />
                    {currentCase.conversionGrowth.map((data, index) => {
                      const x = (index / (currentCase.conversionGrowth.length - 1)) * 600;
                      const y = 200 - (data.value / maxConversion) * 180;
                      return (
                        <g key={index}>
                          <circle cx={x} cy={y} r="6" fill="hsl(var(--primary))" className="animate-scale-in" />
                          <text
                            x={x}
                            y={y - 15}
                            textAnchor="middle"
                            className="text-xs font-semibold fill-foreground"
                          >
                            {data.value}%
                          </text>
                          <text
                            x={x}
                            y="195"
                            textAnchor="middle"
                            className="text-xs fill-muted-foreground"
                          >
                            {data.month}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Тарифы</h2>
            <p className="text-xl text-muted-foreground">
              Выберите подходящий план для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={plan.popular ? 'border-primary shadow-lg scale-105' : ''}>
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">&ldquo;{testimonial.text}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Получить консультацию</h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку и мы свяжемся с вами в течение часа
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ваше имя</label>
                      <Input placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Телефон</label>
                      <Input placeholder="+7 (999) 123-45-67" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="ivan@company.ru" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Сайт</label>
                    <Input placeholder="https://yoursite.ru" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Расскажите о вашем проекте</label>
                    <Textarea placeholder="Опишите ваши цели и задачи..." rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="TrendingUp" className="text-primary" size={24} />
                <span className="font-bold text-lg">SEO Pro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональное продвижение сайтов с гарантией результата
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>SEO-оптимизация</li>
                <li>Контекстная реклама</li>
                <li>Аналитика и аудит</li>
                <li>Контент-маркетинг</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Кейсы</li>
                <li>Блог</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@seopro.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 SEO Pro. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
