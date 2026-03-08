import { Heart, Target, Sparkles, MessageCircle, Eye, Headphones, Lightbulb, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} id="about" className={`section-padding bg-gradient-to-b from-black to-[#080808] relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/8 blur-3xl rounded-full animate-pulse" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 animate-fade-in">
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

        {/* Story - open layout, no cards */}
        <div className="grid md:grid-cols-2 gap-10 sm:gap-14 mb-12 sm:mb-16">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Nasza misja</h3>
            </div>
            <p className="text-white/65 leading-relaxed text-sm mb-2">
              Wierzymy, że każdy salon beauty zasługuje na pełen terminarz – niezależnie od wielkości miasta.
            </p>
            <p className="text-white/65 leading-relaxed text-sm">
              W mniejszych miejscowościach reklamy online mogą zdziałać cuda. Lokalna konkurencja często nie prowadzi kampanii – a my pomagamy Ci to wykorzystać.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Jak pracujemy</h3>
            </div>
            <p className="text-white/65 leading-relaxed text-sm mb-2">
              Za każdą właścicielką salonu kryje się inna historia. Dlatego nigdy nie stosujemy szablonów.
            </p>
            <p className="text-white/65 leading-relaxed text-sm">
              Każdą współpracę zaczynamy od rozmowy – chcemy poznać Ciebie i Twój salon. Dopiero wtedy tworzymy kampanię szytą na miarę.
            </p>
          </div>
        </div>

        {/* Organic marketing - accent strip */}
        <div className="border-l-2 border-primary pl-5 sm:pl-6 mb-12 sm:mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-3 mb-3">
            <Lightbulb className="w-5 h-5 text-primary" />
            <h3 className="text-base sm:text-lg font-bold text-white">Pomagamy też w organicznym marketingu</h3>
          </div>
          <p className="text-white/65 leading-relaxed text-sm mb-3">
            Doradzamy, jak budować profil na Facebooku i Instagramie – co publikować, jak pisać posty, które przyciągną uwagę.
          </p>
          <Link to="/porady/jak-prowadzic-profil-salonu" className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-xs sm:text-sm font-medium group">
            <span>Przeczytaj poradnik: Jak prowadzić profil salonu</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Values - simple horizontal with dividers */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-8 sm:mb-10 animate-fade-in">
            Nasze wartości
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
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
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <value.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-white mb-1.5">{value.title}</h4>
                <p className="text-white/55 leading-relaxed text-xs sm:text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
