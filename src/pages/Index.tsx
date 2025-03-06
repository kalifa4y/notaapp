
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ResultsLookup from "@/components/ResultsLookup";
import AccountTypesCard from "@/components/AccountTypesCard";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      
      <main>
        <Hero />
        
        <Features />
        
        <section id="results-lookup" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <ResultsLookup />
          </div>
        </section>
        
        <AccountTypesCard />
        
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Prêt à rejoindre Nota App ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Créez votre compte gratuitement en quelques secondes et accédez à toutes nos fonctionnalités
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="h-12 px-8 rounded-lg text-base">
                <a href="/register">
                  Créer un compte
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-lg text-base">
                <a href="/services/results">
                  Consulter mes résultats
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {showScrollToTop && (
        <Button
          className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg"
          size="icon"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;
