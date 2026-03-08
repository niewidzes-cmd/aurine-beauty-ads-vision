import { MessageSquare, LineChart, Palette, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Process = () => {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Rozmowa i strategia",
      description:
        "Poznajemy Twój salon, usługi i cele. Ustalamy budżet i plan działania.",
    },
    {
      icon: Palette,
      number: "02",
      title: "Kreacje reklamowe",
      description:
        "Tworzymy grafiki i teksty dopasowane do Twojego salonu. Testujemy kilka wariantów.",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Uruchomienie kampanii",
      description:
        "Konfigurujemy targetowanie i startujemy. Reklamy docierają do kobiet z Twojego miasta.",
    },
    {
      icon: LineChart,
      number: "04",
      title: "Optymalizacja i raporty",
      description:
        "Monitorujemy wyniki codziennie. Co tydzień dostajesz raport z danymi i rekomendacjami.",
    },
  ];

  return (
    <section ref={ref} id="process" className={`section-padding bg-[#060606] relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Jak to <span className="text-gradient-pink">wygląda</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/60 max-w-xl mx-auto">
            Od pierwszej rozmowy do wymiernych efektów
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-3 sm:gap-4 items-start bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 sm:p-5 hover:border-primary/30 transition-all duration-300">
                <div className="flex-shrink-0 relative">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-[9px] font-bold text-white">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">{step.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-white/60">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
