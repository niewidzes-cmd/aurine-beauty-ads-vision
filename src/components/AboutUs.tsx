import { Heart, Target, Sparkles, MessageCircle, Eye, Headphones, Lightbulb, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} id="about" className={`section-padding bg-gradient-to-b from-black via-[#080808] to-black relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/8 blur-3xl rounded-full animate-pulse" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary font-semibold text-xs sm:text-sm">O Aurine</span>
          </div>
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Agencja dla salonów beauty
            <br />
            w <span className="text-gradient-pink">małych miastach</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/70 max-w-2xl mx-auto">
            Wiemy, jak to jest prowadzić biznes poza dużym miastem. Pomagamy właścicielkom przyciągnąć klientki z okolicy – szczerze, bez obietnic bez pokrycia.
          </p>
        </div>

        {/* Story cards */}
        <div className="grid lg:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-white/[0.07] to-transparent border border-white/[0.08] rounded-xl p-4 sm:p-6 hover:border-primary/30 transition-all duration-300 animate-fade-in-up group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Nasza misja</h3>
            <p className="text-white/70 leading-relaxed text-xs sm:text-sm mb-2">
              Wierzymy, że każdy salon beauty zasługuje na pełen terminarz – niezależnie od wielkości miasta.
            </p>
            <p className="text-white/70 leading-relaxed text-xs sm:text-sm">
              W mniejszych miejscowościach reklamy online mogą zdziałać cuda. Lokalna konkurencja często nie prowadzi kampanii – a my pomagamy Ci to wykorzystać.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/[0.08] to-transparent border border-primary/15 rounded-xl p-4 sm:p-6 hover:border-primary/30 transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: "0.1s" }}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Jak pracujemy</h3>
            <p className="text-white/70 leading-relaxed text-xs sm:text-sm mb-2">
              Za każdą właścicielką salonu kryje się inna historia. Dlatego nigdy nie stosujemy szablonów.
            </p>
            <p className="text-white/70 leading-relaxed text-xs sm:text-sm">
              Każdą współpracę zaczynamy od rozmowy – chcemy poznać Ciebie i Twój salon. Dopiero wtedy tworzymy kampanię szytą na miarę.
            </p>
          </div>

          <div className="lg:col-span-2 bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 sm:p-6 hover:border-primary/20 transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: "0.2s" }}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Pomagamy też w organicznym marketingu</h3>
            <p className="text-white/70 leading-relaxed text-xs sm:text-sm mb-2">
              Doradzamy, jak budować profil na Facebooku i Instagramie – co publikować, jak pisać posty, które przyciągną uwagę.
            </p>
            <Link to="/porady/jak-prowadzic-profil-salonu" className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-xs sm:text-sm font-medium group">
              <span>Przeczytaj poradnik: Jak prowadzić profil salonu</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Values section */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-6 sm:mb-8 animate-fade-in">
            Nasze wartości
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: MessageCircle, title: "Komunikacja", description: "Stawiamy na rozmowę i zrozumienie Twojego salonu." },
              { icon: Eye, title: "Przejrzystość", description: "Zawsze wiesz, co robimy. Żadnych ukrytych kosztów." },
              { icon: Headphones, title: "Dostępność", description: "Pisz, dzwoń, pytaj – odpowiadamy szybko." },
              { icon: Target, title: "Rezultaty", description: "Więcej telefonów, pełniejszy terminarz." },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 sm:p-5 hover:border-primary/20 transition-all duration-300 flex flex-col group h-full">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2.5 group-hover:scale-110 transition-all">
                    <value.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-white mb-1.5">{value.title}</h4>
                  <p className="text-white/60 leading-relaxed text-xs sm:text-sm flex-grow">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
