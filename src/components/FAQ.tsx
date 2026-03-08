import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "Ile to kosztuje?", answer: "Każdą współpracę ustalamy indywidualnie. Koszt zależy od budżetu reklamowego i zakresu prac. Nie mamy sztywnych pakietów – dostosowujemy ofertę do możliwości konkretnego salonu. Zachęcam do rozmowy, wtedy wszystko omówimy szczegółowo." },
    { question: "Jak długo trzeba czekać na efekty?", answer: "Pierwsze zapytania zazwyczaj przychodzą już w pierwszym tygodniu. Pełny obraz efektów kampanii widać po około miesiącu – wtedy można ocenić, co działa najlepiej i wprowadzać usprawnienia." },
    { question: "Czy to działa w małych miastach?", answer: "Tak, reklamy na Facebooku sprawdzają się również w małych miastach. Facebook pozwala precyzyjnie targetować osoby z konkretnego regionu. W mniejszych miejscowościach często jest mniejsza konkurencja reklamowa, co może być dodatkowym atutem." },
    { question: "Czy muszę dać dostęp do mojego Facebooka?", answer: "Tak, ale spokojnie – dostęp dotyczy tylko części reklamowej (Business Manager). Nie mamy wglądu w Twój prywatny profil ani wiadomości. Wszystko jest bezpieczne i zgodne z regulaminem Facebooka." },
    { question: "Co jeśli nie będę zadowolona?", answer: "Rozliczamy się miesięcznie, bez długoterminowych zobowiązań. Jeśli współpraca Ci nie odpowiada, możemy ją zakończyć. Większość właścicielek zostaje z nami na dłużej, ale zawsze można podjąć inną decyzję." },
    { question: "Czy potrzebuję profesjonalnych zdjęć?", answer: "Niekoniecznie. Możemy wykorzystać zdjęcia, które już masz, lub pomożemy Ci wykonać dobre zdjęcia samodzielnie. W razie potrzeby podpowiemy też, jak znaleźć fotografa w Twojej okolicy." },
  ];

  return (
    <section id="faq" className="section-padding bg-[#060606] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Najczęstsze <span className="text-gradient-pink">pytania</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/55 max-w-xl mx-auto">
            Odpowiadamy na to, co Cię może nurtować
          </p>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`rounded-xl border transition-all duration-300 ${
                openIndex === index
                  ? "bg-white/[0.04] border-primary/15"
                  : "bg-transparent border-white/[0.06] hover:border-white/[0.1]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-4 sm:px-5 py-4 sm:py-4.5 text-left group"
              >
                <span className="text-sm sm:text-base font-semibold text-white pr-3 group-hover:text-primary transition-colors">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-colors ${openIndex === index ? "text-primary" : "text-white/30"}`} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm leading-relaxed text-white/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-white/40 mb-3 text-xs sm:text-sm">Masz inne pytanie?</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-primary hover:text-primary/80 font-semibold transition-colors text-sm"
          >
            Napisz do nas →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
