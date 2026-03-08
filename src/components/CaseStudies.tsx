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
      results: { clients: "70 rezerwacji", revenue: "+14,000 zł", roi: "ROAS 12.2x", period: "Grudzień 2024 - Luty 2025" },
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
      results: { clients: "118 rezerwacji", revenue: "+23,700 zł", roi: "ROAS 14.8x", period: "Marzec 2025 - Kwiecień 2025" },
      testimonial: "Świetna komunikacja z całym zespołem, zawsze można się dodzwonić i wszystko jest na bieżąco wyjaśniane. Czuć profesjonalizm i to że naprawdę zależy im na wynikach.",
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
      results: { clients: "31 rezerwacji", revenue: "+6,200 zł", roi: "ROAS 6.9x", period: "Lipiec 2025" },
      testimonial: "Zaczęłyśmy współpracę w lipcu i jestem bardzo zadowolona. Efekty widać od razu, a ja mogę spokojnie skupić się na pracy w salonie zamiast martwić się o marketing.",
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
    <section ref={ref} id="case-studies" className={`section-padding bg-[#070707] relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/8 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-10 animate-fade-in">
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Prawdziwe <span className="text-gradient-pink">historie</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/60 max-w-xl mx-auto">
            Zobacz co udało nam się osiągnąć razem z naszymi klientkami
          </p>
        </div>

        {/* Case study selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-medium transition-all text-xs sm:text-sm ${
                activeCase === index
                  ? "bg-primary text-white shadow-[0_0_15px_hsl(328,100%,54%/0.3)]"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/[0.08]"
              }`}
            >
              {study.salon}
            </button>
          ))}
        </div>

        {/* Case study content */}
        <div key={activeCase} className="grid lg:grid-cols-2 gap-4 sm:gap-6 items-start animate-fade-in">
          {/* Left column */}
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 group cursor-pointer">
              <img src={currentCase.image} alt={`Case study ${currentCase.salon}`} className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500" />
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {currentCase.stats.map((stat, index) => (
                <div key={index} className="bg-white/[0.06] border border-white/[0.08] rounded-lg p-2.5 sm:p-3 text-center hover:border-primary/40 transition-all">
                  <stat.icon className="w-4 h-4 text-primary mx-auto mb-1.5" />
                  <div className="text-base sm:text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-[9px] sm:text-xs text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{currentCase.salon}</h3>
              <p className="text-white/50 text-sm">Właścicielka: {currentCase.owner}</p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-4 hover:border-primary/20 transition-all group">
              <h4 className="text-primary font-semibold mb-1.5 flex items-center gap-1.5 text-sm">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Wyzwanie
              </h4>
              <p className="text-white/70 text-sm">{currentCase.challenge}</p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-4 hover:border-primary/20 transition-all group">
              <h4 className="text-primary font-semibold mb-1.5 flex items-center gap-1.5 text-sm">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Nasze rozwiązanie
              </h4>
              <p className="text-white/70 text-sm">{currentCase.solution}</p>
            </div>

            <div className="bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2 text-sm">Wyniki kampanii:</h4>
              <div className="space-y-1.5">
                {[currentCase.results.clients, `${currentCase.results.revenue} przychodu`, currentCase.results.roi].map((r, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-primary" />
                    <span className="text-white text-sm">{r}</span>
                  </div>
                ))}
                <div className="text-white/50 text-xs mt-2">{currentCase.results.period}</div>
              </div>
            </div>

            <div className="bg-white/[0.06] border border-white/[0.08] rounded-lg p-4 italic">
              <p className="text-white/85 leading-relaxed text-sm">"{currentCase.testimonial}"</p>
              <p className="text-primary font-semibold mt-3 text-sm">– {currentCase.owner}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
