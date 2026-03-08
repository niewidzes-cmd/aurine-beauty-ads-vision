import { ArrowLeft, BookOpen, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogIndex = () => {
  const articles = [
    { slug: "post-vs-reklama", title: "Post na Facebooku ≠ Reklama", description: "Większość właścicielek salonów myśli, że publikując post na Facebooku, dociera do swoich obserwatorów. Niestety, to mit.", readTime: "5 min", category: "Facebook Marketing" },
    { slug: "jak-prowadzic-profil-salonu", title: "Jak prowadzić profil salonu na Facebooku", description: "Praktyczny poradnik - co publikować, jak często i jak budować zaangażowanie bez wydawania pieniędzy na reklamy.", readTime: "7 min", category: "Social Media" },
    { slug: "kiedy-warto-reklamowac", title: "Kiedy warto inwestować w reklamy", description: "Nie każdy salon potrzebuje kampanii reklamowych od razu. Sprawdź, czy Twój biznes jest gotowy na płatne reklamy.", readTime: "6 min", category: "Strategie" },
    { slug: "jak-przygotowac-sie-do-kampanii", title: "Jak przygotować się do pierwszej kampanii", description: "Zanim wydasz pierwszy złoty na reklamy, upewnij się, że wszystko jest gotowe. Checklista i praktyczne wskazówki.", readTime: "6 min", category: "Przygotowanie" },
    { slug: "jak-ocenic-skutecznosc-reklamy", title: "Jak ocenić, czy reklama działa", description: "Kampania działa, ale skąd wiesz, czy się opłaca? Poznaj kluczowe wskaźniki.", readTime: "5 min", category: "Analiza" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-6 sm:mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Powrót
          </Link>

          <div className="mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4">
              <BookOpen className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-primary font-medium">Bezpłatne porady</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-gradient-pink">Porady</span> dla salonów beauty
            </h1>
            <p className="text-sm sm:text-base text-white/55 max-w-2xl">
              Praktyczna wiedza o marketingu w social media, która pomoże Ci rozwinąć salon.
            </p>
          </div>

          {/* Featured first article */}
          <Link
            to={`/porady/${articles[0].slug}`}
            className="group block bg-gradient-to-br from-primary/[0.08] to-transparent border border-primary/15 rounded-2xl p-5 sm:p-7 mb-5 sm:mb-6 hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-primary font-medium bg-primary/10 px-2.5 py-0.5 rounded-full">{articles[0].category}</span>
              <span className="flex items-center gap-1 text-[10px] sm:text-xs text-white/40"><Clock className="w-3 h-3" />{articles[0].readTime}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{articles[0].title}</h2>
            <p className="text-white/55 text-sm leading-relaxed">{articles[0].description}</p>
          </Link>

          {/* Rest as list */}
          <div className="divide-y divide-white/[0.06]">
            {articles.slice(1).map((article, index) => (
              <Link
                key={index}
                to={`/porady/${article.slug}`}
                className="group flex items-start justify-between gap-4 py-5 sm:py-6"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] sm:text-xs text-primary font-medium">{article.category}</span>
                    <span className="text-[10px] sm:text-xs text-white/30">· {article.readTime}</span>
                  </div>
                  <h2 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-primary transition-colors">{article.title}</h2>
                  <p className="text-white/45 text-xs sm:text-sm leading-relaxed">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogIndex;
