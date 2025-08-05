import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug?: string;
}

interface ArticlesSectionProps {
  filteredArticles: Article[];
  articles: Article[];
}

const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  filteredArticles,
  articles
}) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="all" className="w-full">
          <div className="overflow-x-auto">
            <TabsList className="grid w-full grid-cols-5 min-w-max">
              <TabsTrigger value="all" className="text-xs sm:text-sm whitespace-nowrap">Все статьи</TabsTrigger>
              <TabsTrigger value="питание" className="text-xs sm:text-sm whitespace-nowrap">Питание</TabsTrigger>
              <TabsTrigger value="тренировки" className="text-xs sm:text-sm whitespace-nowrap">Тренировки</TabsTrigger>
              <TabsTrigger value="гормоны" className="text-xs sm:text-sm whitespace-nowrap">Гормоны</TabsTrigger>
              <TabsTrigger value="советы врача" className="text-xs sm:text-sm whitespace-nowrap">Советы врача</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={article.slug || "#"}
                  className="block"
                >
                  <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer h-full active:scale-[0.98] touch-manipulation">
                    <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-xs px-2 py-1">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {article.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-base sm:text-lg font-sans leading-tight line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-2 sm:line-clamp-3">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs px-2 py-1"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0">
                        <span className="font-medium">{article.author}</span>
                        <span>{article.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
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
                        <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
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
  );
};

export default ArticlesSection;