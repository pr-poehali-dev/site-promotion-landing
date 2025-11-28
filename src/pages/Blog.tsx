import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { useState } from 'react';

export default function Blog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <ScrollToTopButton />
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

      <section className="py-12 md:py-20">
        <div className="container max-w-6xl px-4">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900 break-words">
              📚 Блог о SEO-продвижении
            </h1>
            <p className="text-base md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto break-words">
              Практические советы, кейсы и актуальные новости из мира поискового продвижения
            </p>
          </div>

          <div className="grid gap-6 md:gap-8">
            <Link to="/blog/skolko-stoit-prodvizhenie-sajta" className="block group">
              <Card className="hover:shadow-2xl transition-all duration-300 bg-white border-2 border-gray-200 hover:border-purple-300 cursor-pointer">
                <CardHeader className="p-4 md:p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg text-xl md:text-3xl">
                        💰
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-xs md:text-sm text-gray-500">28 ноября 2025</span>
                          <span className="text-xs md:text-sm text-gray-400">•</span>
                          <span className="text-xs md:text-sm text-purple-600 font-medium">SEO</span>
                        </div>
                        <CardTitle className="text-lg md:text-2xl lg:text-3xl mb-2 md:mb-3 break-words group-hover:text-purple-600 transition-colors">
                          Сколько стоит продвижение сайта в 2025 году: цены, факторы и примеры
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed break-words mb-4">
                    Разбираем актуальные цены на SEO-продвижение в 2025 году, факторы влияния на стоимость 
                    и реальные примеры с разбором бюджетов.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Icon name="Clock" size={16} className="flex-shrink-0" />
                    <span className="break-words">Время чтения: ~15 минут</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12 md:mt-16">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 border-2 border-purple-200">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 break-words">
                Хотите быть в курсе новых статей?
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 break-words">
                Подпишитесь на наш Telegram-канал и получайте уведомления о новых публикациях
              </p>
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all text-sm md:text-lg px-4 md:px-8 py-4 md:py-6"
                onClick={() => window.open('https://t.me/seovzlet', '_blank')}
              >
                <Icon name="Send" size={18} className="mr-2 md:mr-3 flex-shrink-0" />
                <span className="break-words">Подписаться на обновления</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

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