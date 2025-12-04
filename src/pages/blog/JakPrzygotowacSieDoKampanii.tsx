import { ArrowLeft, ArrowRight, Clock, CheckCircle, Camera, Star, MessageSquare, FileText, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const JakPrzygotowacSieDoKampanii = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Jak przygotować się do pierwszej kampanii - Porady Aurine";
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <article className="pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <Breadcrumbs items={[{ label: "Porady", href: "/porady" }, { label: "Jak przygotować się do kampanii", href: "/porady/jak-przygotowac-sie-do-kampanii" }]} />
          <Link to="/porady" className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />Powrót do porad
          </Link>

          {/* Hero */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-primary font-medium bg-primary/10 px-4 py-2 rounded-full">Przygotowanie</span>
              <span className="flex items-center gap-2 text-sm text-white/50"><Clock className="w-4 h-4" />6 min czytania</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Jak przygotować się do <span className="text-gradient-pink">pierwszej kampanii</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-3xl">
              W poprzednim artykule dowiedziałaś się, kiedy warto zacząć reklamować się. Teraz czas na <strong className="text-white">praktyczne przygotowania</strong>.
            </p>
            <Link to="/porady/kiedy-warto-reklamowac" className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors mt-4 text-sm">
              <ArrowLeft className="w-3 h-3" />
              <span>Poprzedni artykuł: Kiedy warto inwestować w reklamy</span>
            </Link>
          </section>

          {/* Section 1 - Photos */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><Camera className="w-6 h-6 text-primary" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">1. Przygotuj zdjęcia</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Zdjęcia to podstawa każdej reklamy. Potrzebujesz:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Minimum 10-15 zdjęć efektów pracy (before & after)",
                  "Zdjęcia w dobrym świetle, ostre i estetyczne",
                  "Różnorodność stylizacji i usług",
                  "Zdjęcia salonu (wnętrze, stanowisko pracy)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-primary/5 rounded-xl p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
              <p className="text-white/90"><strong className="text-primary">Pro tip:</strong> Zdjęcia robione telefonem są OK, ale zadbaj o dobre oświetlenie. Najlepsze światło to dzienne, przy oknie.</p>
            </div>
          </section>

          {/* Section 2 - Reviews */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><Star className="w-6 h-6 text-primary" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">2. Zbierz opinie</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Dlaczego opinie są ważne?</h3>
                <p className="text-white/70 mb-4">Nowe klientki sprawdzą Twoje opinie zanim zadzwonią. Bez opinii – bez zaufania.</p>
                <div className="bg-black/30 rounded-xl p-4">
                  <p className="text-white/60 text-sm">Minimum <strong className="text-primary">10-15 opinii</strong> z oceną 4.5/5 lub wyższą</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Jak zbierać opinie?</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-2"><span className="text-primary">→</span><span>Proś klientki po udanej wizycie</span></li>
                  <li className="flex items-start gap-2"><span className="text-primary">→</span><span>Wyślij link do opinii przez SMS</span></li>
                  <li className="flex items-start gap-2"><span className="text-primary">→</span><span>Przypomnij się po kilku dniach</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 - Profile */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><FileText className="w-6 h-6 text-primary" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">3. Uporządkuj profil</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <p className="text-xl text-white mb-8">
                Klientki, które zobaczą reklamę, wejdą na Twój profil. Upewnij się, że wygląda profesjonalnie:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Aktualne dane kontaktowe", desc: "Telefon, adres, godziny otwarcia" },
                  { title: "Opis usług", desc: "Co oferujesz i w jakich cenach" },
                  { title: "Zdjęcie profilowe i tło", desc: "Profesjonalne, nie rozmazane" },
                  { title: "Ostatnie posty", desc: "Świeże treści z ostatnich 1-2 tygodni" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white/5 rounded-xl p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold">{item.title}</p>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4 - Response */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><MessageSquare className="w-6 h-6 text-primary" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">4. Przygotuj się na wiadomości</h2>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Gdy reklama zacznie działać, zaczniesz dostawać zapytania. Przygotuj się:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-3">✓ Odpowiadaj szybko</h4>
                  <p className="text-white/60 text-sm">Najlepiej w ciągu 1-2 godzin. Wolna odpowiedź = utracona klientka.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3">✓ Przygotuj szablon</h4>
                  <p className="text-white/60 text-sm">Miej gotową odpowiedź z cennikiem i wolnymi terminami.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3">✓ Włącz powiadomienia</h4>
                  <p className="text-white/60 text-sm">Nie przegap wiadomości – sprawdzaj Messenger regularnie.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3">✓ Miej wolne terminy</h4>
                  <p className="text-white/60 text-sm">Zarezerwuj kilka slotów w kalendarzu na nowe klientki.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Summary checklist */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><Target className="w-6 h-6 text-primary" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Checklista przed startem</h2>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Mam 10-15 dobrych zdjęć efektów pracy",
                  "Mam minimum 10 pozytywnych opinii",
                  "Mój profil jest aktualny i kompletny",
                  "Mam wolne terminy w najbliższych 2 tygodniach",
                  "Mam włączone powiadomienia z Messengera",
                  "Przygotowałam szablon odpowiedzi"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-primary/5 rounded-xl p-4">
                    <div className="w-6 h-6 rounded border-2 border-primary/50 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-white/80">{item}</p>
                  </div>
                ))}
              </div>
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <p className="text-white/90">
                  Wszystko gotowe? <strong className="text-primary">Czas uruchomić pierwszą kampanię!</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Next article link */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 mb-8">
            <p className="text-white/60 text-sm mb-2">Następny artykuł w serii:</p>
            <Link to="/porady/jak-ocenic-skutecznosc-reklamy" className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors group">
              <span className="text-lg font-semibold">Jak ocenić, czy reklama działa</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

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

export default JakPrzygotowacSieDoKampanii;