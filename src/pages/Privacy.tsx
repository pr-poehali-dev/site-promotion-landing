import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Privacy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
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
          
          <div className="flex items-center gap-2">
            <Button 
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all text-xs md:text-sm px-3 md:px-4"
              onClick={() => window.open('https://t.me/seovzlet', '_blank')}
            >
              <Icon name="Send" size={16} className="mr-1 md:mr-2" />
              <span className="hidden sm:inline">Связаться</span>
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

      <main className="container max-w-4xl py-12 px-4">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <Icon name="ArrowLeft" size={16} />
            Вернуться на главную
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Политика конфиденциальности
          </h1>
          <p className="text-muted-foreground">Последнее обновление: 27 ноября 2024 года</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта 
              (далее — «Сайт»), предоставляющего услуги SEO-продвижения.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Используя Сайт, вы соглашаетесь с условиями данной Политики конфиденциальности. Если вы не согласны с условиями, 
              пожалуйста, не используйте Сайт.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Какие данные мы собираем</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Мы можем собирать следующую информацию:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Имя и контактные данные (телефон, email)</li>
              <li>URL вашего сайта</li>
              <li>Информацию о вашем проекте и целях продвижения</li>
              <li>Технические данные (IP-адрес, тип браузера, операционная система)</li>
              <li>Данные о поведении на сайте (посещенные страницы, время на сайте)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Как мы используем данные</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Собранные данные используются для:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Предоставления услуг SEO-продвижения</li>
              <li>Связи с вами по вопросам оказания услуг</li>
              <li>Улучшения качества наших услуг</li>
              <li>Анализа эффективности маркетинговых кампаний</li>
              <li>Соблюдения законодательных требований</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Защита данных</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Мы применяем организационные и технические меры для защиты ваших персональных данных от несанкционированного доступа, 
              изменения, раскрытия или уничтожения:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Шифрование данных при передаче (SSL/TLS)</li>
              <li>Ограниченный доступ к персональным данным</li>
              <li>Регулярное обновление систем безопасности</li>
              <li>Обучение персонала правилам обработки персональных данных</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Передача данных третьим лицам</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Мы не передаем ваши персональные данные третьим лицам, за исключением следующих случаев:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Вы дали явное согласие на передачу данных</li>
              <li>Передача необходима для оказания услуг (например, подрядчикам)</li>
              <li>Передача требуется в соответствии с законодательством РФ</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Использование cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Сайт использует файлы cookie для улучшения пользовательского опыта. Cookie — это небольшие текстовые файлы, 
              которые сохраняются на вашем устройстве при посещении сайта.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Вы можете настроить свой браузер для отказа от использования cookie, однако это может ограничить функциональность сайта.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Системы аналитики</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Мы используем следующие системы аналитики:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Яндекс.Метрика</strong> — для анализа посещаемости и поведения пользователей</li>
              <li><strong>Google Analytics</strong> — для сбора статистики о посетителях</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Эти сервисы могут собирать анонимные данные о ваших действиях на сайте. Подробнее об обработке данных можно узнать 
              в политиках конфиденциальности соответствующих сервисов.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Ваши права</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Вы имеете право:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Получать информацию о том, какие данные мы храним о вас</li>
              <li>Запрашивать исправление неточных данных</li>
              <li>Запрашивать удаление ваших персональных данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Ограничить обработку ваших данных</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Для реализации своих прав свяжитесь с нами по контактам, указанным в разделе «Контактная информация».
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Хранение данных</h2>
            <p className="text-gray-700 leading-relaxed">
              Мы храним ваши персональные данные в течение срока, необходимого для достижения целей обработки, либо в течение срока, 
              установленного законодательством РФ. После этого данные удаляются или обезличиваются.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Изменения в Политике</h2>
            <p className="text-gray-700 leading-relaxed">
              Мы оставляем за собой право вносить изменения в данную Политику конфиденциальности. Обновленная версия публикуется на 
              данной странице с указанием даты последнего обновления. Рекомендуем периодически проверять актуальность Политики.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Контактная информация</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Если у вас есть вопросы по Политике конфиденциальности или вы хотите реализовать свои права, свяжитесь с нами:
            </p>
            <ul className="list-none space-y-2 text-gray-700">
              <li><strong>Telegram:</strong> <a href="https://t.me/seovzlet" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@seovzlet</a></li>
              <li><strong>Телефон:</strong> <a href="tel:+79859758010" className="text-blue-600 hover:underline">+7 (985) 975-80-10</a></li>
              <li><strong>Время работы:</strong> Пн-Чт: 10:00-19:00 МСК</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('https://t.me/seovzlet', '_blank')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Icon name="Send" size={18} className="mr-2" />
              Связаться с нами
            </Button>
            <Link to="/">
              <Button variant="outline">
                <Icon name="Home" size={18} className="mr-2" />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-12">
        <div className="container text-center">
          <p className="text-sm text-slate-400">© 2025 SEO Эксперт — Стрельцов Иван. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
