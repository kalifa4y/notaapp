
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative pt-20 pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-1/4 h-1/4 bg-indigo-100 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center appear">
          <div className="inline-block mb-4 bg-blue-50 dark:bg-blue-900/30 px-4 py-1.5 rounded-full">
            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
              Simplifiez votre parcours académique
            </p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight text-balance">
            Accédez à vos <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">résultats d'examens</span> en toute simplicité
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto appear appear-delay-1">
            Une plateforme conçue pour les collégiens, lycéens et étudiants qui souhaitent consulter facilement leurs résultats d'examens et leurs relevés de notes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 appear appear-delay-2">
            <Button asChild size="lg" className="h-12 px-8 rounded-lg text-base">
              <Link to="/services/results">
                Consulter mes résultats
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-lg text-base">
              <Link to="/register" className="flex items-center">
                Créer un compte
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero Image/Illustration */}
        <div className="mt-16 max-w-4xl mx-auto appear appear-delay-3">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 -mx-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl filter blur-xl opacity-70"></div>
            
            {/* Card */}
            <div className="relative glass-card rounded-xl overflow-hidden shadow-lg">
              <div className="p-6 md:p-8">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tableau de bord</h3>
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">DEF 2023</h4>
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Résultat: <span className="text-green-500 font-medium">Admis</span></p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Moyenne: <span className="font-medium">14.5/20</span></p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">BAC 2023</h4>
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Résultat: <span className="text-green-500 font-medium">Admis</span></p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Mention: <span className="font-medium">Bien</span></p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Concours USTTB</h4>
                        <div className="h-2.5 w-2.5 rounded-full bg-gray-400"></div>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Statut: <span className="text-gray-500 font-medium">En attente</span></p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Date des résultats: <span className="font-medium">12/09/2023</span></p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800/30">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-800/50 rounded-full p-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-blue-800 dark:text-blue-300 font-medium">Nouvelle session d'entrainement disponible</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Préparez-vous pour les examens avec nos nouveaux exercices de mathématiques.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
