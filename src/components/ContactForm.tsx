import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните имя и телефон',
        variant: 'destructive'
      });
      return;
    }

    setLoading(true);

    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (data.success) {
      toast({
        title: 'Заявка отправлена!',
        description: 'Спасибо! Я свяжусь с вами в ближайшее время.',
      });
      
      setFormData({
        name: '',
        phone: '',
        email: '',
        website: '',
        message: ''
      });
    } else {
      toast({
        title: 'Ошибка',
        description: data.error || 'Не удалось отправить заявку. Попробуйте позже.',
        variant: 'destructive'
      });
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Icon name="User" size={16} className="text-blue-600" />
            Ваше имя *
          </label>
          <Input 
            placeholder="Иван Иванов" 
            className="border-2 focus:border-blue-500"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Icon name="Phone" size={16} className="text-green-600" />
            Телефон *
          </label>
          <Input 
            placeholder="+7 (999) 123-45-67" 
            className="border-2 focus:border-green-500"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center gap-2">
          <Icon name="Mail" size={16} className="text-purple-600" />
          Email
        </label>
        <Input 
          type="email" 
          placeholder="ivan@company.ru" 
          className="border-2 focus:border-purple-500"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center gap-2">
          <Icon name="Globe" size={16} className="text-cyan-600" />
          Сайт
        </label>
        <Input 
          placeholder="https://yoursite.ru" 
          className="border-2 focus:border-cyan-500"
          value={formData.website}
          onChange={(e) => setFormData({...formData, website: e.target.value})}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center gap-2">
          <Icon name="MessageSquare" size={16} className="text-orange-600" />
          Расскажите о вашем проекте
        </label>
        <Textarea 
          placeholder="Опишите ваши цели и задачи..." 
          rows={4} 
          className="border-2 focus:border-orange-500"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
      </div>
      <Button 
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 shadow-lg hover:shadow-xl" 
        size="lg"
        disabled={loading}
      >
        {loading ? (
          <>
            <Icon name="Loader" size={20} className="mr-2 animate-spin" />
            Отправка...
          </>
        ) : (
          <>
            <Icon name="Send" size={20} className="mr-2" />
            Отправить заявку
          </>
        )}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Нажимая кнопку, вы соглашаетесь с <a href="/privacy" className="underline">политикой конфиденциальности</a>
      </p>
    </form>
  );
}
