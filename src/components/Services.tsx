import { Target, TrendingUp, Users, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Precyzyjne targetowanie",
      description:
        "Dotrzemy do idealnych klientów dla Twojego salonu - kobiet zainteresowanych zabiegami beauty w odpowiednim wieku i lokalizacji.",
    },
    {
      icon: TrendingUp,
      title: "Optymalizacja kampanii",
      description:
        "Stale monitorujemy i optymalizujemy kampanie, aby maksymalizować zwrot z inwestycji i obniżać koszty pozyskania klienta.",
    },
    {
      icon: Sparkles,
      title: "Kreacje premium",
      description:
        "Tworzymy atrakcyjne wizualnie reklamy, które wyróżniają się w feedzie i skutecznie przyciągają uwagę potencjalnych klientek.",
    },
    {
      icon: Users,
      title: "Analiza i raportowanie",
      description:
        "Otrzymujesz przejrzyste raporty z wynikami kampanii i rekomendacjami dalszych działań. Zawsze wiesz, za co płacisz.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-black relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kompleksowa obsługa
            <br />
            <span className="text-gradient-pink">Facebook Ads</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Zajmiemy się wszystkim - od strategii po realizację kampanii
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(328,100%,54%/0.2)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
