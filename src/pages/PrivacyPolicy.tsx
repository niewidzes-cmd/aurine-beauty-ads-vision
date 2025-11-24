import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set meta tags
    document.title = "Polityka Prywatności - Aurine";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Polityka prywatności Aurine - informacje o przetwarzaniu danych osobowych, ochronie prywatności i prawach użytkowników.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Powrót do strony głównej
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Polityka <span className="text-gradient-pink">Prywatności</span>
        </h1>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Informacje ogólne</h2>
            <p>
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
              przekazanych przez Użytkowników w związku z korzystaniem ze strony internetowej Aurine.
            </p>
            <p className="mt-4">
              Administratorem danych osobowych jest Aurine z siedzibą w Polsce.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Rodzaj przetwarzanych danych</h2>
            <p>Administrator przetwarza następujące dane osobowe:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Imię i nazwisko</li>
              <li>Adres e-mail</li>
              <li>Numer telefonu</li>
              <li>Dane dotyczące prowadzonej działalności gospodarczej (nazwa salonu, lokalizacja)</li>
              <li>Dane techniczne (adres IP, typ przeglądarki, system operacyjny)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Cel przetwarzania danych</h2>
            <p>Dane osobowe są przetwarzane w następujących celach:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Nawiązanie i utrzymanie kontaktu z klientem</li>
              <li>Realizacja usług marketingowych</li>
              <li>Wystawienie faktur i dokumentacji księgowej</li>
              <li>Przesyłanie raportów z kampanii reklamowych</li>
              <li>Analiza ruchu na stronie i optymalizacja treści</li>
              <li>Wypełnienie obowiązków prawnych ciążących na Administratorze</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Podstawa prawna przetwarzania</h2>
            <p>Przetwarzanie danych osobowych odbywa się na podstawie:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Zgody osoby, której dane dotyczą (art. 6 ust. 1 lit. a RODO)</li>
              <li>Realizacji umowy lub działań podejmowanych na żądanie osoby (art. 6 ust. 1 lit. b RODO)</li>
              <li>Wypełnienia obowiązku prawnego (art. 6 ust. 1 lit. c RODO)</li>
              <li>Prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Okres przechowywania danych</h2>
            <p>
              Dane osobowe są przechowywane przez okres niezbędny do realizacji celów, dla których zostały zebrane, 
              a także zgodnie z obowiązującymi przepisami prawa, w szczególności:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Przez okres trwania umowy i do czasu przedawnienia roszczeń</li>
              <li>Przez okres wymagany przepisami prawa (np. rachunkowe - 5 lat)</li>
              <li>Do czasu wycofania zgody przez osobę, której dane dotyczą</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Udostępnianie danych osobowych</h2>
            <p>Dane osobowe mogą być udostępniane:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Podmiotom świadczącym usługi księgowe i prawne</li>
              <li>Dostawcom systemów informatycznych i hostingowych</li>
              <li>Platformom reklamowym (Facebook/Meta, Google) w celu realizacji kampanii</li>
              <li>Organom państwowym na podstawie obowiązujących przepisów prawa</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Prawa osób, których dane dotyczą</h2>
            <p>Każda osoba ma prawo do:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania (poprawiania) danych</li>
              <li>Usunięcia danych</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania</li>
              <li>Cofnięcia zgody w dowolnym momencie</li>
              <li>Wniesienia skargi do organu nadzorczego (UODO)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Pliki cookies</h2>
            <p>
              Strona internetowa wykorzystuje pliki cookies w celu zapewnienia prawidłowego funkcjonowania, 
              analizy ruchu oraz dostosowania treści do potrzeb użytkowników. Użytkownik może zarządzać 
              plikami cookies poprzez ustawienia przeglądarki internetowej.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Bezpieczeństwo danych</h2>
            <p>
              Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę 
              przetwarzanych danych osobowych, w szczególności zabezpiecza dane przed dostępem osób 
              nieupoważnionych, utratą, uszkodzeniem lub zniszczeniem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Kontakt</h2>
            <p>
              W sprawach dotyczących przetwarzania danych osobowych oraz realizacji przysługujących praw, 
              prosimy o kontakt:
            </p>
            <p className="mt-4">
              Email: <a href="mailto:biuro@aurine.pl" className="text-primary hover:text-primary/80 transition-colors">biuro@aurine.pl</a>
              <br />
              Telefon: <a href="tel:+48731856524" className="text-primary hover:text-primary/80 transition-colors">+48 731 856 524</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Zmiany Polityki Prywatności</h2>
            <p>
              Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. 
              O wszelkich zmianach użytkownicy zostaną poinformowani poprzez komunikat na stronie internetowej.
            </p>
            <p className="mt-4 text-white/50 text-sm">
              Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót do strony głównej
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
