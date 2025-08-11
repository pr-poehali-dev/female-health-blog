import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { updateSEO } from "@/lib/seo";
import Header from "@/components/ui/Header";

const HormoneBalanceArticle = () => {
  const articleId = "hormone-balance-article"; 

  const [viewCount, setViewCount] = useState(() => {
    const saved = localStorage.getItem(`${articleId}-views`);
    return saved ? parseInt(saved) : 89; 
  });

  const [isLiked, setIsLiked] = useState(() => {
    const saved = localStorage.getItem(`${articleId}-liked`);
    return saved ? JSON.parse(saved) : false;
  });
  
  const [likeCount, setLikeCount] = useState(() => {
    const saved = localStorage.getItem(`${articleId}-likeCount`);
    return saved ? parseInt(saved) : 31;
  });

  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem(`${articleId}-comments`);
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        name: "Елена М.",
        date: "3 дня назад",
        text: "Наконец-то нашла полезную информацию о том, как привести гормоны в порядок! Уже заметила улучшения после изменения режима сна."
      },
      {
        id: 2,
        name: "Ирина П.",
        date: "1 неделю назад", 
        text: "Спасибо за подробные рекомендации по питанию. Теперь понимаю, почему у меня были такие скачки настроения."
      }
    ];
  });

  const [newComment, setNewComment] = useState({ name: "", text: "" });

  const handleLike = () => {
    const newIsLiked = !isLiked;
    const newLikeCount = isLiked ? likeCount - 1 : likeCount + 1;
    
    setIsLiked(newIsLiked);
    setLikeCount(newLikeCount);
    localStorage.setItem(`${articleId}-liked`, JSON.stringify(newIsLiked));
    localStorage.setItem(`${articleId}-likeCount`, newLikeCount.toString());
  };

  const handleAddComment = () => {
    if (newComment.name.trim() && newComment.text.trim()) {
      const comment = {
        id: Date.now(),
        name: newComment.name,
        date: "только что",
        text: newComment.text
      };
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      localStorage.setItem(`${articleId}-comments`, JSON.stringify(updatedComments));
      setNewComment({ name: "", text: "" });
    }
  };

  useEffect(() => {
    const currentTime = Date.now();
    const lastViewTime = localStorage.getItem(`${articleId}-lastView`);
    const timeDiff = lastViewTime ? currentTime - parseInt(lastViewTime) : Infinity;
    
    if (timeDiff > 15 * 60 * 1000) { 
      const newViewCount = viewCount + 1;
      setViewCount(newViewCount);
      localStorage.setItem(`${articleId}-views`, newViewCount.toString());
      localStorage.setItem(`${articleId}-lastView`, currentTime.toString());
    }
  }, [viewCount]);

  useEffect(() => {
    updateSEO(
      "Гормональный баланс женщин после 30 лет: как восстановить и поддержать",
      "Как нормализовать гормональный фон женщины после 30. Признаки дисбаланса, причины нарушений, эффективные способы восстановления и профилактика."
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 sm:mb-6">
            <Link to="/hormones" className="inline-flex items-center text-pink-100 hover:text-white transition-colors text-sm sm:text-base">
              <Icon name="ArrowLeft" className="h-4 w-4 mr-2" />
              Вернуться к статьям о гормонах
            </Link>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 justify-center sm:justify-start">
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/20 text-xs sm:text-sm px-2 py-1">
              Гормоны
            </Badge>
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/20 text-xs sm:text-sm px-2 py-1">
              30+
            </Badge>
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/20 text-xs sm:text-sm px-2 py-1">
              Здоровье
            </Badge>
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/20 text-xs sm:text-sm px-2 py-1">
              Баланс
            </Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold mb-4 sm:mb-6 leading-tight text-center sm:text-left">
            Гормональный баланс женщин после 30 лет: как восстановить и поддержать
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-6 text-pink-100 text-sm sm:text-base text-center sm:text-left">
            <span className="font-medium">Др. Мария Сидорова</span>
            <span className="hidden sm:block">•</span>
            <span>11 августа 2025</span>
            <span className="hidden sm:block">•</span>
            <span>13 мин чтения</span>
            <div className="flex items-center space-x-1">
              <Icon name="Eye" className="h-4 w-4" />
              <span>{viewCount} просмотров</span>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 prose prose-sm sm:prose-base lg:prose-lg max-w-none">
          
          {/* Hero Cover Image */}
          <div className="mb-6 sm:mb-8">
            <img
              src="/img/51d68b72-76a7-447d-981b-afd26e2d9bd4.jpg"
              alt="Консультация врача о гормональном балансе женщины после 30 лет"
              className="w-full max-w-2xl mx-auto block rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          
          <div className="text-gray-700 leading-relaxed space-y-6">
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              После 30 лет женский организм начинает постепенные изменения в выработке ключевых гормонов. 
              Понимание этих процессов и правильный подход к поддержанию баланса помогут сохранить здоровье 
              и хорошее самочувствие на долгие годы.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Основные гормональные изменения после 30</h2>
            
            <p>
              Гормональная система женщины после тридцати претерпевает естественные трансформации. 
              Эстроген и прогестерон начинают постепенно снижаться, что влияет на множество процессов в организме.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Ключевые гормоны и их функции</h3>
              <ul className="list-disc list-inside text-blue-800 space-y-2">
                <li><strong>Эстроген</strong> — регулирует менструальный цикл, влияет на настроение и плотность костей</li>
                <li><strong>Прогестерон</strong> — подготавливает организм к беременности, успокаивает нервную систему</li>
                <li><strong>Тестостерон</strong> — поддерживает мышечную массу, либидо и энергию</li>
                <li><strong>Инсулин</strong> — контролирует уровень сахара в крови</li>
                <li><strong>Кортизол</strong> — гормон стресса, влияет на иммунитет</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Признаки гормонального дисбаланса</h2>
            
            <p>
              Нарушение гормонального равновесия может проявляться различными симптомами, 
              которые часто списывают на усталость или стресс.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Физические симптомы</h3>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Внешние проявления</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Увеличение веса в области живота</li>
                    <li>• Ухудшение состояния кожи</li>
                    <li>• Выпадение или истончение волос</li>
                    <li>• Отечность</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Внутренние ощущения</h4>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Хроническая усталость</li>
                    <li>• Нарушения сна</li>
                    <li>• Приливы жара</li>
                    <li>• Болезненность груди</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Эмоциональные проявления</h3>
            
            <p>
              Гормональные колебания значительно влияют на психоэмоциональное состояние. 
              Женщины могут испытывать резкие перепады настроения, повышенную раздражительность, 
              тревожность или депрессивные состояния.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Причины гормональных нарушений</h2>
            
            <p>
              Дисбаланс может быть вызван как естественными возрастными изменениями, 
              так и внешними факторами, на которые можно влиять.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Контролируемые факторы</h3>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Хронический стресс и недостаток сна</li>
              <li>Неправильное питание с избытком сахара и обработанных продуктов</li>
              <li>Малоподвижный образ жизни</li>
              <li>Воздействие токсинов из окружающей среды</li>
              <li>Некоторые лекарственные препараты</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Неконтролируемые факторы</h3>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Естественное старение и снижение функции яичников</li>
              <li>Генетическая предрасположенность</li>
              <li>Аутоиммунные заболевания</li>
              <li>Заболевания щитовидной железы</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Способы восстановления гормонального баланса</h2>
            
            <p>
              Комплексный подход к нормализации гормонального фона включает изменения образа жизни, 
              питания и при необходимости — медицинскую поддержку.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Питание для гормонального здоровья</h3>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-6 my-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">Рекомендуемые продукты</h4>
              <div className="grid md:grid-cols-2 gap-4 text-green-800">
                <div>
                  <p className="font-medium mb-2">Источники здоровых жиров:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Авокадо, орехи, семена</li>
                    <li>• Жирная рыба (лосось, скумбрия)</li>
                    <li>• Оливковое масло</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Фитоэстрогены:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Соя и соевые продукты</li>
                    <li>• Льняные семена</li>
                    <li>• Красный клевер</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Физическая активность</h3>
            
            <p>
              Регулярные упражнения помогают стабилизировать уровень инсулина, 
              снизить кортизол и поддержать выработку эндорфинов.
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Кардио</h4>
                  <p className="text-purple-700 text-sm">
                    30-45 минут умеренной интенсивности 3-4 раза в неделю
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Силовые</h4>
                  <p className="text-blue-700 text-sm">
                    2-3 раза в неделю для поддержания мышечной массы
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Йога</h4>
                  <p className="text-green-700 text-sm">
                    Помогает снизить стресс и улучшить гибкость
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Управление стрессом</h3>
            
            <p>
              Хронический стресс — главный враг гормонального баланса. 
              Освоение техник релаксации критически важно для здоровья.
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Медитация и дыхательные упражнения</li>
              <li>Качественный сон 7-9 часов в сутки</li>
              <li>Регулярные прогулки на природе</li>
              <li>Хобби и творческая деятельность</li>
              <li>Социальная поддержка и общение</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Когда обратиться к врачу</h2>
            
            <p>
              Если симптомы значительно влияют на качество жизни или сохраняются длительное время, 
              необходима консультация эндокринолога или гинеколога.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 my-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Тревожные симптомы</h3>
              <ul className="list-disc list-inside text-red-800 space-y-2">
                <li>Резкие изменения менструального цикла</li>
                <li>Сильные перепады настроения или депрессия</li>
                <li>Значительное увеличение веса за короткий период</li>
                <li>Постоянная усталость, несмотря на достаточный отдых</li>
                <li>Проблемы с зачатием</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Профилактика гормональных нарушений</h2>
            
            <p>
              Лучшая стратегия — предупреждение проблем через здоровый образ жизни с молодого возраста.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ежедневные привычки</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Сбалансированное питание</li>
                  <li>Регулярная физическая активность</li>
                  <li>Достаточный сон</li>
                  <li>Управление стрессом</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Регулярные проверки</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Анализы гормонов 1-2 раза в год</li>
                  <li>Консультация гинеколога</li>
                  <li>Контроль веса и давления</li>
                  <li>УЗИ органов малого таза</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Заключение</h3>
              <p className="text-gray-700 leading-relaxed">
                Гормональный баланс после 30 лет требует особого внимания, но это не приговор. 
                При правильном подходе можно не только предотвратить серьезные нарушения, 
                но и улучшить качество жизни. Помните: каждая женщина уникальна, 
                и то, что работает для одной, может не подойти другой. 
                Слушайте свой организм и не стесняйтесь обращаться за профессиональной помощью.
              </p>
            </div>

          </div>
        </div>

        {/* Interaction Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Была ли статья полезной?</h3>
            <div className="flex items-center space-x-4">
              <Button
                onClick={handleLike}
                variant={isLiked ? "default" : "outline"}
                className={`flex items-center space-x-2 ${
                  isLiked 
                    ? "bg-pink-500 hover:bg-pink-600 text-white" 
                    : "hover:bg-pink-50 hover:text-pink-600 hover:border-pink-300"
                }`}
              >
                <Icon name="Heart" className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                <span>{likeCount}</span>
              </Button>
              <div className="flex items-center space-x-2 text-gray-500">
                <Icon name="MessageCircle" className="h-4 w-4" />
                <span>{comments.length}</span>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Комментарии</h4>
            
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{comment.name}</span>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-700">{comment.text}</p>
              </div>
            ))}

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h5 className="font-medium mb-3">Добавить комментарий</h5>
              <div className="space-y-3">
                <Input
                  placeholder="Ваше имя"
                  value={newComment.name}
                  onChange={(e) => setNewComment(prev => ({ ...prev, name: e.target.value }))}
                />
                <Textarea
                  placeholder="Ваш комментарий"
                  value={newComment.text}
                  onChange={(e) => setNewComment(prev => ({ ...prev, text: e.target.value }))}
                  className="min-h-[100px]"
                />
                <Button onClick={handleAddComment} className="w-full">
                  Отправить комментарий
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
          <h3 className="text-xl font-semibold mb-4">Читайте также</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/nutrition/pravilnoe-pitanie-dlya-zhenshchin-posle-30" className="group">
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-16 h-12 bg-green-100 rounded-md flex-shrink-0 flex items-center justify-center">
                  <Icon name="Utensils" className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-medium group-hover:text-green-600 transition-colors line-clamp-2">
                    Правильное питание для женщин после 30
                  </p>
                  <p className="text-sm text-gray-500">12 мин чтения</p>
                </div>
              </div>
            </Link>
            
            <Link to="/workouts/trenirovki-posle-30-let-dlya-zhenshchin" className="group">
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-16 h-12 bg-purple-100 rounded-md flex-shrink-0 flex items-center justify-center">
                  <Icon name="Dumbbell" className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium group-hover:text-purple-600 transition-colors line-clamp-2">
                    Тренировки после 30: как не навредить гормонам
                  </p>
                  <p className="text-sm text-gray-500">15 мин чтения</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

      </article>
    </div>
  );
};

export default HormoneBalanceArticle;