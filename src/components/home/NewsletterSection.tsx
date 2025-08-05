import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
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
  );
};

export default NewsletterSection;