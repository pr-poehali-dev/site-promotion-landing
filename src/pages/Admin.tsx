import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import ScrollToTopButton from '@/components/ScrollToTopButton';

interface Lead {
  id: number;
  name: string;
  phone: string;
  email?: string;
  website?: string;
  message?: string;
  createdAt: string;
  status: string;
  notes?: string;
}

export default function Admin() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchLeads();
  }, [filter]);

  const fetchLeads = async () => {
    setLoading(true);
    setError('');
    
    const apiUrl = '/api/leads'; // После деплоя функции, URL будет в func2url.json
    const url = filter === 'all' ? apiUrl : `${apiUrl}?status=${filter}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.success) {
      setLeads(data.leads);
    } else {
      setError('Не удалось загрузить заявки');
    }
    
    setLoading(false);
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline", label: string }> = {
      'new': { variant: 'default', label: 'Новая' },
      'in_progress': { variant: 'secondary', label: 'В работе' },
      'completed': { variant: 'outline', label: 'Завершена' },
      'cancelled': { variant: 'destructive', label: 'Отменена' }
    };
    
    const config = variants[status] || { variant: 'outline', label: status };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTopButton />
      <header className="bg-white border-b shadow-sm">
        <div className="container max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                  <Icon name="Rocket" className="text-white rotate-[-45deg]" size={20} />
                </div>
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Админ-панель
                </h1>
              </Link>
            </div>
            <Link to="/">
              <Button variant="outline" size="sm">
                <Icon name="Home" size={16} className="mr-2" />
                На сайт
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Заявки с сайта</h2>
              <p className="text-gray-600">Всего заявок: {leads.length}</p>
            </div>
            <Button onClick={fetchLeads} disabled={loading}>
              <Icon name="RefreshCw" size={16} className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
              Обновить
            </Button>
          </div>

          <div className="flex gap-2 mb-6">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              Все
            </Button>
            <Button
              variant={filter === 'new' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('new')}
            >
              Новые
            </Button>
            <Button
              variant={filter === 'in_progress' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('in_progress')}
            >
              В работе
            </Button>
            <Button
              variant={filter === 'completed' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('completed')}
            >
              Завершены
            </Button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 text-red-800">
              <Icon name="AlertCircle" size={20} />
              <span>{error}</span>
            </div>
            <p className="text-sm text-red-600 mt-2">
              Функция /backend/leads еще не развернута. Обновите подписку для добавления backend функций.
            </p>
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Icon name="Loader" size={32} className="animate-spin text-purple-600" />
          </div>
        ) : leads.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Icon name="Inbox" size={48} className="text-gray-400 mb-4" />
              <p className="text-gray-600 text-lg">Пока нет заявок</p>
              <p className="text-gray-500 text-sm mt-2">Новые заявки будут отображаться здесь</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {leads.map((lead) => (
              <Card key={lead.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{lead.name}</CardTitle>
                        {getStatusBadge(lead.status)}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Icon name="Calendar" size={14} />
                        <span>{formatDate(lead.createdAt)}</span>
                        <span className="text-gray-300">•</span>
                        <span>ID: {lead.id}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Phone" size={16} className="text-green-600" />
                      <a href={`tel:${lead.phone}`} className="text-blue-600 hover:underline">
                        {lead.phone}
                      </a>
                    </div>
                    {lead.email && (
                      <div className="flex items-center gap-2">
                        <Icon name="Mail" size={16} className="text-blue-600" />
                        <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">
                          {lead.email}
                        </a>
                      </div>
                    )}
                    {lead.website && (
                      <div className="flex items-center gap-2">
                        <Icon name="Globe" size={16} className="text-purple-600" />
                        <a href={lead.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate">
                          {lead.website}
                        </a>
                      </div>
                    )}
                  </div>
                  
                  {lead.message && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="flex items-start gap-2 mb-2">
                        <Icon name="MessageSquare" size={16} className="text-gray-600 mt-1" />
                        <span className="font-semibold text-gray-900">Сообщение:</span>
                      </div>
                      <p className="text-gray-700 pl-6">{lead.message}</p>
                    </div>
                  )}
                  
                  {lead.notes && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-start gap-2">
                        <Icon name="StickyNote" size={16} className="text-yellow-600 mt-1" />
                        <div>
                          <span className="font-semibold text-gray-900">Заметки:</span>
                          <p className="text-gray-700 mt-1">{lead.notes}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" onClick={() => window.open(`https://t.me/seovzlet?text=Заявка от ${lead.name}, тел: ${lead.phone}`, '_blank')}>
                      <Icon name="Send" size={14} className="mr-2" />
                      Telegram
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => window.open(`tel:${lead.phone}`)}>
                      <Icon name="Phone" size={14} className="mr-2" />
                      Позвонить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}