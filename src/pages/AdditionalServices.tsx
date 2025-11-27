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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              🚀 SEO-продвижение сайтов ссылками и статьями под ключ
            </h1>
            <p className="text-2xl font-semibold text-gray-700 mb-8 max-w-4xl mx-auto">
              Увеличьте трафик и выведите сайт в ТОП с помощью безопасного линкбилдинга, качественного контента и крауд-маркетинга
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6 text-lg text-gray-700">
            <p className="leading-relaxed">
              <strong>Ваш сайт теряется на 5-й странице поиска?</strong> Конкуренты забирают клиентов, а органический трафик не растёт? 
              Продвижение сайта ссылками и статьями — проверенный способ выйти в топ-10 Google и Яндекса без риска санкций.
            </p>

            <p className="leading-relaxed">
              Мы предлагаем <strong>комплексное поисковое продвижение сайта SEO</strong> с использованием белых методов: размещение на авторитетных площадках, 
              написание SEO-текстов под ключевые запросы и крауд-маркетинг для естественного роста позиций.
            </p>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border-2 border-indigo-200 shadow-lg">
              <p className="text-xl font-semibold text-indigo-900 mb-4">Результат:</p>
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
                className="bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6"
                onClick={() => window.open('https://t.me/seovzlet', '_blank')}
              >
                <Icon name="Rocket" size={24} className="mr-3" />
                Заказать продвижение сайта
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              📊 Продвижение сайта ссылками: как это работает
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong>Купить продвижение ссылками</strong> — значит получить естественную ссылочную массу, которая сигнализирует поисковикам о важности вашего ресурса. 
              Мы размещаем ссылки на тематических сайтах с высоким DA/DR, создавая качественный ссылочный профиль.
            </p>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Что даёт продвижение ссылками:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Рост позиций по целевым запросам</h4>
                    <p className="text-gray-600">Сайт поднимается в выдаче за счёт передачи веса от авторитетных доноров</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Увеличение домен-рейтинга</h4>
                    <p className="text-gray-600">Улучшение DR/DA повышает доверие поисковиков к вашему сайту</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Защита от конкурентов</h4>
                    <p className="text-gray-600">Мощный ссылочный профиль защищает от негативного SEO</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Долгосрочный эффект</h4>
                    <p className="text-gray-600">Качественные ссылки работают годами, обеспечивая стабильный трафик</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Мы используем только <strong>безопасные SEO-ссылки</strong> с естественным анкор-листом, постепенным наращиванием и ручным размещением. 
              Никаких автоматических бирж, никаких ссылочных помоек.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mb-8">
              <p className="text-gray-800">
                <strong>Важно:</strong> можно <strong>купить ссылки для продвижения сайта</strong>, но без стратегии это приведёт к фильтрам. 
                Мы создаём сбалансированный профиль с учётом вашей ниши, конкурентов и текущего состояния сайта.
              </p>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6"
                onClick={() => window.open('https://t.me/seovzlet', '_blank')}
              >
                <Icon name="Link" size={24} className="mr-3" />
                Купить SEO ссылки
              </Button>
            </div>
          </div>

          <div className="mb-16 pt-12 border-t-2 border-gray-200">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              ✍️ Продвижение сайта статьями и SEO-контент
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong>Продвижение статьями</strong> решает сразу две задачи: улучшает поведенческие факторы на вашем сайте и создаёт естественные точки входа для ссылок. 
              Мы пишем экспертный контент, который читают люди и индексируют поисковики.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900">Как работает продвижение контента:</h3>

            <div className="space-y-6 mb-8">
              <div className="bg-white border-2 border-indigo-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Написание SEO-текстов для вашего сайта</h4>
                    <p className="text-gray-700">
                      Создаём информационные и коммерческие страницы под кластеры ключевых слов. Каждая статья оптимизирована под поисковые запросы, 
                      но написана для людей — без переспама, с пользой и структурой.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Размещение статей на внешних площадках</h4>
                    <p className="text-gray-700">
                      Публикуем материалы на тематических блогах, новостных порталах, отраслевых медиа. Каждая статья содержит естественные ссылки на ваш сайт 
                      и работает как источник целевого трафика.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-pink-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Крауд-маркетинг и нативное продвижение</h4>
                    <p className="text-gray-700">
                      Размещаем полезные ответы и рекомендации на форумах, в сообществах, на Q&A-площадках (Quora, TheQuestion, отраслевые форумы). 
                      Создаём репутацию эксперта и получаем качественные переходы.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Преимущества продвижения статьями:</h3>
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
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6"
                onClick={() => window.open('https://t.me/seovzlet', '_blank')}
              >
                <Icon name="FileText" size={24} className="mr-3" />
                Заказать написание SEO-текстов
              </Button>
            </div>
          </div>

          <div className="mb-16 pt-12 border-t-2 border-gray-200">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              🎯 Крауд-маркетинг и безопасные SEO-ссылки
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong>Крауд-маркетинг</strong> — это размещение ссылок и упоминаний на форумах, в комментариях блогов, тематических сообществах и социальных сетях. 
              Это создаёт эффект "сарафанного радио" и показывает поисковикам живой интерес пользователей.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900">Где мы размещаем крауд-ссылки:</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Форумы</h4>
                    <p className="text-gray-700">
                      Отраслевые обсуждения, где ваше решение действительно может помочь
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="BookOpen" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Блоги и медиа</h4>
                    <p className="text-gray-700">
                      Комментарии под релевантными статьями
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="HelpCircle" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Q&A-площадки</h4>
                    <p className="text-gray-700">
                      Ответы на вопросы с естественным упоминанием вашего сайта
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-pink-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Социальные сети</h4>
                    <p className="text-gray-700">
                      Обсуждения в тематических группах и сообществах
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
              <p className="text-gray-800">
                <strong>Важно:</strong> мы не спамим. Каждое размещение — это полезный контент, который решает проблему читателя. 
                Такие ссылки не вызывают подозрений у модераторов и поисковиков.
              </p>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6"
                onClick={() => window.open('https://t.me/seovzlet', '_blank')}
              >
                <Icon name="Target" size={24} className="mr-3" />
                Заказать крауд-маркетинг
              </Button>
            </div>
          </div>

          <div className="mb-16 pt-12 border-t-2 border-gray-200">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              🛠️ Комплексные способы продвижения сайтов в поиске
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Мы используем все эффективные способы продвижения, чтобы обеспечить стабильный рост позиций:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <th className="px-6 py-4 text-left text-lg font-bold">Метод</th>
                    <th className="px-6 py-4 text-left text-lg font-bold">Описание</th>
                    <th className="px-6 py-4 text-left text-lg font-bold">Результат</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-indigo-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Icon name="Link" className="text-indigo-600" size={24} />
                        <strong className="text-lg">Ссылочное продвижение</strong>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Размещение на авторитетных донорах с высоким DR/DA</td>
                    <td className="px-6 py-4 text-gray-700">Рост позиций и домен-рейтинга</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-purple-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Icon name="FileText" className="text-purple-600" size={24} />
                        <strong className="text-lg">Контент-маркетинг</strong>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Публикация статей на внешних площадках и вашем сайте</td>
                    <td className="px-6 py-4 text-gray-700">Трафик + естественные ссылки</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-pink-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Icon name="MessageSquare" className="text-pink-600" size={24} />
                        <strong className="text-lg">Крауд-маркетинг</strong>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Нативные упоминания на форумах и в сообществах</td>
                    <td className="px-6 py-4 text-gray-700">Поведенческие факторы + репутация</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Icon name="PenTool" className="text-blue-600" size={24} />
                        <strong className="text-lg">Гостевые посты</strong>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Экспертные статьи на отраслевых медиа</td>
                    <td className="px-6 py-4 text-gray-700">Авторитет + целевая аудитория</td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Icon name="Network" className="text-green-600" size={24} />
                        <strong className="text-lg">PBN-сети</strong>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Размещение на качественных сателлитах (по запросу)</td>
                    <td className="px-6 py-4 text-gray-700">Быстрый рост по конкурентным запросам</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center font-semibold">
              Каждый проект получает индивидуальную стратегию с учётом ниши, конкурентов и текущего состояния сайта.
            </p>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6"
                onClick={() => window.open('https://t.me/seovzlet', '_blank')}
              >
                <Icon name="MessageCircle" size={24} className="mr-3" />
                Получить бесплатную консультацию
              </Button>
            </div>
          </div>

          <div className="mb-16 pt-12 border-t-2 border-gray-200">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
              🏆 Почему наше поисковое продвижение сайта SEO эффективно
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 text-4xl">
                    🔒
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">Безопасность превыше всего</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Мы используем только белые и серые методы, которые не приводят к санкциям. Никаких ссылочных помоек, автоматических бирж и массовых закупок. 
                  Каждый донор проверяется вручную.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 text-4xl">
                    📈
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">Постепенный рост</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Мы не обещаем "ТОП-1 за неделю". Наращиваем ссылочную массу плавно, имитируя естественный рост популярности сайта. 
                  Это защищает от фильтров и обеспечивает стабильный результат.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 text-4xl">
                    🎨
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">Качественный контент</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Все тексты пишутся копирайтерами с опытом в SEO. Уникальность не ниже 95%, полезность — приоритет. 
                  Мы не размещаем откровенную рекламу — только экспертный контент.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 text-4xl">
                    📊
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">Прозрачная отчётность</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Вы получаете ежемесячные отчёты: где размещены ссылки, динамика позиций, изменение трафика. 
                  Никаких "чёрных ящиков" — всё под вашим контролем.
                </p>
              </div>

              <div className="md:col-span-2 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-4xl">
                    🎯
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">Индивидуальный подход</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Мы не продаём готовые пакеты. Каждому клиенту — персональная стратегия с учётом бюджета, целей и особенностей ниши.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 pt-12 border-t-2 border-gray-200">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
              📋 Как мы работаем: этапы сотрудничества
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 border-2 border-indigo-200 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-indigo-500 to-purple-600"></div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Анализ и аудит</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Изучаем ваш сайт, конкурентов, текущие позиции. Оцениваем ссылочный профиль, контент, техническое состояние. Определяем точки роста.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-purple-500 to-pink-600"></div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Разработка стратегии</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Составляем план продвижения: какие ключевые запросы будем продвигать, какие доноры использовать, какой контент создавать. Согласовываем бюджет и сроки.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-pink-200 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-pink-500 to-red-600"></div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Подбор доноров</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Находим тематические площадки с высоким авторитетом. Проверяем каждый донор на санкции, трастовость, релевантность. Формируем базу для размещения.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500 to-cyan-600"></div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Написание SEO-текстов</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Наши копирайтеры создают уникальные статьи под ключевые запросы. Тексты оптимизированы для поисковиков, но написаны для людей — никакой "воды" и переспама.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-green-500 to-emerald-600"></div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Размещение ссылок</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Публикуем контент на отобранных площадках. Используем разнообразные анкоры: брендовые, коммерческие, информационные, безанкорные. Соблюдаем естественность распределения.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-orange-500 to-amber-600"></div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Рост позиций и масштабирование</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Отслеживаем динамику, корректируем стратегию. По мере роста усиливаем продвижение по наиболее перспективным запросам. Добавляем новые направления.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6"
                onClick={() => window.open('https://t.me/seovzlet', '_blank')}
              >
                <Icon name="Calculator" size={24} className="mr-3" />
                Рассчитать стоимость продвижения
              </Button>
            </div>
          </div>

          <div className="mb-16 pt-12 border-t-2 border-gray-200">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
              📦 Что входит в услуги: полный комплекс работ
            </h2>

            <div className="space-y-8">
              <Card className="hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg text-4xl">
                      🔗
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-3xl mb-3">Пакет "Ссылочное продвижение"</CardTitle>
                      <p className="text-lg font-semibold mb-4">Что получаете:</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Анализ конкурентов и подбор донорской базы</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Размещение 15-50 ссылок в месяц (в зависимости от ниши)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Написание уникальных статей для размещения</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Разнообразный анкор-лист с учётом естественности</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Ежемесячный отчёт по размещённым ссылкам</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Мониторинг позиций по целевым запросам</span>
                    </li>
                  </ul>
                  <div className="bg-white rounded-xl p-6 border-2 border-blue-200 mb-4">
                    <p className="text-gray-800 mb-2"><strong>Для кого:</strong> подходит для молодых сайтов и проектов с низким DR/DA</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6">
                    <p className="text-lg"><strong>Результат:</strong> рост домен-рейтинга, выход в топ-30 по средне- и низкочастотным запросам за 2-3 месяца</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg text-4xl">
                      ✍️
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-3xl mb-3">Пакет "Продвижение статьями"</CardTitle>
                      <p className="text-lg font-semibold mb-4">Что получаете:</p>
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
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg font-semibold">Всё из трёх пакетов выше</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Техническая оптимизация сайта (рекомендации)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Работа с семантическим ядром</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Создание и оптимизация контента на вашем сайте</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Мониторинг конкурентов</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Персональный менеджер проекта</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">Еженедельные созвоны и ежемесячные детальные отчёты</span>
                    </li>
                  </ul>
                  <div className="bg-white rounded-xl p-6 border-2 border-orange-300 mb-4 shadow-md">
                    <p className="text-gray-800 mb-2"><strong>Для кого:</strong> для амбициозных проектов с целью занять топ-3 по высококонкурентным запросам</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white rounded-xl p-6 shadow-lg mb-6">
                    <p className="text-xl font-bold"><strong>Результат:</strong> максимальная видимость в поиске, кратный рост трафика и конверсий, вытеснение конкурентов 🏆</p>
                  </div>
                  <div className="text-center">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-xl hover:shadow-2xl transition-all text-xl px-10 py-7 w-full md:w-auto"
                      onClick={() => window.open('https://t.me/seovzlet', '_blank')}
                    >
                      <Icon name="Rocket" size={28} className="mr-3" />
                      Заказать комплексное продвижение
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
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
              <p className="text-gray-700 leading-relaxed">
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
              <p className="text-gray-700 leading-relaxed">
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
              <p className="text-gray-700 leading-relaxed">
                Все статьи пишутся вручную. Уникальность проверяется через Advego и Text.ru. Тексты проходят редактуру перед публикацией.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="BarChart3" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">Полная отчётность</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Вы видите каждую размещённую ссылку, каждую опубликованную статью. Предоставляем доступ к системам аналитики для контроля результата.
              </p>
            </div>

            <div className="md:col-span-2 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="RefreshCw" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">Гибкость и адаптация</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Если стратегия не даёт результат — меняем подход без доплат. Ваша цель — наша цель.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
            🎓 Для кого подходит раскрутка сайта продвижение сайтов
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 text-4xl">
                  🏢
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">Для бизнеса</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Интернет-магазины, сервисные компании, B2B-проекты. Вы получаете стабильный поток заявок из органического поиска, 
                снижаете стоимость привлечения клиента, перестаёте зависеть от контекстной рекламы.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 text-4xl">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">Для стартапов</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Молодые проекты с ограниченным бюджетом. Мы поможем выйти на рынок, обогнать конкурентов и занять свою нишу без огромных вложений в рекламу.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 text-4xl">
                  📰
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">Для информационных проектов</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Блоги, медиа, образовательные порталы. Увеличиваем охваты, привлекаем целевую аудиторию, 
                монетизируем трафик через рекламу или продажу своих продуктов.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-orange-200 shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 text-4xl">
                  🏆
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">Для интернет-магазинов</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Продвигаем товарные категории и карточки товаров. Обеспечиваем рост продаж за счёт SEO-трафика, 
                который конвертируется лучше контекстной рекламы.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transition-all text-lg px-10 py-6"
              onClick={() => window.open('https://t.me/seovzlet', '_blank')}
            >
              <Icon name="MessageSquare" size={24} className="mr-3" />
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
              onClick={() => window.open('https://t.me/seovzlet', '_blank')}
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