import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "48123456789"; // Replace with actual phone number
  const message = "Cześć! Interesuje mnie współpraca z Aurine.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg shadow-primary/40 transition-transform duration-300 hover:scale-105 hover:bg-primary/90"
      aria-label="Zadzwoń do nas"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
