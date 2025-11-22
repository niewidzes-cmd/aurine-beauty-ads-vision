import { ArrowUpRight, Users2, DollarSign, TrendingUp } from "lucide-react";
import beautyIcons from "@/assets/beauty-icons.png";

const Results = () => {
  const stats = [
    {
      icon: Users2,
      value: "300%",
      label: "Wzrost liczby klientów",
      description: "Średnio dla naszych klientów",
    },
    {
      icon: DollarSign,
      value: "2.5x",
      label: "ROI kampanii",
      description: "Zwrot z inwestycji",
    },
    {
      icon: TrendingUp,
      value: "-40%",
      label: "Koszt pozyskania",
      description: "Spadek kosztu nowego klienta",
    },
  ];

  return (
    <section id="results" className="section-padding bg-black relative overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={beautyIcons}
          alt=""
          className="w-full h-full object-cover mix-blend-screen"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Efekty, które się <span className="text-gradient-pink">liczą</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Nasze kampanie przynoszą mierzalne rezultaty dla biznesów beauty
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-5xl font-bold text-white mb-2 glow-pink">{stat.value}</div>
              <div className="text-lg font-semibold text-white/90 mb-1">{stat.label}</div>
              <div className="text-sm text-white/60">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Benefits list */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Dlaczego warto z nami współpracować?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Specjalizacja w branży beauty",
              "Przejrzyste raportowanie wyników",
              "Elastyczne pakiety współpracy",
              "Dedykowany opiekun kampanii",
              "Stała optymalizacja budżetu",
              "Wsparcie w content creation",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.05 + 0.3}s` }}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
