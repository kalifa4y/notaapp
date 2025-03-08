
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-500">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 sm:p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Conditions générales d'utilisation
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                Bienvenue sur Nota App. En utilisant notre service, vous acceptez de respecter les présentes conditions d'utilisation. Veuillez les lire attentivement.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">1. Acceptation des conditions</h2>
              <p className="mb-4">
                En accédant à ou en utilisant Nota App, vous acceptez d'être lié par ces conditions. Si vous n'acceptez pas toutes les conditions énoncées ici, vous ne pouvez pas utiliser le service.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">2. Description du service</h2>
              <p className="mb-4">
                Nota App est une plateforme qui permet aux étudiants et aux établissements scolaires de consulter et de gérer les résultats d'examens et autres informations éducatives. Nous nous réservons le droit de modifier ou d'interrompre, temporairement ou définitivement, le service à tout moment, avec ou sans préavis.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">3. Inscriptions et comptes</h2>
              <p className="mb-4">
                Pour utiliser certaines fonctionnalités du service, vous devez créer un compte. Vous êtes responsable du maintien de la confidentialité de votre compte et mot de passe, et vous acceptez de ne pas partager vos informations d'identification avec des tiers. Vous devez nous notifier immédiatement de toute utilisation non autorisée de votre compte.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">4. Données personnelles</h2>
              <p className="mb-4">
                Votre utilisation du service est également régie par notre <Link to="/privacy" className="text-blue-600 hover:text-blue-500">Politique de confidentialité</Link>, qui explique comment nous collectons, utilisons et protégeons vos données personnelles.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">5. Propriété intellectuelle</h2>
              <p className="mb-4">
                Le contenu, les fonctionnalités et les fonctions disponibles sur Nota App sont la propriété de Nota App ou de ses concédants de licence et sont protégés par les lois sur la propriété intellectuelle. Vous ne pouvez pas reproduire, distribuer, modifier, créer des œuvres dérivées, afficher publiquement ou exploiter commercialement tout élément du service sans autorisation écrite préalable.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">6. Limitation de responsabilité</h2>
              <p className="mb-4">
                Dans la mesure autorisée par la loi, Nota App ne sera pas responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser le service.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">7. Modifications des conditions</h2>
              <p className="mb-4">
                Nous nous réservons le droit, à notre seule discrétion, de modifier ou remplacer ces conditions à tout moment. Si une révision est importante, nous essaierons de fournir un préavis d'au moins 30 jours avant l'entrée en vigueur des nouvelles conditions.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">8. Contact</h2>
              <p className="mb-4">
                Si vous avez des questions concernant ces conditions, veuillez nous contacter à <a href="mailto:contact@notaapp.com" className="text-blue-600 hover:text-blue-500">contact@notaapp.com</a>.
              </p>
              
              <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                Dernière mise à jour: 1 juin 2023
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
