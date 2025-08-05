import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold mb-4 sm:mb-6">
              Ваше здоровье — наш приоритет
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100">
              Профессиональные медицинские советы, научно обоснованные
              рекомендации и персональный подход к женскому здоровью
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
                <Icon name="Search" className="mr-2 h-4 w-4" />
                Поиск по симптомам
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
              >
                Консультация врача
              </Button>
            </div>
          </div>
          <div className="order-first md:order-last">
            <img
              src="/img/3d45bfbc-9eb6-47d9-a274-6519dd69fc1f.jpg"
              alt="Здоровая женщина"
              className="rounded-lg shadow-2xl w-full h-48 sm:h-64 md:h-auto object-cover md:object-contain"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;