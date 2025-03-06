
import { CheckCircle, Award, BookOpen, CreditCard } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <CheckCircle className="h-10 w-10 text-blue-500" />,
      title: "Vérification facile des résultats",
      description: "Accédez instantanément à vos résultats d'examens et relevés de notes en quelques clics, sans procédure complexe."
    },
    {
      icon: <Award className="h-10 w-10 text-blue-500" />,
      title: "Suivi de vos concours",
      description: "Visualisez l'état de vos candidatures et admissions aux concours avec des indicateurs clairs et intuitifs."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-blue-500" />,
      title: "Ressources d'entraînement",
      description: "Préparez-vous efficacement grâce à nos exercices personnalisés, annales et corrections détaillées."
    },
    {
      icon: <CreditCard className="h-10 w-10 text-blue-500" />,
      title: "Timbres numériques",
      description: "Achetez des timbres numériques pour formaliser vos demandes de documents officiels sans vous déplacer."
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-block mb-4 bg-blue-50 dark:bg-blue-900/30 px-4 py-1.5 rounded-full">
            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
              Pourquoi choisir Nota App
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tout ce dont vous avez besoin pour réussir
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Découvrez les fonctionnalités qui rendent Nota App indispensable pour votre parcours académique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-blue-100 dark:hover:border-blue-900/30"
            >
              <div className="mb-5 bg-blue-50 dark:bg-blue-900/20 w-16 h-16 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
