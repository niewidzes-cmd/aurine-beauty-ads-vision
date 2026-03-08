import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const faqs = [
    { question: "Ile to kosztuje?", answer: "Każdą współpracę ustalamy indywidualnie. Koszt zależy od budżetu reklamowego i zakresu prac. Nie mamy sztywnych pakietów – dostosowujemy ofertę do możliwości konkretnego salonu. Zachęcam do rozmowy, wtedy wszystko omówimy szczegółowo." },
    { question: "Jak długo trzeba czekać na efekty?", answer: "Pierwsze zapytania zazwyczaj przychodzą już w pierwszym tygodniu. Pełny obraz efektów kampanii widać po około miesiącu – wtedy można ocenić, co działa najlepiej i wprowadzać usprawnienia." },
    { question: "Czy to działa w małych miastach?", answer: "Tak, reklamy na Facebooku sprawdzają się również w małych miastach. Facebook pozwala precyzyjnie targetować osoby z konkretnego regionu. W mniejszych miejscowościach często jest mniejsza konkurencja reklamowa, co może być dodatkowym atutem." },
    { question: "Czy muszę dać dostęp do mojego Facebooka?", answer: "Tak, ale spokojnie – dostęp dotyczy tylko części reklamowej (Business Manager). Nie mamy wglądu w Twój prywatny profil ani wiadomości. Wszystko jest bezpieczne i zgodne z regulaminem Facebooka." },
    { question: "Co jeśli nie będę zadowolona?", answer: "Rozliczamy się miesięcznie, bez długoterminowych zobowiązań. Jeśli współpraca Ci nie odpowiada, możemy ją zakończyć. Większość właścicielek zostaje z nami na dłużej, ale zawsze można podjąć inną decyzję." },
    { question: "Czy potrzebuję profesjonalnych zdjęć?", answer: "Niekoniecznie. Możemy wykorzystać zdjęcia, które już masz, lub pomożemy Ci wykonać dobre zdjęcia samodzielnie. W razie potrzeby podpowiemy też, jak znaleźć fotografa w Twojej okolicy." },
  ];

  return (
    <section ref={ref} id="faq" className={`section-padding bg-[#060606] relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-10 animate-fade-in">
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Najczęstsze <span className="text-gradient-pink">pytania</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/60 max-w-xl mx-auto">
            Odpowiadamy na to, co Cię może nurtować
          </p>
        </div>

        {/* Clean divider-based FAQ, no cards */}
        <div className="divide-y divide-white/[0.08]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 sm:py-5 text-left group"
              >
                <span className="text-sm sm:text-base font-semibold text-white pr-3 group-hover:text-primary transition-colors">{faq.question}</span>
                <ChevronDown className={`w-4 h-4 text-white/40 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-primary" : ""}`} />
              </button>
              {openIndex === index && (
                <div className="pb-4 sm:pb-5 text-xs sm:text-sm leading-relaxed text-white/55 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/45 mb-3 text-xs sm:text-sm">Masz inne pytanie?</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-primary hover:text-primary/80 font-semibold transition-colors text-sm"
          >
            Napisz do nas →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
