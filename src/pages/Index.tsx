import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCase, setSelectedCase] = useState(0);
  const [showRocket, setShowRocket] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowRocket(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsLaunching(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsLaunching(false), 1000);
  };

  const methodology = [
    {
      stage: 'Этап 1',
      title: 'Глубокий анализ ниши и конкурентов',
      description: 'Изучаю топ-10 сайтов по вашим ключевым запросам: какие страницы они продвигают, какой контент публикуют, откуда получают ссылки. Нахожу слабые места конкурентов и точки роста для вашего проекта. Анализирую коммерческие факторы, которые влияют на ранжирование в вашей нише.',
      icon: 'Search',
    },
    {
      stage: 'Этап 2',
      title: 'Разработка стратегии продвижения',
      description: 'На основе анализа создаю детальный план работ на 6-12 месяцев. Определяю приоритетные направления: что даст быстрый результат, а что — долгосрочный эффект. Прописываю KPI: целевые запросы, планируемый трафик, количество заявок.',
      icon: 'FileText',
    },
    {
      stage: 'Этап 3',
      title: 'Техническая оптимизация и доработка сайта',
      description: 'Исправляю технические ошибки, улучшаю скорость загрузки (критически важно для Яндекса), настраиваю корректную индексацию. Внедряю микроразметку Schema.org для получения расширенных сниппетов. Оптимизирую мобильную версию — более 60% пользователей заходят со смартфонов.',
      icon: 'Settings',
    },
    {
      stage: 'Этап 4',
      title: 'Контент и внутренняя оптимизация',
      description: 'Дорабатываю существующие страницы и создаю новые под ключевые кластеры. СЕО продвижение сайтов невозможно без качественного контента — тексты пишутся с учётом LSI-фраз, вопросов пользователей и требований E-A-T (экспертность, авторитетность, надёжность).',
      icon: 'PenTool',
    },
    {
      stage: 'Этап 5',
      title: 'Наращивание ссылочной массы',
      description: 'Размещаю ссылки на тематических площадках с хорошими показателями траста. Работаю через крауд-маркетинг, гостевые публикации, партнёрские размещения. Каждая ссылка усиливает авторитет сайта в глазах поисковых систем.',
      icon: 'Link',
    },
    {
      stage: 'Этап 6',
      title: 'Работа с поведенческими факторами',
      description: 'Улучшаю юзабилити: удобство навигации, читаемость текста, заметность CTA-кнопок. Провожу A/B-тесты для повышения конверсии. Хорошие поведенческие метрики (время на сайте, глубина просмотра, возвраты) напрямую влияют на позиции.',
      icon: 'Users',
    },
    {
      stage: 'Этап 7',
      title: 'Постоянный мониторинг и корректировка',
      description: 'Продвижение сайтов Яндекс требует регулярного контроля. Отслеживаю изменения в алгоритмах, корректирую стратегию при необходимости. Масштабирую успешные методы, отключаю неэффективные. Предоставляю детальные отчёты каждый месяц.',
      icon: 'BarChart3',
    },
  ];

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
      title: 'Технический SEO-аудит',
      description: 'Выявляю все ошибки, которые мешают индексации: скорость загрузки, мобильная версия, дубли страниц, структура URL. Устраняю критические технические проблемы, которые тормозят рост позиций.',
    },
    {
      icon: 'List',
      title: 'Сбор и кластеризация семантического ядра',
      description: 'Подбираю до 500-1000 ключевых запросов, по которым ищут ваши услуги. Группирую их по страницам для максимальной релевантности.',
    },
    {
      icon: 'Settings',
      title: 'Внутренняя оптимизация',
      description: 'Дорабатываю Title, Description, заголовки H1-H3, перелинковку. Оптимизирую контент под запросы пользователей и требования поисковых систем.',
    },
    {
      icon: 'PenTool',
      title: 'Контент-стратегия',
      description: 'Создаю полезные статьи, которые закрывают потребности аудитории и содержат нужные ключевые фразы. Контент пишется для людей, а не для роботов — это основа успешного ранжирования.',
    },
    {
      icon: 'Users',
      title: 'Работа с поведенческими факторами',
      description: 'Улучшаю юзабилити, чтобы посетители дольше оставались на сайте и совершали целевые действия. Анализирую тепловые карты, записи сессий, показатель отказов.',
    },
    {
      icon: 'Link',
      title: 'Наращивание ссылочной массы',
      description: 'Размещаю качественные ссылки на трастовых площадках вашей тематики. Работаю только с белыми методами линкбилдинга, которые одобрены Яндексом и Google.',
    },
    {
      icon: 'MapPin',
      title: 'Локальное SEO',
      description: 'Если у вас офлайн-бизнес, настраиваю Яндекс.Бизнес и Google Мой Бизнес, оптимизирую под геозависимые запросы.',
    },
    {
      icon: 'BarChart3',
      title: 'Ежемесячная аналитика и отчёты',
      description: 'Отслеживаю динамику позиций, трафик, конверсии. Вы видите, за что платите: какие запросы выросли, сколько новых посетителей пришло, какая была отдача.',
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

  const pricingFactors = [
    {
      icon: 'TrendingUp',
      title: 'Конкурентность тематики',
      description: 'Чем больше сильных игроков в нише, тем больше усилий требуется для выхода в топ.',
    },
    {
      icon: 'Settings',
      title: 'Текущее состояние сайта',
      description: 'Если есть серьёзные технические проблемы или санкции, потребуется больше времени на восстановление.',
    },
    {
      icon: 'MapPin',
      title: 'География продвижения',
      description: 'Региональная раскрутка сайта дешевле и быстрее, чем продвижение по всей России.',
    },
    {
      icon: 'List',
      title: 'Количество запросов',
      description: 'Чем шире семантическое ядро, тем больше страниц нужно оптимизировать и контента создать.',
    },
    {
      icon: 'Briefcase',
      title: 'Объём работ',
      description: 'Написание статей, наращивание ссылок, улучшение юзабилити — каждая задача имеет свою стоимость.',
    },
  ];

  const pricing = [
    {
      name: 'Старт',
      price: '30 000 ₽',
      period: '/месяц',
      features: [
        'До 50 ключевых запросов в топ',
        'Технический аудит и устранение критических ошибок',
        'Ежемесячный отчёт',
      ],
      description: 'Подходит для: небольших сайтов, локального бизнеса, новых проектов',
    },
    {
      name: 'Бизнес',
      price: '50 000 ₽',
      period: '/месяц',
      features: [
        'До 100 ключевых запросов в топ',
        'Полный комплекс SEO',
        'Контент-стратегия',
        'Ссылочное продвижение',
        'Ежемесячный отчёт',
      ],
      popular: true,
      description: 'Подходит для: среднего бизнеса, интернет-магазинов с каталогом до 500 товаров',
    },
    {
      name: 'Максимум',
      price: 'От 150 000 ₽',
      period: '/месяц',
      features: [
        'От 500 запросов в ТОП',
        'Индивидуальная стратегия',
        'Все каналы продвижения',
        'Выделенная команда',
        'Еженедельные отчёты',
      ],
      description: 'Подходит для: крупных интернет-магазинов, высококонкурентных ниш, федеральных проектов',
    },
  ];

  const testimonials = [
    {
      name: 'Андрей Ковалёв',
      position: 'Владелец интернет-магазина электроники',
      text: 'Работаю с Иваном уже 8 месяцев. За это время трафик вырос с 3000 до 18000 посетителей в месяц. Самое главное — заявок стало в 4 раза больше. Иван всегда на связи, объясняет каждый шаг, предоставляет подробные отчёты. Очень доволен результатом!',
    },
    {
      name: 'Елена Смирнова',
      position: 'Директор юридической компании',
      text: 'До сотрудничества с Иваном мы пробовали работать с двумя другими SEO-специалистами — результата не было. Иван сразу нашёл ошибки, составил план и за 5 месяцев вывел нас в ТОП-5 по 27 коммерческим запросам. Теперь 60% клиентов приходят из поиска. Рекомендую!',
    },
    {
      name: 'Максим Соколов',
      position: 'Владелец сети стоматологических клиник',
      text: 'Сотрудничаем с Иваном больше года. Органический трафик стабильно растёт, количество записей через сайт увеличилось в 3 раза. Особенно ценю прозрачность работы и ежемесячные отчёты с конкретными цифрами. Планируем продолжать работу и дальше.',
    },
  ];

  const faq = [
    {
      question: 'Сколько времени нужно, чтобы вывести сайт в топ?',
      answer:
        'Первые изменения в позициях заметны через 2-4 недели после начала работ. Существенный рост трафика обычно начинается с 2-3 месяца. Важно понимать, что SEO — это марафон, а не спринт. Окончательный выход в ТОП-3 по конкурентным запросам может занять от 4 до 12 месяцев в зависимости от ниши, текущего состояния сайта и действий конкурентов.',
    },
    {
      question: 'Можете ли вы гарантировать позицию №1 в Яндексе?',
      answer:
        'Я не обещаю конкретные позиции типа "№1" или "№3" — это невозможно гарантировать, так как поисковые алгоритмы постоянно меняются. Вместо этого я гарантирую достижение согласованных KPI: количество запросов в ТОП-10, рост органического трафика, увеличение числа заявок. Все условия фиксируются в договоре. Если результаты не достигнуты по моей вине — возвращаю деньги.',
    },
    {
      question: 'Чем ваше SEO отличается от других специалистов?',
      answer:
        'Я работаю только по белым методам, которые одобрены Яндексом и Google. Не использую спам-ссылки, накрутки поведенческих факторов и прочие серые схемы, которые рано или поздно приводят к санкциям. Вы получаете полную прозрачность: доступ к системам аналитики, детальные отчёты, объяснение каждого действия. Плюс — у меня 10 лет опыта и более 4000 довольных клиентов.',
    },
    {
      question: 'Нужен ли вам доступ к сайту и что вы будете с ним делать?',
      answer:
        'Да, для технической оптимизации мне потребуется доступ к CMS (административной панели сайта) и, возможно, к серверу. Я буду исправлять ошибки индексации, улучшать скорость загрузки, настраивать правильные мета-теги, внедрять микроразметку. Все действия согласовываются заранее, я не вношу изменения без вашего ведома.',
    },
    {
      question: 'Что будет, если я перестану платить за SEO?',
      answer:
        'Ваш сайт не "упадёт" моментально. В отличие от контекстной рекламы, где трафик прекращается сразу после остановки оплаты, SEO-эффект сохраняется несколько месяцев. Однако позиции постепенно будут снижаться, потому что конкуренты продолжат работать над своими сайтами. SEO требует постоянной поддержки для удержания результатов.',
    },
    {
      question: 'Можно ли продвигать сайт только по одному городу (региону)?',
      answer:
        'Да, это называется локальное SEO. Я настраиваю продвижение по геозависимым запросам (например, "стоматология Москва"), оптимизирую карточки в Яндекс.Бизнес и Google Мой Бизнес, размещаю информацию в региональных справочниках. Региональное продвижение обычно дешевле и быстрее даёт результаты.',
    },
    {
      question: 'Что такое семантическое ядро и зачем оно нужно?',
      answer:
        'Семантическое ядро — это набор ключевых запросов, по которым ваши потенциальные клиенты ищут товары или услуги в поисковиках. Я собираю от 500 до 1000+ таких фраз, группирую их по страницам сайта и оптимизирую под них контент. Правильное семантическое ядро — основа успешного SEO.',
    },
    {
      question: 'Какие отчёты я буду получать?',
      answer:
        'Каждый месяц вы получаете подробный отчёт, который включает: динамику позиций по целевым запросам, графики роста трафика, количество новых посетителей и заявок, выполненные работы за период, рекомендации и план на следующий месяц. Дополнительно предоставляю доступ к Google Analytics и Яндекс.Метрике для самостоятельного контроля.',
    },
  ];

  const currentCase = cases[selectedCase];
  const maxTraffic = Math.max(...currentCase.trafficGrowth.map((d) => d.value));
  const maxConversion = Math.max(...currentCase.conversionGrowth.map((d) => d.value));

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
              <Icon name="Rocket" className="text-white rotate-[-45deg]" size={28} />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 uppercase tracking-tight">SEO ЭКСПЕРТ</span>
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

      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 40% 70%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
        }}></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="absolute top-32 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute top-48 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-pink-500 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              SEO-продвижение сайта в топ Яндекса с{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">гарантией результата</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Выведу ваш бизнес на первые позиции поисковых систем
            </h2>
            <p className="text-xl text-muted-foreground">
              Привлеку целевых клиентов через органический трафик без переплат за контекстную рекламу. Работаю по белым методам с прозрачной отчётностью на каждом этапе. Первые результаты — уже через 3-7 дней.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать аудит
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Смотреть кейсы
              </Button>
            </div>
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Заказать продвижение сайта — значит инвестировать в долгосрочный рост вашего бизнеса
              </h2>
              <p className="text-lg text-muted-foreground">
                Поисковая оптимизация работает 24/7, привлекая клиентов, которые уже ищут ваши товары или услуги. В отличие от платной рекламы, эффект от SEO продвижения сайта накапливается и продолжает приносить лиды даже после завершения активных работ.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">150+</div>
                <div className="text-sm font-semibold text-gray-700 mt-2">Проектов</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">98%</div>
                <div className="text-sm font-semibold text-gray-700 mt-2">Довольных клиентов</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-orange-600">+320%</div>
                <div className="text-sm font-semibold text-gray-700 mt-2">Средний рост</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Что включает комплексное SEO-продвижение сайтов</h2>
            <p className="text-xl text-muted-foreground">
              Чтобы вывести сайт в топ, я провожу полный цикл работ:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                    <Icon name={service.icon} className="text-white" size={24} />
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Почему важно вывести сайт в топ Яндекса</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Когда ваш сайт в топ Яндекса, вы получаете постоянный поток целевых клиентов без необходимости ежедневно платить за рекламу. Согласно статистике, первые 5 позиций в поисковой выдаче собирают до 70% всех кликов. Если вас нет на первой странице — вас просто не видят.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-12">Реальные цифры из практики:</h3>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Стоматологическая клиника в Москве</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  После 5 месяцев работы трафик вырос на <strong className="text-foreground">280%</strong>, количество записей через сайт увеличилось в <strong className="text-foreground">4 раза</strong>.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="text-primary" size={20} />
                    <span className="text-sm">23 коммерческих запроса в ТОП</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" className="text-primary" size={20} />
                    <span className="text-sm">140+ новых пациентов</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Интернет-магазин спортивного питания</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  За 4 месяца органический трафик вырос на <strong className="text-foreground">190%</strong>, выручка с SEO-канала — на <strong className="text-foreground">320 тысяч рублей в месяц</strong>.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Target" className="text-primary" size={20} />
                    <span className="text-sm">Сайт вышел в ТОП-10 по 34 запросам</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="DollarSign" className="text-primary" size={20} />
                    <span className="text-sm">+320 тыс. руб. выручки</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Производитель металлоконструкций (B2B)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Продвижение сайта в топ по региональным запросам дало рост заявок на <strong className="text-foreground">150%</strong>. Стоимость лида снизилась с 4500 до <strong className="text-foreground">1200 рублей</strong> — в 3,7 раза дешевле, чем через контекст.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Icon name="ArrowUp" className="text-primary" size={20} />
                    <span className="text-sm">+150% заявок</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="ArrowDown" className="text-primary" size={20} />
                    <span className="text-sm">-73% стоимости лида</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground text-center mt-12">
              Когда вы занимаете высокие позиции, ваш бизнес воспринимается как более авторитетный и надёжный. Клиенты доверяют компаниям из топа поисковой выдачи — это психология потребителя.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Как я провожу поисковое продвижение сайта: моя методика</h2>
            <p className="text-xl text-muted-foreground">
              Работаю по проверенной стратегии, которая приносит измеримые результаты
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {methodology.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={step.icon} className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-primary mb-1">{step.stage}</div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20">
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

      <section id="pricing" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Продвижение сайта: цена и что на неё влияет</h2>
            <p className="text-xl text-muted-foreground">
              Стоимость SEO-продвижения зависит от нескольких факторов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {pricingFactors.map((factor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col h-full">
                <CardHeader className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={factor.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{factor.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">Тарифные пакеты</h3>
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
                  {plan.description && (
                    <p className="text-xs text-muted-foreground mt-4 pt-4 border-t">
                      <strong>Подходит для:</strong> {plan.description.replace('Подходит для: ', '')}
                    </p>
                  )}
                  <Button className="w-full mt-6" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-12 max-w-3xl mx-auto">
            Окончательная стоимость формируется после аудита вашего сайта. Я не работаю по шаблонам — каждый проект получает индивидуальную стратегию.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Кому подойдёт услуга продвижения сайтов</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="ShoppingCart" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-2xl">Интернет-магазины</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Если у вас e-commerce проект, SEO продвижение сайта — ключевой канал привлечения покупателей. Органический трафик конвертируется в 2-3 раза лучше, чем платная реклама, потому что люди уже приняли решение о покупке и просто ищут подходящий магазин.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Briefcase" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-2xl">Бизнес услуг</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Салоны красоты, юридические компании, ремонтные службы, медицинские клиники — любой бизнес, который хочет стабильный поток заявок. Продвижение сайта в топ позволяет вам быть на виду именно в тот момент, когда клиент нуждается в вашей услуге.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-2xl">Локальный бизнес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Рестораны, автосервисы, фитнес-клубы — для локальных компаний особенно важно появляться в поисковой выдаче с геометками и на картах. Я настраиваю продвижение по геозависимым запросам и подключаю местные справочники.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Factory" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-2xl">Производственные компании (B2B)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Если вы работаете с корпоративными клиентами, ваши покупатели тщательно изучают информацию перед принятием решения. Присутствие в топе по отраслевым запросам повышает ваш экспертный статус и генерирует качественные лиды.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow md:col-span-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Rocket" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-2xl">Новые проекты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Запускаете стартап или открываете новое направление? Начните с SEO сразу — результаты появятся не мгновенно, но через полгода вы получите устойчивый канал трафика, который будет работать годами.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Почему стоит работать со мной</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                  <Icon name="Eye" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">Прозрачность на каждом этапе</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Вы всегда знаете, какие работы выполняются и зачем. Никаких "магических манипуляций" — только конкретные действия с понятным обоснованием. Предоставляю доступы к системам аналитики, чтобы вы могли отслеживать результаты в режиме реального времени.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg">
                  <Icon name="FileText" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">Детальные ежемесячные отчёты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Каждый месяц вы получаете отчёт с динамикой позиций, трафиком, выполненными работами и планом на следующий период. Вы видите рост позиций по целевым запросам, увеличение органического трафика и количество привлечённых лидов.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center mb-4 shadow-lg">
                  <Icon name="Shield" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">Только белые методы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Я не использую запрещённые методы, которые могут привести к санкциям. Работаю строго в рамках рекомендаций Яндекса и Google. Это означает долгосрочный и устойчивый результат без риска попасть под фильтры.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg">
                  <Icon name="Award" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">8 лет практического опыта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  За годы работы я продвинул более 120 проектов в различных нишах: от небольших региональных компаний до крупных федеральных интернет-магазинов. Знаю специфику разных тематик и понимаю, какие методы работают лучше всего в вашей отрасли.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg">
                  <Icon name="TrendingUp" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">Измеримый рост позиций</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Моя цель — не просто "что-то делать", а приносить бизнесу реальную пользу. Фокусируюсь на коммерческих запросах, которые приводят платящих клиентов. Раскрутка сайта ради высоких позиций по нецелевым запросам мне не интересна — важен ваш доход.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                  <Icon name="Target" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">Индивидуальный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Не работаю по шаблонам. Каждый проект изучаю отдельно: анализирую вашу целевую аудиторию, конкурентов, уникальные преимущества. Стратегия создаётся под ваши бизнес-цели, а не под универсальный чек-лист.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
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

      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Обо мне </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="https://cdn.poehali.dev/files/bcd118b0-24c2-40de-89c9-8eefe32d6191.jpg"
                  alt="Стрельцов Иван - SEO специалист"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>

              <div className="order-1 md:order-2 space-y-6">
                <p className="text-lg text-muted-foreground">
                  Меня зовут <strong className="text-foreground">Стрельцов Иван</strong>, я SEO-специалист со стажем работы с 2015 года. За это время я помог вывести в топ тысячи проектов в разных нишах и собрал более <strong className="text-foreground">4000 довольных клиентов</strong> — их отзывы можно увидеть на Кворке, где мои услуги стабильно получают высокие оценки и рекомендации.
                </p>

                <p className="text-lg text-muted-foreground">
                  Мой подход основан на системной аналитике, белых методах продвижения и прозрачной работе. Я делаю не просто SEO «для галочки», а создаю стратегию, которая приводит к росту позиций, трафика и заявок.
                </p>

                <div className="bg-primary/5 rounded-lg p-6 space-y-4">
                  <h3 className="text-xl font-bold">Работая со мной, вы получаете:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">Проверенную методику, которая работает уже 10 лет</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">Опыт продвижения сотен сайтов в ТОП Яндекса и Google</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">Репутацию, подтверждённую тысячами клиентов</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">Ежемесячные отчёты, прогнозы и понятную стратегию развития сайта</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg font-semibold">
                  Если вам нужен специалист, который приведёт сайт к результату и сделает это профессионально — вы по адресу.
                </p>
              </div>
            </div>
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

      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              SEO продвижение сайта заказать — просто и быстро
            </h2>
            <p className="text-xl text-muted-foreground">
              Готовы вывести ваш бизнес на новый уровень? Начнём с бесплатного аудита вашего сайта.
            </p>

            <div className="text-left max-w-3xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold text-center">Что вы получите после обращения:</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon name="Search" className="text-primary" size={20} />
                    </div>
                    <CardTitle className="text-lg">Экспресс-анализ сайта</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      В течение 24 часов я изучу ваш проект и подготовлю список первоочередных рекомендаций.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon name="FileText" className="text-primary" size={20} />
                    </div>
                    <CardTitle className="text-lg">Коммерческое предложение</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Понятный план работ с прогнозируемыми результатами и точной стоимостью.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon name="Users" className="text-primary" size={20} />
                    </div>
                    <CardTitle className="text-lg">Стратегическую сессию</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Созвонимся, обсудим ваши цели, целевую аудиторию, бюджет. Я расскажу, как именно буду продвигать ваш проект и какие результаты реально достичь.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon name="FileCheck" className="text-primary" size={20} />
                    </div>
                    <CardTitle className="text-lg">Прозрачные условия сотрудничества</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Договор, где прописаны все обязательства, сроки и KPI.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center space-y-4 pt-8">
                <p className="text-lg font-semibold">
                  Заказать продвижение сайта можно прямо сейчас — заполните форму заявки, и я свяжусь с вами в течение 2 часов в рабочее время.
                </p>
                <p className="text-muted-foreground">
                  Не откладывайте — пока вы раздумываете, ваши конкуренты уже получают клиентов из поисковых систем. Начните инвестировать в долгосрочный канал привлечения, который будет работать годами.
                </p>
                <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                  <p className="font-semibold">
                    Оставьте заявку, и я покажу, как вывести ваш сайт в топ и превратить поисковый трафик в реальную прибыль.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>Работаю с понедельника по четверг с 10:00 до 19:00 МСК. Готов ответить на любые вопросы о продвижении вашего проекта.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Получить консультацию</h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку и я свяжусь с вами в течение 2 часов
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
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                  <Icon name="Rocket" className="text-white rotate-[-45deg]" size={24} />
                </div>
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 uppercase tracking-tight">SEO ЭКСПЕРТ</span>
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

      {showRocket && (
        <div className="fixed bottom-8 right-8 z-50">
          {isLaunching && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <div className="animate-smoke-1 w-8 h-8 bg-gray-400/40 rounded-full blur-md"></div>
              <div className="animate-smoke-2 w-10 h-10 bg-gray-300/30 rounded-full blur-lg absolute bottom-2 left-1/2 -translate-x-1/2"></div>
              <div className="animate-smoke-3 w-12 h-12 bg-gray-200/20 rounded-full blur-xl absolute bottom-4 left-1/2 -translate-x-1/2"></div>
            </div>
          )}
          <button
            onClick={scrollToTop}
            className={`w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
              isLaunching ? 'animate-rocket-launch' : 'hover:scale-110'
            }`}
            aria-label="Наверх"
          >
            <Icon
              name="Rocket"
              size={24}
              className={`transition-transform ${
                isLaunching ? 'rotate-[-45deg]' : 'rotate-[-45deg] group-hover:translate-y-[-2px]'
              }`}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;