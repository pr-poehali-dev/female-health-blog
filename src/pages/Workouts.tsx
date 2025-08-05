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
import Header from "@/components/ui/Header";

const Workouts = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const workoutArticles = [
    {
      id: 1,
      title: "Силовые тренировки для женщин",
      description: "Безопасные и эффективные упражнения для развития мышечной силы",
      tags: ["фитнес", "сила", "мышцы"],
      author: "Тренер Елена Козлова",
      date: "10 янв 2024",
      readTime: "6 мин",
      image: "https://cdn.poehali.dev/files/c7b2b8db-10cd-4b31-a9e4-0827834d3e69.png"
    },
    {
      id: 2,
      title: "Кардио для женского здоровья",
      description: "Как кардиотренировки влияют на сердце и гормональный фон",
      tags: ["кардио", "сердце", "выносливость"],
      author: "Тренер Мария Иванова",
      date: "14 янв 2024",
      readTime: "5 мин",
      image: "https://cdn.poehali.dev/files/c7b2b8db-10cd-4b31-a9e4-0827834d3e69.png"
    },
    {
      id: 3,
      title: "Йога для женщин после 30",
      description: "Комплексы йоги для гибкости, баланса и внутренней гармонии",
      tags: ["йога", "гибкость", "стресс"],
      author: "Инструктор Анна Смирнова",
      date: "17 янв 2024",
      readTime: "8 мин",
      image: "https://cdn.poehali.dev/files/c7b2b8db-10cd-4b31-a9e4-0827834d3e69.png"
    },
    {
      id: 4,
      title: "Тренировки при ПМС",
      description: "Какие упражнения помогают справиться с симптомами ПМС",
      tags: ["ПМС", "цикл", "самочувствие"],
      author: "Тренер Ольга Петрова",
      date: "21 янв 2024",
      readTime: "4 мин",
      image: "https://cdn.poehali.dev/files/c7b2b8db-10cd-4b31-a9e4-0827834d3e69.png"
    },
    {
      id: 5,
      title: "Домашние тренировки для занятых мам",
      description: "Эффективные 15-минутные комплексы для домашних условий",
      tags: ["дом", "быстро", "мамы"],
      author: "Тренер Екатерина Волкова",
      date: "24 янв 2024",
      readTime: "6 мин",
      image: "https://cdn.poehali.dev/files/c7b2b8db-10cd-4b31-a9e4-0827834d3e69.png"
    },
    {
      id: 6,
      title: "Растяжка после тренировки",
      description: "Важность растяжки и комплексы для восстановления мышц",
      tags: ["растяжка", "восстановление", "гибкость"],
      author: "Тренер Светлана Козлова",
      date: "27 янв 2024",
      readTime: "5 мин",
      image: "https://cdn.poehali.dev/files/c7b2b8db-10cd-4b31-a9e4-0827834d3e69.png"
    }
  ];

  const filteredArticles = workoutArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-sans font-bold mb-6">
              Тренировки для женского здоровья
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Эффективные и безопасные программы тренировок, адаптированные под потребности женского организма
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
                placeholder="Поиск тренировок..."
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
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
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

export default Workouts;