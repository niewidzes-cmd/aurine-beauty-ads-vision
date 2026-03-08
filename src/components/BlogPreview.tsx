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
      <div className="max-w-5xl mx-auto relative z-10">
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

        {/* Clean list layout */}
        <div className="divide-y divide-white/[0.06] mb-8">
          {articles.map((article, index) => (
            <Link
              key={index}
              to={`/porady/${article.slug}`}
              className="group flex items-start justify-between gap-4 py-5 sm:py-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{article.description}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0 pt-1">
                <span className="text-[10px] sm:text-xs text-white/30">{article.readTime}</span>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
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
