import { Heart, Target, Sparkles, MessageCircle, Eye, Headphones, Lightbulb, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-black via-[#080808] to-black relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/[0.04] blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary font-semibold text-xs sm:text-sm">O Aurine</span>
          </div>
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Agencja dla salonów beauty
            <br />
            w <span className="text-gradient-pink">małych miastach</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/55 max-w-2xl mx-auto">
            Wiemy, jak to jest prowadzić biznes poza dużym miastem. Pomagamy właścicielkom przyciągnąć klientki z okolicy.
          </p>
        </motion.div>

        {/* Mission + How we work - asymmetric layout */}
        <div className="grid md:grid-cols-5 gap-5 sm:gap-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3 bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.08] rounded-2xl p-6 sm:p-8 group hover:border-primary/20 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Nasza misja</h3>
            </div>
            <p className="text-white/55 leading-relaxed text-sm mb-3">
              Wierzymy, że każdy salon beauty zasługuje na pełen terminarz – niezależnie od wielkości miasta.
            </p>
            <p className="text-white/55 leading-relaxed text-sm">
              Lokalna konkurencja często nie prowadzi kampanii – a my pomagamy Ci to wykorzystać.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Jak pracujemy</h3>
            </div>
            <p className="text-white/55 leading-relaxed text-sm mb-2">
              Za każdą właścicielką salonu kryje się inna historia. Dlatego nigdy nie stosujemy szablonów.
            </p>
            <p className="text-white/55 leading-relaxed text-sm">
              Każdą współpracę zaczynamy od rozmowy – chcemy poznać Ciebie i Twój salon.
            </p>
          </motion.div>
        </div>

        {/* Organic marketing highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="border-l-2 border-primary pl-5 sm:pl-6 mb-14 sm:mb-18"
        >
          <div className="flex items-center gap-3 mb-3">
            <Lightbulb className="w-5 h-5 text-primary" />
            <h3 className="text-base sm:text-lg font-bold text-white">Pomagamy też w organicznym marketingu</h3>
          </div>
          <p className="text-white/55 leading-relaxed text-sm mb-3">
            Doradzamy, jak budować profil na Facebooku i Instagramie – co publikować, jak pisać posty, które przyciągną uwagę.
          </p>
          <Link to="/porady/jak-prowadzic-profil-salonu" className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-xs sm:text-sm font-medium group">
            <span>Przeczytaj poradnik</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Values */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl font-bold text-white text-center mb-8 sm:mb-10"
          >
            Nasze wartości
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
            {[
              { icon: MessageCircle, title: "Komunikacja", description: "Stawiamy na rozmowę i zrozumienie." },
              { icon: Eye, title: "Przejrzystość", description: "Żadnych ukrytych kosztów." },
              { icon: Headphones, title: "Dostępność", description: "Odpowiadamy szybko." },
              { icon: Target, title: "Rezultaty", description: "Pełniejszy terminarz." },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors"
                >
                  <value.icon className="w-4.5 h-4.5 text-primary" />
                </motion.div>
                <h4 className="text-sm sm:text-base font-semibold text-white mb-1">{value.title}</h4>
                <p className="text-white/40 leading-relaxed text-xs sm:text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
