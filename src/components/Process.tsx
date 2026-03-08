import { MessageSquare, LineChart, Palette, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Process = () => {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    { icon: MessageSquare, number: "01", title: "Rozmowa i strategia", description: "Poznajemy Twój salon, usługi i cele. Ustalamy budżet i plan działania." },
    { icon: Palette, number: "02", title: "Kreacje reklamowe", description: "Tworzymy grafiki i teksty dopasowane do Twojego salonu." },
    { icon: Rocket, number: "03", title: "Uruchomienie kampanii", description: "Konfigurujemy targetowanie i startujemy reklamy." },
    { icon: LineChart, number: "04", title: "Optymalizacja i raporty", description: "Monitorujemy wyniki. Co tydzień dostajesz raport." },
  ];

  return (
    <section ref={ref} id="process" className={`section-padding bg-[#060606] relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Decorative dots */}
      <div className="absolute top-[15%] right-[8%] grid grid-cols-3 gap-1.5 opacity-[0.06]">
        {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-primary rounded-full" />)}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Jak to <span className="text-gradient-pink">wygląda</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/55 max-w-xl mx-auto">
            Od pierwszej rozmowy do wymiernych efektów
          </p>
        </div>

        {/* Steps - alternating card/open */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {steps.map((step, index) => {
            const isCard = index === 0 || index === 3;
            return (
              <div
                key={index}
                className={`animate-fade-in-up group ${
                  isCard 
                    ? "bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 sm:p-6 hover:border-primary/25 transition-all duration-500"
                    : "p-5 sm:p-6"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 relative">
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isCard ? "bg-primary/15 group-hover:bg-primary/25" : "bg-white/[0.05] group-hover:bg-primary/10"
                    }`}>
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-[9px] font-bold text-white">
                      {step.number}
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">{step.title}</h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-white/50">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
