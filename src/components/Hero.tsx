import { Facebook, Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className={`relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 sm:pt-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/[0.08] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[120px]" />
        
        {/* Floating social icons */}
        <div className="absolute top-[15%] right-[12%] opacity-[0.06] animate-pulse" style={{ animationDuration: "4s" }}>
          <Facebook className="w-16 h-16 sm:w-24 sm:h-24 text-primary" />
        </div>
        <div className="absolute bottom-[25%] left-[8%] opacity-[0.05] animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }}>
          <Instagram className="w-12 h-12 sm:w-20 sm:h-20 text-primary" />
        </div>
        <div className="absolute top-[55%] right-[25%] opacity-[0.04] animate-pulse" style={{ animationDuration: "6s", animationDelay: "2s" }}>
          <Facebook className="w-10 h-10 sm:w-14 sm:h-14 text-primary" />
        </div>
        <div className="absolute top-[35%] left-[20%] opacity-[0.03] animate-pulse" style={{ animationDuration: "7s", animationDelay: "3s" }}>
          <Instagram className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
        </div>
        
        {/* Decorative dots grid */}
        <div className="absolute top-[20%] right-[5%] grid grid-cols-3 gap-2 opacity-[0.08]">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-primary rounded-full" />
          ))}
        </div>
        <div className="absolute bottom-[15%] left-[5%] grid grid-cols-4 gap-1.5 opacity-[0.06]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-0.5 h-0.5 bg-white rounded-full" />
          ))}
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 relative z-10 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.1] rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-white/60">Agencja reklamowa dla salonów beauty</span>
          </div>

          <h1 className="text-[2.25rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 sm:mb-6 animate-fade-in-up">
            Więcej klientek
            <br />
            do Twojego
            <br />
            <span className="text-gradient-pink glow-pink">salonu</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-white/55 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Prowadzimy kampanie na Facebooku i Instagramie dla salonów beauty w małych miastach. Pomagamy zapełnić terminarz.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white px-7 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(328,100%,54%/0.5)]"
            >
              Porozmawiajmy
            </button>
            <button
              onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-white/15 hover:border-primary/40 text-white/80 hover:text-white px-7 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all hover:bg-white/[0.03]"
            >
              Zobacz efekty
            </button>
          </div>

          {/* Social proof */}
          <div className="mt-12 sm:mt-16 flex items-center justify-center gap-6 sm:gap-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">200+</div>
              <div className="text-[10px] sm:text-xs text-white/40">rezerwacji dla klientek</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">12x</div>
              <div className="text-[10px] sm:text-xs text-white/40">średni ROAS</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
              <div className="text-[10px] sm:text-xs text-white/40">zadowolonych klientek</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-9 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
