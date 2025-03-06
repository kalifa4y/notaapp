
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Contact Hero */}
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Contactez-nous
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                Vous avez des questions ou des suggestions ? Notre équipe est à votre écoute.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info and Form */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                    Informations de contact
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <Mail className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300">contact@notaapp.ml</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <Phone className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Téléphone</h3>
                        <p className="text-gray-600 dark:text-gray-300">+223 70 12 34 56</p>
                        <p className="text-gray-600 dark:text-gray-300">+223 76 98 76 54</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <MapPin className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Adresse</h3>
                        <p className="text-gray-600 dark:text-gray-300">Hamdallaye ACI 2000</p>
                        <p className="text-gray-600 dark:text-gray-300">Bamako, Mali</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Horaires d'ouverture</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600 dark:text-gray-300">Lundi - Vendredi: 8h00 - 17h00</p>
                      <p className="text-gray-600 dark:text-gray-300">Samedi: 9h00 - 13h00</p>
                      <p className="text-gray-600 dark:text-gray-300">Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                    Envoyez-nous un message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom et prénom"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Votre adresse email"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet</Label>
                      <Input 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Sujet de votre message"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message"
                        className="min-h-[150px]"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" /> Envoyer le message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map or FAQ Section (optional) */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Foire aux questions
              </h2>
              
              <div className="text-left space-y-8">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Comment accéder à mes résultats d'examen ?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Sélectionnez votre niveau d'études (collège, lycée ou université) sur la page d'accueil, puis saisissez les informations demandées selon votre profil. Vos résultats s'afficheront instantanément.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Comment créer un compte sur Nota App ?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Cliquez sur "S'inscrire" dans le menu principal, puis renseignez vos informations personnelles (nom, prénom, date de naissance, niveau d'études, email et mot de passe). Validez en acceptant les conditions d'utilisation.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Quels sont les avantages du compte Premium ?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Le compte Premium vous donne accès à un assistant IA qui génère automatiquement votre CV, postule à des offres d'emploi adaptées à votre profil et vous recommande des formations pertinentes pour votre parcours.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Comment acheter un timbre numérique ?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Connectez-vous à votre compte, accédez à la section "Services", puis "Timbres numériques". Sélectionnez le type de document souhaité, payez via Wave, Orange Money ou Moov Money, et vous recevrez votre timbre numérique par email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
