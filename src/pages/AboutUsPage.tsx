import { ArrowLeft, Target, Heart, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutUsPage = () => {
  const values = [
    { icon: Heart, title: "Specjalizacja w beauty", description: "Rozumiemy branżę beauty i jej specyfikę. Wiemy, jak ważna jest atmosfera, estetyka i relacje z klientkami." },
    { icon: Target, title: "Konkretne efekty", description: "Skupiamy się na wymiernych rezultatach. Każda kampania jest dokładnie monitorowana i regularnie optymalizowana." },
    { icon: Lightbulb, title: "Transparentność", description: "Jasne zasady współpracy, przejrzyste rozliczenia i regularne raporty." },
    { icon: Users, title: "Partnerskie podejście", description: "Traktujemy Cię jak partnera. Jesteśmy dostępni, słuchamy Twoich potrzeb." },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-6 sm:mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Powrót
          </Link>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            O <span className="text-gradient-pink">Aurine</span>
          </h1>
          <p className="text-sm sm:text-lg text-white/60 mb-10 sm:mb-16 max-w-2xl">
            Zespół specjalistów, który pomaga salonom beauty dotrzeć do nowych klientek
          </p>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Nasza historia</h2>
            <div className="space-y-4 text-white/60 text-sm sm:text-base leading-relaxed">
              <p>Aurine powstało z prostej obserwacji: salony beauty w małych miastach mają ogromny potencjał, ale często brakuje im skutecznych narzędzi marketingowych.</p>
              <p>Pomagamy salonom kosmetycznym dotrzeć do nowych klientek poprzez profesjonalne kampanie reklamowe. Specjalizujemy się w pracy z małymi miastami.</p>
            </div>
          </section>

          <section className="mb-12 sm:mb-20 border-l-2 border-primary pl-5 sm:pl-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Nasza misja</h2>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed mb-4">
              Wspieramy właścicielki salonów beauty w małych miastach, dając im dostęp do profesjonalnych kampanii reklamowych.
            </p>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed">
              Nasze podejście opiera się na partnerstwie, przejrzystości i wymiernych rezultatach.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 sm:mb-10 text-center">Nasze wartości</h2>
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {values.map((value, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 sm:p-6' : 'p-5 sm:p-6'} group`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">{value.title}</h3>
                  </div>
                  <p className="text-white/55 leading-relaxed text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-primary/[0.08] to-transparent border border-primary/15 rounded-2xl p-5 sm:p-8 mb-12 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Dlaczego małe miasta?</h2>
            <div className="space-y-3 text-white/60 text-sm sm:text-base leading-relaxed">
              <p><strong className="text-white">Znamy lokalny rynek.</strong> Rozumiemy specyfikę małych społeczności.</p>
              <p><strong className="text-white">Mniejsza konkurencja.</strong> Łatwiej wyróżnić się profesjonalną kampanią.</p>
              <p><strong className="text-white">Realny wpływ.</strong> Widzimy konkretne rezultaty – pełniejszy kalendarz wizyt.</p>
              <p><strong className="text-white">Osobiste podejście.</strong> Cenimy relacje i autentyczną współpracę.</p>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Chcesz dołączyć?</h2>
            <p className="text-sm sm:text-base text-white/55 mb-6 max-w-xl mx-auto">
              Umów bezpłatną konsultację i poznaj możliwości kampanii dla Twojego salonu.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/#contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all hover:scale-105 hover:shadow-[0_0_25px_hsl(328,100%,54%/0.5)]">
                Skontaktuj się
              </Link>
              <Link to="/" className="border border-white/15 hover:border-primary/40 text-white/70 hover:text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all">
                Strona główna
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
