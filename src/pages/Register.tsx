
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowLeft, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { fr } from "date-fns/locale";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import AuthService from "@/services/AuthService";

// Mock education levels
const educationLevels = [
  { value: "college", label: "Collège" },
  { value: "highschool", label: "Lycée" },
  { value: "university", label: "Université" },
];

// Generate arrays for days, months, and years
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  { value: "0", label: "Janvier" },
  { value: "1", label: "Février" },
  { value: "2", label: "Mars" },
  { value: "3", label: "Avril" },
  { value: "4", label: "Mai" },
  { value: "5", label: "Juin" },
  { value: "6", label: "Juillet" },
  { value: "7", label: "Août" },
  { value: "8", label: "Septembre" },
  { value: "9", label: "Octobre" },
  { value: "10", label: "Novembre" },
  { value: "11", label: "Décembre" },
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1919 }, (_, i) => currentYear - i - 12);

// Calculate minimum and maximum dates for birthdate validation
const minDate = new Date(1920, 0, 1);
const maxDate = new Date(
  currentYear - 12, // Assuming minimum age is 12
  new Date().getMonth(),
  new Date().getDate()
);

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
  const [birthDay, setBirthDay] = useState<number | undefined>(undefined);
  const [birthMonth, setBirthMonth] = useState<string | undefined>(undefined);
  const [birthYear, setBirthYear] = useState<number | undefined>(undefined);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Update date when individual components change
  const updateDate = (day?: number, month?: string, year?: number) => {
    const newDay = day !== undefined ? day : birthDay;
    const newMonth = month !== undefined ? month : birthMonth;
    const newYear = year !== undefined ? year : birthYear;
    
    if (newDay && newMonth !== undefined && newYear) {
      const monthIndex = parseInt(newMonth);
      const newDate = new Date(newYear, monthIndex, newDay);
      
      // Adjust if the day is invalid for the month (e.g., February 30)
      const adjustedDate = new Date(newYear, monthIndex, newDay);
      if (adjustedDate.getDate() !== newDay) {
        // If day is invalid, set to last day of month
        adjustedDate.setDate(0);
      }
      
      setBirthDate(adjustedDate);
    }
  };

  // Update individual date components when calendar date changes
  const handleCalendarSelect = (date: Date | undefined) => {
    if (date) {
      setBirthDate(date);
      setBirthDay(date.getDate());
      setBirthMonth(date.getMonth().toString());
      setBirthYear(date.getFullYear());
    } else {
      setBirthDate(undefined);
      setBirthDay(undefined);
      setBirthMonth(undefined);
      setBirthYear(undefined);
    }
  };

  // Update birthDate when individual fields change
  const handleDayChange = (value: string) => {
    const day = parseInt(value);
    setBirthDay(day);
    updateDate(day, undefined, undefined);
  };

  const handleMonthChange = (value: string) => {
    setBirthMonth(value);
    updateDate(undefined, value, undefined);
  };

  const handleYearChange = (value: string) => {
    const year = parseInt(value);
    setBirthYear(year);
    updateDate(undefined, undefined, year);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Validate required fields
    if (!firstName.trim()) newErrors.firstName = "Le prénom est requis";
    if (!lastName.trim()) newErrors.lastName = "Le nom est requis";
    
    // Email validation
    if (!email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Format d'email invalide";
    }
    
    // Password validation
    if (!password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (password.length < 8) {
      newErrors.password = "Le mot de passe doit contenir au moins 8 caractères";
    }
    
    // Confirm password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }
    
    // Birth date validation
    if (!birthDate) {
      newErrors.birthDate = "La date de naissance est requise";
    } else {
      // Check if user is at least 12 years old
      const today = new Date();
      const minAgeDate = new Date(
        today.getFullYear() - 12,
        today.getMonth(),
        today.getDate()
      );
      
      if (birthDate > minAgeDate) {
        newErrors.birthDate = "Vous devez avoir au moins 12 ans";
      }
    }
    
    // Education level validation
    if (!educationLevel) {
      newErrors.educationLevel = "Le niveau d'études est requis";
    }
    
    // Terms agreement validation
    if (!agreeTerms) {
      newErrors.agreeTerms = "Vous devez accepter les conditions d'utilisation";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Erreur de validation",
        description: "Veuillez corriger les erreurs dans le formulaire",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      if (!birthDate) {
        throw new Error("Date de naissance manquante");
      }
      
      const registerResult = await AuthService.register({
        firstName,
        lastName,
        email,
        password,
        birthDate,
        educationLevel
      });
      
      if (registerResult.success) {
        // Show success message
        toast({
          title: "Compte créé avec succès",
          description: "Vous allez être redirigé vers la page de connexion",
        });
        
        // Redirect to login page after a short delay
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast({
          title: "Erreur lors de l'inscription",
          description: registerResult.message || "Un problème est survenu, veuillez réessayer",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      toast({
        title: "Erreur lors de l'inscription",
        description: "Un problème est survenu, veuillez réessayer",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-500 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Link>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Créer un compte
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Rejoignez Nota App pour accéder à tous les services
            </p>
          </div>
          
          {/* Registration Form */}
          <div className="mt-8 bg-white dark:bg-gray-800 shadow rounded-lg p-6 sm:p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Prénom"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={errors.firstName ? "border-red-500" : ""}
                    required
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Nom"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={errors.lastName ? "border-red-500" : ""}
                    required
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemple@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label>Date de naissance</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Select 
                    value={birthDay?.toString()} 
                    onValueChange={handleDayChange}
                  >
                    <SelectTrigger className={errors.birthDate ? "border-red-500" : ""}>
                      <SelectValue placeholder="Jour" />
                    </SelectTrigger>
                    <SelectContent>
                      {days.map((day) => (
                        <SelectItem key={`day-${day}`} value={day.toString()}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Select 
                    value={birthMonth} 
                    onValueChange={handleMonthChange}
                  >
                    <SelectTrigger className={errors.birthDate ? "border-red-500" : ""}>
                      <SelectValue placeholder="Mois" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((month) => (
                        <SelectItem key={`month-${month.value}`} value={month.value}>
                          {month.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Select 
                    value={birthYear?.toString()} 
                    onValueChange={handleYearChange}
                  >
                    <SelectTrigger className={errors.birthDate ? "border-red-500" : ""}>
                      <SelectValue placeholder="Année" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[15rem] overflow-y-auto">
                      {years.map((year) => (
                        <SelectItem key={`year-${year}`} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {errors.birthDate && (
                  <p className="text-red-500 text-xs mt-1">{errors.birthDate}</p>
                )}

                <div className="flex items-center mt-2">
                  <Popover open={showCalendar} onOpenChange={setShowCalendar}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        type="button"
                        className="ml-auto text-xs flex items-center"
                      >
                        <CalendarIcon className="h-3 w-3 mr-1" />
                        Utiliser le calendrier
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="end">
                      <div className="p-2 border-b border-gray-200 dark:border-gray-700">
                        <h4 className="font-medium text-sm">
                          Sélectionnez votre date de naissance
                        </h4>
                      </div>
                      <Calendar
                        mode="single"
                        selected={birthDate}
                        onSelect={(date) => {
                          handleCalendarSelect(date);
                          setShowCalendar(false);
                        }}
                        initialFocus
                        disabled={(date) => date > maxDate || date < minDate}
                        defaultMonth={birthDate || new Date(2000, 0, 1)}
                        fromYear={1920}
                        toYear={maxDate.getFullYear()}
                        captionLayout="dropdown"
                        showOutsideDays={false}
                        locale={fr}
                        className="p-3"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="educationLevel">Niveau d'études</Label>
                <Select 
                  value={educationLevel} 
                  onValueChange={setEducationLevel}
                >
                  <SelectTrigger className={errors.educationLevel ? "border-red-500" : ""}>
                    <SelectValue placeholder="Sélectionnez votre niveau" />
                  </SelectTrigger>
                  <SelectContent>
                    {educationLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.educationLevel && (
                  <p className="text-red-500 text-xs mt-1">{errors.educationLevel}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={errors.password ? "border-red-500 pr-10" : "pr-10"}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={errors.confirmPassword ? "border-red-500 pr-10" : "pr-10"}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                )}
              </div>
              
              <div className="flex items-start">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                  className={errors.agreeTerms ? "border-red-500" : ""}
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-600 dark:text-gray-400">
                  J'accepte les{" "}
                  <Link to="/terms" className="text-blue-600 hover:text-blue-500">
                    conditions d'utilisation
                  </Link>{" "}
                  et la{" "}
                  <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
                    politique de confidentialité
                  </Link>
                </label>
              </div>
              {errors.agreeTerms && (
                <p className="text-red-500 text-xs mt-1">{errors.agreeTerms}</p>
              )}
              
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Création en cours..." : "S'inscrire"}
              </Button>
            </form>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    ou
                  </span>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  Déjà inscrit ?{" "}
                  <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                    Se connecter
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
