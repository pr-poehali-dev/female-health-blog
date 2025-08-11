import React, { useState } from "react";
import Header from "@/components/ui/Header";
import HeroSection from "@/components/home/HeroSection";
import SearchSection from "@/components/home/SearchSection";
import AboutSection from "@/components/home/AboutSection";
import ArticlesSection from "@/components/home/ArticlesSection";
import FAQSection from "@/components/home/FAQSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import Footer from "@/components/home/Footer";

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
      title: "Гормональный баланс женщин после 30 лет: как восстановить и поддержать",
      description:
        "Как нормализовать гормональный фон женщины после 30. Признаки дисбаланса, причины нарушений, эффективные способы восстановления",
      category: "гормоны",
      tags: ["30+", "гормоны", "здоровье", "баланс"],
      author: "Др. Мария Сидорова",
      date: "11 августа 2025",
      readTime: "13 мин",
      image: "/img/51d68b72-76a7-447d-981b-afd26e2d9bd4.jpg",
      slug: "/hormones/gormonalny-balans-zhenshchin-posle-30",
    },
    {
      id: 2,
      title: "Тренировки для женщин после 30: как не навредить гормональному фону",
      description:
        "Безопасные виды тренировок для женщин после 30 лет. Как спорт влияет на гормоны и что нужно избегать для сохранения здоровья",
      category: "тренировки",
      tags: ["30+", "гормоны", "здоровье", "фитнес"],
      author: "Др. Анна Петрова",
      date: "11 августа 2025",
      readTime: "15 мин",
      image: "https://cdn.poehali.dev/files/workout-30-women.png",
      slug: "/workouts/trenirovki-posle-30-let-dlya-zhenshchin",
    },
    {
      id: 3,
      title: "Правильное питание для женщин после 30 лет",
      description:
        "Что должно входить в рацион женщины после 30 лет: продукты, режим, рекомендации при гормональном сбое и усталости",
      category: "питание",
      tags: ["питание", "гормоны", "энергия", "30+"],
      author: "Др. Ольга Смирнова",
      date: "5 августа 2025",
      readTime: "12 мин",
      image: "/img/36dfbd3a-7d0f-4660-8f0d-f10af1d0f31b.jpg",
      slug: "/nutrition/pravilnoe-pitanie-dlya-zhenshchin-posle-30",
    },
    {
      id: 4,
      title: "Силовые тренировки для женщин",
      description:
        "Безопасные и эффективные упражнения для развития мышечной силы",
      category: "тренировки",
      tags: ["фитнес", "сила", "мышцы"],
      author: "Тренер Елена Козлова",
      date: "10 янв 2024",
      readTime: "6 мин",
      image: "https://cdn.poehali.dev/files/2e05c48e-851c-47ef-823c-0f1bfb0283f4.png",
    },
    {
      id: 5,
      title: "Борьба со стрессом: медицинские рекомендации",
      description:
        "Научно обоснованные методы управления стрессом и его влиянием на организм",
      category: "советы врача",
      tags: ["стресс", "психология", "здоровье"],
      author: "Др. Ирина Волкова",
      date: "8 янв 2024",
      readTime: "8 мин",
      image: "https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png",
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
      <Header />
      <HeroSection />
      <SearchSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedTags={selectedTags}
        toggleTag={toggleTag}
        symptoms={symptoms}
      />
      <AboutSection />
      <ArticlesSection 
        filteredArticles={filteredArticles}
        articles={articles}
      />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;