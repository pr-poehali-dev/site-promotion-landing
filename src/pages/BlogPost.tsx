import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function BlogPost() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 md:gap-3 group">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Icon name="Rocket" className="text-white" size={20} />
              </div>
              <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                SEO Эксперт
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link to="/" className="text-slate-700 hover:text-purple-600 transition-colors font-medium">
                Главная
              </Link>
              <Link to="/additional-services" className="text-slate-700 hover:text-purple-600 transition-colors font-medium">
                Услуги
              </Link>
              <Link to="/blog" className="text-purple-600 font-semibold">
                Блог
              </Link>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open('https://t.me/seovzlet', '_blank')}
              >
                <Icon name="Send" size={18} className="mr-2" />
                Связаться
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} className="text-slate-700" />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-slate-200 animate-in slide-in-from-top">
              <Link 
                to="/" 
                className="block px-4 py-2 text-slate-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/additional-services" 
                className="block px-4 py-2 text-slate-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link 
                to="/blog" 
                className="block px-4 py-2 text-purple-600 bg-purple-50 font-semibold rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Блог
              </Link>
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={() => {
                  window.open('https://t.me/seovzlet', '_blank');
                  setMobileMenuOpen(false);
                }}
              >
                <Icon name="Send" size={18} className="mr-2" />
                Связаться
              </Button>
            </div>
          )}
        </div>
      </nav>

      <article className="py-8 md:py-12">
        <div className="container max-w-4xl px-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm md:text-base text-purple-600 hover:text-purple-700 font-medium mb-6 md:mb-8 group"
          >
            <Icon name="ArrowLeft" size={18} className="group-hover:-translate-x-1 transition-transform" />
            Вернуться к блогу
          </Link>

          <div className="mb-6 md:mb-8">
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <span className="text-xs md:text-sm text-gray-500">28 ноября 2025</span>
              <span className="text-xs md:text-sm text-gray-400">•</span>
              <span className="text-xs md:text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">SEO</span>
              <span className="text-xs md:text-sm text-gray-500 flex items-center gap-1">
                <Icon name="Clock" size={14} />
                ~15 минут чтения
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight break-words">
              Сколько стоит продвижение сайта в 2025 году: цены, факторы и примеры
            </h1>
          </div>

          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden mb-8 md:mb-12 shadow-2xl">
            <img 
              src="https://cdn.poehali.dev/files/d8e066b0-a967-4878-b90e-a69a20516854.jpg"
              alt="Сколько стоит продвижение сайта в 2025 году"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>

          <div className="space-y-12">
            
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-6 md:p-10 border-2 border-purple-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl opacity-20"></div>
              <p className="text-base md:text-xl text-gray-800 leading-relaxed mb-6 break-words relative z-10">
                Вы решили продвигать свой сайт и начали изучать предложения на рынке. И тут оказалось, что один специалист предлагает SEO за 10 000 рублей в месяц, другой — за 50 000, а третий называет цифру в 150 000. Почему такая разница? Кто из них прав, а кто просто завышает цены или, наоборот, предлагает некачественную работу?
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6 break-words relative z-10">
                В этой статье мы честно разберём, из чего складывается стоимость SEO-продвижения в 2025 году, какие факторы влияют на цену и почему слишком дешёвые услуги могут навредить вашему бизнесу. Вы узнаете реальные цены на рынке, поймёте, за что именно платите, и сможете выбрать исполнителя осознанно.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed break-words relative z-10 font-medium">
                Никаких маркетинговых уловок — только факты, примеры и практические советы для владельцев бизнеса.
              </p>
            </div>

            <section className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4">От чего зависит стоимость SEO-продвижения</h2>
                <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                  Цена продвижения сайта в 2025 году — это не произвольная цифра. Она формируется на основе конкретных факторов, которые определяют объём и сложность работы.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-500">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-lg">1</span>
                    Тип сайта
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Одностраничный лендинг продвигать проще и дешевле, чем интернет-магазин с тысячами товаров. Чем больше страниц, тем больше времени нужно на техническую оптимизацию, написание текстов и работу с контентом.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-purple-500">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-lg">2</span>
                    Возраст домена
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Новый сайт — это чистый лист. Ему нужно набрать доверие поисковых систем, получить первые ссылки, наполниться контентом. Старый сайт с историей и ссылочной массой продвигается быстрее, но может требовать исправления старых ошибок.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-pink-500">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-orange-600 flex items-center justify-center text-white text-lg">3</span>
                    Конкуренция в нише
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    В высококонкурентных тематиках (недвижимость, финансы, юридические услуги, пластиковые окна) пробиться в топ сложнее. Конкуренты уже вложили много денег в SEO, и чтобы обойти их, нужен серьёзный бюджет и время. В узких нишах с низкой конкуренцией результаты можно получить быстрее и дешевле.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-green-500">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white text-lg">4</span>
                    Регион продвижения
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Продвижение по Москве стоит дороже, чем по небольшому городу. Причина проста: в столице больше конкурентов, выше стоимость рекламы и SEO-услуг. Региональное продвижение обычно обходится в 1,5–2 раза дешевле.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-indigo-500">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-lg">5</span>
                    Объём работ
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Если сайт технически исправен, имеет качественный контент и нормальную структуру, работы меньше. Если нужно переделывать дизайн, переписывать все тексты, исправлять критические ошибки — стоимость вырастет.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-orange-500">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-lg">6</span>
                    Состояние сайта на старте
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Сайт может быть под фильтром, иметь некачественные ссылки, дублированные страницы или медленную загрузку. Всё это требует дополнительной работы: снятие санкций, чистка ссылочного профиля, техническая доработка. Чем хуже стартовая позиция, тем дороже продвижение.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mb-4">Средние цены на продвижение сайта в 2025 году</h2>
                <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                  Чтобы вы понимали реальную картину рынка, приведём средние цены на SEO-продвижение в зависимости от типа сайта. Цены актуальны для России и стран СНГ.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <thead className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white">
                    <tr>
                      <th className="px-4 py-4 md:px-6 md:py-5 text-left text-sm md:text-base font-bold">Тип сайта</th>
                      <th className="px-4 py-4 md:px-6 md:py-5 text-left text-sm md:text-base font-bold">Цена в месяц (рубли)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all">
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-900 font-semibold">Лендинг (одностраничник)</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base">
                        <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text font-bold">от 15 000 до 30 000</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all">
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-900 font-semibold">Сайт услуг (10–50 страниц)</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base">
                        <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text font-bold">от 30 000 до 70 000</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all">
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-900 font-semibold">Интернет-магазин (до 1000 товаров)</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base">
                        <span className="inline-block bg-gradient-to-r from-pink-600 to-orange-600 text-transparent bg-clip-text font-bold">от 50 000 до 120 000</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all">
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-900 font-semibold">Крупный интернет-магазин (1000+ товаров)</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base">
                        <span className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text font-bold">от 100 000 до 250 000</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all">
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-900 font-semibold">Корпоративный сайт</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base">
                        <span className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-transparent bg-clip-text font-bold">от 40 000 до 100 000</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-gray-400">
                <p className="text-sm md:text-base text-gray-600 italic">
                  💡 Это усреднённые диапазоны. Конкретная стоимость зависит от региона, ниши и задач.
                </p>
              </div>
            </section>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 border-2 border-purple-200 my-8">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                <strong>Важно понимать:</strong> seo продвижение цена — это инвестиция в долгосрочный результат, а не разовая трата. В отличие от контекстной рекламы, где трафик пропадает сразу после остановки оплаты, SEO продолжает приносить посетителей даже после завершения активной работы.
              </p>
            </div>

            <section className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 mb-4">Какие услуги входят в стандартное SEO-продвижение</h2>
                <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                  Когда вы платите за продвижение, важно понимать, за что конкретно идут деньги. Стандартный комплекс работ включает несколько этапов.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-blue-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white text-2xl">🔍</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">Аудит сайта</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Первичный анализ: техническое состояние, ошибки индексации, скорость загрузки, юзабилити. Специалист находит проблемы, которые мешают сайту занимать высокие позиции.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-purple-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white text-2xl">🔑</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">Сбор семантического ядра</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Поиск ключевых запросов, по которым ваши клиенты ищут товары или услуги. Формируется список целевых фраз для продвижения.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-green-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white text-2xl">⚙️</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">Внутренняя оптимизация</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Доработка структуры сайта, настройка заголовков, мета-тегов, перелинковки. Цель — сделать сайт понятным для поисковых систем и удобным для пользователей.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-orange-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white text-2xl">✍️</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">Создание и доработка контента</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Написание новых текстов, оптимизация существующих, создание посадочных страниц под ключевые запросы. Контент должен быть полезным, уникальным и отвечать на вопросы пользователей.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-indigo-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white text-2xl">🔗</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">Наращивание ссылочной массы</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Получение внешних ссылок с других сайтов. Ссылки — это сигнал доверия для поисковиков. Важно, чтобы они были качественными и естественными.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-pink-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white text-2xl">📊</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">Аналитика и отчёты</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Ежемесячные отчёты о проделанной работе, динамике позиций, трафике, конверсиях. Вы видите, как движется сайт, что работает, а что требует корректировки.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 border-2 border-purple-200 shadow-lg">
                <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium">
                  💡 Всё это входит в стандартный пакет. Если вам предлагают заказать продвижение сайта за символическую сумму, уточните, какие именно услуги включены — скорее всего, это будет урезанный вариант.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 mb-4">Дешевое vs профессиональное SEO — в чем разница</h2>
                <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                  На рынке есть предложения на любой бюджет. Но важно понимать, что скрывается за низкой и высокой ценой.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <thead className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white">
                    <tr>
                      <th className="px-4 py-4 md:px-6 md:py-5 text-left text-sm md:text-base font-bold">Критерий</th>
                      <th className="px-4 py-4 md:px-6 md:py-5 text-left text-sm md:text-base font-bold">❌ Дешёвое SEO (10 000–20 000 ₽)</th>
                      <th className="px-4 py-4 md:px-6 md:py-5 text-left text-sm md:text-base font-bold">✅ Профессиональное SEO (от 40 000 ₽)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all">
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-900 font-semibold">Подход</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-700">Шаблонный, одинаковый для всех</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-green-700 font-medium">Индивидуальная стратегия</td>
                    </tr>
                    <tr className="hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all">
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-900 font-semibold">Аудит</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-700">Поверхностный или отсутствует</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-green-700 font-medium">Глубокий технический и контентный анализ</td>
                    </tr>
                    <tr className="hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all">
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-900 font-semibold">Контент</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-700">Копипаст или минимальные правки</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-green-700 font-medium">Уникальные тексты, написанные под запросы</td>
                    </tr>
                    <tr className="hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all">
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-900 font-semibold">Ссылки</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-700">Массовая закупка на биржах</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-green-700 font-medium">Качественные ссылки, естественный профиль</td>
                    </tr>
                    <tr className="hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all">
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-900 font-semibold">Риски</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-red-700 font-medium">Высокий риск попасть под фильтр</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-green-700 font-medium">Минимальные риски, белые методы</td>
                    </tr>
                    <tr className="hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all">
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-900 font-semibold">Результаты</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-700">Нестабильные или отсутствуют</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-green-700 font-medium">Стабильный рост позиций и трафика</td>
                    </tr>
                    <tr className="hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all">
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-900 font-semibold">Отчётность</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-700">Формальная или её нет</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-green-700 font-medium">Подробные отчёты с аналитикой</td>
                    </tr>
                    <tr className="hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all">
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-900 font-semibold">Гарантии</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-gray-700">«Гарантируем ТОП-1 за месяц»</td>
                      <td className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-green-700 font-medium">Реалистичные прогнозы без пустых обещаний</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 rounded-2xl p-6 md:p-8 border-2 border-orange-300 shadow-lg">
                <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium">
                  ⚡ Дешёвое SEO — это лотерея. Иногда срабатывает, но чаще приводит к потере времени и денег. Профессиональное продвижение — это системная работа с предсказуемым результатом.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 mb-4">Почему SEO не может стоить 5 000–10 000 рублей</h2>
                <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                  Периодически на рынке появляются предложения вроде «продвижение сайта за 5 000 рублей в месяц». Звучит заманчиво, но давайте посчитаем реальную себестоимость работ.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 border-2 border-purple-200">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Минимальный набор задач специалиста в месяц:</h3>
                <ul className="space-y-3 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
                    <span>Технический аудит и исправление ошибок — 5–8 часов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
                    <span>Сбор и анализ семантики — 4–6 часов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
                    <span>Внутренняя оптимизация страниц — 6–10 часов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
                    <span>Написание/редактура текстов — 8–12 часов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
                    <span>Работа с внешними ссылками — 4–6 часов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
                    <span>Аналитика и отчёты — 3–4 часа</span>
                  </li>
                </ul>
                <p className="font-bold text-lg md:text-xl text-purple-900 mt-6 text-center">
                  Итого: минимум 30–46 часов работы в месяц.
                </p>
              </div>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Если специалист берёт 5 000 рублей, его часовая ставка получается около 100–170 рублей. При такой ставке невозможно нанять профессионала — это уровень начинающего фрилансера или вовсе автоматизированного сервиса.
              </p>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 md:p-8 border-2 border-red-200">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Что скрывается за низкой ценой:</h3>
                <ul className="space-y-3 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 flex-shrink-0 text-xl">❌</span>
                    <span>Шаблонные работы без анализа вашей ниши</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 flex-shrink-0 text-xl">❌</span>
                    <span>Массовая закупка дешёвых ссылок, которые могут привести к санкциям</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 flex-shrink-0 text-xl">❌</span>
                    <span>Отсутствие качественного контента</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 flex-shrink-0 text-xl">❌</span>
                    <span>Минимум времени на ваш проект — специалист ведёт десятки клиентов одновременно</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 flex-shrink-0 text-xl">❌</span>
                    <span>Нет стратегии, только имитация деятельности</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border-2 border-blue-200 shadow-lg">
                <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium">
                  <strong className="text-lg md:text-xl">💡 Сколько стоит seo на самом деле?</strong><br />
                  <span className="text-gray-700 mt-2 block">Нормальная часовая ставка SEO-специалиста среднего уровня — от 1 500 до 3 000 рублей. Умножьте на количество часов — и получите реальную рыночную цену.</span>
                </p>
              </div>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Дешёвые услуги часто не просто бесполезны — они могут навредить. Некачественные ссылки, переоптимизированные тексты, технические ошибки — всё это ведёт к санкциям со стороны Яндекса и Google. Потом придётся тратить ещё больше денег на восстановление сайта.
              </p>
            </section>

            <section className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 mb-4">Когда появляются первые результаты</h2>
                <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                  Один из самых частых вопросов: «Когда я увижу эффект от вложений?» SEO — это не контекстная реклама, где трафик появляется в день запуска. Здесь важна системная работа и терпение.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg font-bold">1-2</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Через 1–2 месяца</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Вы увидите первые изменения: исправлены технические ошибки, добавлены новые тексты, начата работа с ссылками. Позиции могут начать расти по низкочастотным запросам. Трафик пока минимальный, но движение уже есть.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6 border-2 border-teal-200 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-green-600 flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg font-bold">3-6</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Через 3–6 месяцев</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Сайт начинает занимать позиции в топ-10 по части целевых запросов. Трафик растёт, появляются первые заявки и продажи. Это период активного набора доверия со стороны поисковых систем.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg font-bold">6-12</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Через 6–12 месяцев</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Сайт стабильно находится в топе по большинству продвигаемых запросов. Трафик выходит на плато или продолжает расти. Начинают работать долгосрочные эффекты: накопленная ссылочная масса, авторитет домена, постоянный поток органических посетителей.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 rounded-2xl p-6 md:p-8 border-2 border-orange-300 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-2xl">⏰</span>
                  Реалистичные ожидания
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  Если вам обещают «ТОП-1 за 2 недели» или «10 000 посетителей через месяц» — это обман. SEO требует времени. Поисковые системы не доверяют новым сайтам мгновенно, им нужны доказательства качества и пользы для аудитории.
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                  <strong>Важный момент:</strong> чем конкурентнее ниша, тем дольше ждать результата. В низкоконкурентных тематиках первые клиенты могут появиться уже через 2–3 месяца. В высококонкурентных (недвижимость, юриспруденция, финансы) — через полгода-год.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-4">Пример расчета стоимости продвижения</h2>
                <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                  Разберём конкретный случай, чтобы вы понимали, как формируется цена.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 border-2 border-indigo-200 shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">📋</span>
                    Исходные данные:
                  </h3>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="font-semibold min-w-[140px]">Тип сайта:</span>
                      <span>сайт услуг (ремонт квартир)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold min-w-[140px]">Регион:</span>
                      <span>Санкт-Петербург</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold min-w-[140px]">Конкуренция:</span>
                      <span>средняя</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold min-w-[140px]">Возраст сайта:</span>
                      <span>2 года, но продвижением не занимались</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold min-w-[140px]">Кол-во страниц:</span>
                      <span>35</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold min-w-[140px]">Состояние:</span>
                      <span>нет критических ошибок, но требуется доработка текстов и структуры</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 border-2 border-purple-200 shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">📝</span>
                    План работ (первые 3 месяца):
                  </h3>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
                      <span>Технический аудит и устранение ошибок — 8 часов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
                      <span>Сбор семантического ядра (200–300 запросов) — 6 часов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
                      <span>Проработка структуры и создание новых страниц — 10 часов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
                      <span>Написание и оптимизация текстов (15 страниц по 3000 знаков) — 20 часов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
                      <span>Внутренняя оптимизация (мета-теги, заголовки, перелинковка) — 8 часов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
                      <span>Наращивание ссылочной массы — 6 часов в месяц</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
                      <span>Аналитика и отчёты — 4 часа в месяц</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t-2 border-purple-300">
                    <p className="font-bold text-lg text-purple-900">Итого в первый месяц: ~52 часа</p>
                    <p className="text-sm text-gray-700 mt-1">Последующие месяцы: ~35-40 часов</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-6 md:p-8 border-2 border-pink-200 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-2xl">💰</span>
                  Расчёт стоимости:
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  При средней ставке специалиста 2 000 рублей/час:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow">
                    <span className="font-semibold text-gray-900">Первый месяц:</span>
                    <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">52 часа × 2 000 ₽ = 104 000 рублей</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow">
                    <span className="font-semibold text-gray-900">Последующие месяцы:</span>
                    <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">40 часов × 2 000 ₽ = 80 000 рублей</span>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-700 mt-6 leading-relaxed">
                  На практике агентства предлагают абонентскую модель с фиксированной ценой. Для такого проекта реальная <strong className="text-purple-900">стоимость seo продвижения</strong> составит от 50 000 до 70 000 рублей в месяц — агентство закладывает свою маржу, административные расходы, но экономит за счёт отработанных процессов.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 md:p-8 border-2 border-red-200 shadow-lg">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong>⚠️ Важно:</strong> Если вам предлагают такой же объём работ за 15 000 рублей — задумайтесь, где подвох.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 mb-4">Как выбрать SEO-специалиста и не переплатить</h2>
                <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                  Рынок SEO-услуг огромен, и легко ошибиться в выборе. Вот критерии, которые помогут найти надёжного исполнителя.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="text-2xl">📊</span>
                    Портфолио и реальные кейсы
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Попросите показать примеры работ с конкретными результатами: рост позиций, трафика, конверсий. Хороший специалист не скрывает свои успехи и может подтвердить их скриншотами из систем аналитики.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-cyan-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="text-2xl">📈</span>
                    Прозрачные отчёты
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Вы должны понимать, за что платите. Ежемесячные отчёты с детализацией работ, динамикой позиций и трафика — обязательный минимум. Избегайте тех, кто говорит: «Просто доверьтесь, всё будет».
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-teal-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="text-2xl">📄</span>
                    Договор с чётким описанием услуг
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Всё должно быть зафиксировано: что входит в работу, сроки, стоимость, ответственность сторон. Договор — это ваша защита.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    Реалистичные прогнозы
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Если вам обещают «гарантированный ТОП-1 за месяц» — бегите. Никто не может гарантировать конкретные позиции, потому что алгоритмы поисковых систем постоянно меняются, и конкуренты тоже не стоят на месте. Профессионал даёт прогноз, но не даёт невыполнимых обещаний.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-emerald-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="text-2xl">💬</span>
                    Понятное объяснение стратегии
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Хороший специалист объяснит вам на простом языке, что будет делать, почему и какого результата ожидать. Если вам отвечают сложными терминами и уходят от прямых вопросов — это тревожный знак.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="text-2xl">⭐</span>
                    Отзывы и репутация
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Почитайте отзывы на независимых площадках, поспрашивайте знакомых. Сарафанное радио в SEO работает отлично.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-indigo-200 md:col-span-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="text-2xl">💵</span>
                    Адекватная цена
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Слишком низкая цена — признак некачественной работы. Слишком высокая — возможно, переплата за бренд агентства. Ориентируйтесь на средние рыночные значения для вашего типа сайта и региона.
                  </p>
                </div>
              </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border-2 border-green-200 my-8">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                <strong>✅ Чек-лист при выборе исполнителя:</strong>
              </p>
              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 flex-shrink-0 mt-1">✓</span>
                  <span>Есть кейсы с подтверждёнными результатами</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 flex-shrink-0 mt-1">✓</span>
                  <span>Предоставляет понятные отчёты</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 flex-shrink-0 mt-1">✓</span>
                  <span>Работает по договору</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 flex-shrink-0 mt-1">✓</span>
                  <span>Не обещает невозможного</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 flex-shrink-0 mt-1">✓</span>
                  <span>Объясняет стратегию доступно</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 flex-shrink-0 mt-1">✓</span>
                  <span>Имеет положительные отзывы</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 flex-shrink-0 mt-1">✓</span>
                  <span>Цена соответствует рынку</span>
                </li>
              </ul>
            </div>
            </section>

            <section className="space-y-6 mt-16">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 mb-8">Частые вопросы</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">💡</span>
                    Можно ли продвигать сайт самостоятельно?
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Да, но это требует времени и знаний. Нужно разобраться в технической оптимизации, уметь работать с аналитикой, писать качественные тексты, получать ссылки. Если у вас нет опыта, на освоение уйдут месяцы, и ошибки могут дорого обойтись. Для малого бизнеса часто выгоднее нанять специалиста и сосредоточиться на своём деле.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-6 md:p-8 border-2 border-cyan-200 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">💰</span>
                    Можно ли платить только за результат?
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Некоторые исполнители предлагают такую модель: оплата за достижение определённых позиций или объёма трафика. Это звучит безопасно, но есть нюансы. Специалист может использовать агрессивные методы ради быстрого результата, что потом приведёт к санкциям. Лучше работать по абонентской модели с прозрачной отчётностью — так вы контролируете процесс и видите, что деньги тратятся правильно.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6 md:p-8 border-2 border-teal-200 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">📊</span>
                    Что дешевле — SEO или контекстная реклама?
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    На старте контекстная реклама даёт быстрый результат, но требует постоянных вложений. Как только вы останавливаете кампанию, трафик пропадает. SEO требует времени и денег на начальном этапе, но потом даёт стабильный органический трафик, который продолжает идти даже после остановки активного продвижения. В долгосрочной перспективе SEO выгоднее.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">⏸️</span>
                    Можно ли остановить продвижение и вернуться к нему позже?
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Можно, но есть риски. Если вы остановите работу, конкуренты не остановятся. Позиции могут просесть, особенно если вы не успели набрать достаточный авторитет. Лучше поддерживать минимальный уровень активности: публиковать контент, следить за техническим состоянием, работать с аналитикой.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 md:p-8 border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    Нужно ли продолжать платить после достижения топа?
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Да. SEO — это не разовая акция, а постоянная работа. Конкуренты продвигаются, алгоритмы поисковых систем обновляются, пользовательские запросы меняются. Чтобы удерживать позиции, нужно поддерживать сайт: обновлять контент, получать новые ссылки, следить за техническим состоянием.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 md:p-8 border-2 border-indigo-200 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">🛒</span>
                    Сколько стоит продвижение интернет-магазина?
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Интернет-магазины требуют больше ресурсов из-за большого количества страниц, необходимости работать с карточками товаров, категориями, фильтрами. В среднем стоимость начинается от 50 000 рублей в месяц для небольших магазинов и может доходить до 200 000–300 000 для крупных проектов с тысячами товаров.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6 mt-16">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mb-8">Заключение</h2>
              </div>

              <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-3xl p-6 md:p-10 border-2 border-purple-200 shadow-xl space-y-6">
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  Стоимость раскрутки сайта в 2025 году зависит от множества факторов: типа сайта, конкуренции в нише, региона, объёма работ и текущего состояния проекта. Реальные цены на профессиональное SEO-продвижение начинаются от 30 000 рублей для простых сайтов и могут доходить до 150 000–250 000 рублей для крупных интернет-магазинов и высококонкурентных тематик.
                </p>

                <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                  <strong className="text-purple-900">Главное, что нужно запомнить:</strong> дешёвое SEO — это лотерея с высоким риском попасть под санкции. Профессиональное продвижение стоит дороже, но даёт стабильный, долгосрочный результат. Вы платите не просто за отчёты и позиции — вы платите за рост бизнеса, новых клиентов и увеличение прибыли.
                </p>

                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  Выбирайте исполнителя внимательно: смотрите портфолио, требуйте прозрачности, не ведитесь на обещания «ТОП-1 за неделю». SEO — это марафон, а не спринт.
                </p>
              </div>
            </section>
          </div>

          <div className="container max-w-4xl px-4">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border-2 border-blue-200 my-8">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                Хотите узнать точную стоимость продвижения именно вашего сайта?
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                Оставьте заявку на бесплатный аудит. Мы проанализируем ваш проект, оценим конкурентов, составим индивидуальную стратегию и назовём честную цену без скрытых платежей. Никаких шаблонных решений — только персональный подход и прозрачные условия работы.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed font-semibold">
                Заказать продвижение сайта с гарантией качества — это инвестиция в стабильный поток клиентов на годы вперёд.
              </p>
            </div>

            <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t-2 border-gray-200">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 border-2 border-purple-200">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900 break-words">
                      Нужна консультация по продвижению?
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 break-words">
                      Обсудим ваш проект, рассчитаем стоимость и составим индивидуальную стратегию продвижения
                    </p>
                  </div>
                  <Button 
                    size="lg"
                    className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all whitespace-nowrap"
                    onClick={() => window.open('https://t.me/seovzlet', '_blank')}
                  >
                    <Icon name="Send" size={18} className="mr-2 flex-shrink-0" />
                    Получить консультацию
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-sm md:text-base text-purple-600 hover:text-purple-700 font-medium group"
              >
                <Icon name="ArrowLeft" size={18} className="group-hover:-translate-x-1 transition-transform" />
                Вернуться к блогу
              </Link>
            </div>
          </div>
        </div>
      </article>

      <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container relative z-10 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Icon name="Rocket" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold text-white">
                  SEO Эксперт
                </span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Профессиональное SEO-продвижение для вашего бизнеса. Помогаю выводить сайты в ТОП поисковых систем и увеличивать продажи.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                    <Link to="/additional-services">Дополнительные услуги</Link>
                  </li>
                  <li className="hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-2">
                    <Icon name="ChevronRight" size={14} className="text-purple-400" />
                    <Link to="/blog">Блог</Link>
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
                    <a href="tel:+79859758010" className="break-words">
                      +7 985 975 80 10
                    </a>
                  </li>
                  <li className="flex items-start gap-3 hover:text-blue-400 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <Icon name="Send" size={16} className="text-blue-400" />
                    </div>
                    <a href="https://t.me/seovzlet" target="_blank" rel="noopener noreferrer" className="break-words">
                      @seovzlet
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-slate-500">
                    <div className="w-8 h-8 rounded-lg bg-slate-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={16} className="text-slate-400" />
                    </div>
                    <span className="break-words">Пн-Чт: 10:00-19:00 МСК</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left break-words">
              © 2025 SEO Эксперт — Стрельцов Иван. Все права защищены.
            </p>
            <div className="flex gap-4 text-sm text-slate-400">
              <Link to="/privacy" className="hover:text-purple-400 transition-colors break-words">Политика конфиденциальности</Link>
              <Link to="/terms" className="hover:text-purple-400 transition-colors break-words">Условия использования</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}