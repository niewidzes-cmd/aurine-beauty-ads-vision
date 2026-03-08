import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Regulamin - Aurine";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Regulamin świadczenia usług Aurine.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-6 sm:mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Powrót
          </Link>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
            <span className="text-gradient-pink">Regulamin</span> świadczenia usług
          </h1>

          <div className="space-y-6 sm:space-y-8 text-white/60 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">§1. Postanowienia ogólne</h2>
              <p>Niniejszy Regulamin określa zasady świadczenia usług marketingowych przez Aurine na rzecz klientów prowadzących salony beauty.</p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">§2. Definicje</h2>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li><strong>Wykonawca</strong> - Aurine, świadczący usługi marketingowe</li>
                <li><strong>Zleceniodawca</strong> - osoba korzystająca z usług Wykonawcy</li>
                <li><strong>Kampania</strong> - działania reklamowe na Facebook i Instagram</li>
                <li><strong>Budżet reklamowy</strong> - środki przeznaczone na reklamy w Meta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">§3. Zakres usług</h2>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>Konsultacja i opracowanie strategii kampanii</li>
                <li>Projektowanie kreacji reklamowych</li>
                <li>Konfiguracja i uruchomienie kampanii</li>
                <li>Bieżące zarządzanie i optymalizacja</li>
                <li>Analiza wyników i regularne raportowanie</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">§4. Warunki współpracy</h2>
              <div className="space-y-3">
                <p><strong className="text-white/80">4.1.</strong> Zleceniodawca przekazuje niezbędne informacje o działalności i materiały reklamowe.</p>
                <p><strong className="text-white/80">4.2.</strong> Zleceniodawca udziela dostępu do konta Business Manager w Meta.</p>
                <p><strong className="text-white/80">4.3.</strong> Budżet reklamowy jest płatny bezpośrednio przez Zleceniodawcę na platformie Meta.</p>
                <p><strong className="text-white/80">4.4.</strong> Wynagrodzenie Wykonawcy jest ustalane indywidualnie i fakturowane miesięcznie.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">§5. Obowiązki Wykonawcy</h2>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>Profesjonalne i terminowe wykonywanie usług</li>
                <li>Bieżące monitorowanie i optymalizacja kampanii</li>
                <li>Regularne raportowanie wyników</li>
                <li>Zachowanie poufności</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">§6. Wynagrodzenie i płatności</h2>
              <div className="space-y-3">
                <p><strong className="text-white/80">6.1.</strong> Rozliczenia następują miesięcznie.</p>
                <p><strong className="text-white/80">6.2.</strong> Termin płatności: 7 dni od wystawienia faktury.</p>
                <p><strong className="text-white/80">6.3.</strong> W przypadku opóźnienia Wykonawca może wstrzymać usługi.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">§7. Czas trwania i rozwiązanie</h2>
              <div className="space-y-3">
                <p><strong className="text-white/80">7.1.</strong> Umowa na czas nieokreślony z miesięcznym rozliczeniem.</p>
                <p><strong className="text-white/80">7.2.</strong> Wypowiedzenie z 14-dniowym okresem.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">§8. Odpowiedzialność</h2>
              <p>Wykonawca nie gwarantuje konkretnych wyników kampanii. Efekty zależą od wielu czynników.</p>
            </section>

            <section className="border-l-2 border-primary pl-4 sm:pl-5">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Kontakt</h3>
              <p>
                Email: <a href="mailto:biuro@aurine.pl" className="text-primary hover:text-primary/80 transition-colors">biuro@aurine.pl</a>
                <br />
                Telefon: <a href="tel:+48731856524" className="text-primary hover:text-primary/80 transition-colors">+48 731 856 524</a>
              </p>
            </section>

            <p className="text-white/30 text-xs">Data wejścia w życie: {new Date().toLocaleDateString('pl-PL')}</p>
          </div>

          <div className="mt-8 sm:mt-12 pt-6 border-t border-white/[0.06]">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold text-sm">
              <ArrowLeft className="w-4 h-4" />
              Powrót do strony głównej
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
