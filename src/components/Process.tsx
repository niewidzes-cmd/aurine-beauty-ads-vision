import { MessageSquare, LineChart, Palette, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Process = () => {
  const steps = [
    { icon: MessageSquare, number: "01", title: "Rozmowa i strategia", description: "Poznajemy Twój salon, usługi i cele. Ustalamy budżet i plan działania." },
    { icon: Palette, number: "02", title: "Kreacje reklamowe", description: "Tworzymy grafiki i teksty dopasowane do Twojego salonu." },
    { icon: Rocket, number: "03", title: "Uruchomienie kampanii", description: "Konfigurujemy targetowanie i startujemy reklamy." },
    { icon: LineChart, number: "04", title: "Optymalizacja i raporty", description: "Monitorujemy wyniki. Co tydzień dostajesz raport." },
  ];

  return (
    <section id="process" className="section-padding bg-[#060606] relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-primary/[0.03] blur-[100px] rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Jak to <span className="text-gradient-pink">wygląda</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/50 max-w-xl mx-auto">
            Od pierwszej rozmowy do wymiernych efektów
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

          <div className="space-y-6 sm:space-y-8 md:space-y-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`md:flex md:items-center md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} md:py-8`}
                >
                  {/* Content */}
                  <div className={`md:w-[calc(50%-2rem)] ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <div className={`bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 sm:p-5 group hover:border-primary/20 transition-all duration-500 hover:bg-white/[0.05] ${isLeft ? "md:ml-auto" : "md:mr-auto"} max-w-sm`}>
                      <div className={`flex items-center gap-3 mb-2 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-9 h-9 bg-primary/15 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <step.icon className="w-4 h-4 text-primary" />
                        </div>
                        <h3 className="text-sm sm:text-base font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed text-white/45">{step.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex items-center justify-center relative">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                      className="w-10 h-10 bg-black border-2 border-primary/40 rounded-full flex items-center justify-center z-10"
                    >
                      <span className="text-xs font-bold text-primary">{step.number}</span>
                    </motion.div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
