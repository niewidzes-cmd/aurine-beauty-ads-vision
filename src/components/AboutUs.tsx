import { Heart, Target, Sparkles, MessageCircle, Eye, Headphones, Lightbulb, ArrowRight, Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} id="about" className={`section-padding bg-gradient-to-b from-black to-[#080808] relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/[0.05] blur-[100px] rounded-full" />
      <div className="absolute bottom-[10%] right-[8%] opacity-[0.04]">
        <Instagram className="w-14 h-14 text-primary" />
      </div>

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
          <p className="text-sm leading-relaxed sm:text-base text-white/60 max-w-2xl mx-auto">
            Wiemy, jak to jest prowadzić biznes poza dużym miastem. Pomagamy właścicielkom przyciągnąć klientki z okolicy.
          </p>
        </div>

        {/* Mission - featured card, How we work - open */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-14">
          {/* Mission as card */}
          <div className="bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.08] rounded-2xl p-5 sm:p-7 animate-fade-in-up group hover:border-primary/25 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Nasza misja</h3>
            </div>
            <p className="text-white/60 leading-relaxed text-sm mb-2">
              Wierzymy, że każdy salon beauty zasługuje na pełen terminarz – niezależnie od wielkości miasta.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Lokalna konkurencja często nie prowadzi kampanii – a my pomagamy Ci to wykorzystać.
            </p>
          </div>

          {/* How we work - open style */}
          <div className="flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Jak pracujemy</h3>
            </div>
            <p className="text-white/60 leading-relaxed text-sm mb-2">
              Za każdą właścicielką salonu kryje się inna historia. Dlatego nigdy nie stosujemy szablonów.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Każdą współpracę zaczynamy od rozmowy – chcemy poznać Ciebie i Twój salon.
            </p>
          </div>
        </div>

        {/* Organic marketing - accent strip */}
        <div className="border-l-2 border-primary pl-5 sm:pl-6 mb-12 sm:mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-3 mb-3">
            <Lightbulb className="w-5 h-5 text-primary" />
            <h3 className="text-base sm:text-lg font-bold text-white">Pomagamy też w organicznym marketingu</h3>
          </div>
          <p className="text-white/60 leading-relaxed text-sm mb-3">
            Doradzamy, jak budować profil na Facebooku i Instagramie – co publikować, jak pisać posty, które przyciągną uwagę.
          </p>
          <Link to="/porady/jak-prowadzic-profil-salonu" className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-xs sm:text-sm font-medium group">
            <span>Przeczytaj poradnik</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Values - open with subtle hover */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-8 sm:mb-10 animate-fade-in">
            Nasze wartości
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
            {[
              { icon: MessageCircle, title: "Komunikacja", description: "Stawiamy na rozmowę i zrozumienie." },
              { icon: Eye, title: "Przejrzystość", description: "Żadnych ukrytych kosztów." },
              { icon: Headphones, title: "Dostępność", description: "Odpowiadamy szybko." },
              { icon: Target, title: "Rezultaty", description: "Pełniejszy terminarz." },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-4 h-4 text-primary" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-white mb-1">{value.title}</h4>
                <p className="text-white/45 leading-relaxed text-xs sm:text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
