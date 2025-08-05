import React from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTags: string[];
  toggleTag: (tag: string) => void;
  symptoms: string[];
}

const SearchSection: React.FC<SearchSectionProps> = ({
  searchQuery,
  setSearchQuery,
  selectedTags,
  toggleTag,
  symptoms
}) => {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-sans font-bold text-gray-900 mb-3 sm:mb-4">
            Поиск по симптомам и темам
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Найдите статьи по интересующим вас симптомам или темам здоровья
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="relative">
            <Icon
              name="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5"
            />
            <Input
              type="text"
              placeholder="Введите симптом или тему..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-2 sm:py-3 text-base sm:text-lg"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-6 sm:mb-8">
          {symptoms.map((symptom) => (
            <Badge
              key={symptom}
              variant={selectedTags.includes(symptom) ? "default" : "outline"}
              className={`cursor-pointer transition-colors text-xs sm:text-sm px-2 py-1 touch-manipulation ${
                selectedTags.includes(symptom)
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100 active:bg-gray-200"
              }`}
              onClick={() => toggleTag(symptom)}
            >
              {symptom}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;