import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import aurineLogoImage from "@/assets/aurine-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 md:px-10 lg:px-12 py-8 sm:py-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <img src={aurineLogoImage} alt="Aurine" className="h-7 w-7" />
              <span className="text-lg font-bold text-white">Aurine</span>
            </div>
            <p className="text-white/50 mb-3 max-w-sm text-xs sm:text-sm leading-relaxed">
              Specjalizujemy się w prowadzeniu kampanii reklamowych dla salonów kosmetycznych. Pomagamy Ci dotrzeć do idealnych klientek.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/5 hover:bg-primary/20 border border-white/[0.06] rounded-full flex items-center justify-center transition-all">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/5 hover:bg-primary/20 border border-white/[0.06] rounded-full flex items-center justify-center transition-all">
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Menu</h3>
            <ul className="space-y-1.5">
              {[
                { label: "Usługi", id: "services" },
                { label: "Jak to działa", id: "process" },
                { label: "O nas", id: "about" },
                { label: "Opinie", id: "testimonials" },
                { label: "FAQ", id: "faq" },
              ].map((link) => (
                <li key={link.id}>
                  <Link to={`/#${link.id}`} className="text-white/50 hover:text-primary transition-colors text-xs sm:text-sm">{link.label}</Link>
                </li>
              ))}
              <li><Link to="/o-nas" className="text-white/50 hover:text-primary transition-colors text-xs sm:text-sm">Więcej o nas</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Kontakt</h3>
            <ul className="space-y-2">
              <li><a href="mailto:biuro@aurine.pl" className="flex items-center gap-1.5 text-white/50 hover:text-primary transition-colors text-xs sm:text-sm"><Mail className="w-3.5 h-3.5" />biuro@aurine.pl</a></li>
              <li><a href="tel:+48731856524" className="flex items-center gap-1.5 text-white/50 hover:text-primary transition-colors text-xs sm:text-sm"><Phone className="w-3.5 h-3.5" />+48 731 856 524</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">© 2024 Aurine. Wszystkie prawa zastrzeżone.</p>
          <div className="flex gap-4 text-xs">
            <Link to="/polityka-prywatnosci" className="text-white/30 hover:text-white/50 transition-colors">Polityka prywatności</Link>
            <Link to="/regulamin" className="text-white/30 hover:text-white/50 transition-colors">Regulamin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
