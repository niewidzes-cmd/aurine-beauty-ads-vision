import { MessageSquare, LineChart, Palette, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Process = () => {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    { icon: MessageSquare, number: "01", title: "Rozmowa i strategia", description: "Poznajemy Twój salon, usługi i cele. Ustalamy budżet i plan działania." },
    { icon: Palette, number: "02", title: "Kreacje reklamowe", description: "Tworzymy grafiki i teksty dopasowane do Twojego salonu. Testujemy kilka wariantów." },
    { icon: Rocket, number: "03", title: "Uruchomienie kampanii", description: "Konfigurujemy targetowanie i startujemy. Reklamy docierają do kobiet z Twojego miasta." },
    { icon: LineChart, number: "04", title: "Optymalizacja i raporty", description: "Monitorujemy wyniki codziennie. Co tydzień dostajesz raport z danymi i rekomendacjami." },
  ];

  return (
    <section ref={ref} id="process" className={`section-padding bg-[#060606] relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Jak to <span className="text-gradient-pink">wygląda</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/60 max-w-xl mx-auto">
            Od pierwszej rozmowy do wymiernych efektów
          </p>
        </div>

        {/* Timeline-style layout */}
        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
          
          <div className="space-y-8 sm:space-y-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-4 sm:gap-6 items-start animate-fade-in-up relative"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {/* Number circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-black border-2 border-primary/40 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{step.number}</span>
                  </div>
                </div>
                
                <div className="pt-2.5">
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">{step.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-white/55 max-w-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
