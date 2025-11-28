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
            />
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-sm prose-p:md:text-base prose-ul:text-sm prose-ul:md:text-base prose-li:text-gray-700 prose-strong:text-gray-900 prose-strong:font-semibold">
            
            <p className="text-base md:text-xl text-gray-700 font-medium mb-8 break-words">
              Продвижение сайта в поисковых системах — это инвестиция в долгосрочный рост бизнеса. 
              Но сколько это стоит на самом деле? В этой статье разберём актуальные цены на 2025 год, 
              факторы влияния на стоимость и реальные примеры.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border-2 border-blue-200 my-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Icon name="Info" className="text-white" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 break-words">Текст статьи будет добавлен</h3>
                  <p className="text-sm md:text-base text-gray-700 break-words">
                    Сейчас готовится полная версия статьи с подробным анализом цен, примерами и рекомендациями. 
                    Присылайте текст частями — я добавлю его на страницу.
                  </p>
                </div>
              </div>
            </div>

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
