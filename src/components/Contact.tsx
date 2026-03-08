import { Mail, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.06] blur-[150px] rounded-full" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Porozmawiajmy o <span className="text-gradient-pink">Twoim salonie</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/50 max-w-xl mx-auto">
            Umów bezpłatną konsultację – chcemy poznać Twoją historię
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 sm:p-8 hover:border-white/[0.12] transition-all duration-500"
        >
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 mb-6 sm:mb-8">
            {[
              { icon: Mail, title: "Email", value: "biuro@aurine.pl", href: "mailto:biuro@aurine.pl" },
              { icon: Phone, title: "Telefon", value: "+48 731 856 524", href: "tel:+48731856524" },
              { icon: MessageCircle, title: "Messenger", value: "m.me/aurine", href: "https://m.me/aurine" },
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group text-center"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary/10 rounded-full mb-2.5 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(328,100%,54%/0.2)] transition-all">
                  <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-[10px] sm:text-xs text-white/35 mb-0.5">{contact.title}</div>
                <div className="text-xs sm:text-sm text-white font-medium group-hover:text-primary transition-colors break-all">{contact.value}</div>
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <motion.a
              href="mailto:biuro@aurine.pl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all shadow-[0_0_25px_hsl(328,100%,54%/0.3)] hover:shadow-[0_0_40px_hsl(328,100%,54%/0.5)]"
            >
              <Mail className="w-4 h-4" />
              Napisz do nas
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
