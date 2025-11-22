import { useEffect, useRef, useState } from "react";
import { Building2, TrendingUp, Users, Award } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    salons: 0,
    campaigns: 0,
    growth: 0,
    experience: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const targets = {
      salons: 45,
      campaigns: 180,
      growth: 250,
      experience: 5,
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        salons: Math.floor(targets.salons * progress),
        campaigns: Math.floor(targets.campaigns * progress),
        growth: Math.floor(targets.growth * progress),
        experience: Math.floor(targets.experience * progress),
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      icon: Building2,
      value: counts.salons,
      suffix: "+",
      label: "Obsługiwanych salonów",
      description: "W całej Polsce",
    },
    {
      icon: TrendingUp,
      value: counts.campaigns,
      suffix: "+",
      label: "Kampanii reklamowych",
      description: "Skutecznie zrealizowanych",
    },
    {
      icon: Users,
      value: counts.growth,
      suffix: "%",
      label: "Średni wzrost",
      description: "Liczby nowych klientek",
    },
    {
      icon: Award,
      value: counts.experience,
      suffix: "+",
      label: "Lat doświadczenia",
      description: "W branży beauty",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-aurine-pink rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nasze <span className="text-gradient-pink">osiągnięcia</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Liczby, które mówią same za siebie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Value */}
              <div className="mb-2">
                <span className="text-5xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-4xl font-bold text-primary">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm">
                {stat.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
