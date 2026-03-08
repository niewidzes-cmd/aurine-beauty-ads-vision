import { Target, TrendingUp, Users, Sparkles, Instagram, Facebook } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  const services = [
    {
      icon: Target,
      title: "Precyzyjne targetowanie",
      description: "Reklamy kierujemy do kobiet z Twojego regionu, które mogą być zainteresowane usługami beauty.",
    },
    {
      icon: TrendingUp,
      title: "Optymalizacja kampanii",
      description: "Regularnie analizujemy wyniki i testujemy różne podejścia, żeby kampanie były coraz skuteczniejsze.",
    },
    {
      icon: Sparkles,
      title: "Profesjonalne kreacje",
      description: "Projektujemy grafiki i piszemy teksty reklamowe dopasowane do charakteru Twojego salonu.",
    },
    {
      icon: Users,
      title: "Przejrzyste raportowanie",
      description: "Regularnie otrzymujesz raport z najważniejszymi danymi – w przystępnej formie, bez komplikacji.",
    },
  ];

  return (
    <section ref={ref} id="services" className={`section-padding bg-black relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Subtle accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/[0.04] blur-[100px] rounded-full" />
      <div className="absolute bottom-[20%] left-[5%] opacity-[0.04]">
        <Facebook className="w-16 h-16 text-primary" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Co dla Ciebie <span className="text-gradient-pink">zrobimy</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/55 max-w-xl mx-auto">
            Kompleksowa obsługa kampanii – od strategii po optymalizację
          </p>
        </div>

        {/* Featured first item as card, rest as list */}
        <div className="mb-6 sm:mb-8">
          <div className="bg-gradient-to-br from-primary/[0.08] to-transparent border border-primary/15 rounded-2xl p-5 sm:p-7 group animate-fade-in-up">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/15 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  Precyzyjne targetowanie
                </h3>
                <p className="text-sm leading-relaxed text-white/55 max-w-lg">
                  Reklamy kierujemy do kobiet z Twojego regionu, które mogą być zainteresowane usługami beauty. Wykorzystujemy dane demograficzne, zainteresowania i lokalizację.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining items as open list */}
        <div className="space-y-0 divide-y divide-white/[0.06]">
          {services.slice(1).map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 sm:gap-5 py-5 sm:py-6 animate-fade-in-up group"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-white/[0.05] rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white/50 max-w-md">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
