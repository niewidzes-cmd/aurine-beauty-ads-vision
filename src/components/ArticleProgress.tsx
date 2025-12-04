import { Link } from "react-router-dom";

interface ArticleProgressProps {
  currentArticle: number;
  totalArticles?: number;
}

const articles = [
  { num: 1, title: "Post ≠ Reklama", href: "/porady/post-vs-reklama" },
  { num: 2, title: "Jak prowadzić profil", href: "/porady/jak-prowadzic-profil-salonu" },
  { num: 3, title: "Kiedy warto reklamować", href: "/porady/kiedy-warto-reklamowac" },
  { num: 4, title: "Przygotowanie do kampanii", href: "/porady/jak-przygotowac-sie-do-kampanii" },
  { num: 5, title: "Ocena skuteczności", href: "/porady/jak-ocenic-skutecznosc-reklamy" },
];

const ArticleProgress = ({ currentArticle, totalArticles = 5 }: ArticleProgressProps) => {
  const progressPercent = (currentArticle / totalArticles) * 100;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-white/50">Seria porad dla właścicielek salonów</span>
        <span className="text-sm font-semibold text-primary">{currentArticle}/{totalArticles}</span>
      </div>
      
      {/* Progress bar */}
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden mb-4">
        <div 
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
        {/* Step indicators */}
        <div className="absolute inset-0 flex justify-between px-0">
          {[...Array(totalArticles)].map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full transform -translate-y-0 ${
                index + 1 <= currentArticle ? 'bg-primary' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Article titles */}
      <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-hide">
        {articles.map((article) => (
          <Link
            key={article.num}
            to={article.href}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs transition-all ${
              article.num === currentArticle
                ? 'bg-primary text-white font-medium'
                : article.num < currentArticle
                ? 'bg-white/10 text-white/70 hover:bg-white/15'
                : 'bg-white/5 text-white/40 hover:bg-white/10'
            }`}
          >
            {article.num}. {article.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleProgress;