import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { updateSEO } from "@/lib/seo";

const NutritionArticle = () => {
  const articleId = "nutrition-article-1"; // Уникальный ID статьи

  // Initialize state from localStorage
  const [isLiked, setIsLiked] = useState(() => {
    const saved = localStorage.getItem(`${articleId}-liked`);
    return saved ? JSON.parse(saved) : false;
  });
  
  const [likeCount, setLikeCount] = useState(() => {
    const saved = localStorage.getItem(`${articleId}-likeCount`);
    return saved ? parseInt(saved) : 24;
  });

  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem(`${articleId}-comments`);
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        name: "Мария К.",
        date: "2 дня назад",
        text: "Отличная статья! Особенно полезны рекомендации по белкам. Уже начала включать больше рыбы в рацион."
      },
      {
        id: 2,
        name: "Анна С.",
        date: "1 неделю назад", 
        text: "Спасибо за такую подробную информацию. Теперь понимаю, почему после 30 стало сложнее поддерживать энергию."
      }
    ];
  });

  const [newComment, setNewComment] = useState({ name: "", text: "" });

  const handleLike = () => {
    const newLikedState = !isLiked;
    const newLikeCount = newLikedState ? likeCount + 1 : likeCount - 1;
    
    setIsLiked(newLikedState);
    setLikeCount(newLikeCount);
    
    // Save to localStorage
    localStorage.setItem(`${articleId}-liked`, JSON.stringify(newLikedState));
    localStorage.setItem(`${articleId}-likeCount`, newLikeCount.toString());
  };

  const handleAddComment = () => {
    if (newComment.name.trim() && newComment.text.trim()) {
      const comment = {
        id: Date.now(), // Используем timestamp для уникального ID
        name: newComment.name,
        date: new Date().toLocaleDateString('ru-RU', { 
          day: 'numeric', 
          month: 'long',
          hour: '2-digit',
          minute: '2-digit'
        }),
        text: newComment.text
      };
      
      const updatedComments = [comment, ...comments];
      setComments(updatedComments);
      setNewComment({ name: "", text: "" });
      
      // Save to localStorage
      localStorage.setItem(`${articleId}-comments`, JSON.stringify(updatedComments));
    }
  };

  useEffect(() => {
    updateSEO(
      "Правильное питание для женщин после 30 лет — что есть для энергии, гормонов и баланса",
      "Что должно входить в рацион женщины после 30 лет: продукты, режим, рекомендации при гормональном сбое и усталости. Пошаговое руководство."
    );
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <Icon
                  name="Heart"
                  className="h-8 w-8 text-medical-blue"
                />
                <h1 className="text-2xl font-sans font-bold text-gray-900">
                  Женское Здоровье
                </h1>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/nutrition"
                className="text-medical-blue font-medium border-b-2 border-medical-blue pb-1"
              >
                Питание
              </Link>
              <Link
                to="/workouts"
                className="text-gray-700 hover:text-medical-blue transition-colors"
              >
                Тренировки
              </Link>
              <Link
                to="/hormones"
                className="text-gray-700 hover:text-medical-blue transition-colors"
              >
                Гормоны
              </Link>
              <Link
                to="/doctor-advice"
                className="text-gray-700 hover:text-medical-blue transition-colors"
              >
                Советы врача
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Article Header */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/nutrition" className="inline-flex items-center text-green-100 hover:text-white transition-colors">
              <Icon name="ArrowLeft" className="h-4 w-4 mr-2" />
              Вернуться к статьям о питании
            </Link>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/20">
              Питание
            </Badge>
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/20">
              Гормоны
            </Badge>
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/20">
              Энергия
            </Badge>
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/20">
              30+
            </Badge>
          </div>
          <h1 className="text-4xl font-sans font-bold mb-4">
            Правильное питание для женщин после 30 лет: что есть и зачем
          </h1>
          <div className="flex items-center space-x-6 text-green-100">
            <span>Др. Анна Петрова</span>
            <span>15 янв 2024</span>
            <span>8 мин чтения</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
          {/* Hero Cover Image */}
          <div className="mb-8">
            <img
              src="https://cdn.poehali.dev/files/5f14f906-dc89-4c72-aef7-c0b6c8d3f55f.png"
              alt="Сбалансированное здоровое питание - тарелка с лососем, киноа, брокколи и шпинатом"
              className="w-full max-w-2xl mx-auto block rounded-lg shadow-lg"
            />
          </div>

          <div className="text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl text-gray-600 mb-8">
              Женское здоровье во многом зависит от питания — особенно после 30 лет, когда снижается уровень некоторых гормонов, появляются колебания энергии и изменяется обмен веществ. Именно в этот период важно обратить внимание на рацион и привычки, чтобы сохранить баланс и предотвратить накопление проблем.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Почему после 30 питание должно меняться
            </h2>
            
            <div className="mb-6">
              <img
                src="https://cdn.poehali.dev/files/69812513-7b8a-4c74-993c-898ca801fded.jpg"
                alt="Здоровый завтрак с лососем, яйцом и овощами"
                className="w-full max-w-md mx-auto block rounded-lg shadow-md"
              />
            </div>
            
            <p>
              В этом возрасте женский организм постепенно вступает в фазу гормональных перестроек. Уровень эстрогена и прогестерона может снижаться, повышается чувствительность к стрессу, а метаболизм становится медленнее.
            </p>
            <p>
              Добавьте сюда недосып, нерегулярное питание, перекусы на бегу — и вот уже усталость, раздражительность и проблемы с кожей становятся «нормой».
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Что должно быть в рационе женщины после 30
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              1. Белки — основа гормонального баланса
            </h3>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-medium text-green-800 mb-2">Продукты:</p>
              <p className="text-green-700 mb-3">Курица, рыба, яйца, чечевица, нут, творог</p>
              <ul className="text-green-700 space-y-1">
                <li>• Белки необходимы для выработки гормонов и поддержания мышечной массы</li>
                <li>• Помогают стабилизировать уровень сахара в крови и контролировать аппетит</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              2. Здоровые жиры
            </h3>
            
            <div className="mb-4">
              <img
                src="https://cdn.poehali.dev/files/9fa2e523-bf07-4751-991d-a066048c2ca6.png"
                alt="Лосось с киноа и шпинатом - источник здоровых жиров"
                className="w-full max-w-lg mx-auto block rounded-lg shadow-md"
              />
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-2">Продукты:</p>
              <p className="text-blue-700 mb-3">Авокадо, оливковое масло, льняное масло, жирная рыба</p>
              <ul className="text-blue-700 space-y-1">
                <li>• Жиры участвуют в синтезе половых гормонов</li>
                <li>• Омега-3 снижает воспаление и поддерживает мозг</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              3. Клетчатка и зелень
            </h3>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="font-medium text-emerald-800 mb-2">Продукты:</p>
              <p className="text-emerald-700 mb-3">Брокколи, шпинат, семена чиа, яблоки</p>
              <ul className="text-emerald-700 space-y-1">
                <li>• Улучшают пищеварение, помогают печени выводить «лишние» гормоны</li>
                <li>• Поддерживают стабильный вес</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              4. Продукты для печени и надпочечников
            </h3>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-medium text-purple-800 mb-2">Продукты:</p>
              <p className="text-purple-700 mb-3">Свекла, куркума, зелёные овощи</p>
              <ul className="text-purple-700 space-y-1">
                <li>• Снижают влияние кортизола (гормона стресса)</li>
                <li>• Поддерживают детокс и гормональную переработку</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Чего стоит избегать
            </h2>
            <div className="bg-red-50 p-4 rounded-lg">
              <ul className="text-red-700 space-y-2">
                <li><strong>Сахар и сладости</strong> → вызывают скачки инсулина и усталость</li>
                <li><strong>Кофе в избытке</strong> → усиливает тревожность и стресс</li>
                <li><strong>Молочные продукты</strong> → индивидуально, но могут вызывать воспаление</li>
                <li><strong>Обработанная пища</strong> → полуфабрикаты, фастфуд, промышленные соусы</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Пример меню на день
            </h2>
            
            <div className="mb-6">
              <img
                src="https://cdn.poehali.dev/files/79966255-508c-4b76-a67d-b73bf6ba49ff.jpg"
                alt="Пример здорового питания на день - четыре тарелки с разными блюдами"
                className="w-full max-w-2xl mx-auto block rounded-lg shadow-md"
              />
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong className="text-yellow-800">Завтрак:</strong> омлет с брокколи, тост из цельнозернового хлеба, зелёный чай</p>
                  <p><strong className="text-yellow-800">Перекус:</strong> яблоко + орехи</p>
                </div>
                <div>
                  <p><strong className="text-yellow-800">Обед:</strong> киноа, лосось, шпинат, оливковое масло</p>
                  <p><strong className="text-yellow-800">Ужин:</strong> запечённая курица, тыква, салат из зелени</p>
                </div>
              </div>
              <p className="mt-4"><strong className="text-yellow-800">Вода:</strong> не менее 1,5–2 л в день</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Итоги: питание как инструмент баланса
            </h2>
            <p className="text-lg">
              Питание после 30 лет — не про диеты и жёсткие запреты. Это про поддержку: своей энергии, гормонов, иммунитета и настроения. Выстраивая здоровый рацион, женщина делает вклад не только в свой внешний вид, но и в качество жизни в целом.
            </p>
          </div>
        </div>

        {/* Like and Comments Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
          {/* Like Button */}
          <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
            <Button
              variant={isLiked ? "default" : "outline"}
              onClick={handleLike}
              className={`flex items-center gap-2 ${isLiked ? 'bg-red-500 hover:bg-red-600 text-white' : 'hover:bg-red-50 hover:text-red-600 hover:border-red-200'}`}
            >
              <Icon name={isLiked ? "Heart" : "Heart"} className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
              {isLiked ? 'Нравится' : 'Нравится'}
            </Button>
            <span className="text-gray-600">{likeCount} человек оценили эту статью</span>
          </div>

          {/* Comments Section */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Комментарии ({comments.length})
            </h3>
            
            {/* Add Comment Form */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-medium text-gray-900 mb-4">Оставить комментарий</h4>
              <div className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={newComment.name}
                  onChange={(e) => setNewComment({...newComment, name: e.target.value})}
                  className="bg-white"
                />
                <Textarea
                  placeholder="Поделитесь своим мнением о статье..."
                  value={newComment.text}
                  onChange={(e) => setNewComment({...newComment, text: e.target.value})}
                  className="bg-white min-h-[100px]"
                />
                <Button 
                  onClick={handleAddComment}
                  disabled={!newComment.name.trim() || !newComment.text.trim()}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Icon name="Send" className="h-4 w-4 mr-2" />
                  Отправить комментарий
                </Button>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-gray-900">{comment.name}</h5>
                    <span className="text-sm text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-gray-700">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Похожие статьи
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/nutrition" className="group">
              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <Icon name="Apple" className="h-8 w-8 text-green-600" />
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-green-600">
                    Железо в рационе женщины
                  </h4>
                  <p className="text-sm text-gray-600">
                    Почему женщинам важно следить за уровнем железа
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/hormones" className="group">
              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <Icon name="Activity" className="h-8 w-8 text-indigo-600" />
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">
                    Гормональный баланс после 30
                  </h4>
                  <p className="text-sm text-gray-600">
                    Основные изменения в гормональной системе
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NutritionArticle;