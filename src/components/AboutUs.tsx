import { Heart, Target, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kim <span className="text-gradient-pink">jesteśmy?</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Agencja, która naprawdę rozumie branżę beauty
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main story */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 mb-12 animate-fade-in-up">
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Aurine powstało z prostej obserwacji – większość agencji marketingowych
              nie rozumie specyfiki branży beauty. Tworzą kampanie, które wyglądają
              ładnie, ale nie przynoszą zapisów na wizyty.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Dlatego postanowiliśmy się wyspecjalizować. Przez ostatnie lata
              pracowaliśmy wyłącznie z salonami kosmetycznymi, gabinetami medycyny
              estetycznej i markami beauty. Wiemy, co przemawia do Waszych klientek
              i jak dotrzeć do nich w sposób autentyczny.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Dziś pomagamy dziesiątkom salonów w całej Polsce – od małych
              miejscowości po większe miasta. Każda kampania jest szyta na miarę,
              bo każdy salon jest inny.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Autentyczność",
                description:
                  "Mówimy wprost i bez ściemy. Jeśli coś nie zadziała, powiemy Ci o tym pierwszego dnia.",
              },
              {
                icon: Target,
                title: "Efektywność",
                description:
                  "Każda złotówka z Twojego budżetu musi się liczyć. Nie marnujemy pieniędzy na eksperymenty.",
              },
              {
                icon: Users,
                title: "Partnerstwo",
                description:
                  "Traktujemy Twój biznes jak swój. Twój sukces to nasz sukces, i odwrotnie.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-primary/30 transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
