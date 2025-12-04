import { ArrowLeft, Clock, TrendingUp, DollarSign, Users, MessageCircle, BarChart3, Target, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const JakOcenicSkutecznoscReklamy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Jak ocenić skuteczność reklamy - Porady Aurine";
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <article className="pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <Breadcrumbs items={[{ label: "Porady", href: "/porady" }, { label: "Jak ocenić skuteczność reklamy", href: "/porady/jak-ocenic-skutecznosc-reklamy" }]} />
          <Link to="/porady" className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />Powrót do porad
          </Link>

          {/* Hero */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-primary font-medium bg-primary/10 px-4 py-2 rounded-full">Analiza</span>
              <span className="flex items-center gap-2 text-sm text-white/50"><Clock className="w-4 h-4" />5 min czytania</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Jak ocenić, czy <span className="text-gradient-pink">reklama działa</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-3xl">
              Kampania działa już jakiś czas. Ale skąd wiesz, czy się opłaca? Poznaj <strong className="text-white">kluczowe wskaźniki</strong> i naucz się je interpretować.
            </p>
            <Link to="/porady/jak-przygotowac-sie-do-kampanii" className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors mt-4 text-sm">
              <ArrowLeft className="w-3 h-3" />
              <span>Poprzedni artykuł: Jak przygotować się do kampanii</span>
            </Link>
          </section>

          {/* Section 1 - Key metrics */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><BarChart3 className="w-6 h-6 text-primary" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Najważniejsze wskaźniki</h2>
            </div>
            <p className="text-xl text-white/70 mb-10 max-w-3xl">
              Nie musisz być ekspertem od marketingu. Wystarczy, że będziesz śledzić te 3 rzeczy:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
                <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <MessageCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Liczba zapytań</h3>
                <p className="text-white/70 mb-4">Ile wiadomości/telefonów dostajesz dzięki reklamie.</p>
                <div className="bg-black/30 rounded-xl p-4">
                  <p className="text-sm text-white/60">Dobry wynik: <strong className="text-primary">10-20 zapytań/miesiąc</strong></p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
                <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <DollarSign className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Koszt zapytania</h3>
                <p className="text-white/70 mb-4">Ile kosztuje jedno zapytanie od potencjalnej klientki.</p>
                <div className="bg-black/30 rounded-xl p-4">
                  <p className="text-sm text-white/60">Dobry wynik: <strong className="text-primary">15-40 zł/zapytanie</strong></p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
                <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Konwersja na klientkę</h3>
                <p className="text-white/70 mb-4">Ile zapytań zamienia się w umówione wizyty.</p>
                <div className="bg-black/30 rounded-xl p-4">
                  <p className="text-sm text-white/60">Dobry wynik: <strong className="text-primary">30-50% zapytań</strong></p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 - How to calculate ROI */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><TrendingUp className="w-6 h-6 text-primary" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Czy reklama się opłaca? Prosta kalkulacja</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <p className="text-xl text-white mb-8">Zróbmy prostą kalkulację na przykładzie:</p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">Wydatki (miesięcznie)</h4>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex justify-between text-white/70">
                      <span>Budżet reklamowy:</span>
                      <span className="text-white">500 zł</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">Wyniki</h4>
                  <div className="bg-white/5 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between text-white/70">
                      <span>Zapytania:</span>
                      <span className="text-white">15</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Umówione wizyty (40%):</span>
                      <span className="text-white">6</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Średnia wartość wizyty:</span>
                      <span className="text-white">150 zł</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-2xl p-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-white/60 text-sm mb-1">Przychód z reklam</p>
                    <p className="text-2xl font-bold text-white">6 × 150 zł = <span className="text-primary">900 zł</span></p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Wydatek</p>
                    <p className="text-2xl font-bold text-white">500 zł</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Zysk</p>
                    <p className="text-2xl font-bold text-primary">+400 zł</p>
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-6 text-center">
                A to tylko pierwsza wizyta! Jeśli klientka wróci – zysk rośnie.
              </p>
            </div>
          </section>

          {/* Section 3 - Warning signs */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center"><Target className="w-6 h-6 text-red-400" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Kiedy reklama NIE działa?</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Brak zapytań po 2 tygodniach", desc: "Coś jest nie tak z reklamą lub targetowaniem" },
                  { title: "Koszt zapytania > 60 zł", desc: "Reklama jest za droga lub źle skonfigurowana" },
                  { title: "Zapytania, ale brak wizyt", desc: "Problem z odpowiedzią lub ofertą" },
                  { title: "Przypadkowe zapytania", desc: "Niewłaściwa grupa docelowa" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-red-500/5 rounded-xl p-4 border border-red-500/10">
                    <span className="text-red-400 text-xl">⚠</span>
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
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><CheckCircle className="w-6 h-6 text-primary" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Podsumowanie serii</h2>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12">
              <p className="text-xl text-white mb-8">
                Gratulacje! Przeszłaś przez całą serię porad. Oto, czego się nauczyłaś:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { num: "1", title: "Post ≠ Reklama", link: "/porady/post-vs-reklama" },
                  { num: "2", title: "Jak prowadzić profil salonu", link: "/porady/jak-prowadzic-profil-salonu" },
                  { num: "3", title: "Kiedy warto inwestować w reklamy", link: "/porady/kiedy-warto-reklamowac" },
                  { num: "4", title: "Jak przygotować się do kampanii", link: "/porady/jak-przygotowac-sie-do-kampanii" },
                  { num: "5", title: "Jak ocenić skuteczność (ten artykuł)", link: "#" }
                ].map((item) => (
                  <Link 
                    key={item.num}
                    to={item.link}
                    className={`flex items-center gap-4 bg-black/20 rounded-xl p-4 ${item.link !== "#" ? "hover:bg-black/30 transition-colors" : "cursor-default"}`}
                  >
                    <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">{item.num}</span>
                    <span className="text-white/80">{item.title}</span>
                    {item.link === "#" && <span className="text-primary text-sm ml-auto">← Jesteś tutaj</span>}
                  </Link>
                ))}
              </div>
              <div className="bg-black/30 rounded-xl p-6 text-center">
                <p className="text-white/90 mb-4">
                  Masz pytania? Chcesz omówić swoją sytuację? <strong className="text-primary">Napisz do nas!</strong>
                </p>
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

export default JakOcenicSkutecznoscReklamy;