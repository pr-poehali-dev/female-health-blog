import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Icon
              name="Stethoscope"
              className="h-6 w-6 sm:h-8 sm:w-8 text-medical-blue"
            />
            <h1 className="text-base sm:text-lg lg:text-xl font-sans font-bold text-gray-900">
              Женское Здоровье
            </h1>
          </Link>
          
          {/* Десктопное меню */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <Link
              to="/nutrition"
              className="text-gray-700 hover:text-medical-blue transition-colors text-sm lg:text-base font-medium"
            >
              Питание
            </Link>
            <Link
              to="/workouts"
              className="text-gray-700 hover:text-medical-blue transition-colors text-sm lg:text-base font-medium"
            >
              Тренировки
            </Link>
            <Link
              to="/hormones"
              className="text-gray-700 hover:text-medical-blue transition-colors text-sm lg:text-base font-medium"
            >
              Гормоны
            </Link>
            <Link
              to="/doctor-advice"
              className="text-gray-700 hover:text-medical-blue transition-colors text-sm lg:text-base font-medium"
            >
              Советы врача
            </Link>
          </nav>
          
          {/* Кнопка мобильного меню */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-medical-blue p-2 -mr-2 touch-manipulation"
              aria-label="Открыть меню"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Мобильное выпадающее меню */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="py-4 px-4 space-y-1">
              <Link
                to="/nutrition"
                onClick={closeMenu}
                className="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-medical-blue transition-colors rounded-lg font-medium"
              >
                🥗 Питание
              </Link>
              <Link
                to="/workouts"
                onClick={closeMenu}
                className="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-medical-blue transition-colors rounded-lg font-medium"
              >
                💪 Тренировки
              </Link>
              <Link
                to="/hormones"
                onClick={closeMenu}
                className="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-medical-blue transition-colors rounded-lg font-medium"
              >
                ⚖️ Гормоны
              </Link>
              <Link
                to="/doctor-advice"
                onClick={closeMenu}
                className="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-medical-blue transition-colors rounded-lg font-medium"
              >
                👩‍⚕️ Советы врача
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;