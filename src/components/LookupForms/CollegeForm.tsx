
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

const mockYears = [
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
];

interface CollegeFormProps {
  formData: {
    year: string;
    region: string;
    placeNumber: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    year: string;
    region: string;
    placeNumber: string;
  }>>;
  onSubmit: (e: React.FormEvent) => void;
}

const CollegeForm = ({ formData, setFormData, onSubmit }: CollegeFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="year">Année du DEF</Label>
          <Select 
            value={formData.year} 
            onValueChange={(value) => setFormData({...formData, year: value})}
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

export default CollegeForm;
