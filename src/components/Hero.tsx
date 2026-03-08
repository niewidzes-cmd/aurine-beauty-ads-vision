import { Facebook, Instagram, ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 sm:pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.12] rounded-full blur-[180px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.18, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-[20%] w-[300px] h-[300px] bg-primary/[0.06] rounded-full blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[20%] right-[15%] w-[200px] h-[200px] bg-primary/[0.04] rounded-full blur-[100px]"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(328 100% 54% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(328 100% 54% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

        {/* Floating social icons */}
        <motion.div
          className="hidden lg:block absolute top-[18%] right-[12%] opacity-[0.06]"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Facebook className="w-20 h-20 text-primary" />
        </motion.div>
        <motion.div
          className="hidden lg:block absolute bottom-[25%] left-[8%] opacity-[0.05]"
          animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Instagram className="w-16 h-16 text-primary" />
        </motion.div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 relative z-10 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-primary/[0.08] border border-primary/20 rounded-full px-4 py-1.5 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs sm:text-sm text-primary/80 font-medium">Agencja reklamowa dla salonów beauty</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[2.5rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 sm:mb-6"
          >
            Więcej klientek
            <br />
            do Twojego
            <br />
            <span className="text-gradient-pink glow-pink">salonu</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-white/50 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Prowadzimy kampanie na Facebooku i Instagramie dla salonów beauty w małych miastach. Pomagamy zapełnić terminarz.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary hover:bg-primary/90 text-white px-7 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all shadow-[0_0_30px_hsl(328,100%,54%/0.3)] hover:shadow-[0_0_50px_hsl(328,100%,54%/0.5)]"
            >
              Porozmawiajmy
            </motion.button>
            <motion.button
              onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="border border-white/15 hover:border-primary/40 text-white/80 hover:text-white px-7 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all hover:bg-white/[0.03]"
            >
              Zobacz efekty
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-14 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
          >
            {[
              { value: "200+", label: "rezerwacji" },
              { value: "12x", label: "średni ROAS" },
              { value: "100%", label: "zadowolonych" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white glow-pink">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-white/35 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-white/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
