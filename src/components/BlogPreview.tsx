import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const BlogPreview = () => {
  const { ref, isVisible } = useScrollAnimation();

  const articles = [
    { slug: "post-vs-reklama", title: "Post na Facebooku ≠ Reklama", description: "Większość właścicielek salonów myśli, że publikując post na Facebooku, dociera do swoich obserwatorów. Niestety, to mit.", readTime: "5 min" },
    { slug: "jak-prowadzic-profil-salonu", title: "Jak prowadzić profil salonu na Facebooku", description: "Praktyczny poradnik - co publikować, jak często i jak budować zaangażowanie bez wydawania pieniędzy na reklamy.", readTime: "7 min" },
    { slug: "kiedy-warto-reklamowac", title: "Kiedy warto inwestować w reklamy", description: "Nie każdy salon potrzebuje kampanii reklamowych. Sprawdź, czy Twój biznes jest gotowy na płatne reklamy.", readTime: "6 min" },
  ];

  return (
    <section ref={ref} id="blog" className={`section-padding bg-black relative overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/15 rounded-full px-3 py-1 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs text-primary font-medium">Bezpłatne porady</span>
          </div>
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Wiedza, którą <span className="text-gradient-pink">możesz wykorzystać</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/60 max-w-xl mx-auto">
            Praktyczne wskazówki dla właścicielek salonów beauty
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-8">
          {articles.map((article, index) => (
            <Link
              key={index}
              to={`/porady/${article.slug}`}
              className="group bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 sm:p-5 hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                <span className="text-[10px] sm:text-xs text-white/40">{article.readTime}</span>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-3">{article.description}</p>
              <div className="flex items-center gap-1.5 text-primary text-xs font-medium">
                Czytaj więcej
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/porady" className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors font-semibold text-sm">
            Zobacz wszystkie porady
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
