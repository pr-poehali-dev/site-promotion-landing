import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

export default function ScrollToTopButton() {
  const [showRocket, setShowRocket] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowRocket(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsLaunching(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsLaunching(false), 1000);
  };

  if (!showRocket) return null;

  return (
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
        className={`w-14 h-14 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
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
  );
}