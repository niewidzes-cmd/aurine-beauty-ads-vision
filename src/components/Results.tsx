import { ArrowUpRight, Users2, DollarSign, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Results = () => {
  const stats = [
    { icon: Users2, value: "3x więcej", label: "Nowych klientek", description: "Średnio u naszych klientek" },
    { icon: DollarSign, value: "15-30", label: "Nowych klientek", description: "Co miesiąc w małym mieście" },
    { icon: TrendingUp, value: "Średnio 2x", label: "Wzrost zapytań", description: "W ciągu pierwszego miesiąca" },
  ];

  return (
    <section id="results" className="section-padding bg-black relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Nasze <span className="text-gradient-pink">doświadczenie</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/50 max-w-xl mx-auto">
            Średnie rezultaty z kampanii, które prowadzimy
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-1 glow-pink"
              >
                {stat.value}
              </motion.div>
              <div className="text-xs sm:text-sm font-semibold text-white/60 mb-0.5">{stat.label}</div>
              <div className="text-[10px] sm:text-xs text-white/30">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 sm:p-7 hover:border-white/[0.1] transition-all duration-500"
        >
          <h3 className="text-base sm:text-lg font-bold text-white mb-5 text-center">Jak pracujemy?</h3>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Specjalizujemy się w branży beauty",
              "Transparentne rozliczenia – wiesz za co płacisz",
              "Rozliczenia miesięczne bez długoterminowych umów",
              "Dostępność – możesz pisać jeśli masz pytania",
              "Rozważne gospodarowanie budżetem",
              "Pomoc przy materiałach – grafiki, teksty, konsultacje",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-2.5 text-xs sm:text-sm py-2 group"
              >
                <div className="flex-shrink-0 w-5 h-5 bg-primary/15 rounded-full flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                  <ArrowUpRight className="w-2.5 h-2.5 text-primary" />
                </div>
                <span className="text-white/60 group-hover:text-white/80 transition-colors">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
