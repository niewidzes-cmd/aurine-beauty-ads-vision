import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogPreview = () => {
  const articles = [
    { slug: "post-vs-reklama", title: "Post na Facebooku ≠ Reklama", description: "Większość właścicielek salonów myśli, że publikując post na Facebooku, dociera do swoich obserwatorów. Niestety, to mit.", readTime: "5 min" },
    { slug: "jak-prowadzic-profil-salonu", title: "Jak prowadzić profil salonu na Facebooku", description: "Praktyczny poradnik - co publikować, jak często i jak budować zaangażowanie bez wydawania pieniędzy na reklamy.", readTime: "7 min" },
    { slug: "kiedy-warto-reklamowac", title: "Kiedy warto inwestować w reklamy", description: "Nie każdy salon potrzebuje kampanii reklamowych. Sprawdź, czy Twój biznes jest gotowy na płatne reklamy.", readTime: "6 min" },
  ];

  return (
    <section id="blog" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/15 rounded-full px-3 py-1 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs text-primary font-medium">Bezpłatne porady</span>
          </div>
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Wiedza, którą <span className="text-gradient-pink">możesz wykorzystać</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/55 max-w-xl mx-auto">
            Praktyczne wskazówki dla właścicielek salonów beauty
          </p>
        </motion.div>

        {/* Blog cards - first one featured, rest as list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <Link
            to={`/porady/${articles[0].slug}`}
            className="group block bg-gradient-to-br from-primary/[0.06] to-transparent border border-primary/10 hover:border-primary/25 rounded-2xl p-5 sm:p-7 transition-all duration-500"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{articles[0].title}</h3>
                <p className="text-white/45 text-xs sm:text-sm leading-relaxed max-w-lg">{articles[0].description}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0 pt-1">
                <span className="text-[10px] sm:text-xs text-white/25">{articles[0].readTime}</span>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="divide-y divide-white/[0.06] mb-8">
          {articles.slice(1).map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            >
              <Link
                to={`/porady/${article.slug}`}
                className="group flex items-start justify-between gap-4 py-5 sm:py-6"
              >
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-white/45 text-xs sm:text-sm leading-relaxed">{article.description}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 pt-1">
                  <span className="text-[10px] sm:text-xs text-white/25">{article.readTime}</span>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>
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
