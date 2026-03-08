import { Target, TrendingUp, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Precyzyjne targetowanie",
      description: "Reklamy kierujemy do kobiet z Twojego regionu, które mogą być zainteresowane usługami beauty.",
      accent: true,
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
      accent: true,
    },
  ];

  return (
    <section id="services" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.04] blur-[150px] rounded-full" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Co dla Ciebie <span className="text-gradient-pink">zrobimy</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/50 max-w-xl mx-auto">
            Kompleksowa obsługa kampanii – od strategii po optymalizację
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group p-5 sm:p-6 rounded-2xl transition-all duration-500 ${
                service.accent
                  ? "bg-gradient-to-br from-primary/[0.1] to-primary/[0.02] border border-primary/15 hover:border-primary/30 hover:shadow-[0_0_40px_hsl(328,100%,54%/0.1)]"
                  : "bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05]"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  service.accent
                    ? "bg-primary/20 group-hover:bg-primary/30 group-hover:scale-110"
                    : "bg-white/[0.06] group-hover:bg-primary/15 group-hover:scale-110"
                }`}>
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-white/45">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
