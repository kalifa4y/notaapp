
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CollegeForm from './LookupForms/CollegeForm';
import HighSchoolForm from './LookupForms/HighSchoolForm';
import UniversityForm from './LookupForms/UniversityForm';
import ExamResults from './ExamResults';
import { mockResults } from '../services/MockDataService';

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
              <CollegeForm 
                formData={collegeForm}
                setFormData={setCollegeForm}
                onSubmit={handleSubmit}
              />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="highSchool">
          <Card>
            <CardContent className="pt-6">
              <HighSchoolForm 
                formData={highSchoolForm}
                setFormData={setHighSchoolForm}
                onSubmit={handleSubmit}
              />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="university">
          <Card>
            <CardContent className="pt-6">
              <UniversityForm 
                formData={universityForm}
                setFormData={setUniversityForm}
                onSubmit={handleSubmit}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {showResults && resultType && <ExamResults resultType={resultType} result={mockResults[resultType]} />}
    </div>
  );
};

export default ResultsLookup;
