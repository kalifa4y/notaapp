
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, X, Brain, Sparkles, FileText, Building, Rocket, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ServicesPremium = () => {
  const features = {
    basic: [
      "Consultation des résultats d'examens",
      "Relevés de notes détaillés",
      "Postulation aux concours",
      "Achat de timbres numériques",
      "Espace personnel basique",
    ],
    premium: [
      "Tout le contenu du compte basique",
      "Assistant IA pour génération de CV",
      "Recommandations de formations personnalisées",
      "Postulation automatique aux offres d'emploi",
      "Exercices d'entraînement avancés",
      "Support prioritaire",
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                <Sparkles className="h-4 w-4 text-indigo-500 dark:text-indigo-400 mr-2" />
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Services Premium</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Optimisez votre parcours académique et professionnel
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                Accédez à des fonctionnalités exclusives pour maximiser vos chances de réussite
              </p>
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Découvrir l'offre Premium <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                Choisissez l'offre adaptée à vos besoins
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Basic Plan */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Compte Basique</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">Pour un accès essentiel à vos résultats</p>
                    
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">Gratuit</span>
                    </div>
                    
                    <Button variant="outline" className="w-full mb-8">
                      S'inscrire gratuitement
                    </Button>
                    
                    <div className="space-y-4">
                      {features.basic.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 mr-3">
                            <Check className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">{feature}</p>
                        </div>
                      ))}
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-3">
                          <X className="h-5 w-5 text-gray-400" />
                        </div>
                        <p className="text-gray-400">Assistant IA</p>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-3">
                          <X className="h-5 w-5 text-gray-400" />
                        </div>
                        <p className="text-gray-400">Recommandations personnalisées</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Premium Plan */}
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-100 dark:border-indigo-800/30 rounded-xl shadow-md overflow-hidden relative">
                  <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 transform translate-x-[30%] translate-y-[40%] rotate-45">
                    RECOMMANDÉ
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">Compte Premium</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">Maximisez vos chances de réussite</p>
                    
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">5000 FCFA</span>
                      <span className="text-gray-500 dark:text-gray-400"> / mois</span>
                    </div>
                    
                    <Button className="w-full mb-8 bg-indigo-600 hover:bg-indigo-700">
                      Commencer l'essai gratuit
                    </Button>
                    
                    <div className="space-y-4">
                      {features.premium.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 mr-3">
                            <Check className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features Detail */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                Fonctionnalités Premium exclusives
              </h2>
              
              <div className="space-y-12">
                {/* AI Assistant Feature */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mb-4 md:mb-0 md:mr-6">
                      <Brain className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Assistant IA intelligent</h3>
                      <p className="text-gray-600 dark:text-gray-300">Un assistant personnel qui vous aide à préparer votre carrière</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-indigo-500" /> Génération de CV
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Notre IA analyse votre parcours et génère un CV professionnel adapté au marché malien et international.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                        <Building className="h-4 w-4 mr-2 text-indigo-500" /> Postulation automatique
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Identifie les offres d'emploi correspondant à votre profil et vous permet de postuler en un clic.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                        <Rocket className="h-4 w-4 mr-2 text-indigo-500" /> Recommandations de formations
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Suggère des formations en ligne et en présentiel pour développer les compétences recherchées dans votre domaine.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                        <Sparkles className="h-4 w-4 mr-2 text-indigo-500" /> Analyse personnalisée
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Vous offre une analyse détaillée de vos forces et faiblesses pour mieux orienter votre parcours.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Testimonials */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-8">
                    Ce que disent nos utilisateurs Premium
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        "Grâce au compte Premium, j'ai pu créer un CV professionnel qui m'a permis de décrocher un stage dans une grande entreprise. Les recommandations de formation sont également très pertinentes."
                      </p>
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <span className="text-blue-600 font-medium">AT</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Amadou Traoré</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Étudiant en informatique</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        "L'assistant IA m'a aidé à trouver des formations complémentaires après mon BAC. J'ai pu postuler à trois offres d'emploi à temps partiel qui correspondent parfaitement à mon profil."
                      </p>
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <span className="text-blue-600 font-medium">FK</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Fatoumata Keita</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Bachelière en sciences</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-indigo-50 dark:bg-indigo-900/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Prêt à passer au niveau supérieur ?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Commencez votre essai gratuit de 7 jours et découvrez tous les avantages Premium sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  Essayer Premium gratuitement
                </Button>
                <Button size="lg" variant="outline">
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPremium;
