import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: "Wioletta S.",
      business: "Salon kosmetyczny - Grodzisk Mazowiecki",
      text: "Z całego serca polecamy Agencję Aurine! Znakomita obsługa klienta i pełen profesjonalizm nawet w przypadku tych najmniejszych firm. Świetna współpraca, wszystko wytłumaczone krok po kroku, pierwsze efekty były po kilku dniach.",
      rating: 5,
    },
    {
      name: "Zuzanna W.",
      business: "Salon fryzjerski - Wołomin",
      text: "Bardzo polecam Agencję Aurine, a zwłaszcza specjalistę Pana Przemka. Świetne podejście i wiedza dają szybkie efekty. Od początku współpracy czuję się zaopiekowana - wszystko jest jasne, przejrzyste i bez zbędnego stresu. Widzę realną różnicę w liczbie nowych klientek 😊",
      rating: 5,
    },
    {
      name: "Magdalena W.",
      business: "Gabinet kosmetyczny - Marki",
      text: "Serdecznie polecam. Pan Przemek ma super podejście, nawet trudne rzeczy wyjaśniał w prosty sposób. Zawsze mogę liczyć na szybką odpowiedź i konkretne porady. Współpraca przebiega bardzo płynnie, a efekty są lepsze niż się spodziewałam!",
      rating: 5,
    },
    {
      name: "Aleksandra S.",
      business: "Studio urody - Ząbki",
      text: "Profesjonalna obsługa i widoczne rezultaty. Polecam współpracę z Aurine każdej właścicielce salonu, która chce rozwijać swój biznes. Zespół naprawdę rozumie branżę beauty i wie, jak dotrzeć do odpowiednich klientek. Jestem pod wrażeniem ich zaangażowania!",
      rating: 5,
    },
    {
      name: "Karolina M.",
      business: "Salon kosmetyczny - Sulejówek",
      text: "Współpraca z Aurine to strzał w dziesiątkę! Liczba klientek w moim salonie wzrosła znacząco w ciągu pierwszych dwóch miesięcy. Pełen profesjonalizm i zaangażowanie. Cenię sobie też to, że zawsze tłumaczą, co robią i dlaczego - dzięki temu uczę się przy okazji!",
      rating: 5,
    },
    {
      name: "Natalia K.",
      business: "Gabinet beauty - Piastów",
      text: "Współpraca z Aurine to czysta przyjemność. Kontakt jest świetny, zawsze mogę napisać z pytaniem i dostaję szybką, jasną odpowiedź. Wszystko tłumaczą normalnie, po ludzku. Widać, że naprawdę znają się na tym, co robią, i zależy im, żeby współpraca przebiegała sprawnie. Jestem bardzo zadowolona i polecam każdemu salonowi beauty! 😌",
      rating: 5,
    },
    {
      name: "Joanna B.",
      business: "Studio stylizacji - Kobyłka",
      text: "Współpracuję z Aurine już od kilku miesięcy i z pełnym przekonaniem mogę polecić Przemka i cały zespół. Naprawdę wiedzą, jak robić marketing lokalny i przyciągać klientów. Chętnie dzielą się wiedzą, tłumaczą wszystko krok po kroku i cierpliwie pomagają, jeśli dopiero uczysz się marketingu. Dzięki nim zauważyłam realny wzrost zainteresowania moimi usługami i efekty ich pracy są naprawdę widoczne.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} id="testimonials" className={`section-padding bg-[#050505] relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/8 blur-3xl rounded-full" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-10 animate-fade-in">
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Opinie <span className="text-gradient-pink">klientek</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/60 max-w-xl mx-auto">
            Właścicielki salonów, które nam zaufały
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-1 sm:px-4">
                  <div className="text-center py-4">
                    <div className="flex gap-0.5 mb-4 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-white/80 mb-6 leading-relaxed italic max-w-2xl mx-auto">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                      <div className="text-xs text-white/45">{testimonial.business}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-3 w-8 h-8 sm:w-10 sm:h-10 hover:bg-white/5 rounded-full flex items-center justify-center transition-all">
            <ChevronLeft className="w-4 h-4 text-white/50 hover:text-white" />
          </button>
          <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-3 w-8 h-8 sm:w-10 sm:h-10 hover:bg-white/5 rounded-full flex items-center justify-center transition-all">
            <ChevronRight className="w-4 h-4 text-white/50 hover:text-white" />
          </button>

          <div className="flex justify-center gap-1.5 mt-5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all ${index === currentIndex ? "w-5 bg-primary" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
