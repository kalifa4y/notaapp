
import { useState } from 'react';
import { Search, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for demonstration
const mockRegions = [
  { value: "bamako", label: "Bamako" },
  { value: "kayes", label: "Kayes" },
  { value: "koulikoro", label: "Koulikoro" },
  { value: "sikasso", label: "Sikasso" },
  { value: "segou", label: "Ségou" },
  { value: "mopti", label: "Mopti" },
  { value: "tombouctou", label: "Tombouctou" },
  { value: "gao", label: "Gao" },
  { value: "kidal", label: "Kidal" },
];

const mockYears = [
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
];

const mockBacTypes = [
  { value: "general", label: "Bac Général" },
  { value: "technique", label: "Bac Technique" },
  { value: "professionnel", label: "Bac Professionnel" },
];

// Update the type definition by adding an optional mention property to all result objects
type ResultData = {
  status: string;
  name: string;
  placeNumber: string;
  result: string;
  average: string;
  mention?: string; // Make mention optional
  subjects: { name: string; grade: string; }[];
}

// Mock exam results for demonstration
const mockResults: Record<'success' | 'failure', ResultData> = {
  success: {
    status: "success",
    name: "Traoré Aminata",
    placeNumber: "12345",
    result: "Admis",
    average: "14.5/20",
    mention: "Bien",
    subjects: [
      { name: "Mathématiques", grade: "15/20" },
      { name: "Physique-Chimie", grade: "14/20" },
      { name: "Sciences Naturelles", grade: "16/20" },
      { name: "Français", grade: "13/20" },
      { name: "Histoire-Géographie", grade: "15/20" },
    ],
  },
  failure: {
    status: "failure",
    name: "Coulibaly Ibrahim",
    placeNumber: "67890",
    result: "Ajourné",
    average: "09.5/20",
    subjects: [
      { name: "Mathématiques", grade: "08/20" },
      { name: "Physique-Chimie", grade: "09/20" },
      { name: "Sciences Naturelles", grade: "10/20" },
      { name: "Français", grade: "11/20" },
      { name: "Histoire-Géographie", grade: "09/20" },
    ],
  }
};

const ResultsLookup = () => {
  const [activeTab, setActiveTab] = useState('college');
  const [showResults, setShowResults] = useState(false);
  const [resultType, setResultType] = useState<'success' | 'failure' | null>(null);
  
  // Form state
  const [collegeForm, setCollegeForm] = useState({
    year: "",
    region: "",
    placeNumber: "",
  });
  
  const [highSchoolForm, setHighSchoolForm] = useState({
    region: "",
    bacType: "",
    placeNumber: "",
  });
  
  const [universityForm, setUniversityForm] = useState({
    matricule: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      // For demo purposes, use placeNumber to determine success/failure
      if (activeTab === 'college') {
        const lastDigit = collegeForm.placeNumber.slice(-1);
        setResultType(parseInt(lastDigit) % 2 === 0 ? 'success' : 'failure');
      } else if (activeTab === 'highSchool') {
        const lastDigit = highSchoolForm.placeNumber.slice(-1);
        setResultType(parseInt(lastDigit) % 2 === 0 ? 'success' : 'failure');
      } else {
        const lastDigit = universityForm.matricule.slice(-1);
        setResultType(parseInt(lastDigit) % 2 === 0 ? 'success' : 'failure');
      }
      setShowResults(true);
    }, 1000);
  };

  const renderResults = () => {
    if (!showResults || !resultType) return null;
    
    const result = mockResults[resultType];
    
    return (
      <div className="mt-8 animate-fade-in">
        <Card className="overflow-hidden">
          <div className={`${
            resultType === 'success' ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'
          } px-6 py-4 border-b border-gray-200 dark:border-gray-700`}>
            <div className="flex items-center space-x-3">
              {resultType === 'success' ? (
                <CheckCircle className="h-6 w-6 text-green-500" />
              ) : (
                <XCircle className="h-6 w-6 text-red-500" />
              )}
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {result.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  N° de place: {result.placeNumber}
                </p>
              </div>
            </div>
          </div>
          
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Résultat
                  </h4>
                  <p className={`text-lg font-semibold ${
                    resultType === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {result.result}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Moyenne générale
                  </h4>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {result.average}
                  </p>
                </div>
                
                {result.mention && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Mention
                    </h4>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {result.mention}
                    </p>
                  </div>
                )}
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  Détails par matière
                </h4>
                <div className="space-y-3">
                  {result.subjects.map((subject, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {subject.name}
                      </span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {subject.grade}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">
                    {resultType === 'success' 
                      ? "Félicitations pour votre réussite !" 
                      : "Ne vous découragez pas !"}
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">
                    {resultType === 'success' 
                      ? "Créez un compte pour accéder à votre relevé de notes complet et aux services supplémentaires." 
                      : "Créez un compte pour accéder à des ressources d'entraînement qui vous aideront à réussir la prochaine fois."}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Consultez vos résultats
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Sélectionnez votre niveau et renseignez les informations demandées
        </p>
      </div>

      <Tabs defaultValue="college" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="college">Collégiens</TabsTrigger>
          <TabsTrigger value="highSchool">Lycéens</TabsTrigger>
          <TabsTrigger value="university">Étudiants</TabsTrigger>
        </TabsList>
        
        <TabsContent value="college">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="year">Année du DEF</Label>
                    <Select 
                      value={collegeForm.year} 
                      onValueChange={(value) => setCollegeForm({...collegeForm, year: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez l'année" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockYears.map((year) => (
                          <SelectItem key={year.value} value={year.value}>
                            {year.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="region">Région / Académie</Label>
                    <Select 
                      value={collegeForm.region} 
                      onValueChange={(value) => setCollegeForm({...collegeForm, region: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez la région" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockRegions.map((region) => (
                          <SelectItem key={region.value} value={region.value}>
                            {region.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="placeNumber">Numéro de place</Label>
                  <Input
                    id="placeNumber"
                    placeholder="Exemple: 12345"
                    value={collegeForm.placeNumber}
                    onChange={(e) => setCollegeForm({...collegeForm, placeNumber: e.target.value})}
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Search className="mr-2 h-4 w-4" /> Rechercher
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="highSchool">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="region">Région / Académie</Label>
                    <Select 
                      value={highSchoolForm.region} 
                      onValueChange={(value) => setHighSchoolForm({...highSchoolForm, region: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez la région" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockRegions.map((region) => (
                          <SelectItem key={region.value} value={region.value}>
                            {region.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bacType">Type de Bac</Label>
                    <Select 
                      value={highSchoolForm.bacType} 
                      onValueChange={(value) => setHighSchoolForm({...highSchoolForm, bacType: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez le type" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockBacTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="placeNumber">Numéro de place</Label>
                  <Input
                    id="placeNumber"
                    placeholder="Exemple: 12345"
                    value={highSchoolForm.placeNumber}
                    onChange={(e) => setHighSchoolForm({...highSchoolForm, placeNumber: e.target.value})}
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Search className="mr-2 h-4 w-4" /> Rechercher
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="university">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="matricule">Numéro de matricule</Label>
                  <Input
                    id="matricule"
                    placeholder="Exemple: 20UABC123"
                    value={universityForm.matricule}
                    onChange={(e) => setUniversityForm({...universityForm, matricule: e.target.value})}
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Search className="mr-2 h-4 w-4" /> Rechercher
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {renderResults()}
    </div>
  );
};

export default ResultsLookup;
