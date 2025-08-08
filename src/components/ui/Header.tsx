import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Закрытие меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Закрытие меню при изменении маршрута
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
    <header 
      ref={headerRef}
      className="bg-white shadow-sm border-b relative sticky top-0 z-50">
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
              className="text-gray-700 hover:text-medical-blue p-3 -mr-3 touch-manipulation active:bg-gray-100 rounded-lg transition-colors"
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
              type="button"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Мобильное выпадающее меню */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t transition-all duration-300 ease-in-out z-[9999] ${
          isMenuOpen 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform -translate-y-2 pointer-events-none'
        }`}>
          <nav className="py-4 px-4 space-y-1">
            {navLinks.map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                onClick={closeMenu}
                className={`block py-3 px-4 transition-colors rounded-lg font-medium touch-manipulation ${
                  isActive(path)
                    ? 'bg-medical-blue/10 text-medical-blue'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-medical-blue active:bg-gray-100'
                }`}
              >
                <span className="inline-block w-6 text-center mr-2">{icon}</span>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;