import { useState } from "react";
import { TrendingUp, Users, DollarSign, ChevronRight } from "lucide-react";
import salonBeautyOstrow from "@/assets/case-study-salon-beauty.png";
import studioMlawa from "@/assets/case-study-studio-mlawa.png";
import beautyStudioNowySacz from "@/assets/case-study-beauty-studio-nowy-sacz.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const caseStudies = [
    {
      salon: "Salon Beauty - Ostrów Mazowiecka",
      owner: "Magdalena",
      challenge: "Sezonowość biznesu, puste terminy w miesiącach zimowych",
      solution: "Kampania edukacyjna + promocje na zabiegi zimowe + remarketing",
      results: {
        clients: "70 rezerwacji",
        revenue: "+14,000 zł",
        roi: "ROAS 12.2x",
        period: "Grudzień 2024 - Luty 2025",
      },
      testimonial: "Przemek to bardzo przyjemna osoba, wszystko tłumaczy spokojnie i po ludzku. Zima była zawsze martwa, a teraz pierwszy raz miałam pełen grafik w styczniu. Super współpraca!",
      image: salonBeautyOstrow,
      stats: [
        { icon: Users, label: "Rezerwacje", value: "70" },
        { icon: DollarSign, label: "Przychód", value: "+14k zł" },
        { icon: TrendingUp, label: "ROAS", value: "12.2x" },
      ],
    },
    {
      salon: "Studio Urody - Mława",
      owner: "Katarzyna",
      challenge: "Nowy salon bez bazy klientek, potrzeba szybkiego rozruchu",
      solution: "Kampania z promocją otwarcia + targetowanie lokalnych kobiet 25-45 lat",
      results: {
        clients: "118 rezerwacji",
        revenue: "+23,700 zł",
        roi: "ROAS 14.8x",
        period: "Marzec 2025 - Kwiecień 2025",
      },
      testimonial: "Z Przemkiem współpracuje się naprawdę przyjemnie. Świetne podejście, wszystko tłumaczy po ludzku i czuć że mu zależy. Otwierałam salon i bałam się że nikt nie przyjdzie, a telefon nie przestawał dzwonić!",
      image: studioMlawa,
      stats: [
        { icon: Users, label: "Rezerwacje", value: "118" },
        { icon: DollarSign, label: "Przychód", value: "+23.7k zł" },
        { icon: TrendingUp, label: "ROAS", value: "14.8x" },
      ],
    },
    {
      salon: "Beauty Studio - Nowy Sącz",
      owner: "Anna",
      challenge: "Zwiększenie liczby rezerwacji zabiegów letnich w nowym sezonie",
      solution: "Kampania targetująca zabiegi manicure, pedicure, depilacja + remarketing",
      results: {
        clients: "31 rezerwacji",
        revenue: "+6,200 zł",
        roi: "ROAS 6.9x",
        period: "Lipiec 2025",
      },
      testimonial: "Dopiero zaczynamy, ale już widzę że to działa. Przemek jest bardzo pomocny i cierpliwy, wszystko wyjaśnia krok po kroku. Nowe klientki przyszły już w pierwszym tygodniu!",
      image: beautyStudioNowySacz,
      stats: [
        { icon: Users, label: "Rezerwacje", value: "31" },
        { icon: DollarSign, label: "Przychód", value: "+6.2k zł" },
        { icon: TrendingUp, label: "ROAS", value: "6.9x" },
      ],
    },
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <section ref={ref} id="case-studies" className={`section-padding bg-[#0a0a0a] relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in px-0 sm:px-4">
          <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-4">
            Prawdziwe <span className="text-gradient-pink">historie</span>
          </h2>
          <p className="text-base leading-relaxed sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Zobacz co udało nam się osiągnąć razem z naszymi klientkami
          </p>
        </div>

        {/* Case study selector */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-0 sm:px-4">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all text-sm sm:text-base ${
                activeCase === index
                  ? "bg-primary text-white shadow-[0_0_20px_hsl(328,100%,54%/0.4)]"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {study.salon}
            </button>
          ))}
        </div>

        {/* Case study content */}
        <div className="max-w-6xl mx-auto px-0 sm:px-4">
          <div key={activeCase} className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start animate-fade-in">
            {/* Left column - Image and stats */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_hsl(328,100%,54%/0.2)] group cursor-pointer">
                <img
                  src={currentCase.image}
                  alt={`Case study ${currentCase.salon}`}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {currentCase.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4 text-center hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_hsl(328,100%,54%/0.2)] cursor-pointer group hover:from-white/15 hover:to-white/10"
                  >
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform duration-500 group-hover:drop-shadow-[0_0_8px_hsl(328,100%,54%)]" />
                    <div className="text-lg sm:text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-white/60 leading-tight group-hover:text-white/80 transition-colors duration-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {currentCase.salon}
                </h3>
                <p className="text-white/60">Właścicielka: {currentCase.owner}</p>
              </div>

              {/* Challenge */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_20px_hsl(328,100%,54%/0.15)] hover:scale-[1.02] cursor-pointer group hover:from-white/10 hover:to-white/5">
                <h4 className="text-primary font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                  Wyzwanie
                </h4>
                <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">{currentCase.challenge}</p>
              </div>

              {/* Solution */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_20px_hsl(328,100%,54%/0.15)] hover:scale-[1.02] cursor-pointer group hover:from-white/10 hover:to-white/5">
                <h4 className="text-primary font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                  Nasze rozwiązanie
                </h4>
                <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">{currentCase.solution}</p>
              </div>

              {/* Results box */}
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(328,100%,54%/0.3)] hover:scale-[1.02] cursor-pointer group hover:from-primary/30 hover:to-primary/10">
                <h4 className="text-white font-semibold mb-3 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">Wyniki kampanii:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span className="text-white">{currentCase.results.clients}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span className="text-white">{currentCase.results.revenue} przychodu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span className="text-white">{currentCase.results.roi}</span>
                  </div>
                  <div className="text-white/60 text-sm mt-3">
                    {currentCase.results.period}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 italic hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_25px_hsl(328,100%,54%/0.2)] hover:scale-[1.02] cursor-pointer group hover:from-white/15 hover:to-white/10">
                <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                  "{currentCase.testimonial}"
                </p>
                <p className="text-primary font-semibold mt-4 group-hover:drop-shadow-[0_0_8px_hsl(328,100%,54%)] transition-all duration-300">
                  – {currentCase.owner}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
