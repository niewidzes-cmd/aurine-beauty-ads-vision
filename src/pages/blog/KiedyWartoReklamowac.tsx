import { ArrowLeft, Clock, XCircle, CheckCircle, TrendingUp, AlertTriangle, Star, Camera, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import phoneMockup from "@/assets/phone-mockup-3.png";

const KiedyWartoReklamowac = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Kiedy warto inwestować w reklamy - Porady Aurine";
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <article className="pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <Breadcrumbs items={[{ label: "Porady", href: "/porady" }, { label: "Kiedy warto inwestować w reklamy", href: "/porady/kiedy-warto-reklamowac" }]} />
          <Link to="/porady" className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8"><ArrowLeft className="w-4 h-4" />Powrót do porad</Link>

          <section className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-primary font-medium bg-primary/10 px-4 py-2 rounded-full">Strategie</span>
                <span className="flex items-center gap-2 text-sm text-white/50"><Clock className="w-4 h-4" />6 min czytania</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Kiedy warto <span className="text-gradient-pink">inwestować w reklamy</span></h1>
              <p className="text-xl text-white/70 leading-relaxed">Płatne reklamy to nie jest rozwiązanie dla każdego salonu i na każdym etapie. <strong className="text-white">Sprawdź, czy Twój biznes jest gotowy.</strong></p>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 rounded-3xl blur-3xl"></div>
              <img src={phoneMockup} alt="Kalendarz rezerwacji salonu" className="relative z-10 w-64 md:w-72 drop-shadow-2xl" />
            </div>
          </section>

          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center"><XCircle className="w-6 h-6 text-red-400" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Kiedy NIE warto jeszcze reklamować się?</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0"><Calendar className="w-6 h-6 text-red-400" /></div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">1. Brak wolnych terminów</h3>
                    <p className="text-white/70 mb-4">Jeśli Twój kalendarz jest pełny na najbliższe 2-3 tygodnie, reklamy nie mają sensu.</p>
                    <div className="bg-primary/10 rounded-xl p-4"><p className="text-white/80"><strong className="text-primary">Co zrobić?</strong> Skup się na obsłudze obecnych klientek.</p></div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0"><Star className="w-6 h-6 text-red-400" /></div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">2. Słabe opinie lub ich brak</h3>
                    <p className="text-white/70 mb-4">Nowe osoby sprawdzą opinie. Zbierz minimum 10-15 pozytywnych recenzji.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0"><Camera className="w-6 h-6 text-red-400" /></div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">3. Brak zdjęć efektów pracy</h3>
                    <p className="text-white/70 mb-4">Zbierz minimum 15-20 zdjęć przed uruchomieniem kampanii.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><CheckCircle className="w-6 h-6 text-primary" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Kiedy warto zacząć reklamować się?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[{ title: "Masz wolne terminy", desc: "Możesz przyjąć nowe klientki w ciągu 7-14 dni." }, { title: "Masz pozytywne opinie", desc: "Minimum 10 recenzji z oceną 4.5/5." }, { title: "Masz materiały do reklam", desc: "Zdjęcia efektów pracy." }, { title: "Masz stabilną jakość usług", desc: "Jesteś pewna swoich umiejętności." }].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4"><span className="text-primary text-2xl">✓</span><h3 className="text-lg font-bold text-white">{item.title}</h3></div>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><TrendingUp className="w-6 h-6 text-primary" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Na jakie efekty możesz liczyć?</h2>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h4 className="text-lg font-bold text-white mb-2">Pierwszy miesiąc</h4>
                  <p className="text-2xl font-bold text-primary mb-2">10-20</p>
                  <p className="text-white/60 text-sm">nowych zapytań</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-white mb-2">Miesiąc 2-3</h4>
                  <p className="text-2xl font-bold text-primary mb-2">15-30</p>
                  <p className="text-white/60 text-sm">zapytań miesięcznie</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-white mb-2">Po 3 miesiącach</h4>
                  <p className="text-2xl font-bold text-primary mb-2">Stabilny</p>
                  <p className="text-white/60 text-sm">napływ klientek</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-start gap-4 bg-white/5 rounded-xl p-4">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/60 text-sm"><strong className="text-white">Pamiętaj:</strong> To średnie wyniki. Rzeczywiste efekty zależą od wielu czynników.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12">
              <h3 className="text-xl font-bold text-white mb-6">Zacznij reklamować się, gdy:</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Masz wolne terminy w kalendarzu", "Posiadasz minimum 10-15 pozytywnych opinii", "Masz zdjęcia efektów swojej pracy", "Jesteś gotowa na regularną inwestycję"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-black/20 rounded-xl p-4"><span className="text-primary text-xl">✓</span><p className="text-white/80">{item}</p></div>
                ))}
              </div>
            </div>
          </section>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link to="/porady" className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors"><ArrowLeft className="w-4 h-4" />Wszystkie porady</Link>
            <Link to="/#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105">Porozmawiajmy o kampanii</Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default KiedyWartoReklamowac;
