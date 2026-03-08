import { Mail, Phone, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} id="contact" className={`section-padding bg-[#050505] relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 blur-3xl rounded-full" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Porozmawiajmy o <span className="text-gradient-pink">Twoim salonie</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/60 max-w-xl mx-auto">
            Umów bezpłatną konsultację – chcemy poznać Twoją historię
          </p>
        </div>

        {/* Contact methods - open, no card wrapper */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 animate-scale-in">
          {[
            { icon: Mail, title: "Email", value: "biuro@aurine.pl", href: "mailto:biuro@aurine.pl" },
            { icon: Phone, title: "Telefon", value: "+48 731 856 524", href: "tel:+48731856524" },
            { icon: MessageCircle, title: "Messenger", value: "m.me/aurine", href: "https://m.me/aurine" },
          ].map((contact, index) => (
            <a key={index} href={contact.href} className="group text-center hover:scale-105 transition-transform">
              <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary/10 rounded-full mb-2.5 group-hover:bg-primary/20 transition-colors">
                <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="text-[10px] sm:text-xs text-white/45 mb-0.5">{contact.title}</div>
              <div className="text-xs sm:text-sm text-white font-medium group-hover:text-primary transition-colors break-all">{contact.value}</div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="mailto:biuro@aurine.pl"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all hover:scale-105 hover:shadow-[0_0_25px_hsl(328,100%,54%/0.5)]"
          >
            <Mail className="w-4 h-4" />
            Napisz do nas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
