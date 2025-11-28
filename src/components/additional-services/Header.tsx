import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
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
  );
}
