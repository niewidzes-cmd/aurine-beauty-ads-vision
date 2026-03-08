import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Polityka Prywatności - Aurine";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Polityka prywatności Aurine - informacje o przetwarzaniu danych osobowych.');
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
            Polityka <span className="text-gradient-pink">Prywatności</span>
          </h1>

          <div className="space-y-6 sm:space-y-8 text-white/60 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">1. Informacje ogólne</h2>
              <p>Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem ze strony internetowej Aurine.</p>
              <p className="mt-3">Administratorem danych osobowych jest Aurine z siedzibą w Polsce.</p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">2. Rodzaj przetwarzanych danych</h2>
              <p>Administrator przetwarza następujące dane osobowe:</p>
              <ul className="list-disc list-inside mt-3 space-y-1.5 ml-2">
                <li>Imię i nazwisko</li>
                <li>Adres e-mail</li>
                <li>Numer telefonu</li>
                <li>Dane dotyczące prowadzonej działalności gospodarczej</li>
                <li>Dane techniczne (adres IP, typ przeglądarki)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">3. Cel przetwarzania danych</h2>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>Nawiązanie i utrzymanie kontaktu z klientem</li>
                <li>Realizacja usług marketingowych</li>
                <li>Wystawienie faktur i dokumentacji księgowej</li>
                <li>Przesyłanie raportów z kampanii reklamowych</li>
                <li>Analiza ruchu na stronie i optymalizacja treści</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">4. Podstawa prawna przetwarzania</h2>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>Zgoda osoby (art. 6 ust. 1 lit. a RODO)</li>
                <li>Realizacja umowy (art. 6 ust. 1 lit. b RODO)</li>
                <li>Obowiązek prawny (art. 6 ust. 1 lit. c RODO)</li>
                <li>Uzasadniony interes (art. 6 ust. 1 lit. f RODO)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">5. Okres przechowywania danych</h2>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>Przez okres trwania umowy i do czasu przedawnienia roszczeń</li>
                <li>Przez okres wymagany przepisami prawa (np. 5 lat)</li>
                <li>Do czasu wycofania zgody</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">6. Prawa osób</h2>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>Dostęp do danych</li>
                <li>Sprostowanie danych</li>
                <li>Usunięcie danych</li>
                <li>Ograniczenie przetwarzania</li>
                <li>Przenoszenie danych</li>
                <li>Wniesienie sprzeciwu</li>
                <li>Cofnięcie zgody</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">7. Pliki cookies</h2>
              <p>Strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego funkcjonowania, analizy ruchu oraz dostosowania treści.</p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">8. Kontakt</h2>
              <p>
                Email: <a href="mailto:biuro@aurine.pl" className="text-primary hover:text-primary/80 transition-colors">biuro@aurine.pl</a>
                <br />
                Telefon: <a href="tel:+48731856524" className="text-primary hover:text-primary/80 transition-colors">+48 731 856 524</a>
              </p>
            </section>

            <p className="text-white/30 text-xs">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>
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

export default PrivacyPolicy;
