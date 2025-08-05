import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Calendar state
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [healthEvents, setHealthEvents] = useState<{[key: string]: string[]}>({});
  const [newEvent, setNewEvent] = useState('');
  
  // Symptom diary state
  const [symptomEntries, setSymptomEntries] = useState<Array<{
    id: number;
    date: string;
    symptoms: string[];
    severity: number;
    notes: string;
  }>>([]);
  const [currentSymptoms, setCurrentSymptoms] = useState<string[]>([]);
  const [severity, setSeverity] = useState(5);
  const [notes, setNotes] = useState('');
  
  // Calculator states
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [waterIntake, setWaterIntake] = useState('');
  const [calculatorResults, setCalculatorResults] = useState<{[key: string]: any}>({});

  const symptoms = [
    'усталость', 'головная боль', 'бессонница', 'стресс', 'депрессия',
    'боль в спине', 'проблемы с кожей', 'лишний вес', 'гормональный сбой'
  ];

  const articles = [
    {
      id: 1,
      title: 'Правильное питание для энергии',
      description: 'Как сбалансированное питание влияет на уровень энергии в течение дня',
      category: 'питание',
      tags: ['усталость', 'энергия', 'витамины'],
      author: 'Др. Анна Петрова',
      date: '15 янв 2024',
      readTime: '5 мин'
    },
    {
      id: 2,
      title: 'Гормональный баланс после 30',
      description: 'Основные изменения в гормональной системе и способы поддержания баланса',
      category: 'гормоны',
      tags: ['гормональный сбой', 'возраст', 'здоровье'],
      author: 'Др. Мария Сидорова',
      date: '12 янв 2024',
      readTime: '7 мин'
    },
    {
      id: 3,
      title: 'Силовые тренировки для женщин',
      description: 'Безопасные и эффективные упражнения для развития мышечной силы',
      category: 'тренировки',
      tags: ['фитнес', 'сила', 'мышцы'],
      author: 'Тренер Елена Козлова',
      date: '10 янв 2024',
      readTime: '6 мин'
    },
    {
      id: 4,
      title: 'Борьба со стрессом: медицинские рекомендации',
      description: 'Научно обоснованные методы управления стрессом и его влиянием на организм',
      category: 'советы врача',
      tags: ['стресс', 'психология', 'здоровье'],
      author: 'Др. Ирина Волкова',
      date: '8 янв 2024',
      readTime: '8 мин'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => article.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Calendar functions
  const addHealthEvent = () => {
    if (newEvent.trim() && selectedDate) {
      const dateStr = selectedDate.toDateString();
      setHealthEvents(prev => ({
        ...prev,
        [dateStr]: [...(prev[dateStr] || []), newEvent]
      }));
      setNewEvent('');
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ru-RU', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  // Symptom diary functions
  const addSymptomEntry = () => {
    if (currentSymptoms.length > 0) {
      const newEntry = {
        id: Date.now(),
        date: new Date().toLocaleDateString('ru-RU'),
        symptoms: [...currentSymptoms],
        severity,
        notes
      };
      setSymptomEntries(prev => [newEntry, ...prev]);
      setCurrentSymptoms([]);
      setSeverity(5);
      setNotes('');
    }
  };

  const toggleSymptom = (symptom: string) => {
    setCurrentSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  // Calculator functions
  const calculateBMI = () => {
    if (height && weight) {
      const heightInM = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const bmi = weightInKg / (heightInM * heightInM);
      return bmi.toFixed(1);
    }
    return null;
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: 'Недостаток веса', color: 'text-blue-600' };
    if (bmi < 25) return { category: 'Нормальный вес', color: 'text-green-600' };
    if (bmi < 30) return { category: 'Избыточный вес', color: 'text-yellow-600' };
    return { category: 'Ожирение', color: 'text-red-600' };
  };

  const calculateWaterIntake = () => {
    if (weight) {
      const intake = parseFloat(weight) * 35; // 35ml per kg
      return (intake / 1000).toFixed(1); // convert to liters
    }
    return null;
  };

  const calculateResults = () => {
    const bmi = calculateBMI();
    const water = calculateWaterIntake();
    
    setCalculatorResults({
      bmi: bmi ? parseFloat(bmi) : null,
      water: water ? parseFloat(water) : null,
      bmiCategory: bmi ? getBMICategory(parseFloat(bmi)) : null
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-body">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Stethoscope" className="h-8 w-8 text-medical-blue" />
                <h1 className="text-2xl font-sans font-bold text-gray-900">Женское Здоровье</h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#nutrition" className="text-gray-700 hover:text-medical-blue transition-colors">Питание</a>
              <a href="#workouts" className="text-gray-700 hover:text-medical-blue transition-colors">Тренировки</a>
              <a href="#hormones" className="text-gray-700 hover:text-medical-blue transition-colors">Гормоны</a>
              <a href="#doctor-advice" className="text-gray-700 hover:text-medical-blue transition-colors">Советы врача</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-sans font-bold mb-6">
                Ваше здоровье — наш приоритет
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Профессиональные медицинские советы, научно обоснованные рекомендации и персональный подход к женскому здоровью
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-primary hover:bg-gray-100">
                  <Icon name="Search" className="mr-2 h-4 w-4" />
                  Поиск по симптомам
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Консультация врача
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/img/3d45bfbc-9eb6-47d9-a274-6519dd69fc1f.jpg" 
                alt="Здоровая женщина" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-sans font-bold text-gray-900 mb-4">
              Поиск по симптомам и темам
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Найдите статьи по интересующим вас симптомам или темам здоровья
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Введите симптом или тему..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {symptoms.map(symptom => (
              <Badge
                key={symptom}
                variant={selectedTags.includes(symptom) ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  selectedTags.includes(symptom) 
                    ? 'bg-primary text-white' 
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => toggleTag(symptom)}
              >
                {symptom}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-sans font-bold text-gray-900 mb-4">
              Инструменты здоровья
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Интерактивные инструменты для отслеживания и контроля вашего здоровья
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Health Calendar */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calendar" className="h-5 w-5 text-primary" />
                  Календарь здоровья
                </CardTitle>
                <CardDescription>
                  Отмечайте важные события, визиты к врачу и состояние здоровья
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <Icon name="Calendar" className="mr-2 h-4 w-4" />
                      {selectedDate ? formatDate(selectedDate) : "Выберите дату"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => date && setSelectedDate(date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                
                <div className="space-y-2">
                  <Label htmlFor="health-event">Добавить событие</Label>
                  <div className="flex gap-2">
                    <Input
                      id="health-event"
                      placeholder="Визит к врачу, анализы..."
                      value={newEvent}
                      onChange={(e) => setNewEvent(e.target.value)}
                    />
                    <Button onClick={addHealthEvent} size="sm">
                      <Icon name="Plus" className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {selectedDate && healthEvents[selectedDate.toDateString()] && (
                  <div className="space-y-2">
                    <Label>События на {formatDate(selectedDate)}</Label>
                    <div className="space-y-1">
                      {healthEvents[selectedDate.toDateString()].map((event, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm bg-blue-50 p-2 rounded">
                          <Icon name="CheckCircle" className="h-4 w-4 text-primary" />
                          {event}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Symptom Diary */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" className="h-5 w-5 text-primary" />
                  Дневник симптомов
                </CardTitle>
                <CardDescription>
                  Записывайте симптомы для отслеживания паттернов здоровья
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Выберите симптомы</Label>
                  <div className="flex flex-wrap gap-1">
                    {symptoms.map(symptom => (
                      <Badge
                        key={symptom}
                        variant={currentSymptoms.includes(symptom) ? "default" : "outline"}
                        className="cursor-pointer text-xs"
                        onClick={() => toggleSymptom(symptom)}
                      >
                        {symptom}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Интенсивность (1-10)</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Слабо</span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={severity}
                      onChange={(e) => setSeverity(Number(e.target.value))}
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-sm text-gray-500">Сильно</span>
                    <Badge variant="outline" className="min-w-[30px]">{severity}</Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="symptom-notes">Заметки</Label>
                  <Textarea
                    id="symptom-notes"
                    placeholder="Дополнительные детали..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                  />
                </div>

                <Button onClick={addSymptomEntry} className="w-full" disabled={currentSymptoms.length === 0}>
                  <Icon name="Plus" className="mr-2 h-4 w-4" />
                  Добавить запись
                </Button>

                {symptomEntries.length > 0 && (
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    <Label>Последние записи</Label>
                    {symptomEntries.slice(0, 3).map(entry => (
                      <div key={entry.id} className="bg-gray-50 p-3 rounded text-sm">
                        <div className="font-medium">{entry.date}</div>
                        <div className="text-gray-600">
                          {entry.symptoms.join(', ')} (интенсивность: {entry.severity})
                        </div>
                        {entry.notes && (
                          <div className="text-gray-500 text-xs mt-1">{entry.notes}</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Health Calculators */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calculator" className="h-5 w-5 text-primary" />
                  Калькуляторы здоровья
                </CardTitle>
                <CardDescription>
                  Рассчитайте ИМТ, норму воды и другие показатели
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="height">Рост (см)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="170"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Вес (кг)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="65"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">Возраст</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="25"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                <Button onClick={calculateResults} className="w-full">
                  <Icon name="Calculator" className="mr-2 h-4 w-4" />
                  Рассчитать
                </Button>

                {calculatorResults.bmi && (
                  <div className="space-y-3 bg-blue-50 p-4 rounded">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        ИМТ: {calculatorResults.bmi}
                      </div>
                      <div className={`text-sm font-medium ${calculatorResults.bmiCategory?.color}`}>
                        {calculatorResults.bmiCategory?.category}
                      </div>
                    </div>
                    
                    {calculatorResults.water && (
                      <div className="text-center border-t pt-3">
                        <div className="text-lg font-semibold text-blue-600">
                          Норма воды: {calculatorResults.water} л/день
                        </div>
                        <div className="text-xs text-gray-600">
                          Рекомендуемое количество воды в день
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="text-xs text-gray-500 text-center">
                  * Результаты носят информационный характер
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">Все статьи</TabsTrigger>
              <TabsTrigger value="питание">Питание</TabsTrigger>
              <TabsTrigger value="тренировки">Тренировки</TabsTrigger>
              <TabsTrigger value="гормоны">Гормоны</TabsTrigger>
              <TabsTrigger value="советы врача">Советы врача</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map(article => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                      </div>
                      <CardTitle className="text-lg font-sans">{article.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{article.author}</span>
                        <span>{article.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Category-specific tabs */}
            {['питание', 'тренировки', 'гормоны', 'советы врача'].map(category => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.filter(article => article.category === category).map(article => (
                    <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {article.category}
                          </Badge>
                          <span className="text-xs text-gray-500">{article.readTime}</span>
                        </div>
                        <CardTitle className="text-lg font-sans">{article.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {article.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {article.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <span>{article.author}</span>
                          <span>{article.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Featured Experts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-sans font-bold text-gray-900 mb-4">
              Наши эксперты
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Команда квалифицированных врачей и специалистов по женскому здоровью
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Др. Анна Петрова', specialty: 'Диетолог', experience: '15 лет опыта' },
              { name: 'Др. Мария Сидорова', specialty: 'Эндокринолог', experience: '12 лет опыта' },
              { name: 'Тренер Елена Козлова', specialty: 'Фитнес-тренер', experience: '8 лет опыта' },
              { name: 'Др. Ирина Волкова', specialty: 'Психотерапевт', experience: '20 лет опыта' }
            ].map((expert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-lg font-sans">{expert.name}</CardTitle>
                  <CardDescription>{expert.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{expert.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-sans font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h3>
            <p className="text-gray-600">
              Ответы на самые популярные вопросы о женском здоровье
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Как часто нужно сдавать анализы на гормоны?
              </AccordionTrigger>
              <AccordionContent>
                Рекомендуется проверять гормональный фон 1-2 раза в год в рамках профилактического обследования. При наличии симптомов гормонального дисбаланса частота может увеличиваться по назначению врача.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Какие витамины особенно важны для женщин?
              </AccordionTrigger>
              <AccordionContent>
                Ключевые витамины для женского здоровья: фолиевая кислота, витамин D, железо, кальций, витамины группы B, омега-3 жирные кислоты. Конкретные потребности зависят от возраста и физиологического состояния.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Как силовые тренировки влияют на женский организм?
              </AccordionTrigger>
              <AccordionContent>
                Силовые тренировки улучшают плотность костей, ускоряют метаболизм, повышают мышечную массу и силу, улучшают гормональный баланс и общее самочувствие. Они безопасны и рекомендуются для женщин всех возрастов.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-sans font-bold mb-4">
            Будьте в курсе новостей о здоровье
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Получайте еженедельную рассылку с полезными советами и новыми статьями
          </p>
          <div className="flex max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Ваш email"
              className="rounded-r-none bg-white text-gray-900"
            />
            <Button className="rounded-l-none bg-white text-primary hover:bg-gray-100">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Stethoscope" className="h-6 w-6" />
                <span className="text-lg font-sans font-bold">Женское Здоровье</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональный медицинский блог для современных женщин
              </p>
            </div>
            <div>
              <h4 className="font-sans font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Питание</a></li>
                <li><a href="#" className="hover:text-white">Тренировки</a></li>
                <li><a href="#" className="hover:text-white">Гормоны</a></li>
                <li><a href="#" className="hover:text-white">Советы врача</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Контакты</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Конфиденциальность</a></li>
                <li><a href="#" className="hover:text-white">Условия использования</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Facebook" className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Twitter" className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Женское Здоровье. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;