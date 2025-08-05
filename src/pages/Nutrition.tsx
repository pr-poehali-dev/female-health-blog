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

const Nutrition = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const nutritionArticles = [
    {
      id: 1,
      title: "Правильное питание для энергии",
      description: "Как сбалансированное питание влияет на уровень энергии в течение дня",
      tags: ["усталость", "энергия", "витамины"],
      author: "Др. Анна Петрова",
      date: "15 янв 2024",
      readTime: "5 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    },
    {
      id: 2,
      title: "Железо в рационе женщины",
      description: "Почему женщинам важно следить за уровнем железа и как его восполнить",
      tags: ["анемия", "железо", "витамины"],
      author: "Др. Анна Петрова",
      date: "18 янв 2024",
      readTime: "6 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    },
    {
      id: 3,
      title: "Белок в женском питании",
      description: "Сколько белка нужно женщине и какие источники выбрать",
      tags: ["белок", "мышцы", "питание"],
      author: "Др. Мария Сидорова",
      date: "20 янв 2024",
      readTime: "7 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    },
    {
      id: 4,
      title: "Питание при ПМС",
      description: "Какие продукты помогут справиться с симптомами ПМС",
      tags: ["ПМС", "гормоны", "цикл"],
      author: "Др. Елена Козлова",
      date: "22 янв 2024",
      readTime: "5 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    },
    {
      id: 5,
      title: "Витамин D для женского здоровья",
      description: "Роль витамина D в женском организме и способы его получения",
      tags: ["витамин D", "иммунитет", "кости"],
      author: "Др. Ирина Волкова",
      date: "25 янв 2024",
      readTime: "6 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    },
    {
      id: 6,
      title: "Антиоксиданты в питании",
      description: "Как антиоксиданты защищают женский организм от старения",
      tags: ["антиоксиданты", "старение", "красота"],
      author: "Др. Анна Петрова",
      date: "28 янв 2024",
      readTime: "4 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
    }
  ];

  const filteredArticles = nutritionArticles.filter(article =>
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
                className="text-medical-blue font-medium border-b-2 border-medical-blue pb-1"
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
                className="text-gray-700 hover:text-medical-blue transition-colors"
              >
                Советы врача
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-sans font-bold mb-6">
              Питание для женского здоровья
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
              Научно обоснованные рекомендации по питанию, которые помогут вам чувствовать себя энергично и здорово каждый день
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
                placeholder="Поиск статей о питании..."
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
                  <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
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

export default Nutrition;