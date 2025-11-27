import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function AdditionalServices() {
  const additionalServices = [
    {
      icon: 'Globe',
      title: 'Миграция сайта без потери позиций',
      description: 'Переезд на новый домен, смена CMS или редизайн с сохранением SEO-показателей. Настройка 301-редиректов, перенос контента и метатегов.',
      details: [
        'Полный аудит перед миграцией',
        'Настройка 301-редиректов для всех страниц',
        'Перенос метатегов и структурированных данных',
        'Мониторинг позиций после переезда',
        'Оперативное исправление возможных проблем'
      ],
      price: 'от 50 000 ₽'
    },
    {
      icon: 'Shield',
      title: 'SEO-сопровождение интернет-магазинов',
      description: 'Оптимизация карточек товаров, категорий, фильтров. Работа с дублями, pagination, Out of Stock страницами.',
      details: [
        'Оптимизация структуры каталога',
        'Работа с фильтрами и фасетной навигацией',
        'Настройка canonical для дублей',
        'Оптимизация карточек товаров',
        'Работа со снятыми с продажи товарами'
      ],
      price: 'от 80 000 ₽/мес'
    },
    {
      icon: 'FileText',
      title: 'Написание SEO-текстов',
      description: 'Уникальные тексты для страниц услуг, категорий и блога. Естественное вхождение ключей без переспама.',
      details: [
        'Анализ запросов и интента пользователей',
        'Написание уникального контента',
        'Естественное вхождение ключей',
        'SEO-оптимизация заголовков',
        'Структурирование текста для читабельности'
      ],
      price: 'от 1 500 ₽ за 1000 знаков'
    },
    {
      icon: 'Zap',
      title: 'Ускорение загрузки сайта',
      description: 'Оптимизация изображений, настройка кэширования, минификация кода. Улучшение Core Web Vitals для Google.',
      details: [
        'Анализ скорости загрузки в PageSpeed Insights',
        'Оптимизация и сжатие изображений',
        'Настройка браузерного кэширования',
        'Минификация CSS, JS файлов',
        'Улучшение показателей Core Web Vitals'
      ],
      price: 'от 40 000 ₽'
    },
    {
      icon: 'MessageSquare',
      title: 'Управление репутацией',
      description: 'Мониторинг отзывов на картах и агрегаторах. Работа с негативом, стимулирование положительных отзывов.',
      details: [
        'Мониторинг отзывов на всех площадках',
        'Профессиональная работа с негативом',
        'Стимулирование положительных отзывов',
        'Размещение отзывов на тематических сайтах',
        'Ежемесячная отчётность'
      ],
      price: 'от 30 000 ₽/мес'
    },
    {
      icon: 'Target',
      title: 'Конкурентный анализ',
      description: 'Подробный разбор стратегий конкурентов из ТОПа. Выявление их сильных сторон и возможностей для обгона.',
      details: [
        'Анализ ТОП-10 конкурентов',
        'Исследование их SEO-стратегий',
        'Анализ контента и ссылочного профиля',
        'Выявление слабых мест конкурентов',
        'Рекомендации по обгону'
      ],
      price: 'от 35 000 ₽'
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="container flex h-16 md:h-20 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 md:gap-4">
            <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
              <Icon name="Rocket" className="text-white rotate-[-45deg]" size={20} />
              <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <span className="text-base md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 uppercase tracking-tight block">SEO Эксперт</span>
              <span className="text-[10px] md:text-xs text-muted-foreground font-medium hidden sm:block">Продвижение в топ Яндекса</span>
            </div>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link to="/" className="text-sm font-semibold hover:text-primary transition-colors relative group">
              Главная
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all"></span>
            </Link>
            <Link to="/#services" className="text-sm font-semibold hover:text-primary transition-colors relative group">
              Услуги
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all"></span>
            </Link>
            <Link to="/#cases" className="text-sm font-semibold hover:text-primary transition-colors relative group">
              Кейсы
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all"></span>
            </Link>
            <Link to="/#pricing" className="text-sm font-semibold hover:text-primary transition-colors relative group">
              Тарифы
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all"></span>
            </Link>
          </nav>
          <Button 
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all text-xs md:text-sm px-3 md:px-4"
            onClick={() => window.open('https://t.me/seovzlet', '_blank')}
          >
            <Icon name="Send" size={16} className="mr-1 md:mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon name="Sparkles" className="text-white" size={40} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Дополнительные услуги</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Расширенные решения для максимального эффекта от SEO-продвижения. Каждая услуга дополняет основной комплекс работ и усиливает результат.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="space-y-8 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 bg-white border-2 shadow-lg group">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Icon name={service.icon} className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600">
                        {service.price}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="ml-22">
                    <h4 className="font-semibold mb-3 text-lg">Что входит:</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Нужна консультация?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Не знаете, какие дополнительные услуги подойдут вашему проекту? Получите бесплатную консультацию и индивидуальный план работ.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white text-lg px-12 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="MessageCircle" size={24} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}