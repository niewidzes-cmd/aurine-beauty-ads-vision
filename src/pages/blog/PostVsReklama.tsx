import { ArrowLeft, ArrowRight, Clock, TrendingUp, Users, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleProgress from "@/components/ArticleProgress";

const PostVsReklama = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Post na Facebooku ≠ Reklama - Porady Aurine";
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <article className="pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <Breadcrumbs items={[{ label: "Porady", href: "/porady" }, { label: "Post na Facebooku ≠ Reklama", href: "/porady/post-vs-reklama" }]} />
          <ArticleProgress currentArticle={1} />
          <Link to="/porady" className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />Powrót do porad
          </Link>

          <section className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-primary font-medium bg-primary/10 px-4 py-2 rounded-full">Facebook Marketing</span>
              <span className="flex items-center gap-2 text-sm text-white/50"><Clock className="w-4 h-4" />5 min czytania</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Post na Facebooku <span className="text-gradient-pink">≠</span> Reklama</h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-3xl">Większość właścicielek salonów myśli, że publikując post na swojej stronie na Facebooku, automatycznie dociera do wszystkich obserwatorów. <strong className="text-white">Niestety, to mit.</strong></p>
          </section>

          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><Eye className="w-6 h-6 text-primary" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Organiczny zasięg prawie nie istnieje</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <p className="text-lg text-white/80 leading-relaxed mb-6">Kiedy publikujesz zwykły post na stronie swojego salonu, Facebook pokazuje go średnio tylko <strong className="text-primary"> 2-5% Twoich obserwatorów</strong>.</p>
                <div className="bg-primary/10 rounded-xl p-6">
                  <p className="text-white font-semibold text-lg mb-2">Co to znaczy?</p>
                  <p className="text-white/70">Jeśli masz 1000 obserwujących, Twój post zobaczy zaledwie <strong className="text-white">20-50 osób</strong>.</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <p className="text-lg text-white/80 leading-relaxed mb-4"><strong className="text-white">Dlaczego tak jest?</strong></p>
                <p className="text-white/70 leading-relaxed">Bo Facebook jest biznesem. Jego celem jest zarabianie na reklamach, więc algorytm świadomie ogranicza zasięg organiczny.</p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><Target className="w-6 h-6 text-primary" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Czym różni się reklama?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[{ title: "Lokalizacja", desc: "np. kobiety w promieniu 15 km od Twojego salonu" }, { title: "Zainteresowania", desc: "osoby interesujące się urodą, kosmetyką" }, { title: "Wiek i płeć", desc: "dostosuj komunikat do grupy docelowej" }, { title: "Zasięg", desc: "dotrzesz do setek lub tysięcy osób" }].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3"><span className="text-primary font-bold">✓</span><span className="text-white font-semibold">{item.title}</span></div>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><Users className="w-6 h-6 text-primary" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Czy posty nie mają sensu?</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <p className="text-xl text-white mb-8"><strong>Nie!</strong> Posty organiczne nadal pełnią ważną funkcję:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {["Budują wizerunek salonu", "Pokazują aktualności i efekty pracy", "Odpowiadają na pytania klientek", "Tworzą spójny profil"].map((item, index) => (
                  <div key={index} className="flex items-start gap-4"><span className="text-primary text-xl">→</span><p className="text-white/70">{item}</p></div>
                ))}
              </div>
              <div className="bg-primary/10 rounded-xl p-6">
                <p className="text-white/90">Jednak jeśli chcesz <strong className="text-white">dotrzeć do nowych osób</strong>, potrzebujesz reklam.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><TrendingUp className="w-6 h-6 text-primary" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Podsumowanie</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Post organiczny</h3>
                <p className="text-white/70">Widzą go głównie osoby, które już obserwują Twoją stronę <strong className="text-primary">(2-5% z nich)</strong></p>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Płatna reklama</h3>
                <p className="text-white/80">Widzą ją setki/tysiące osób z Twojego regionu</p>
              </div>
            </div>
          </section>

          {/* Next article link */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 mb-8">
            <p className="text-white/60 text-sm mb-2">Następny artykuł w serii:</p>
            <Link to="/porady/jak-prowadzic-profil-salonu" className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors group">
              <span className="text-lg font-semibold">Jak prowadzić profil salonu na Facebooku</span>
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

export default PostVsReklama;
