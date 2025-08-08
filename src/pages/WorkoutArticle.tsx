import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/ui/Header";

const WorkoutArticle = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Cover Image */}
      <section className="relative">
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
          <img
            src="https://cdn.poehali.dev/files/e2910982-f913-4fb4-a6f4-a6a768b1efb3.png"
            alt="Женщина выполняет тренировку с гантелями"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop&crop=center";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
            <div className="max-w-4xl">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Тренировки для женщин после 30: как не навредить гормональному фону
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-3xl">
                Выбирайте тренировки, которые не мешают гормональному балансу. Что подходит женщинам 30+, как снизить кортизол и не выгорать от спорта.
              </p>
              <div className="flex items-center space-x-4 text-gray-300">
                <span className="flex items-center">
                  <Icon name="Clock" className="w-4 h-4 mr-2" />
                  8 мин чтения
                </span>
                <span className="flex items-center">
                  <Icon name="Calendar" className="w-4 h-4 mr-2" />
                  Август 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation breadcrumbs */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-medical-blue">Главная</Link>
            <Icon name="ChevronRight" className="w-4 h-4" />
            <Link to="/workouts" className="hover:text-medical-blue">Тренировки</Link>
            <Icon name="ChevronRight" className="w-4 h-4" />
            <span className="text-gray-900">Тренировки после 30 лет</span>
          </div>
        </nav>

        {/* Article body */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            После 30 лет женское тело начинает реагировать на физические нагрузки иначе. Метаболизм замедляется, уровень гормонов постепенно меняется, а стресс, бессонница и выгорание становятся фоном для многих. Именно поэтому важно адаптировать тренировки под особенности этого периода, чтобы не навредить, а поддержать здоровье.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Зачем менять подход к тренировкам после 30
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Многие женщины продолжают заниматься по схемам из юности: много кардио, минимум восстановления, спорт на износ. Но после 30 лет такой подход может вызвать обратный эффект: гормональные сбои, хроническую усталость, задержку веса и усиление ПМС. В этом возрасте важно тренироваться не «жёстко», а <strong>умно</strong> — в поддержку тела и психики.
          </p>

          <Card className="my-8 border-l-4 border-l-medical-blue">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <Icon name="Lightbulb" className="w-6 h-6 text-medical-blue mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Важно понимать</h4>
                  <p className="text-gray-700">
                    После 30 лет организм женщины становится более чувствительным к стрессу, включая физический стресс от тренировок. Правильно подобранные нагрузки могут стать мощным инструментом поддержки здоровья.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Как физическая нагрузка влияет на гормоны
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Кортизол: когда спорт работает против вас
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Интенсивные тренировки увеличивают выработку кортизола — гормона стресса. В умеренном количестве он полезен, но при хронической нагрузке без отдыха он начинает вредить: нарушается сон, усиливается тревожность, вес «зависает» даже при диете.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Эстроген и прогестерон: связь с циклом
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            В течение цикла уровень этих гормонов сильно колеблется. Например, в лютеиновой фазе (вторая половина цикла) телу сложнее переносить высокоинтенсивную нагрузку. Игнорируя это, можно получить раздражительность, спазмы и упадок сил.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Щитовидка и силовые тренировки
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Щитовидная железа чувствительна к перегрузкам. Если заниматься слишком интенсивно, можно спровоцировать сбой — особенно у женщин с предрасположенностью к гипотиреозу. Поэтому силовые тренировки важны, но дозированно.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Какие тренировки поддерживают гормональный баланс
          </h2>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Heart" className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Лёгкие кардионагрузки</h4>
                <p className="text-gray-700 text-sm">
                  Ходьба, танцы, велопрогулки — отличные способы разогнать лимфу, улучшить настроение и не повысить кортизол.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Dumbbell" className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Умеренные силовые упражнения</h4>
                <p className="text-gray-700 text-sm">
                  Тренировки с собственным весом или гантелями 2–3 раза в неделю улучшают чувствительность к инсулину и укрепляют мышцы без вреда для гормонов.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Flower2" className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Йога, пилатес, растяжка</h4>
                <p className="text-gray-700 text-sm">
                  Эти практики работают мягко: снижают уровень стресса, расслабляют мышцы и поддерживают гибкость. Особенно полезны при выгорании и нарушениях сна.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Какие тренировки могут навредить
          </h2>

          <Card className="my-8 bg-red-50 border-red-200">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <Icon name="AlertTriangle" className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-900 mb-4">Осторожно с этими видами нагрузок:</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-red-900">Чрезмерный кардио-фитнес</h5>
                      <p className="text-red-800 text-sm">Бег по 10 км в день, интенсивные танцы и марафоны — не лучший выбор, если уровень стресса и так зашкаливает.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-red-900">Тяжёлые силовые без восстановления</h5>
                      <p className="text-red-800 text-sm">Если мышцы не успевают восстанавливаться, а режим сна сбит — это прямой путь к гормональным нарушениям.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-red-900">HIIT при хроническом стрессе</h5>
                      <p className="text-red-800 text-sm">Интервальные тренировки дают результат, но только если вы не на пределе. Иначе кортизол будет только расти.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Как понять, что тренировки вам не подходят
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Сигналы тела, которые нельзя игнорировать:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <Icon name="Minus" className="w-5 h-5 text-medical-blue mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Повышенная утомляемость</span>
            </li>
            <li className="flex items-start">
              <Icon name="Minus" className="w-5 h-5 text-medical-blue mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Бессонница или поверхностный сон</span>
            </li>
            <li className="flex items-start">
              <Icon name="Minus" className="w-5 h-5 text-medical-blue mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Раздражительность и тревожность</span>
            </li>
            <li className="flex items-start">
              <Icon name="Minus" className="w-5 h-5 text-medical-blue mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Обострённый ПМС</span>
            </li>
            <li className="flex items-start">
              <Icon name="Minus" className="w-5 h-5 text-medical-blue mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Боль в суставах и мышцах, которая не проходит</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Как выбрать тренировку: пошаговый подход
          </h2>
          <div className="space-y-4 mb-8">
            {[
              "Оцените своё состояние (стресс, сон, энергия)",
              "Согласуйте нагрузку с фазой цикла",
              "Начинайте с 2–3 раз в неделю",
              "Выбирайте несложные, но регулярные форматы",
              "Следите за восстановлением — это часть тренировки"
            ].map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="w-8 h-8 bg-medical-blue text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-700 pt-1">{step}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Заключение: спорт — это поддержка, а не стресс
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Женщины после 30 должны тренироваться не «вопреки» телу, а в согласии с ним. Спорт может стать мощным ресурсом восстановления, если выбрать подходящие форматы и слушать сигналы организма. Умные тренировки = стабильный гормональный фон, хорошее настроение и крепкое здоровье на долгие годы.
          </p>
        </div>

        {/* CTA Section */}
        <Card className="mt-16 bg-gradient-to-r from-medical-blue/5 to-purple-100/30 border-medical-blue/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Готовы начать правильные тренировки?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Изучите другие материалы о женском здоровье и найдите подход, который подходит именно вам.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-medical-blue hover:bg-medical-blue/90">
                <Link to="/workouts">
                  <Icon name="Dumbbell" className="w-4 h-4 mr-2" />
                  Все о тренировках
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/hormones">
                  <Icon name="Activity" className="w-4 h-4 mr-2" />
                  Изучить гормоны
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to workouts */}
        <div className="mt-12 pt-8 border-t">
          <Button variant="outline" asChild>
            <Link to="/workouts">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад к тренировкам
            </Link>
          </Button>
        </div>
      </article>
    </div>
  );
};

export default WorkoutArticle;