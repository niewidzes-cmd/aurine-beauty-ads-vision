import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import aurineLogoImage from "@/assets/aurine-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-lg border-b border-white/[0.06]" : "bg-black/80 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-10 lg:px-12">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <button onClick={handleLogoClick} className="flex items-center gap-2 hover:opacity-80 transition-opacity z-50">
            <img src={aurineLogoImage} alt="Aurine" className="h-7 w-7 sm:h-8 sm:w-8" />
            <span className="text-lg sm:text-xl font-bold text-white">Aurine</span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {[
              { label: "Usługi", id: "services" },
              { label: "Jak to działa", id: "process" },
              { label: "O nas", id: "about" },
              { label: "Opinie", id: "testimonials" },
              { label: "FAQ", id: "faq" },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-white/70 hover:text-primary transition-colors text-sm">
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-sm transition-all hover:shadow-[0_0_15px_hsl(328,100%,54%/0.4)]">
              Kontakt
            </button>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white z-50">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/98 backdrop-blur-lg pt-20 px-6 animate-fade-in">
          <div className="flex flex-col gap-5">
            {["services", "process", "about", "testimonials", "faq"].map((id) => (
              <button key={id} onClick={() => scrollToSection(id)} className="text-white text-lg hover:text-primary transition-colors text-left">
                {id === "services" ? "Usługi" : id === "process" ? "Jak to działa" : id === "about" ? "O nas" : id === "testimonials" ? "Opinie" : "FAQ"}
              </button>
            ))}
            <button onClick={() => scrollToSection("contact")} className="bg-primary text-white px-5 py-2.5 rounded-full text-lg font-semibold mt-2 w-fit">
              Kontakt
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
