import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
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
  );
};

export default FAQSection;