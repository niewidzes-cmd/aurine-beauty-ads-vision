import { Target, TrendingUp, Users, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  const services = [
    {
      icon: Target,
      title: "Precyzyjne targetowanie",
      description:
        "Reklamy kierujemy do kobiet z Twojego regionu, które mogą być zainteresowane usługami beauty.",
    },
    {
      icon: TrendingUp,
      title: "Optymalizacja kampanii",
      description:
        "Regularnie analizujemy wyniki i testujemy różne podejścia, żeby kampanie były coraz skuteczniejsze.",
    },
    {
      icon: Sparkles,
      title: "Profesjonalne kreacje",
      description:
        "Projektujemy grafiki i piszemy teksty reklamowe dopasowane do charakteru Twojego salonu.",
    },
    {
      icon: Users,
      title: "Przejrzyste raportowanie",
      description:
        "Regularnie otrzymujesz raport z najważniejszymi danymi – w przystępnej formie, bez komplikacji.",
    },
  ];

  return (
    <section ref={ref} id="services" className={`section-padding bg-black relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/8 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Co dla Ciebie <span className="text-gradient-pink">zrobimy</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/60 max-w-xl mx-auto">
            Kompleksowa obsługa kampanii – od strategii po optymalizację
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-white/[0.06] to-transparent border border-white/[0.08] rounded-xl p-4 sm:p-5 hover:border-primary/40 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 p-2 rounded-lg w-fit mb-3 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-white/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
