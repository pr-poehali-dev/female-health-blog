import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const symptoms = [
    "усталость",
    "головная боль",
    "бессонница",
    "стресс",
    "депрессия",
    "боль в спине",
    "проблемы с кожей",
    "лишний вес",
    "гормональный сбой",
  ];

  const articles = [
    {
      id: 1,
      title: "Правильное питание для энергии",
      description:
        "Как сбалансированное питание влияет на уровень энергии в течение дня",
      category: "питание",
      tags: ["усталость", "энергия", "витамины"],
      author: "Др. Анна Петрова",
      date: "15 янв 2024",
      readTime: "5 мин",
    },
    {
      id: 2,
      title: "Гормональный баланс после 30",
      description:
        "Основные изменения в гормональной системе и способы поддержания баланса",
      category: "гормоны",
      tags: ["гормональный сбой", "возраст", "здоровье"],
      author: "Др. Мария Сидорова",
      date: "12 янв 2024",
      readTime: "7 мин",
    },
    {
      id: 3,
      title: "Силовые тренировки для женщин",
      description:
        "Безопасные и эффективные упражнения для развития мышечной силы",
      category: "тренировки",
      tags: ["фитнес", "сила", "мышцы"],
      author: "Тренер Елена Козлова",
      date: "10 янв 2024",
      readTime: "6 мин",
    },
    {
      id: 4,
      title: "Борьба со стрессом: медицинские рекомендации",
      description:
        "Научно обоснованные методы управления стрессом и его влиянием на организм",
      category: "советы врача",
      tags: ["стресс", "психология", "здоровье"],
      author: "Др. Ирина Волкова",
      date: "8 янв 2024",
      readTime: "8 мин",
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => article.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-body">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon
                  name="Stethoscope"
                  className="h-8 w-8 text-medical-blue"
                />
                <h1 className="text-2xl font-sans font-bold text-gray-900">
                  Женское Здоровье
                </h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#nutrition"
                className="text-gray-700 hover:text-medical-blue transition-colors"
              >
                Питание
              </a>
              <a
                href="#workouts"
                className="text-gray-700 hover:text-medical-blue transition-colors"
              >
                Тренировки
              </a>
              <a
                href="#hormones"
                className="text-gray-700 hover:text-medical-blue transition-colors"
              >
                Гормоны
              </a>
              <a
                href="#doctor-advice"
                className="text-gray-700 hover:text-medical-blue transition-colors"
              >
                Советы врача
              </a>
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
                Профессиональные медицинские советы, научно обоснованные
                рекомендации и персональный подход к женскому здоровью
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-primary hover:bg-gray-100">
                  <Icon name="Search" className="mr-2 h-4 w-4" />
                  Поиск по симптомам
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
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
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
              />
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
            {symptoms.map((symptom) => (
              <Badge
                key={symptom}
                variant={selectedTags.includes(symptom) ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  selectedTags.includes(symptom)
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => toggleTag(symptom)}
              >
                {symptom}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-sans font-bold text-gray-900 mb-6">
              Добро пожаловать на блог о здоровье, питании и гормональном
              балансе
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Здесь вы найдёте проверенную и практичную информацию о том, как
              сохранить здоровье, энергию и гормональный баланс после 30 лет. Мы
              говорим просто и по делу — о том, что действительно работает в
              питании, тренировках и поддержке женского организма.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-sans font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Icon name="Apple" className="h-6 w-6 text-primary" />
                  Питание
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Питание — это не просто калории. Это информация, которую
                  получает ваше тело каждый день. На сайте вы найдёте материалы
                  о правильном питании для женщин после 30, советы по рациону
                  при гормональном сбое, подборки полезных продуктов и
                  антипитание — чего стоит избегать, если вы часто чувствуете
                  усталость, перепады настроения или проблемы со сном.
                </p>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://cdn.poehali.dev/files/0843b9b7-2fbb-4f32-92b0-cbfb46985715.png"
                  alt="Здоровое питание"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <h2 className="text-2xl font-sans font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Icon name="Dumbbell" className="h-6 w-6 text-primary" />
                  Тренировки
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Тренировки — это не про изнурение, а про восстановление. Мы
                  делимся комплексами упражнений для женщин 30+, которые
                  помогают снизить уровень стресса, поддержать метаболизм и не
                  выгорать. Особое внимание уделено тренировкам при высоком
                  кортизоле, физической активности в фазах цикла и
                  восстановительным практикам, которые помогают телу
                  адаптироваться к изменениям.
                </p>
              </div>
              <div className="md:order-1 hidden md:block">
                <img
                  src="https://cdn.poehali.dev/files/2e05c48e-851c-47ef-823c-0f1bfb0283f4.png"
                  alt="Женские тренировки"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-sans font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                <Icon name="Activity" className="h-6 w-6 text-primary" />
                Гормоны
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Гормоны — невидимые регуляторы всего: от настроения до веса. Мы
                рассказываем, как распознать симптомы гормонального дисбаланса,
                какие анализы сдавать, как питание и образ жизни влияют на
                уровень эстрогена, прогестерона, кортизола и щитовидных
                гормонов. Здесь нет паники и навязанных решений — только мягкие,
                разумные шаги к балансу.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-sans font-bold text-gray-900 mb-4">
                Наш подход
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Каждая статья основана на актуальных исследованиях, экспертном
                мнении и реальных историях. Мы верим, что забота о себе
                начинается с понимания. Неважно, с чего вы начинаете — с поиска
                ответа на конкретный симптом или с желания навести порядок в
                питании — вы найдёте здесь поддержку и полезные рекомендации.
              </p>
              <p className="text-lg font-medium text-primary">
                Подписывайтесь на обновления, читайте блог и делайте здоровье
                своим союзником. Ведь после 30 жизнь только начинается — и ваше
                тело достойно того, чтобы быть услышанным.
              </p>
            </div>
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
                {filteredArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {article.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-lg font-sans">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
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
            {["питание", "тренировки", "гормоны", "советы врача"].map(
              (category) => (
                <TabsContent key={category} value={category} className="mt-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles
                      .filter((article) => article.category === category)
                      .map((article) => (
                        <Card
                          key={article.id}
                          className="hover:shadow-lg transition-shadow cursor-pointer"
                        >
                          <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {article.category}
                              </Badge>
                              <span className="text-xs text-gray-500">
                                {article.readTime}
                              </span>
                            </div>
                            <CardTitle className="text-lg font-sans">
                              {article.title}
                            </CardTitle>
                            <CardDescription className="text-sm">
                              {article.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-1 mb-4">
                              {article.tags.map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="outline"
                                  className="text-xs"
                                >
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
              ),
            )}
          </Tabs>
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
                Рекомендуется проверять гормональный фон 1-2 раза в год в рамках
                профилактического обследования. При наличии симптомов
                гормонального дисбаланса частота может увеличиваться по
                назначению врача.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Какие витамины особенно важны для женщин?
              </AccordionTrigger>
              <AccordionContent>
                Ключевые витамины для женского здоровья: фолиевая кислота,
                витамин D, железо, кальций, витамины группы B, омега-3 жирные
                кислоты. Конкретные потребности зависят от возраста и
                физиологического состояния.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Как силовые тренировки влияют на женский организм?
              </AccordionTrigger>
              <AccordionContent>
                Силовые тренировки улучшают плотность костей, ускоряют
                метаболизм, повышают мышечную массу и силу, улучшают
                гормональный баланс и общее самочувствие. Они безопасны и
                рекомендуются для женщин всех возрастов.
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
            Получайте еженедельную рассылку с полезными советами и новыми
            статьями
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
                <span className="text-lg font-sans font-bold">
                  Женское Здоровье
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональный медицинский блог для современных женщин
              </p>
            </div>
            <div>
              <h4 className="font-sans font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Питание
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Тренировки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Гормоны
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Советы врача
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Конфиденциальность
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Условия использования
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <Icon
                  name="Instagram"
                  className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                />
                <Icon
                  name="Facebook"
                  className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                />
                <Icon
                  name="Twitter"
                  className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                />
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