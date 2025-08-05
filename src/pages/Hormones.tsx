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

const Hormones = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const hormonesArticles = [
    {
      id: 1,
      title: "Гормональный баланс после 30",
      description: "Основные изменения в гормональной системе и способы поддержания баланса",
      tags: ["гормональный сбой", "возраст", "здоровье"],
      author: "Др. Мария Сидорова",  
      date: "12 янв 2024",
      readTime: "7 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    },
    {
      id: 2,
      title: "Эстроген и женское здоровье",
      description: "Роль эстрогена в организме женщины и признаки его дисбаланса",
      tags: ["эстроген", "цикл", "климакс"],
      author: "Др. Елена Смирнова",
      date: "15 янв 2024",
      readTime: "6 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    },
    {
      id: 3,
      title: "Щитовидная железа у женщин",
      description: "Как работает щитовидная железа и когда нужно проверить гормоны",
      tags: ["щитовидка", "ТТГ", "усталость"],
      author: "Др. Анна Петрова",
      date: "18 янв 2024",
      readTime: "8 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    },
    {
      id: 4,
      title: "Кортизол и стресс",
      description: "Как гормон стресса влияет на женский организм и способы его нормализации",
      tags: ["кортизол", "стресс", "надпочечники"],
      author: "Др. Ирина Волкова",
      date: "21 янв 2024",
      readTime: "5 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    },
    {
      id: 5,
      title: "Инсулинорезистентность у женщин",
      description: "Что такое инсулинорезистентность и как она влияет на вес и самочувствие",
      tags: ["инсулин", "СПКЯ", "диабет"],
      author: "Др. Ольга Козлова",
      date: "24 янв 2024",
      readTime: "7 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    },
    {
      id: 6,
      title: "Менопауза: изменения и поддержка",
      description: "Как подготовиться к менопаузе и облегчить ее симптомы",
      tags: ["менопауза", "приливы", "гормоны"],
      author: "Др. Татьяна Иванова",
      date: "27 янв 2024",
      readTime: "9 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    }
  ];

  const filteredArticles = hormonesArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-sans font-bold mb-6">
              Гормональное здоровье женщин
            </h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
              Разбираемся в гормонах без паники. Научно обоснованная информация о том, как работает женская эндокринная система
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
                placeholder="Поиск статей о гормонах..."
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
                  <CardTitle className="text-xl group-hover:text-indigo-600 transition-colors">
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

export default Hormones;