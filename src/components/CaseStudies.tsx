import { useState } from "react";
import { TrendingUp, Users, DollarSign, ChevronRight, MapPin, Quote } from "lucide-react";
import caseChart1 from "@/assets/case-study-chart-1.png";
import ostrowAnalytics from "@/assets/ostrow-analytics.png";
import beforeAfter from "@/assets/case-study-before-after.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const caseStudies = [
    {
      salon: "Studio Urody",
      location: "Mława",
      owner: "Katarzyna",
      challenge: "Nowy salon bez bazy klientek, potrzeba szybkiego rozruchu",
      solution: "Kampania z promocją otwarcia + targetowanie lokalnych kobiet 25-45 lat",
      results: {
        clients: "32",
        clientsLabel: "nowych klientek",
        revenue: "+18,000 zł",
        roi: "3.2x",
        period: "Pierwsze 2 miesiące",
      },
      testimonial: "Nie spodziewałam się, że tak szybko zobaczę efekty. Już w drugim tygodniu zaczęły dzwonić kobiety z mojego miasta i okolic.",
      image: caseChart1,
    },
    {
      salon: "Gabinet Kosmetyczny",
      location: "Ostrów Mazowiecka",
      owner: "Magdalena",
      challenge: "Sezonowość biznesu, puste terminy w miesiącach zimowych",
      solution: "Kampania edukacyjna + promocje na zabiegi zimowe + remarketing",
      results: {
        clients: "102",
        clientsLabel: "nowych klientek",
        revenue: "+8,970 zł",
        roi: "13.0x",
        period: "Grudzień 2024 - Luty 2025",
      },
      testimonial: "Zima zawsze była ciężka – połowa terminów pusta. Dzięki Aurine pierwszy raz miałam pełen grafik w styczniu i lutym.",
      image: ostrowAnalytics,
    },
    {
      salon: "Salon Beauty",
      location: "Płońsk",
      owner: "Anna",
      challenge: "Duża konkurencja w mieście, trudność w wyróżnieniu się",
      solution: "Kampania z unikalną ofertą + kreacje premium + A/B testing",
      results: {
        clients: "28",
        clientsLabel: "nowych klientek",
        revenue: "+22,000 zł",
        roi: "3.8x",
        period: "2 miesiące",
      },
      testimonial: "W małym mieście jest kilka innych salonów. Kampania pokazała, że profesjonalne podejście naprawdę robi różnicę.",
      image: beforeAfter,
    },
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <section ref={ref} id="case-studies" className={`py-20 md:py-32 bg-black relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Weryfikowalne wyniki</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nie obiecujemy.<br />
            <span className="text-gradient-pink">Pokazujemy liczby.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Realne kampanie. Realne salony. Realne wyniki z małych miast wokół Warszawy.
          </p>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto">
          {/* Stats highlight bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div 
              className={`text-center p-6 md:p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
                activeCase === 0 ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/50 scale-105' : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
              onClick={() => setActiveCase(0)}
            >
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">32</div>
              <div className="text-xs md:text-sm text-white/60">klientki w 2 mies.</div>
              <div className="text-xs text-primary mt-2 font-medium">Mława</div>
            </div>
            <div 
              className={`text-center p-6 md:p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
                activeCase === 1 ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/50 scale-105' : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
              onClick={() => setActiveCase(1)}
            >
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">13x</div>
              <div className="text-xs md:text-sm text-white/60">zwrot z inwestycji</div>
              <div className="text-xs text-primary mt-2 font-medium">Ostrów Maz.</div>
            </div>
            <div 
              className={`text-center p-6 md:p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
                activeCase === 2 ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/50 scale-105' : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
              onClick={() => setActiveCase(2)}
            >
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">+22k</div>
              <div className="text-xs md:text-sm text-white/60">przychód</div>
              <div className="text-xs text-primary mt-2 font-medium">Płońsk</div>
            </div>
          </div>

          {/* Case study detail card */}
          <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left - Image */}
              <div className="relative p-6 lg:p-8">
                <div className="absolute top-6 left-6 lg:top-8 lg:left-8 z-10">
                  <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm rounded-full px-4 py-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-white text-sm font-medium">{currentCase.salon} • {currentCase.location}</span>
                  </div>
                </div>
                <img
                  src={currentCase.image}
                  alt={`Wyniki kampanii ${currentCase.salon}`}
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Right - Details */}
              <div className="p-6 lg:p-10 flex flex-col justify-center">
                {/* Big stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white">{currentCase.results.clients}</div>
                    <div className="text-xs text-white/50">{currentCase.results.clientsLabel}</div>
                  </div>
                  <div className="text-center border-x border-white/10">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white">{currentCase.results.revenue}</div>
                    <div className="text-xs text-white/50">przychodu</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary">{currentCase.results.roi}</div>
                    <div className="text-xs text-white/50">ROI</div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="text-sm font-medium text-white/60">Wyzwanie</span>
                    </div>
                    <p className="text-white/80">{currentCase.challenge}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium text-white/60">Rozwiązanie</span>
                    </div>
                    <p className="text-white/80">{currentCase.solution}</p>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-white/5 rounded-2xl p-6 relative">
                  <Quote className="w-8 h-8 text-primary/30 absolute top-4 left-4" />
                  <p className="text-white/90 italic pl-8 leading-relaxed">
                    "{currentCase.testimonial}"
                  </p>
                  <div className="mt-4 pl-8 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">{currentCase.owner[0]}</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{currentCase.owner}</p>
                      <p className="text-white/50 text-sm">{currentCase.salon}, {currentCase.location}</p>
                    </div>
                  </div>
                </div>

                {/* Period */}
                <div className="mt-6 text-center">
                  <span className="text-xs text-white/40 uppercase tracking-wider">{currentCase.results.period}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeCase === index ? 'w-8 bg-primary' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;