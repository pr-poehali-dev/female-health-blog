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
      title: "Правильное питание для женщин после 30 лет",
      description: "Что должно входить в рацион женщины после 30 лет: продукты, режим, рекомендации при гормональном сбое и усталости",
      tags: ["питание", "гормоны", "энергия", "30+"],
      author: "Др. Ольга Смирнова",
      date: "5 августа 2025",
      readTime: "12 мин",
      image: "https://cdn.poehali.dev/files/5f14f906-dc89-4c72-aef7-c0b6c8d3f55f.png",
      slug: "/nutrition/pravilnoe-pitanie-dlya-zhenshchin-posle-30"
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
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
                <Icon
                  name="Heart"
                  className="h-6 w-6 sm:h-8 sm:w-8 text-medical-blue"
                />
                <h1 className="text-lg sm:text-xl lg:text-2xl font-sans font-bold text-gray-900">
                  Женское Здоровье
                </h1>
              </Link>
            </div>
            <nav className="hidden sm:flex space-x-4 lg:space-x-8">
              <Link
                to="/nutrition"
                className="text-medical-blue font-medium border-b-2 border-medical-blue pb-1 text-sm lg:text-base"
              >
                Питание
              </Link>
              <Link
                to="/workouts"
                className="text-gray-700 hover:text-medical-blue transition-colors text-sm lg:text-base"
              >
                Тренировки
              </Link>
              <Link
                to="/hormones"
                className="text-gray-700 hover:text-medical-blue transition-colors text-sm lg:text-base"
              >
                Гормоны
              </Link>
              <Link
                to="/doctor-advice"
                className="text-gray-700 hover:text-medical-blue transition-colors text-sm lg:text-base"
              >
                Советы врача
              </Link>
            </nav>
            {/* Мобильное меню */}
            <div className="sm:hidden">
              <button className="text-gray-700 hover:text-medical-blue">
                <Icon name="Menu" className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold mb-4 sm:mb-6">
              Питание для женского здоровья
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-green-100 max-w-3xl mx-auto px-4">
              Научно обоснованные рекомендации по питанию, которые помогут вам чувствовать себя энергично и здорово каждый день
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="relative">
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5"
              />
              <Input
                type="text"
                placeholder="Поиск статей о питании..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-2 sm:py-3 text-base sm:text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredArticles.map((article) => (
              <Link key={article.id} to={article.slug || "#"} className="block">
                <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer group h-full active:scale-[0.98] touch-manipulation">
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg lg:text-xl group-hover:text-green-600 transition-colors leading-tight line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm line-clamp-2 sm:line-clamp-3">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs px-2 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0">
                    <span className="font-medium">{article.author}</span>
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <Icon name="Search" className="h-8 w-8 sm:h-12 sm:w-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                Статьи не найдены
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
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