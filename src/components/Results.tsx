import { ArrowUpRight, Users2, DollarSign, TrendingUp } from "lucide-react";
import beautyIcons from "@/assets/beauty-icons.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Results = () => {
  const { ref, isVisible } = useScrollAnimation();
  const stats = [
    { icon: Users2, value: "3x więcej", label: "Nowych klientek", description: "Średnio u naszych klientek" },
    { icon: DollarSign, value: "15-30", label: "Nowych klientek", description: "Co miesiąc w małym mieście" },
    { icon: TrendingUp, value: "Średnio 2x", label: "Wzrost zapytań", description: "W ciągu pierwszego miesiąca" },
  ];

  return (
    <section ref={ref} id="results" className={`section-padding bg-black relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 opacity-15">
        <img src={beautyIcons} alt="" className="w-full h-full object-cover mix-blend-screen" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-10 animate-fade-in">
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Nasze <span className="text-gradient-pink">doświadczenie</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/60 max-w-xl mx-auto">
            Średnie rezultaty z kampanii, które prowadzimy
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/[0.06] border border-white/[0.08] rounded-xl p-3 sm:p-5 text-center hover:border-primary/40 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 bg-primary/10 rounded-full mb-2 sm:mb-3">
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div className="text-xl sm:text-3xl font-bold text-white mb-1 glow-pink">{stat.value}</div>
              <div className="text-xs sm:text-sm font-semibold text-white/80 mb-0.5">{stat.label}</div>
              <div className="text-[10px] sm:text-xs text-white/50">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 sm:p-6 animate-fade-in">
          <h3 className="text-base sm:text-lg font-bold text-white mb-4 text-center">Jak pracujemy?</h3>
          <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3">
            {[
              "Specjalizujemy się w branży beauty",
              "Transparentne rozliczenia – wiesz za co płacisz",
              "Rozliczenia miesięczne bez długoterminowych umów",
              "Dostępność – możesz pisać jeśli masz pytania",
              "Rozważne gospodarowanie budżetem",
              "Pomoc przy materiałach – grafiki, teksty, konsultacje",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-xs sm:text-sm">
                <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-primary rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
                <span className="text-white/80">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
