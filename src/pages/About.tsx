
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Graduation, School, Award, UserCheck, CheckCheck, Brain } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                À propos de Nota App
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                Une plateforme innovante dédiée à la réussite académique des élèves et étudiants maliens
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Notre mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Nota App est née d'une vision simple : rendre l'accès aux informations académiques plus facile, plus rapide et plus transparent pour tous les apprenants maliens.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Notre mission est de démocratiser l'accès aux résultats d'examens et de proposer des outils innovants pour accompagner les élèves et les étudiants tout au long de leur parcours académique.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Que vous soyez collégien préparant le DEF, lycéen passant le BAC ou étudiant universitaire, Nota App est votre compagnon digital pour suivre vos performances et optimiser votre apprentissage.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section with Icons */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
                Ce que propose Nota App
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <School className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Consultation des résultats</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Accédez instantanément aux résultats de vos examens (DEF, BAC, examens universitaires) en quelques clics.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Graduation className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Relevés de notes détaillés</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Consultez vos notes par matière et votre moyenne générale pour mieux comprendre vos forces et axes d'amélioration.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Award className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Suivi des concours</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Postulez aux concours et suivez l'évolution de vos candidatures grâce à des indicateurs visuels clairs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <CheckCheck className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Entraînements personnalisés</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Accédez à des exercices adaptés à votre niveau, des annales et des corrections détaillées pour progresser efficacement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <UserCheck className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Timbres numériques</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Achetez des timbres numériques pour formaliser vos demandes de documents officiels (relevés, diplômes) sans vous déplacer.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Brain className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Assistant IA (Premium)</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Bénéficiez d'un assistant intelligent qui génère votre CV, postule à des offres d'emploi adaptées et recommande des formations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team/Values Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Nos valeurs
              </h2>
              
              <div className="space-y-6">
                <div className="pb-4 border-b border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Accessibilité</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nous croyons que l'information académique doit être accessible à tous, partout au Mali, quelle que soit la connexion internet disponible.
                  </p>
                </div>
                
                <div className="pb-4 border-b border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nous utilisons les technologies les plus récentes pour offrir des fonctionnalités qui facilitent réellement le parcours des apprenants.
                  </p>
                </div>
                
                <div className="pb-4 border-b border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Confidentialité</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nous prenons la protection des données personnelles très au sérieux et appliquons des mesures strictes pour garantir leur sécurité.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Progression continue</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Notre plateforme évolue constamment en fonction des retours des utilisateurs et des besoins du système éducatif malien.
                  </p>
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

export default About;
