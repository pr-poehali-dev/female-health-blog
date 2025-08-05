import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import Icon from "@/components/ui/icon";

const DoctorAdvice = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const doctorArticles = [
    {
      id: 1,
      title: "Борьба со стрессом: медицинские рекомендации",
      description: "Научно обоснованные методы управления стрессом и его влиянием на организм",
      tags: ["стресс", "психология", "здоровье"],
      author: "Др. Ирина Волкова",
      date: "8 янв 2024",
      readTime: "8 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    },
    {
      id: 2,
      title: "Когда обращаться к гинекологу",
      description: "Важные симптомы, которые требуют консультации специалиста",
      tags: ["гинекология", "симптомы", "профилактика"],
      author: "Др. Елена Смирнова",
      date: "11 янв 2024",
      readTime: "6 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    },
    {
      id: 3,
      title: "Анализы для женщин после 30",
      description: "Какие обследования проходить регулярно для контроля здоровья",
      tags: ["анализы", "обследование", "профилактика"],
      author: "Др. Анна Петрова",
      date: "16 янв 2024",
      readTime: "7 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    },
    {
      id: 4,
      title: "Сон и женское здоровье",
      description: "Как качество сна влияет на гормоны и общее самочувствие",
      tags: ["сон", "бессонница", "гормоны"],
      author: "Др. Татьяна Козлова",
      date: "19 янв 2024",
      readTime: "5 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    },
    {
      id: 5,
      title: "Контрацепция: выбор и особенности",
      description: "Современные методы контрацепции и их влияние на здоровье",
      tags: ["контрацепция", "гормоны", "планирование"],
      author: "Др. Ольга Иванова",
      date: "23 янв 2024",
      readTime: "9 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    },
    {
      id: 6,
      title: "Планирование беременности",
      description: "Подготовка к беременности: анализы, витамины, образ жизни",
      tags: ["беременность", "планирование", "витамины"],
      author: "Др. Марина Петрова",
      date: "26 янв 2024",
      readTime: "10 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    }
  ];

  const filteredArticles = doctorArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <Icon
                  name="Heart"
                  className="h-8 w-8 text-medical-blue"
                />
                <h1 className="text-2xl font-sans font-bold text-gray-900">
                  Женское Здоровье
                </h1>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/nutrition"
                className="text-gray-700 hover:text-medical-blue transition-colors"
              >
                Питание
              </Link>
              <Link
                to="/workouts"
                className="text-gray-700 hover:text-medical-blue transition-colors"
              >
                Тренировки
              </Link>
              <Link
                to="/hormones"
                className="text-gray-700 hover:text-medical-blue transition-colors"
              >
                Гормоны
              </Link>
              <Link
                to="/doctor-advice"
                className="text-medical-blue font-medium border-b-2 border-medical-blue pb-1"
              >
                Советы врача
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-sans font-bold mb-6">
              Советы врача
            </h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
              Профессиональные медицинские рекомендации от ведущих специалистов в области женского здоровья
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
              />
              <Input
                type="text"
                placeholder="Поиск медицинских советов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.author}</span>
                    <div className="flex items-center space-x-4">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Статьи не найдены
              </h3>
              <p className="text-gray-600">
                Попробуйте изменить поисковый запрос
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DoctorAdvice;