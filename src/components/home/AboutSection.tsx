import React from "react";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-sans font-bold text-gray-900 mb-6">
            Добро пожаловать на блог о здоровье, питании и гормональном
            балансе
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Здесь вы найдёте проверенную и практичную информацию о том, как
            сохранить здоровье, энергию и гормональный баланс после 30 лет. Мы
            говорим просто и по делу — о том, что действительно работает в
            питании, тренировках и поддержке женского организма.
          </p>
        </div>

        <div className="space-y-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-sans font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Icon name="Apple" className="h-6 w-6 text-primary" />
                Питание
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Питание — это не просто калории. Это информация, которую
                получает ваше тело каждый день. На сайте вы найдёте материалы
                о правильном питании для женщин после 30, советы по рациону
                при гормональном сбое, подборки полезных продуктов и
                антипитание — чего стоит избегать, если вы часто чувствуете
                усталость, перепады настроения или проблемы со сном.
              </p>
            </div>
            <div className="hidden md:block">
              <img
                src="https://cdn.poehali.dev/files/0843b9b7-2fbb-4f32-92b0-cbfb46985715.png"
                alt="Здоровое питание"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <h2 className="text-2xl font-sans font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Icon name="Dumbbell" className="h-6 w-6 text-primary" />
                Тренировки
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Тренировки — это не про изнурение, а про восстановление. Мы
                делимся комплексами упражнений для женщин 30+, которые
                помогают снизить уровень стресса, поддержать метаболизм и не
                выгорать. Особое внимание уделено тренировкам при высоком
                кортизоле, физической активности в фазах цикла и
                восстановительным практикам, которые помогают телу
                адаптироваться к изменениям.
              </p>
            </div>
            <div className="md:order-1 hidden md:block">
              <img
                src="https://cdn.poehali.dev/files/2e05c48e-851c-47ef-823c-0f1bfb0283f4.png"
                alt="Женские тренировки"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-sans font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Icon name="Activity" className="h-6 w-6 text-primary" />
                Гормоны
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Гормоны — невидимые регуляторы всего: от настроения до веса. Мы
                рассказываем, как распознать симптомы гормонального дисбаланса,
                какие анализы сдавать, как питание и образ жизни влияют на
                уровень эстрогена, прогестерона, кортизола и щитовидных
                гормонов. Здесь нет паники и навязанных решений — только мягкие,
                разумные шаги к балансу.
              </p>
            </div>
            <div className="hidden md:block">
              <img
                src="https://cdn.poehali.dev/files/58678ca4-0807-4c2e-8d59-5c2fd84f84ee.png"
                alt="Гормональный баланс"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-sans font-bold text-gray-900 mb-4">
              Наш подход
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Каждая статья основана на актуальных исследованиях, экспертном
              мнении и реальных историях. Мы верим, что забота о себе
              начинается с понимания. Неважно, с чего вы начинаете — с поиска
              ответа на конкретный симптом или с желания навести порядок в
              питании — вы найдёте здесь поддержку и полезные рекомендации.
            </p>
            <p className="text-lg font-medium text-primary">
              Подписывайтесь на обновления, читайте блог и делайте здоровье
              своим союзником. Ведь после 30 жизнь только начинается — и ваше
              тело достойно того, чтобы быть услышанным.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;