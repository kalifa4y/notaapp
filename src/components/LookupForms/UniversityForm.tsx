
import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from 'react';

interface UniversityFormProps {
  formData: {
    matricule: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    matricule: string;
  }>>;
  onSubmit: (e: React.FormEvent) => void;
}

const UniversityForm = ({ formData, setFormData, onSubmit }: UniversityFormProps) => {
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ matricule: value });
    
    // Clear error when user types
    if (error) setError('');
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.matricule.trim()) {
      setError('Veuillez saisir votre numéro de matricule');
      return;
    }
    
    // Format validation (example: 20UABC123)
    const matriculeRegex = /^\d{2}[A-Z]{4}\d{3}$/;
    if (!matriculeRegex.test(formData.matricule)) {
      setError('Format invalide. Exemple: 20UABC123');
      return;
    }
    
    // If validation passes, submit the form
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="matricule">Numéro de matricule</Label>
        <Input
          id="matricule"
          placeholder="Exemple: 20UABC123"
          value={formData.matricule}
          onChange={handleChange}
          className={error ? "border-red-500" : ""}
        />
        {error && (
          <p className="text-sm text-red-500 mt-1">{error}</p>
        )}
        <p className="text-xs text-gray-500 mt-1">
          Le numéro de matricule se trouve sur votre carte d'étudiant ou sur vos fiches d'inscription.
        </p>
      </div>
      
      <Button type="submit" className="w-full">
        <Search className="mr-2 h-4 w-4" /> Rechercher
      </Button>
    </form>
  );
};

export default UniversityForm;
