import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=48731856524&text=Cze%C5%9B%C4%87!%20Chcia%C5%82abym%20dowiedzie%C4%87%20si%C4%99%20wi%C4%99cej%20o%20kampaniach%20reklamowych%20dla%20mojego%20salonu.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-elegant hover:scale-110 hover:shadow-[var(--shadow-pink-glow)] transition-all duration-300"
      aria-label="Kontakt WhatsApp"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
