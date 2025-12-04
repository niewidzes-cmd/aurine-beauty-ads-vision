import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: "Zuzanna W.",
      business: "Salon kosmetyczny - Wołomin",
      text: "Bardzo jasne tłumaczenie każdego etapu i realne efekty, a reklamy zaczęły przyciągać klientki od pierwszego tygodnia.",
      rating: 5,
    },
    {
      name: "Magdalena W.",
      business: "Gabinet kosmetyczny - Marki",
      text: "Serdecznie polecam. Pan Przemek ma super podejście, nawet trudne rzeczy wyjaśniał w prosty sposób.",
      rating: 5,
    },
    {
      name: "Wioletta S.",
      business: "Salon beauty - Grodzisk Mazowiecki",
      text: "Z całego serca polecamy Agencję Aurine! Znakomita obsługa klienta i pełen profesjonalizm nawet w przypadku tych najmniejszych firm.",
      rating: 5,
    },
    {
      name: "Karolina M.",
      business: "Salon fryzjerski - Legionowo",
      text: "Współpraca z Aurine to czysta przyjemność. Kontakt jest świetny, zawsze mogę napisać z pytaniem i dostaję szybką, jasną odpowiedź. Wszystko tłumaczą normalnie, po ludzku. Widać, że naprawdę znają się na tym, co robią, i zależy im, żeby współpraca przebiegała sprawnie. Jestem bardzo zadowolona i polecam każdemu salonowi beauty!",
      rating: 5,
    },
    {
      name: "Anna K.",
      business: "Gabinet medycyny estetycznej - Piaseczno",
      text: "Jestem bardzo zadowolona ze współpracy z Aurine. Świetne wyniki, zawsze dostępni i pomocni. Polecam z całego serca!",
      rating: 5,
    },
    {
      name: "Patrycja D.",
      business: "Studio stylizacji paznokci - Otwock",
      text: "Współpracuję z Aurine już od kilku miesięcy i z pełnym przekonaniem mogę polecić Przemka i cały zespół. Naprawdę wiedzą, jak robić marketing lokalny i przyciągać klientów. Chętnie dzielą się wiedzą, tłumaczą wszystko krok po kroku i cierpliwie pomagają, jeśli dopiero uczysz się marketingu. Dzięki nim zauważyłam realny wzrost zainteresowania moimi usługami i efekty ich pracy są naprawdę widoczne.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} id="testimonials" className={`section-padding bg-black relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in px-0 sm:px-4">
          <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-4">
            Opinie <span className="text-gradient-pink">klientek</span>
          </h2>
          <p className="text-base leading-relaxed sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Właścicielki salonów, które nam zaufały
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative px-0 sm:px-4">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-0 sm:px-4 flex justify-center"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 w-full h-[380px] sm:h-[340px] flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-1 justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed text-center flex-1">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="text-center border-t border-white/10 pt-3 sm:pt-4 mt-4 flex-shrink-0">
                      <div className="font-semibold text-white text-sm sm:text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-xs sm:text-sm text-white/60">{testimonial.business}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-12 w-10 h-10 sm:w-12 sm:h-12 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-full flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-12 w-10 h-10 sm:w-12 sm:h-12 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-full flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 sm:w-8 bg-primary"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
