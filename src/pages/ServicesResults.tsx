
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResultsLookup from "@/components/ResultsLookup";

const ServicesResults = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Consultez vos résultats d'examens
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Accédez rapidement et facilement à vos résultats, que vous soyez collégien, lycéen ou étudiant universitaire.
              </p>
            </div>
          </div>
        </div>

        {/* Results Lookup Component */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <ResultsLookup />
        </section>
        
        {/* Additional Info Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                Informations importantes
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Calendrier des résultats</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Les résultats sont généralement publiés selon le calendrier suivant :
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>DEF (Diplôme d'Études Fondamentales) : Début août</li>
                    <li>BAC (Baccalauréat) : Mi-juillet</li>
                    <li>Examens universitaires : Variable selon les facultés</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Documents officiels</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Pour obtenir vos documents officiels (relevés de notes, attestations, diplômes), vous pouvez :
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Utiliser notre service de timbres numériques (nécessite un compte)</li>
                    <li>Vous rendre directement à votre établissement ou au centre d'examen</li>
                    <li>Faire une demande en ligne via le portail du Ministère de l'Éducation</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Contestation des résultats</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Si vous souhaitez contester vos résultats, vous devez déposer une demande de vérification dans les 30 jours suivant la publication des résultats :
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Pour le DEF et le BAC : auprès de votre académie d'inscription</li>
                    <li>Pour les examens universitaires : auprès du secrétariat de votre faculté</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesResults;
