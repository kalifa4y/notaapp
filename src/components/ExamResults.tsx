
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

type Subject = {
  name: string;
  grade: string;
};

export type ResultData = {
  status: string;
  name: string;
  placeNumber: string;
  result: string;
  average: string;
  mention?: string;
  subjects: Subject[];
};

interface ExamResultsProps {
  resultType: 'success' | 'failure';
  result: ResultData;
}

const ExamResults = ({ resultType, result }: ExamResultsProps) => {
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

export default ExamResults;
