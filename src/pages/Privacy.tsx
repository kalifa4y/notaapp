
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
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
              Politique de confidentialité
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                Cette politique de confidentialité décrit comment Nota App collecte, utilise et partage vos informations personnelles lorsque vous utilisez notre service. Veuillez la lire attentivement.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">1. Informations que nous collectons</h2>
              <p className="mb-4">
                Lorsque vous vous inscrivez à Nota App, nous collectons les informations suivantes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Votre nom et prénom</li>
                <li>Votre adresse email</li>
                <li>Votre date de naissance</li>
                <li>Votre niveau d'études</li>
                <li>D'autres informations que vous choisissez de nous fournir</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">2. Comment nous utilisons vos informations</h2>
              <p className="mb-4">
                Nous utilisons les informations que nous collectons pour:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Fournir, maintenir et améliorer notre service</li>
                <li>Vous authentifier et personnaliser votre expérience</li>
                <li>Communiquer avec vous, y compris pour vous envoyer des notifications relatives à votre compte</li>
                <li>Protéger contre les activités frauduleuses ou abusives</li>
                <li>Se conformer aux obligations légales</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">3. Partage de vos informations</h2>
              <p className="mb-4">
                Nous ne vendons pas vos informations personnelles à des tiers. Nous pouvons partager vos informations dans les circonstances suivantes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Avec des prestataires de services qui nous aident à fournir le service</li>
                <li>Lorsque requis par la loi ou pour protéger nos droits</li>
                <li>Dans le cadre d'une fusion, acquisition ou vente d'actifs</li>
                <li>Avec votre consentement ou selon vos instructions</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">4. Sécurité des données</h2>
              <p className="mb-4">
                Nous prenons des mesures raisonnables pour protéger vos informations personnelles contre la perte, le vol, l'utilisation abusive et l'accès non autorisé. Cependant, aucun système de sécurité n'est impénétrable et nous ne pouvons garantir la sécurité absolue de vos informations.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">5. Vos droits</h2>
              <p className="mb-4">
                Vous avez certains droits concernant vos informations personnelles, notamment:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Accéder à vos informations personnelles</li>
                <li>Rectifier les informations inexactes</li>
                <li>Supprimer vos informations dans certaines circonstances</li>
                <li>Limiter ou vous opposer au traitement de vos informations</li>
                <li>Retirer votre consentement à tout moment</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">6. Enfants</h2>
              <p className="mb-4">
                Notre service s'adresse aux personnes âgées d'au moins 12 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 12 ans. Si vous êtes un parent ou tuteur et que vous pensez que votre enfant nous a fourni des informations personnelles, veuillez nous contacter.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">7. Modifications de cette politique</h2>
              <p className="mb-4">
                Nous pouvons modifier cette politique de confidentialité de temps à autre. La version mise à jour sera indiquée par une date de "dernière mise à jour" révisée et la version mise à jour sera effective dès sa publication.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">8. Contact</h2>
              <p className="mb-4">
                Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à <a href="mailto:privacy@notaapp.com" className="text-blue-600 hover:text-blue-500">privacy@notaapp.com</a>.
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

export default Privacy;
