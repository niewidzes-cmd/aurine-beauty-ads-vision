import { useState, useEffect } from "react";
import aurineLogoImage from "@/assets/aurine-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={aurineLogoImage}
              alt="Aurine"
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-white">Aurine</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-white/80 hover:text-primary transition-colors"
            >
              Usługi
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-white/80 hover:text-primary transition-colors"
            >
              Proces
            </button>
            <button
              onClick={() => scrollToSection("results")}
              className="text-white/80 hover:text-primary transition-colors"
            >
              Efekty
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full transition-all hover:shadow-[0_0_20px_hsl(328,100%,54%/0.5)]"
            >
              Kontakt
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
