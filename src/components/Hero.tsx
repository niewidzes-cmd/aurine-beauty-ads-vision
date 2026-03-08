import analyticsVisual from "@/assets/analytics-dashboard.png";
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
      className={`relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black to-[#0a0a0a] pt-20 sm:pt-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(328,100%,54%/0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(328,100%,70%/0.08),transparent_50%)]" />

      <div className="w-full px-3 sm:px-6 md:px-10 lg:px-20 relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Text content */}
          <div className="text-left animate-fade-in-up lg:order-1">
            <h1 className="text-[2rem] leading-[1.12] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Więcej klientek
              <br />
              do Twojego
              <br />
              <span className="text-gradient-pink glow-pink">salonu</span>
            </h1>
            <p className="text-[0.9375rem] leading-relaxed sm:text-lg text-white/70 mb-6 max-w-xl">
              Prowadzimy kampanie reklamowe na Facebooku dla salonów beauty w małych miastach. Pomagamy budować rozpoznawalność i dotrzeć do odpowiednich osób.
            </p>
          </div>

          {/* Visual */}
          <div className="relative animate-scale-in w-full lg:order-2">
            <div className="absolute inset-0 bg-primary/15 blur-3xl rounded-full" />
            <img
              src={analyticsVisual}
              alt="Facebook Ads Analytics"
              className="relative w-full h-auto rounded-xl"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:order-3 lg:col-span-2 justify-center lg:justify-start relative">
            <button
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-base font-semibold transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(328,100%,54%/0.6)]"
            >
              Porozmawiajmy
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("services");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-white/20 hover:border-primary text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-base font-semibold transition-all hover:bg-white/5"
            >
              Zobacz co robimy
            </button>
            
            {/* Scroll indicator - mobile below buttons */}
            <div className="flex justify-center mt-6 lg:hidden">
              <div className="w-5 h-9 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5 animate-bounce">
                <div className="w-1 h-2.5 bg-primary rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - desktop at bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden lg:flex">
          <div className="w-5 h-9 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
