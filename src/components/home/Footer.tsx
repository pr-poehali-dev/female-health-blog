import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Stethoscope" className="h-6 w-6" />
              <span className="text-lg font-sans font-bold">
                Женское Здоровье
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Профессиональный медицинский блог для современных женщин
            </p>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Питание
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Тренировки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Гормоны
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Советы врача
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Конфиденциальность
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Условия использования
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-4">Следите за нами</h4>
            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
              />
              <Icon
                name="Facebook"
                className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
              />
              <Icon
                name="Twitter"
                className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Женское Здоровье. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;