import { ArrowLeft, ArrowRight, Clock, Camera, MessageCircle, Calendar, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const JakProwadzicProfil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.title = "Jak prowadzić profil salonu na Facebooku - Porady Aurine";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Praktyczny poradnik - co publikować, jak często i jak budować zaangażowanie bez wydawania pieniędzy na reklamy. Dowiedz się jak tworzyć wartościowe treści.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <article className="pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <Breadcrumbs 
            items={[
              { label: "Porady", href: "/porady" },
              { label: "Jak prowadzić profil salonu na Facebooku", href: "/porady/jak-prowadzic-profil-salonu" }
            ]}
          />

          <Link
            to="/porady"
            className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót do porad
          </Link>

          {/* Hero Section */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-primary font-medium bg-primary/10 px-4 py-2 rounded-full">
                Social Media
              </span>
              <span className="flex items-center gap-2 text-sm text-white/50">
                <Clock className="w-4 h-4" />
                7 min czytania
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Jak prowadzić profil <span className="text-gradient-pink">salonu na Facebooku</span>
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed max-w-3xl">
              Tworzenie wartościowych treści i budowanie społeczności wokół salonu nie wymaga dużego budżetu. 
              <strong className="text-white"> Wystarczy plan i konsekwencja.</strong>
            </p>
            <Link to="/porady/post-vs-reklama" className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors mt-4 text-sm">
              <ArrowLeft className="w-3 h-3" />
              <span>Poprzedni artykuł: Post na Facebooku ≠ Reklama</span>
            </Link>
          </section>

          {/* Section 1 - What to publish */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Co publikować na profilu salonu?</h2>
            </div>

            <p className="text-xl text-white/70 mb-10 max-w-3xl">
              Wiele właścicielek salonów nie wie, co publikować na Facebooku. Efekt? Albo nie publikują nic, 
              albo wrzucają tylko zdjęcia prac i promocje. To za mało, żeby budować zaangażowaną społeczność.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">1</span>
                  <h3 className="text-xl font-bold text-white">Efekty pracy (before & after)</h3>
                </div>
                <p className="text-white/70 mb-4">To najważniejszy typ treści. Ludzie chcą widzieć, co potrafisz.</p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Paznokcie, makijaż, brwi - pokaż różnicę</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Dodaj krótki opis: jaka technika, jak długo trwało</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Nie przesadzaj z filtrem - niech zdjęcia będą naturalne</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm text-primary">📅 Jak często? Minimum 2-3 razy w tygodniu</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">2</span>
                  <h3 className="text-xl font-bold text-white">Edukacja i porady</h3>
                </div>
                <p className="text-white/80 mb-4">Dziel się wiedzą! To buduje zaufanie i pozycjonuje Cię jako eksperta:</p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>"Jak przygotować paznokcie przed stylizacją"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>"3 błędy, które niszczą Twoje brwi"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>"Dlaczego manicure hybrydowy trwa krócej latem?"</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-primary/20">
                  <p className="text-sm text-primary">📅 Jak często? 1-2 razy w tygodniu</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">3</span>
                  <h3 className="text-xl font-bold text-white">Kulisy pracy w salonie</h3>
                </div>
                <p className="text-white/70 mb-4">Ludzie lubią zaglądać "za kulisy". Pokaż, jak wygląda Twoja praca:</p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Krótkie nagranie z wykonywania stylizacji</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Zdjęcie miejsca pracy, nowych kosmetyków</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Opowiedz o nowej technice, którą się uczysz</span>
                  </li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">4</span>
                  <h3 className="text-xl font-bold text-white">Promocje i aktualności</h3>
                </div>
                <p className="text-white/70 mb-4">Komunikaty związane z działalnością salonu:</p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Wolne terminy na najbliższy tydzień</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Nowa usługa w ofercie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Okolicznościowe promocje (Dzień Kobiet, Walentynki)</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm text-white/50">⚠️ Ważne: 80% treści = wartość, 20% = promocja</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 - How often */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Jak często publikować?</h2>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12">
              <p className="text-xl text-white/80 mb-8">
                Nie musisz publikować codziennie. Lepiej rzadziej, ale regularnie:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-black/30 rounded-2xl p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">2-3</p>
                  <p className="text-white/70">posty/tydzień</p>
                  <p className="text-sm text-white/50 mt-2">Minimum</p>
                </div>
                <div className="bg-black/30 rounded-2xl p-6 text-center border border-primary/30">
                  <p className="text-4xl font-bold text-primary mb-2">4-5</p>
                  <p className="text-white/70">postów/tydzień</p>
                  <p className="text-sm text-primary mt-2">Idealnie ✓</p>
                </div>
                <div className="bg-black/30 rounded-2xl p-6 text-center">
                  <p className="text-lg font-bold text-white mb-2">Najlepsze godziny</p>
                  <p className="text-primary">10:00-14:00</p>
                  <p className="text-primary">18:00-20:00</p>
                  <p className="text-sm text-white/50 mt-2">Wt-Czw</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 - Engagement */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Jak angażować obserwatorów?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Zadawaj pytania", desc: '"Jaki kolor paznokci najbardziej lubicie na jesień?" lub "Manicure klasyczny czy hybrydowy?"' },
                { title: "Odpowiadaj na komentarze", desc: "Każdy komentarz to szansa na interakcję. Odpowiadaj szybko i przyjaźnie." },
                { title: "Używaj Stories", desc: "Krótkie relacje z dnia w salonie, ankiety, pytania - to wszystko buduje relację z obserwatorami." },
                { title: "Zachęcaj do oznaczania", desc: '"Oznacz koleżankę, która potrzebuje wizyty w salonie 💅"' }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 - What to avoid */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Czego unikać?</h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Tylko promocje", desc: "ludzie przestaną obserwować" },
                  { title: "Treści niezwiązane z salonem", desc: "memy, polityka, prywatne sprawy" },
                  { title: "Niskiej jakości zdjęcia", desc: "rozmazane, ciemne, nieestetyczne" },
                  { title: "Brak regularności", desc: "publikowanie raz na miesiąc nie przyniesie efektów" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-red-500/5 rounded-xl p-4 border border-red-500/10">
                    <span className="text-red-400 text-xl">✗</span>
                    <div>
                      <p className="text-white font-semibold">{item.title}</p>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Podsumowanie</h2>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12">
              <p className="text-xl text-white mb-8">
                Prowadzenie profilu salonu na Facebooku nie jest skomplikowane. Potrzebujesz:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <p className="text-white">Wartościowych treści</p>
                  <p className="text-white/50 text-sm">(efekty, porady, kulisy)</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <p className="text-white">Regularności</p>
                  <p className="text-white/50 text-sm">(minimum 2-3 posty/tydzień)</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <p className="text-white">Angażowania</p>
                  <p className="text-white/50 text-sm">(pytania, odpowiedzi, Stories)</p>
                </div>
              </div>

              <div className="bg-black/30 rounded-xl p-6 text-center">
                <p className="text-white/90">
                  Pamiętaj: profil na Facebooku to Twoja wizytówka. Jeśli chcesz jednak dotrzeć do nowych osób, 
                  które jeszcze Cię nie znają, będziesz potrzebować płatnych reklam.
                </p>
              </div>
            </div>
          </section>

          {/* Next article link */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 mb-8">
            <p className="text-white/60 text-sm mb-2">Następny artykuł w serii:</p>
            <Link to="/porady/kiedy-warto-reklamowac" className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors group">
              <span className="text-lg font-semibold">Kiedy warto inwestować w reklamy</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Footer navigation */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              to="/porady"
              className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Wszystkie porady
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
            >
              Porozmawiajmy o kampanii
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default JakProwadzicProfil;
