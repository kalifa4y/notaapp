
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, FileText, Award, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServicesTraining = () => {
  const collegeExercises = [
    {
      title: "Mathématiques 9ème année",
      description: "Exercices sur les équations et inéquations",
      difficulty: "Moyen",
      time: "45 min"
    },
    {
      title: "Français 9ème année",
      description: "Compréhension de texte et grammaire",
      difficulty: "Facile",
      time: "30 min"
    },
    {
      title: "Sciences naturelles",
      description: "L'écosystème et la chaîne alimentaire",
      difficulty: "Moyen",
      time: "40 min"
    },
    {
      title: "Histoire-Géographie",
      description: "Les grands empires africains",
      difficulty: "Difficile",
      time: "50 min"
    }
  ];

  const highSchoolExercises = [
    {
      title: "Mathématiques Terminale",
      description: "Fonctions dérivées et primitives",
      difficulty: "Difficile",
      time: "60 min"
    },
    {
      title: "Physique-Chimie Terminale",
      description: "Électricité et circuits électriques",
      difficulty: "Moyen",
      time: "45 min"
    },
    {
      title: "Philosophie",
      description: "La liberté et le déterminisme",
      difficulty: "Difficile",
      time: "90 min"
    },
    {
      title: "Anglais",
      description: "Compréhension écrite et expression",
      difficulty: "Moyen",
      time: "45 min"
    }
  ];

  const universityExercises = [
    {
      title: "Analyse Mathématique",
      description: "Intégrales multiples et théorèmes",
      difficulty: "Difficile",
      time: "90 min"
    },
    {
      title: "Programmation",
      description: "Algorithmes et structures de données",
      difficulty: "Moyen",
      time: "60 min"
    },
    {
      title: "Économie",
      description: "Microéconomie et marchés",
      difficulty: "Moyen",
      time: "60 min"
    },
    {
      title: "Droit",
      description: "Droit constitutionnel malien",
      difficulty: "Difficile",
      time: "75 min"
    }
  ];

  const papers = [
    {
      year: "2023",
      title: "DEF Mathématiques",
      type: "college"
    },
    {
      year: "2023",
      title: "DEF Français",
      type: "college"
    },
    {
      year: "2023",
      title: "BAC Sciences Mathématiques",
      type: "highSchool"
    },
    {
      year: "2023",
      title: "BAC Philosophie",
      type: "highSchool"
    },
    {
      year: "2022",
      title: "DEF Mathématiques",
      type: "college"
    },
    {
      year: "2022",
      title: "BAC Sciences Mathématiques",
      type: "highSchool"
    },
    {
      year: "2022",
      title: "Licence Économie S1",
      type: "university"
    },
    {
      year: "2022",
      title: "Licence Informatique S1",
      type: "university"
    }
  ];

  const renderExerciseCard = (exercise, index) => (
    <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-medium text-gray-900 dark:text-white">{exercise.title}</h3>
          <div className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded text-xs font-medium text-blue-700 dark:text-blue-300">
            {exercise.difficulty}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{exercise.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {exercise.time}
          </div>
          <Button variant="outline" size="sm" className="text-sm">
            Commencer
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderPapersTab = (type) => {
    const filteredPapers = papers.filter(paper => paper.type === type);
    
    return (
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPapers.map((paper, index) => (
            <div key={index} className="flex justify-between items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 block">{paper.year}</span>
                <span className="font-medium text-gray-900 dark:text-white">{paper.title}</span>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600 dark:text-blue-400">
                <FileText className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline">
            Voir tous les sujets d'examens
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-green-100 dark:bg-green-900/30 rounded-full">
                <BookOpen className="h-4 w-4 text-green-500 dark:text-green-400 mr-2" />
                <span className="text-sm font-medium text-green-700 dark:text-green-300">Entraînements</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Préparez-vous efficacement à vos examens
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                Accédez à des exercices adaptés à votre niveau, des annales et des corrections détaillées
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Commencer l'entraînement <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Training Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="college" className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Exercices d'entraînement
                </h2>
                <TabsList className="inline-flex">
                  <TabsTrigger value="college">Collège</TabsTrigger>
                  <TabsTrigger value="highSchool">Lycée</TabsTrigger>
                  <TabsTrigger value="university">Université</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="college">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {collegeExercises.map((exercise, index) => renderExerciseCard(exercise, index))}
                </div>
                <div className="text-center mt-8">
                  <Button variant="outline">
                    Voir plus d'exercices
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="highSchool">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {highSchoolExercises.map((exercise, index) => renderExerciseCard(exercise, index))}
                </div>
                <div className="text-center mt-8">
                  <Button variant="outline">
                    Voir plus d'exercices
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="university">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {universityExercises.map((exercise, index) => renderExerciseCard(exercise, index))}
                </div>
                <div className="text-center mt-8">
                  <Button variant="outline">
                    Voir plus d'exercices
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Past Exam Papers Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Sujets des années précédentes
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Accédez aux sujets d'examens des années précédentes pour vous familiariser avec le format et le type de questions
                </p>
              </div>
              
              <Tabs defaultValue="collegeExams">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="collegeExams">DEF</TabsTrigger>
                  <TabsTrigger value="highSchoolExams">BAC</TabsTrigger>
                  <TabsTrigger value="universityExams">Université</TabsTrigger>
                </TabsList>
                
                <TabsContent value="collegeExams">
                  {renderPapersTab("college")}
                </TabsContent>
                
                <TabsContent value="highSchoolExams">
                  {renderPapersTab("highSchool")}
                </TabsContent>
                
                <TabsContent value="universityExams">
                  {renderPapersTab("university")}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                Les avantages de nos entraînements
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-500 dark:text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Exercices adaptés</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Nos exercices sont conçus par des enseignants expérimentés et correspondent parfaitement au programme scolaire malien.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <FileText className="h-6 w-6 text-green-500 dark:text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Corrections détaillées</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Chaque exercice est accompagné d'une correction détaillée qui explique la méthode et le raisonnement à suivre.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <Award className="h-6 w-6 text-green-500 dark:text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Sujets d'examens réels</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Entraînez-vous sur des sujets d'examens des années précédentes pour vous familiariser avec le format officiel.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <Clock className="h-6 w-6 text-green-500 dark:text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Gestion du temps</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Apprenez à gérer votre temps efficacement grâce à nos exercices chronométrés qui reproduisent les conditions d'examen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-50 dark:bg-green-900/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Prêt à améliorer vos résultats ?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Commencez dès aujourd'hui à vous entraîner pour réussir vos examens avec excellence.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Commencer l'entraînement
                </Button>
                <Button size="lg" variant="outline">
                  Découvrir les formules Premium
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

export default ServicesTraining;
