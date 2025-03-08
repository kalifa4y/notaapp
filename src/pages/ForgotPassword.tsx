
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import AuthService from "@/services/AuthService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!email.trim()) {
      setError("L'email est requis");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Format d'email invalide");
      return;
    }
    
    setError("");
    setIsLoading(true);
    
    try {
      // Appeler le service de réinitialisation
      const result = await AuthService.resetPassword(email);
      
      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Demande envoyée",
          description: result.message,
        });
      } else {
        toast({
          title: "Erreur",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Erreur lors de la demande de réinitialisation:", error);
      toast({
        title: "Erreur",
        description: "Un problème est survenu lors de la demande",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Link to="/login" className="inline-flex items-center text-blue-600 hover:text-blue-500 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à la connexion
            </Link>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Mot de passe oublié
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Entrez votre email pour réinitialiser votre mot de passe
            </p>
          </div>
          
          <div className="mt-8 bg-white dark:bg-gray-800 shadow rounded-lg p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center py-6">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900">
                  <svg className="h-6 w-6 text-green-600 dark:text-green-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                  Vérifiez votre boîte de réception
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Nous avons envoyé un lien de réinitialisation à {email}
                </p>
                <div className="mt-6">
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/login">Retour à la connexion</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemple@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={error ? "border-red-500" : ""}
                    required
                  />
                  {error && (
                    <p className="text-red-500 text-xs mt-1">{error}</p>
                  )}
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Traitement..." : "Réinitialiser le mot de passe"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ForgotPassword;
