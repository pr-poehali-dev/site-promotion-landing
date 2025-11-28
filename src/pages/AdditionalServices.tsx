import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function AdditionalServices() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          
          <div className="flex items-center gap-2">
            <Button 
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all text-xs sm:text-sm px-3 sm:px-4"
              onClick={() => window.open('https://t.me/seovzlet', '_blank')}
            >
              <Icon name="Send" size={16} className="flex-shrink-0 mr-1 sm:mr-2" />
              <span className="hidden sm:inline whitespace-nowrap">Связаться</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="container py-4 px-4 flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-base font-semibold hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/#services" 
                className="text-base font-semibold hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link 
                to="/#cases" 
                className="text-base font-semibold hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Кейсы
              </Link>
              <Link 
                to="/#pricing" 
                className="text-base font-semibold hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Тарифы
              </Link>
              <Link 
                to="/additional-services" 
                className="text-base font-semibold hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Дополнительные услуги
              </Link>
            </nav>
          </div>
        )}
      </header>

      <section className="py-10 md:py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container relative z-10 px-4">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              🚀 SEO-продвижение сайтов ссылками и статьями под ключ
            </h1>
            <p className="text-base md:text-2xl font-semibold text-gray-700 mb-6 md:mb-8 max-w-4xl mx-auto px-2">
              Увеличьте трафик и выведите сайт в ТОП с помощью безопасного линкбилдинга, качественного контента и крауд-маркетинга
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 px-2">
            <p className="leading-relaxed">
              <strong>Ваш сайт теряется на 5-й странице поиска?</strong> Конкуренты забирают клиентов, а органический трафик не растёт? 
              Продвижение сайта ссылками и статьями — проверенный способ выйти в топ-10 Google и Яндекса без риска санкций.
            </p>

            <p className="leading-relaxed">
              Мы предлагаем <strong>комплексное поисковое продвижение сайта SEO</strong> с использованием белых методов: размещение на авторитетных площадках, 
              написание SEO-текстов под ключевые запросы и крауд-маркетинг для естественного роста позиций.
            </p>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 md:p-8 border-2 border-indigo-200 shadow-lg">
              <p className="text-lg md:text-xl font-semibold text-indigo-900 mb-4">Результат:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="TrendingUp" className="text-indigo-600 flex-shrink-0 mt-1" size={24} />
                  <span>Рост позиций на 20-50 пунктов за 2-3 месяца</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="BarChart3" className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                  <span>Увеличение органического трафика в 2-4 раза</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Users" className="text-pink-600 flex-shrink-0 mt-1" size={24} />
                  <span>Стабильные заявки от целевой аудитории</span>
                </li>
              </ul>
            </div>

            <div className="text-center pt-6">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all text-sm sm:text-lg px-4 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                onClick={() => window.open('https://t.me/seovzlet', '_blank')}
              >
                <Icon name="Rocket" size={20} className="mr-2 sm:mr-3 flex-shrink-0" />
                <span className="whitespace-nowrap">Заказать продвижение</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white">
        <div className="container max-w-6xl px-4">
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              📊 Продвижение сайта ссылками: как это работает
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
              <strong>Купить продвижение ссылками</strong> — значит получить естественную ссылочную массу, которая сигнализирует поисковикам о важности вашего ресурса. 
              Мы размещаем ссылки на тематических сайтах с высоким DA/DR, создавая качественный ссылочный профиль.
            </p>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-4 md:p-8 mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Что даёт продвижение ссылками:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-1">Рост позиций по целевым запросам</h4>
                    <p className="text-sm md:text-base text-gray-600">Сайт поднимается в выдаче за счёт передачи веса от авторитетных доноров</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-1">Увеличение домен-рейтинга</h4>
                    <p className="text-sm md:text-base text-gray-600">Улучшение DR/DA повышает доверие поисковиков к вашему сайту</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-1">Защита от конкурентов</h4>
                    <p className="text-sm md:text-base text-gray-600">Мощный ссылочный профиль защищает от негативного SEO</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-1">Долгосрочный эффект</h4>
                    <p className="text-sm md:text-base text-gray-600">Качественные ссылки работают годами, обеспечивая стабильный трафик</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Мы используем только <strong>безопасные SEO-ссылки</strong> с естественным анкор-листом, постепенным наращиванием и ручным размещением. 
              Никаких автоматических бирж, никаких ссылочных помоек.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 md:p-6 rounded-r-xl mb-6 md:mb-8">
              <p className="text-gray-800">
                <strong>Важно:</strong> можно <strong>купить ссылки для продвижения сайта</strong>, но без стратегии это приведёт к фильтрам. 
                Мы создаём сбалансированный профиль с учётом вашей ниши, конкурентов и текущего состояния сайта.
              </p>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all text-sm sm:text-lg px-4 sm:px-8"
                onClick={() => window.open('https://t.me/seovzlet', '_blank')}
              >
                <Icon name="Link" size={24} className="flex-shrink-0 mr-2 sm:mr-3" />
                <span className="whitespace-nowrap">Купить SEO ссылки</span>
              </Button>
            </div>
          </div>

          <div className="mb-12 md:mb-16 pt-8 md:pt-12 border-t-2 border-gray-200">
            <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              ✍️ Продвижение сайта статьями и SEO-контент
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
              <strong>Продвижение статьями</strong> решает сразу две задачи: улучшает поведенческие факторы на вашем сайте и создаёт естественные точки входа для ссылок. 
              Мы пишем экспертный контент, который читают люди и индексируют поисковики.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Как работает продвижение контента:</h3>

            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              <div className="bg-white border-2 border-indigo-200 rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg md:text-xl">
                    1
                  </div>
                  <div>
                    <h4 className="text-base md:text-xl font-bold mb-2">Написание SEO-текстов для вашего сайта</h4>
                    <p className="text-sm md:text-base text-gray-700">
                      Создаём информационные и коммерческие страницы под кластеры ключевых слов. Каждая статья оптимизирована под поисковые запросы, 
                      но написана для людей — без переспама, с пользой и структурой.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg md:text-xl">
                    2
                  </div>
                  <div>
                    <h4 className="text-base md:text-xl font-bold mb-2">Размещение статей на внешних площадках</h4>
                    <p className="text-sm md:text-base text-gray-700">
                      Публикуем материалы на тематических блогах, новостных порталах, отраслевых медиа. Каждая статья содержит естественные ссылки на ваш сайт 
                      и работает как источник целевого трафика.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-pink-200 rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg md:text-xl">
                    3
                  </div>
                  <div>
                    <h4 className="text-base md:text-xl font-bold mb-2">Крауд-маркетинг и нативное продвижение</h4>
                    <p className="text-sm md:text-base text-gray-700">
                      Размещаем полезные ответы и рекомендации на форумах, в сообществах, на Q&A-площадках (Quora, TheQuestion, отраслевые форумы). 
                      Создаём репутацию эксперта и получаем качественные переходы.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Преимущества продвижения статьями:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <strong>Естественность</strong> — поисковики видят живой интерес к вашему бренду
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <strong>Долгая жизнь</strong> — статьи остаются в сети годами и приводят трафик
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <strong>Целевая аудитория</strong> — читатели приходят по интересующим их темам
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <strong>Репутация</strong> — экспертный контент повышает доверие к бренду
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Вы можете <strong>купить статью</strong> отдельно или заказать комплексное продвижение с регулярными публикациями.
            </p>

            <div className="text-center">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all text-sm sm:text-lg px-4 sm:px-8"
                onClick={() => window.open('https://t.me/seovzlet', '_blank')}
              >
                <Icon name="FileText" size={20} className="flex-shrink-0 mr-2 sm:mr-3" />
                <span className="whitespace-nowrap">Заказать написание SEO-текстов</span>
              </Button>
            </div>
          </div>

          <div className="mb-8 md:mb-16 pt-8 md:pt-12 border-t-2 border-gray-200">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              🎯 Крауд-маркетинг и безопасные SEO-ссылки
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong>Крауд-маркетинг</strong> — это размещение ссылок и упоминаний на форумах, в комментариях блогов, тематических сообществах и социальных сетях. 
              Это создаёт эффект "сарафанного радио" и показывает поисковикам живой интерес пользователей.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Где мы размещаем крауд-ссылки:</h3>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="bg-white border-2 border-blue-200 rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Форумы</h4>
                    <p className="text-sm md:text-base text-gray-700">
                      Отраслевые обсуждения, где ваше решение действительно может помочь
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="BookOpen" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Блоги и медиа</h4>
                    <p className="text-sm md:text-base text-gray-700">
                      Комментарии под релевантными статьями
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-green-200 rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="HelpCircle" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Q&A-площадки</h4>
                    <p className="text-sm md:text-base text-gray-700">
                      Ответы на вопросы с естественным упоминанием вашего сайта
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-pink-200 rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Социальные сети</h4>
                    <p className="text-sm md:text-base text-gray-700">
                      Обсуждения в тематических группах и сообществах
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-r-xl mb-6 md:mb-8">
              <p className="text-sm md:text-base text-gray-800">
                <strong>Важно:</strong> мы не спамим. Каждое размещение — это полезный контент, который решает проблему читателя. 
                Такие ссылки не вызывают подозрений у модераторов и поисковиков.
              </p>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all text-sm sm:text-lg px-4 sm:px-8"
                onClick={() => window.open('https://t.me/seovzlet', '_blank')}
              >
                <Icon name="Target" size={20} className="flex-shrink-0 mr-2 sm:mr-3" />
                <span className="whitespace-nowrap">Заказать крауд-маркетинг</span>
              </Button>
            </div>
          </div>

          <div className="mb-8 md:mb-16 pt-8 md:pt-12 border-t-2 border-gray-200">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              🛠️ Комплексные способы продвижения сайтов в поиске
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
              Мы используем все эффективные способы продвижения, чтобы обеспечить стабильный рост позиций:
            </p>

            <div className="overflow-x-auto mb-6 md:mb-8">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <th className="px-3 md:px-6 py-3 md:py-4 text-left text-sm md:text-base lg:text-lg font-bold">Метод</th>
                    <th className="px-3 md:px-6 py-3 md:py-4 text-left text-sm md:text-base lg:text-lg font-bold">Описание</th>
                    <th className="px-3 md:px-6 py-3 md:py-4 text-left text-sm md:text-base lg:text-lg font-bold">Результат</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-indigo-50 transition-colors">
                    <td className="px-3 md:px-6 py-3 md:py-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <Icon name="Link" className="text-indigo-600" size={20} />
                        <strong className="text-sm md:text-base lg:text-lg">Ссылочное продвижение</strong>
                      </div>
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-gray-700">Размещение на авторитетных донорах с высоким DR/DA</td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-gray-700">Рост позиций и домен-рейтинга</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-purple-50 transition-colors">
                    <td className="px-3 md:px-6 py-3 md:py-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <Icon name="FileText" className="text-purple-600" size={20} />
                        <strong className="text-sm md:text-base lg:text-lg">Контент-маркетинг</strong>
                      </div>
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-gray-700">Публикация статей на внешних площадках и вашем сайте</td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-gray-700">Трафик + естественные ссылки</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-pink-50 transition-colors">
                    <td className="px-3 md:px-6 py-3 md:py-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <Icon name="MessageSquare" className="text-pink-600" size={20} />
                        <strong className="text-base md:text-lg">Крауд-маркетинг</strong>
                      </div>
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-gray-700">Нативные упоминания на форумах и в сообществах</td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-gray-700">Поведенческие факторы + репутация</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                    <td className="px-3 md:px-6 py-3 md:py-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <Icon name="PenTool" className="text-blue-600" size={20} />
                        <strong className="text-base md:text-lg">Гостевые посты</strong>
                      </div>
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-gray-700">Экспертные статьи на отраслевых медиа</td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-gray-700">Авторитет + целевая аудитория</td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="px-3 md:px-6 py-3 md:py-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <Icon name="Network" className="text-green-600" size={20} />
                        <strong className="text-base md:text-lg">PBN-сети</strong>
                      </div>
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-gray-700">Размещение на качественных сателлитах (по запросу)</td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm lg:text-base text-gray-700">Быстрый рост по конкурентным запросам</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 text-center font-semibold">
              Каждый проект получает индивидуальную стратегию с учётом ниши, конкурентов и текущего состояния сайта.
            </p>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all text-base md:text-lg px-4 md:px-8 py-4 md:py-6"
                onClick={() => window.open('https://t.me/seovzlet', '_blank')}
              >
                <Icon name="MessageCircle" size={20} className="mr-2 md:mr-3" />
                Получить бесплатную консультацию
              </Button>
            </div>
          </div>

          <div className="mb-8 md:mb-16 pt-8 md:pt-12 border-t-2 border-gray-200">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 md:mb-12 text-gray-900 text-center">
              🏆 Почему наше поисковое продвижение сайта SEO эффективно
            </h2>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-blue-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 text-2xl md:text-4xl">
                    🔒
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-1 md:mt-2">Безопасность превыше всего</h3>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Мы используем только белые и серые методы, которые не приводят к санкциям. Никаких ссылочных помоек, автоматических бирж и массовых закупок. 
                  Каждый донор проверяется вручную.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-green-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 text-2xl md:text-4xl">
                    📈
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-1 md:mt-2">Постепенный рост</h3>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Мы не обещаем "ТОП-1 за неделю". Наращиваем ссылочную массу плавно, имитируя естественный рост популярности сайта. 
                  Это защищает от фильтров и обеспечивает стабильный результат.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-purple-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 text-2xl md:text-4xl">
                    🎨
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-1 md:mt-2">Качественный контент</h3>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Все тексты пишутся копирайтерами с опытом в SEO. Уникальность не ниже 95%, полезность — приоритет. 
                  Мы не размещаем откровенную рекламу — только экспертный контент.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-orange-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 text-2xl md:text-4xl">
                    📊
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-1 md:mt-2">Прозрачная отчётность</h3>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Вы получаете ежемесячные отчёты: где размещены ссылки, динамика позиций, изменение трафика. 
                  Никаких "чёрных ящиков" — всё под вашим контролем.
                </p>
              </div>

              <div className="md:col-span-2 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-indigo-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-2xl md:text-4xl">
                    🎯
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-1 md:mt-2">Индивидуальный подход</h3>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Мы не продаём готовые пакеты. Каждому клиенту — персональная стратегия с учётом бюджета, целей и особенностей ниши.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8 md:mb-16 pt-8 md:pt-12 border-t-2 border-gray-200">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 md:mb-12 text-gray-900 text-center">
              📋 Как мы работаем: этапы сотрудничества
            </h2>

            <div className="space-y-4 md:space-y-6">
              <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-indigo-200 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-indigo-500 to-purple-600"></div>
                <div className="flex items-start gap-3 md:gap-4 lg:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg md:text-xl lg:text-2xl shadow-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-gray-900">Анализ и аудит</h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Изучаем ваш сайт, конкурентов, текущие позиции. Оцениваем ссылочный профиль, контент, техническое состояние. Определяем точки роста.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-purple-500 to-pink-600"></div>
                <div className="flex items-start gap-3 md:gap-4 lg:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg md:text-xl lg:text-2xl shadow-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-gray-900">Разработка стратегии</h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Составляем план продвижения: какие ключевые запросы будем продвигать, какие доноры использовать, какой контент создавать. Согласовываем бюджет и сроки.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-pink-200 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-pink-500 to-red-600"></div>
                <div className="flex items-start gap-3 md:gap-4 lg:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg md:text-xl lg:text-2xl shadow-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-gray-900">Подбор доноров</h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Находим тематические площадки с высоким авторитетом. Проверяем каждый донор на санкции, трастовость, релевантность. Формируем базу для размещения.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500 to-cyan-600"></div>
                <div className="flex items-start gap-3 md:gap-4 lg:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg md:text-xl lg:text-2xl shadow-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-gray-900">Написание SEO-текстов</h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Наши копирайтеры создают уникальные статьи под ключевые запросы. Тексты оптимизированы для поисковиков, но написаны для людей — никакой "воды" и переспама.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-green-500 to-emerald-600"></div>
                <div className="flex items-start gap-3 md:gap-4 lg:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg md:text-xl lg:text-2xl shadow-lg">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-gray-900">Размещение ссылок</h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Публикуем контент на отобранных площадках. Используем разнообразные анкоры: брендовые, коммерческие, информационные, безанкорные. Соблюдаем естественность распределения.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-orange-500 to-amber-600"></div>
                <div className="flex items-start gap-3 md:gap-4 lg:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg md:text-xl lg:text-2xl shadow-lg">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-gray-900">Рост позиций и масштабирование</h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Отслеживаем динамику, корректируем стратегию. По мере роста усиливаем продвижение по наиболее перспективным запросам. Добавляем новые направления.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all text-base md:text-lg px-4 md:px-8 py-4 md:py-6"
                onClick={() => window.open('https://t.me/seovzlet', '_blank')}
              >
                <Icon name="Calculator" size={20} className="mr-2 md:mr-3" />
                Рассчитать стоимость продвижения
              </Button>
            </div>
          </div>

          <div className="mb-8 md:mb-16 pt-8 md:pt-12 border-t-2 border-gray-200">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 md:mb-12 text-gray-900 text-center">
              📦 Что входит в услуги: полный комплекс работ
            </h2>

            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <Card className="hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 shadow-lg">
                <CardHeader className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4 lg:gap-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg text-2xl md:text-3xl lg:text-4xl">
                      🔗
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl lg:text-3xl mb-2 md:mb-3">Пакет "Ссылочное продвижение"</CardTitle>
                      <p className="text-base md:text-lg font-semibold mb-3 md:mb-4">Что получаете:</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 md:gap-3">
                      <Icon name="CheckCircle2" className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                      <span className="text-sm md:text-base lg:text-lg text-gray-700">Анализ конкурентов и подбор донорской базы</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-sm md:text-base lg:text-lg text-gray-700">Размещение 15-50 ссылок в месяц (в зависимости от ниши)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-sm md:text-base lg:text-lg text-gray-700">Написание уникальных статей для размещения</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-sm md:text-base lg:text-lg text-gray-700">Разнообразный анкор-лист с учётом естественности</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-sm md:text-base lg:text-lg text-gray-700">Ежемесячный отчёт по размещённым ссылкам</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-sm md:text-base lg:text-lg text-gray-700">Мониторинг позиций по целевым запросам</span>
                    </li>
                  </ul>
                  <div className="bg-white rounded-xl p-4 md:p-6 border-2 border-blue-200 mb-3 md:mb-4">
                    <p className="text-sm md:text-base text-gray-800 mb-2"><strong>Для кого:</strong> подходит для молодых сайтов и проектов с низким DR/DA</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-4 md:p-6">
                    <p className="text-sm md:text-base lg:text-lg"><strong>Результат:</strong> рост домен-рейтинга, выход в топ-30 по средне- и низкочастотным запросам за 2-3 месяца</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 shadow-lg">
                <CardHeader className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4 lg:gap-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg text-2xl md:text-3xl lg:text-4xl">
                      ✍️
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl lg:text-3xl mb-2 md:mb-3">Пакет "Продвижение статьями"</CardTitle>
                      <p className="text-base md:text-lg font-semibold mb-3 md:mb-4">Что получаете:</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Разработка контент-стратегии под ваши цели</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Написание 5-15 SEO-оптимизированных статей в месяц</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Размещение на тематических блогах, новостных порталах, отраслевых медиа</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Интеграция естественных ссылок в текст</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Продвижение статей в социальных сетях</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Отчёт по публикациям и переходам</span>
                    </li>
                  </ul>
                  <div className="bg-white rounded-xl p-6 border-2 border-purple-200 mb-4">
                    <p className="text-gray-800 mb-2"><strong>Для кого:</strong> для бизнеса, который хочет получать целевой трафик и строить репутацию эксперта</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-6">
                    <p className="text-lg"><strong>Результат:</strong> рост органического трафика, повышение узнаваемости бренда, стабильный поток заявок</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg text-4xl">
                      💬
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-3xl mb-3">Пакет "Крауд-маркетинг"</CardTitle>
                      <p className="text-lg font-semibold mb-4">Что получаете:</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Поиск релевантных площадок (форумы, Q&A, отраслевые сообщества)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Регистрация и прогрев аккаунтов</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Написание полезных ответов и рекомендаций с естественным упоминанием вашего сайта</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">20-50 размещений в месяц</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Мониторинг реакций и модерации</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Отчёт по размещениям и переходам</span>
                    </li>
                  </ul>
                  <div className="bg-white rounded-xl p-6 border-2 border-green-200 mb-4">
                    <p className="text-gray-800 mb-2"><strong>Для кого:</strong> для проектов, которым важны поведенческие факторы и живая аудитория</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-6">
                    <p className="text-lg"><strong>Результат:</strong> рост CTR в поисковой выдаче, улучшение поведенческих, естественные ссылки</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border-4 border-orange-400 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-500 opacity-20 rounded-bl-full"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500 via-amber-600 to-yellow-600 flex items-center justify-center flex-shrink-0 shadow-2xl text-5xl animate-pulse">
                      🚀
                    </div>
                    <div className="flex-1">
                      <div className="inline-block bg-gradient-to-r from-orange-600 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-2">
                        ⭐ ПРЕМИУМ
                      </div>
                      <CardTitle className="text-4xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
                        Комплексное продвижение
                      </CardTitle>
                      <p className="text-xl font-semibold mb-4 text-gray-800">(все способы продвижения)</p>
                      <p className="text-lg font-semibold">Что получаете:</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    <li className="flex items-start gap-2 md:gap-3">
                      <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={18} />
                      <span className="text-sm md:text-base lg:text-lg text-gray-700 font-semibold">Всё из трёх пакетов выше</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-sm md:text-base lg:text-lg text-gray-700">Техническая оптимизация сайта (рекомендации)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-sm md:text-base lg:text-lg text-gray-700">Работа с семантическим ядром</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-sm md:text-base lg:text-lg text-gray-700">Создание и оптимизация контента на вашем сайте</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-sm md:text-base lg:text-lg text-gray-700">Мониторинг конкурентов</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-sm md:text-base lg:text-lg text-gray-700">Персональный менеджер проекта</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-sm md:text-base lg:text-lg text-gray-700">Еженедельные созвоны и ежемесячные детальные отчёты</span>
                    </li>
                  </ul>
                  <div className="bg-white rounded-xl p-4 md:p-6 border-2 border-orange-300 mb-3 md:mb-4 shadow-md">
                    <p className="text-sm md:text-base text-gray-800 mb-2"><strong>Для кого:</strong> для амбициозных проектов с целью занять топ-3 по высококонкурентным запросам</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white rounded-xl p-4 md:p-6 shadow-lg mb-4 md:mb-6">
                    <p className="text-base md:text-lg lg:text-xl font-bold"><strong>Результат:</strong> максимальная видимость в поиске, кратный рост трафика и конверсий, вытеснение конкурентов 🏆</p>
                  </div>
                  <div className="text-center">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-xl hover:shadow-2xl transition-all text-base md:text-lg lg:text-xl px-6 md:px-10 py-5 md:py-7 w-full md:w-auto"
                      onClick={() => window.open('https://t.me/seovzlet', '_blank')}
                    >
                      <Icon name="Rocket" size={20} className="mr-2 md:mr-3" />
                      Заказать комплексное продвижение
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white">
        <div className="container max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 md:mb-12 text-gray-900 text-center">
            🛡️ Гарантии безопасности и качества
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="ShieldCheck" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">Без санкций</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Мы не используем спам-методы и сомнительные площадки. Каждый донор проходит ручную проверку. 
                Вероятность попадания под фильтр — менее 1%.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="TrendingUp" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">Без резких скачков</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Наращиваем ссылочную массу плавно. Поисковики видят естественный рост популярности сайта, а не манипуляции.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">Качество контента</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Все статьи пишутся вручную. Уникальность проверяется через Advego и Text.ru. Тексты проходят редактуру перед публикацией.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-orange-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="BarChart3" className="text-white" size={24} />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-1 md:mt-2">Полная отчётность</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Вы видите каждую размещённую ссылку, каждую опубликованную статью. Предоставляем доступ к системам аналитики для контроля результата.
              </p>
            </div>

            <div className="md:col-span-2 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-indigo-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="RefreshCw" className="text-white" size={24} />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-1 md:mt-2">Гибкость и адаптация</h3>
              </div>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                Если стратегия не даёт результат — меняем подход без доплат. Ваша цель — наша цель.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
        <div className="container max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 md:mb-12 text-gray-900 text-center">
            🎓 Для кого подходит раскрутка сайта продвижение сайтов
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-blue-200 shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 text-2xl md:text-4xl">
                  🏢
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-1 md:mt-2">Для бизнеса</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Интернет-магазины, сервисные компании, B2B-проекты. Вы получаете стабильный поток заявок из органического поиска, 
                снижаете стоимость привлечения клиента, перестаёте зависеть от контекстной рекламы.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-purple-200 shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 text-2xl md:text-4xl">
                  🚀
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-1 md:mt-2">Для стартапов</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Молодые проекты с ограниченным бюджетом. Мы поможем выйти на рынок, обогнать конкурентов и занять свою нишу без огромных вложений в рекламу.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-green-200 shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 text-2xl md:text-4xl">
                  📰
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-1 md:mt-2">Для информационных проектов</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Блоги, медиа, образовательные порталы. Увеличиваем охваты, привлекаем целевую аудиторию, 
                монетизируем трафик через рекламу или продажу своих продуктов.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-orange-200 shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 text-2xl md:text-4xl">
                  🏆
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-1 md:mt-2">Для интернет-магазинов</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Продвигаем товарные категории и карточки товаров. Обеспечиваем рост продаж за счёт SEO-трафика, 
                который конвертируется лучше контекстной рекламы.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transition-all text-base md:text-lg px-6 md:px-10 py-4 md:py-6"
              onClick={() => window.open('https://t.me/seovzlet', '_blank')}
            >
              <Icon name="MessageSquare" size={20} className="mr-2 md:mr-3" />
              Обсудить ваш проект
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 text-center">
            💰 Цены на продвижение и возможность купить ссылки для продвижения сайта
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
            Стоимость зависит от конкурентности ниши, текущего состояния сайта и ваших целей. 
            Мы не работаем по фиксированным тарифам — каждый проект оценивается индивидуально.
          </p>

          <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">Ориентировочные цены:</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-300 shadow-lg hover:shadow-2xl transition-all">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Базовое продвижение</h4>
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                  От 25 000 ₽/мес
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">15-20 ссылок</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">3-5 статей</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Мониторинг позиций</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-400 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-center mb-2">
                <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                  ПОПУЛЯРНЫЙ
                </div>
              </div>
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Стандартное продвижение</h4>
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                  От 50 000 ₽/мес
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">30-40 ссылок</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">8-10 статей</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Крауд-маркетинг (20 размещений)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Персональный менеджер</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-300 shadow-lg hover:shadow-2xl transition-all">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Комплексное продвижение</h4>
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
                  От 100 000 ₽/мес
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">50+ ссылок</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">15+ статей</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Крауд-маркетинг (50 размещений)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Техническая оптимизация</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Работа с контентом на сайте</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-200 mb-12">
            <p className="text-lg text-gray-800 text-center">
              Вы также можете <strong>ссылки заказать разово</strong>, без ежемесячного обслуживания — 
              <span className="text-2xl font-bold text-indigo-600 mx-2">от 500 ₽</span> за размещение (в зависимости от донора).
            </p>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all text-xl px-10 py-7"
              onClick={() => window.open('https://t.me/seovzlet', '_blank')}
            >
              <Icon name="Calculator" size={28} className="mr-3" />
              Узнать точную стоимость для вашего проекта
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
            ❓ Часто задаваемые вопросы (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-blue-600 text-2xl flex-shrink-0">1.</span>
                Как быстро будет виден результат?
              </h3>
              <p className="text-gray-700 leading-relaxed pl-9">
                Первые изменения в позициях заметны через 3-4 недели. Стабильный рост — через 2-3 месяца. SEO — это марафон, а не спринт.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-indigo-200 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-indigo-600 text-2xl flex-shrink-0">2.</span>
                Есть ли риск попасть под фильтр?
              </h3>
              <p className="text-gray-700 leading-relaxed pl-9">
                При грамотном подходе риск минимален. Мы соблюдаем все рекомендации поисковиков, используем белые методы и следим за качеством доноров.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-purple-600 text-2xl flex-shrink-0">3.</span>
                Можно ли купить только ссылки, без статей?
              </h3>
              <p className="text-gray-700 leading-relaxed pl-9">
                Да, возможна любая комбинация услуг. Однако комплексный подход даёт лучший результат.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-pink-200 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-pink-600 text-2xl flex-shrink-0">4.</span>
                Сколько ссылок нужно для продвижения?
              </h3>
              <p className="text-gray-700 leading-relaxed pl-9">
                Зависит от конкурентности ниши. В среднем — от 50 до 200 качественных ссылок для выхода в топ-10 по коммерческим запросам.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-green-600 text-2xl flex-shrink-0">5.</span>
                Вы даёте гарантии на позиции?
              </h3>
              <p className="text-gray-700 leading-relaxed pl-9">
                Мы гарантируем соблюдение технологии и качество работ. Конечные позиции зависят от многих факторов, включая действия конкурентов и обновления алгоритмов. 
                Но мы всегда работаем на результат и корректируем стратегию при необходимости.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-orange-600 text-2xl flex-shrink-0">6.</span>
                Работаете ли вы с молодыми сайтами?
              </h3>
              <p className="text-gray-700 leading-relaxed pl-9">
                Да, мы успешно продвигаем как новые проекты (возраст от 3 месяцев), так и зрелые сайты с историей.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                🎯 Готовы начать продвижение?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-4 font-semibold">
                Не откладывайте рост вашего бизнеса на потом. Чем дольше вы ждёте — тем сильнее становятся конкуренты.
              </p>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Закажите бесплатный аудит сайта — мы проанализируем текущее состояние, оценим потенциал и предложим персональную стратегию продвижения.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Вы получите:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">Анализ ссылочного профиля</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">Оценку контента и структуры сайта</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">План продвижения с прогнозом результатов</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">Расчёт стоимости и сроков</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 md:p-8 shadow-xl mb-12 border-4 border-white/20">
              <p className="text-xl md:text-2xl text-white font-bold text-center">
                ⏰ Время действовать — сейчас. Пока вы думаете, ваши конкуренты уже получают заявки из поиска.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all text-xl px-10 py-7 font-bold w-full md:w-auto"
                onClick={() => window.open('https://t.me/seovzlet', '_blank')}
              >
                <Icon name="FileSearch" size={28} className="mr-3" />
                Заказать бесплатный аудит
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-4 border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl transition-all text-xl px-10 py-7 font-bold w-full md:w-auto"
                onClick={() => window.open('https://t.me/seovzlet', '_blank')}
              >
                <Icon name="Send" size={28} className="mr-3" />
                Связаться в Телеграм
              </Button>
            </div>

            <div className="text-center mt-8">
              <a 
                href="tel:+79859758010"
                className="inline-flex items-center gap-3 text-white text-xl font-bold hover:text-white/80 transition-colors"
              >
                <Icon name="Phone" size={28} />
                Позвонить: +7 (985) 975 8010
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t-2 border-gray-200">
        <div className="container max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 text-center">
            📌 Дополнительная информация для SEO
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">
              Эффективное <strong>сео продвижение сайтов</strong> требует комплексного подхода. Недостаточно просто <strong>купить продвижение ссылками</strong> — 
              важно создать экосистему факторов ранжирования: качественный контент, естественные ссылки, активность аудитории.
            </p>

            <p className="leading-relaxed">
              <strong>Написание seo текстов</strong> — это не просто вставка ключевых слов. Это создание полезного материала, который решает проблемы пользователей 
              и отвечает на их вопросы. Поисковики научились отличать качественный контент от SEO-мусора.
            </p>

            <p className="leading-relaxed">
              Современная <strong>раскрутка сайта продвижение сайтов</strong> невозможна без учёта E-A-T (экспертность, авторитетность, надёжность). 
              Именно поэтому мы делаем упор на экспертный контент, размещение на авторитетных площадках и формирование репутации бренда.
            </p>

            <p className="leading-relaxed">
              Если вы ищете проверенные <strong>способы продвижения</strong>, которые работают в 2024-2025 году — мы готовы помочь. 
              Наш подход основан на опыте сотен проектов в разных нишах: от интернет-магазинов до B2B-сервисов.
            </p>

            <p className="text-center text-xl font-bold text-indigo-900 mt-8 pt-6 border-t-2 border-indigo-200">
              Начните продвижение сегодня — получите первые заявки завтра. 🚀
            </p>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container relative z-10">
          <div className="py-16">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 flex items-center justify-center shadow-2xl">
                    <Icon name="Rocket" className="text-white rotate-[-45deg]" size={32} />
                  </div>
                  <div>
                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 uppercase tracking-tight block">SEO Эксперт</span>
                    <span className="text-sm text-slate-400 font-medium">Стрельцов Иван</span>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 max-w-md">
                  Профессиональное продвижение сайтов в топ Яндекса. 150+ успешных проектов, белые методы, прозрачная отчётность.
                </p>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="bg-white/5 border-white/10 hover:bg-white/10 text-white"
                    onClick={() => window.open('mailto:info@seopro.ru', '_blank')}
                  >
                    <Icon name="Mail" size={20} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="bg-white/5 border-white/10 hover:bg-white/10 text-white"
                    onClick={() => window.open('tel:+79859758010', '_self')}
                  >
                    <Icon name="Phone" size={20} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="bg-white/5 border-white/10 hover:bg-white/10 text-white"
                    onClick={() => window.open('https://t.me/seovzlet', '_blank')}
                  >
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                  <Icon name="Sparkles" size={18} className="text-purple-400" />
                  Услуги
                </h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-2">
                    <Icon name="ChevronRight" size={14} className="text-purple-400" />
                    <Link to="/">SEO-продвижение</Link>
                  </li>
                  <li className="hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-2">
                    <Icon name="ChevronRight" size={14} className="text-purple-400" />
                    <a href="https://streltsevseo.ru/additional-services" target="_blank" rel="noopener noreferrer">Дополнительные услуги</a>
                  </li>
                  <li className="hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-2">
                    <Icon name="ChevronRight" size={14} className="text-purple-400" />
                    Блог
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                  <Icon name="Phone" size={18} className="text-green-400" />
                  Контакты
                </h4>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex items-start gap-3 hover:text-green-400 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                      <Icon name="Phone" size={16} className="text-green-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Телефон</div>
                      <a href="tel:+79859758010" className="text-white font-medium hover:text-green-400">+7 (985) 975 80-10</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 hover:text-blue-400 transition-colors group cursor-pointer" onClick={() => window.open('https://t.me/seovzlet', '_blank')}>
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <Icon name="Send" size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Telegram</div>
                      <div className="text-white font-medium">@seovzlet</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 hover:text-purple-400 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                      <Icon name="Clock" size={16} className="text-purple-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">График</div>
                      <div className="text-white font-medium">Пн-Чт: 10:00-19:00</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-400">© 2025 SEO Эксперт — Стрельцов Иван. Все права защищены.</p>
              <div className="flex gap-6 text-xs text-slate-500">
                <Link to="/privacy" className="hover:text-purple-400 transition-colors">Политика конфиденциальности</Link>
                <Link to="/terms" className="hover:text-purple-400 transition-colors">Договор оферты</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}