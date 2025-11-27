import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Terms() {
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
            Договор оферты
          </h1>
          <p className="text-muted-foreground">Публичная оферта на оказание услуг по SEO-продвижению</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Настоящий документ является публичной офертой (предложением) Индивидуального предпринимателя Стрельцова Ивана 
              (далее — «Исполнитель») заключить договор на оказание услуг по SEO-продвижению сайтов (далее — «Услуги»).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              В соответствии с пунктом 2 статьи 437 Гражданского кодекса РФ, в случае принятия изложенных ниже условий и 
              оплаты услуг юридическое или физическое лицо (далее — «Заказчик») считается заключившим договор оферты.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Настоящая оферта действует с момента размещения на сайте и до момента её отзыва Исполнителем.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Предмет договора</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Исполнитель обязуется оказать Заказчику услуги по SEO-продвижению сайта в поисковых системах, а Заказчик 
              обязуется оплатить эти услуги в соответствии с условиями настоящей оферты.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Перечень услуг включает, но не ограничивается:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Технический аудит сайта</li>
              <li>Сбор и кластеризацию семантического ядра</li>
              <li>Внутреннюю оптимизацию страниц</li>
              <li>Разработку и размещение контента</li>
              <li>Наращивание ссылочной массы</li>
              <li>Работу с поведенческими факторами</li>
              <li>Мониторинг позиций и предоставление отчётности</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Конкретный набор услуг определяется выбранным тарифным планом и дополнительно согласовывается с Заказчиком.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Порядок заключения договора</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Акцептом (принятием) условий настоящей оферты является:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Заполнение формы заявки на сайте</li>
              <li>Отправка запроса через Telegram, телефон или email</li>
              <li>Оплата счёта на оказание услуг</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Договор считается заключённым с момента получения оплаты от Заказчика и действует до полного исполнения 
              обязательств сторонами.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Стоимость услуг и порядок оплаты</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Стоимость услуг определяется действующими на момент заключения договора тарифами, указанными на сайте.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Тарифные планы:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Базовый</strong> — от 30 000 ₽/месяц</li>
              <li><strong>Оптимальный</strong> — от 60 000 ₽/месяц</li>
              <li><strong>Максимум</strong> — от 100 000 ₽/месяц</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Окончательная стоимость определяется после аудита сайта и согласования объёма работ.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Порядок оплаты:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Оплата производится ежемесячно авансовым платежом</li>
              <li>Первый месяц оплачивается в полном объёме до начала работ</li>
              <li>Последующие платежи производятся до 5-го числа текущего месяца</li>
              <li>Способы оплаты: банковский перевод, оплата по счёту</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Права и обязанности сторон</h2>
            
            <h3 className="text-xl font-bold mb-3 mt-6">5.1. Исполнитель обязуется:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Оказывать услуги качественно и в установленные сроки</li>
              <li>Использовать только белые и серые методы продвижения, не нарушающие правила поисковых систем</li>
              <li>Предоставлять ежемесячные отчёты о выполненных работах</li>
              <li>Консультировать Заказчика по вопросам SEO-продвижения</li>
              <li>Информировать об изменениях в алгоритмах поисковых систем, которые могут повлиять на результат</li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-6">5.2. Заказчик обязуется:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Своевременно оплачивать услуги в соответствии с условиями договора</li>
              <li>Предоставить Исполнителю доступ к административной панели сайта и необходимым сервисам аналитики</li>
              <li>Согласовывать изменения на сайте, которые могут повлиять на SEO-продвижение</li>
              <li>Предоставлять достоверную информацию о своём бизнесе, целевой аудитории и конкурентах</li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-6">5.3. Исполнитель имеет право:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Приостановить оказание услуг при просрочке платежа более 5 дней</li>
              <li>Вносить изменения в стратегию продвижения при изменении алгоритмов поисковых систем</li>
              <li>Использовать информацию о достигнутых результатах (без указания имени Заказчика) в маркетинговых целях</li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-6">5.4. Заказчик имеет право:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Требовать предоставления отчётов о выполненной работе</li>
              <li>Получать консультации по вопросам SEO-продвижения</li>
              <li>Расторгнуть договор в одностороннем порядке с уведомлением за 10 дней</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Ответственность сторон</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Исполнитель несёт ответственность за качество оказываемых услуг в соответствии с законодательством РФ.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Исполнитель не несёт ответственность за:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Санкции поисковых систем, вызванные действиями третьих лиц или самого Заказчика</li>
              <li>Изменения в алгоритмах поисковых систем, которые могут временно повлиять на позиции сайта</li>
              <li>Действия конкурентов, направленные на негативное SEO</li>
              <li>Технические проблемы на стороне хостинг-провайдера Заказчика</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              При просрочке оплаты Заказчик выплачивает пени в размере 0,1% от суммы задолженности за каждый день просрочки.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Гарантии</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Исполнитель гарантирует:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Соблюдение этических норм SEO-продвижения</li>
              <li>Использование только проверенных методов оптимизации</li>
              <li>Конфиденциальность информации о Заказчике и его проекте</li>
              <li>Прозрачную отчётность по всем выполненным работам</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Исполнитель не гарантирует достижение конкретных позиций (например, "№1" или "ТОП-3"), так как ранжирование 
              зависит от множества факторов, включая действия конкурентов и изменения алгоритмов поисковых систем.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Гарантируется достижение согласованных KPI: рост органического трафика, увеличение количества запросов в топ-10, 
              рост конверсий из органического поиска.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Срок действия договора и порядок расторжения</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Договор заключается на неопределённый срок и действует до момента расторжения одной из сторон.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Любая из сторон может расторгнуть договор в одностороннем порядке, уведомив другую сторону за 10 календарных дней.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Основания для досрочного расторжения договора Исполнителем:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Просрочка оплаты более чем на 10 дней</li>
              <li>Отказ Заказчика предоставить необходимые доступы и информацию</li>
              <li>Систематическое внесение Заказчиком изменений на сайт, которые негативно влияют на SEO</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              При расторжении договора оплаченные, но не оказанные услуги возвращаются Заказчику пропорционально количеству 
              оставшихся дней до конца оплаченного периода.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Конфиденциальность</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Исполнитель обязуется не разглашать конфиденциальную информацию, полученную от Заказчика в процессе оказания услуг.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Обработка персональных данных Заказчика осуществляется в соответствии с Политикой конфиденциальности, размещённой 
              на сайте, и Федеральным законом №152-ФЗ "О персональных данных".
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Форс-мажор</h2>
            <p className="text-gray-700 leading-relaxed">
              Стороны освобождаются от ответственности за частичное или полное неисполнение обязательств по договору, если это 
              неисполнение явилось следствием обстоятельств непреодолимой силы (форс-мажор), возникших после заключения договора 
              и которые стороны не могли предвидеть или предотвратить.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Разрешение споров</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Все споры и разногласия, возникающие между сторонами, решаются путём переговоров.
            </p>
            <p className="text-gray-700 leading-relaxed">
              В случае невозможности достижения соглашения споры подлежат рассмотрению в судебном порядке в соответствии с 
              законодательством Российской Федерации.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Заключительные положения</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Исполнитель оставляет за собой право вносить изменения в условия настоящей оферты. Новая редакция вступает в силу 
              с момента её размещения на сайте, если иное не предусмотрено новой редакцией оферты.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Во всём остальном, что не предусмотрено настоящей офертой, стороны руководствуются действующим законодательством 
              Российской Федерации.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. Реквизиты Исполнителя</h2>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong></strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Telegram:</strong> <a href="https://t.me/seovzlet" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@seovzlet</a>
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Телефон:</strong> <a href="tel:+79859758010" className="text-blue-600 hover:underline">+7 (985) 975-80-10</a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Время работы:</strong> Пн-Чт: 10:00-19:00 МСК
              </p>
            </div>
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