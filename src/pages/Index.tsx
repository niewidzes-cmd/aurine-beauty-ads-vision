import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <Results />
      <Contact />
    </div>
  );
};

export default Index;
