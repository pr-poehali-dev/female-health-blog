import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <Icon
                name="Stethoscope"
                className="h-6 w-6 sm:h-8 sm:w-8 text-medical-blue"
              />
              <h1 className="text-lg sm:text-xl lg:text-2xl font-sans font-bold text-gray-900">
                Женское Здоровье
              </h1>
            </div>
          </div>
          <nav className="hidden sm:flex space-x-4 lg:space-x-8">
            <Link
              to="/nutrition"
              className="text-gray-700 hover:text-medical-blue transition-colors text-sm lg:text-base"
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
  );
};

export default Header;