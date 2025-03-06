
import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
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

const mockBacTypes = [
  { value: "general", label: "Bac Général" },
  { value: "technique", label: "Bac Technique" },
  { value: "professionnel", label: "Bac Professionnel" },
];

interface HighSchoolFormProps {
  formData: {
    region: string;
    bacType: string;
    placeNumber: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    region: string;
    bacType: string;
    placeNumber: string;
  }>>;
  onSubmit: (e: React.FormEvent) => void;
}

const HighSchoolForm = ({ formData, setFormData, onSubmit }: HighSchoolFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="region">Région / Académie</Label>
          <Select 
            value={formData.region} 
            onValueChange={(value) => setFormData({...formData, region: value})}
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
            value={formData.bacType} 
            onValueChange={(value) => setFormData({...formData, bacType: value})}
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
          value={formData.placeNumber}
          onChange={(e) => setFormData({...formData, placeNumber: e.target.value})}
        />
      </div>
      
      <Button type="submit" className="w-full">
        <Search className="mr-2 h-4 w-4" /> Rechercher
      </Button>
    </form>
  );
};

export default HighSchoolForm;
