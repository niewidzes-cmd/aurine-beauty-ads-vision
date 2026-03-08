import { useState } from "react";
import { TrendingUp, Users, DollarSign, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import salonBeautyOstrow from "@/assets/case-study-salon-beauty.png";
import studioMlawa from "@/assets/case-study-studio-mlawa.png";
import beautyStudioNowySacz from "@/assets/case-study-beauty-studio-nowy-sacz.png";

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

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
    <section id="case-studies" className="section-padding bg-[#070707] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/[0.05] blur-[100px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Prawdziwe <span className="text-gradient-pink">historie</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/50 max-w-xl mx-auto">
            Zobacz co udało nam się osiągnąć razem z naszymi klientkami
          </p>
        </motion.div>

        {/* Case study selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {caseStudies.map((study, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCase(index)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-medium transition-all text-xs sm:text-sm ${
                activeCase === index
                  ? "bg-primary text-white shadow-[0_0_20px_hsl(328,100%,54%/0.3)]"
                  : "text-white/40 hover:text-white/70 border border-white/[0.08] hover:border-white/20"
              }`}
            >
              {study.salon}
            </motion.button>
          ))}
        </div>

        {/* Case study content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Image */}
            <div className="rounded-2xl overflow-hidden border border-white/[0.06] mb-6 sm:mb-8 hover:border-primary/20 transition-all duration-500">
              <img src={currentCase.image} alt={`Case study ${currentCase.salon}`} className="w-full h-auto" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 text-center mb-8 sm:mb-10">
              {currentCase.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="py-3"
                >
                  <div className="text-xl sm:text-3xl font-bold text-white glow-pink">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-white/35 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Details */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{currentCase.salon}</h3>
                <p className="text-white/40 text-sm mb-6">Właścicielka: {currentCase.owner}</p>

                <div className="space-y-5">
                  <div>
                    <h4 className="text-primary font-semibold mb-1.5 text-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Wyzwanie
                    </h4>
                    <p className="text-white/55 text-sm">{currentCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-1.5 text-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Nasze rozwiązanie
                    </h4>
                    <p className="text-white/55 text-sm">{currentCase.solution}</p>
                  </div>
                </div>
              </div>

              <div>
                {/* Results card */}
                <div className="bg-gradient-to-br from-primary/[0.1] to-primary/[0.03] border border-primary/20 rounded-xl p-4 sm:p-5 mb-5">
                  <h4 className="text-white font-semibold mb-3 text-sm">Wyniki kampanii:</h4>
                  <div className="space-y-2">
                    {[currentCase.results.clients, `${currentCase.results.revenue} przychodu`, currentCase.results.roi].map((r, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span className="text-white/75 text-sm">{r}</span>
                      </div>
                    ))}
                    <div className="text-white/30 text-xs mt-2">{currentCase.results.period}</div>
                  </div>
                </div>

                {/* Testimonial */}
                <blockquote className="border-l-2 border-primary pl-4">
                  <p className="text-white/70 leading-relaxed text-sm italic">"{currentCase.testimonial}"</p>
                  <p className="text-primary font-semibold mt-2 text-sm">– {currentCase.owner}</p>
                </blockquote>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudies;
