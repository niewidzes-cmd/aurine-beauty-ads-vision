import { ArrowRight } from "lucide-react";
import blogPreparation from "@/assets/blog-preparation.jpg";
import blogPhotos from "@/assets/blog-photos.jpg";
import blogAnalytics from "@/assets/blog-analytics.jpg";
import blogSocialMedia from "@/assets/blog-social-media.jpg";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Jak przygotować salon do kampanii reklamowej?",
      excerpt: "Dowiedz się, co zrobić przed uruchomieniem kampanii, aby zmaksymalizować jej efektywność i być gotową na napływ nowych klientek.",
      image: blogPreparation,
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Jakie zdjęcia najlepiej działają w reklamach?",
      excerpt: "Poznaj sekrety profesjonalnych zdjęć, które przyciągają uwagę i przekonują potencjalne klientki do umówienia wizyty w Twoim salonie.",
      image: blogPhotos,
      readTime: "4 min",
    },
    {
      id: 3,
      title: "Jak mierzyć efekty kampanii reklamowej?",
      excerpt: "Praktyczny poradnik, jak śledzić wyniki kampanii i rozumieć, czy Twoje pieniądze są dobrze wydane. Bez skomplikowanego żargonu.",
      image: blogAnalytics,
      readTime: "6 min",
    },
    {
      id: 4,
      title: "Content w social mediach - co publikować?",
      excerpt: "Sprawdzone pomysły na posty, które angażują Twoich obserwatorów i budują zaufanie do Twojego salonu jeszcze przed pierwszą wizytą.",
      image: blogSocialMedia,
      readTime: "5 min",
    },
  ];

  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Poradnik dla właścicielek salonów
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Praktyczne porady i wskazówki, które pomogą Ci lepiej przygotować się do kampanii i osiągnąć lepsze rezultaty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {article.readTime}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Czytaj więcej
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
