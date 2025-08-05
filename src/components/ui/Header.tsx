import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const navLinks = [
    { path: "/nutrition", label: "Питание", icon: "🥗" },
    { path: "/workouts", label: "Тренировки", icon: "💪" },
    { path: "/hormones", label: "Гормоны", icon: "⚖️" },
    { path: "/doctor-advice", label: "Советы врача", icon: "👩‍⚕️" }
  ];

  return (
    <header className="bg-white shadow-sm border-b relative sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
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
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`transition-colors text-sm lg:text-base font-medium pb-1 ${
                  isActive(path)
                    ? 'text-medical-blue border-b-2 border-medical-blue'
                    : 'text-gray-700 hover:text-medical-blue'
                }`}
              >
                {label}
              </Link>
            ))}
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
              {navLinks.map(({ path, label, icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={closeMenu}
                  className={`block py-3 px-4 transition-colors rounded-lg font-medium ${
                    isActive(path)
                      ? 'bg-medical-blue/10 text-medical-blue'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-medical-blue'
                  }`}
                >
                  {icon} {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;