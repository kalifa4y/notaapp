
import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="matricule">Numéro de matricule</Label>
        <Input
          id="matricule"
          placeholder="Exemple: 20UABC123"
          value={formData.matricule}
          onChange={(e) => setFormData({...formData, matricule: e.target.value})}
        />
      </div>
      
      <Button type="submit" className="w-full">
        <Search className="mr-2 h-4 w-4" /> Rechercher
      </Button>
    </form>
  );
};

export default UniversityForm;
