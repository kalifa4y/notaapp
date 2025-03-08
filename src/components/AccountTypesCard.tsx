
import { Check, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const AccountTypesCard = () => {
  const basicFeatures = [
    "Consultation des résultats d'examens",
    "Postulation aux concours/examens",
    "Tableau de bord personnalisé",
    "Accès aux exercices d'entraînement"
  ];

  const premiumFeatures = [
    "Toutes les fonctionnalités du compte basique",
    "Assistant IA pour la génération de CV",
    "Candidature automatisée aux offres d'emploi",
    "Recommandations de formations personnalisées",
    "Support prioritaire",
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-block mb-4 bg-blue-50 dark:bg-blue-900/30 px-4 py-1.5 rounded-full">
            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
              Nos formules
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choisissez l'offre qui vous convient
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Des solutions adaptées à tous les besoins, de la simple consultation à l'accompagnement complet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Account */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Compte Basique</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Idéal pour consulter vos résultats et postuler à des examens</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">Gratuit</span>
              </div>

              <ul className="space-y-3 mb-8">
                {basicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="w-full" variant="outline">
                <Link to="/register">
                  Créer un compte
                </Link>
              </Button>
            </div>
          </div>

          {/* Premium Account */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl overflow-hidden shadow-sm border border-blue-100 dark:border-blue-800/30 transition-all duration-300 hover:shadow-md relative">
            {/* Popular badge */}
            <div className="absolute top-4 right-4">
              <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
                <Star className="h-3 w-3 mr-1" />
                RECOMMANDÉ
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Compte Premium</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Accès complet avec assistant IA pour booster votre carrière</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">5000 FCFA</span>
                <span className="text-gray-500 dark:text-gray-400 ml-1">/mois</span>
              </div>

              <ul className="space-y-3 mb-8">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="w-full" variant="default">
                <Link to="/services/premium">
                  Passer au Premium
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTypesCard;
