// Types pour les utilisateurs
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  educationLevel: string;
}

// Interface pour l'enregistrement d'un nouvel utilisateur
export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: Date;
  educationLevel: string;
  id?: string; // Added optional id field
}

// Interface pour la connexion
export interface LoginData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

// Service pour gérer l'authentification
class AuthService {
  private readonly STORAGE_KEY = 'nota_auth_user';
  private readonly USERS_KEY = 'nota_users';
  
  // Simuler un délai de réseau
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Obtenir les utilisateurs enregistrés
  private getUsers(): RegisterData[] {
    const usersJson = localStorage.getItem(this.USERS_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
  }
  
  // Sauvegarder les utilisateurs
  private saveUsers(users: RegisterData[]): void {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  }
  
  // Inscription d'un nouvel utilisateur
  async register(userData: RegisterData): Promise<{ success: boolean; message?: string }> {
    await this.delay(1000); // Simuler un délai réseau
    
    try {
      const users = this.getUsers();
      
      // Vérifier si l'email existe déjà
      if (users.some(user => user.email === userData.email)) {
        return { 
          success: false, 
          message: "Cette adresse email est déjà utilisée" 
        };
      }
      
      // Générer un ID simple pour l'utilisateur
      const newUser = {
        ...userData,
        id: Date.now().toString(),
      };
      
      // Ajouter l'utilisateur à la liste
      users.push(newUser);
      this.saveUsers(users);
      
      return { 
        success: true,
        message: "Inscription réussie" 
      };
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      return { 
        success: false, 
        message: "Une erreur est survenue lors de l'inscription" 
      };
    }
  }

  // Connexion utilisateur
  async login(credentials: LoginData): Promise<{ success: boolean; user?: User; message?: string }> {
    await this.delay(800); // Simuler un délai réseau
    
    try {
      const users = this.getUsers();
      
      // Trouver l'utilisateur par email et vérifier le mot de passe
      const user = users.find(u => 
        u.email === credentials.email && 
        u.password === credentials.password // Note: Dans un vrai système, utiliser une comparaison sécurisée des mots de passe hachés
      );
      
      if (!user) {
        return { 
          success: false, 
          message: "Email ou mot de passe incorrect" 
        };
      }
      
      // Créer un objet utilisateur sans le mot de passe pour le stockage
      const authenticatedUser: User = {
        id: user.id || Date.now().toString(), // Use the id if it exists, otherwise generate a new one
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        birthDate: new Date(user.birthDate),
        educationLevel: user.educationLevel
      };
      
      // Stocker l'utilisateur dans le localStorage
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(authenticatedUser));
      
      return { 
        success: true, 
        user: authenticatedUser,
        message: "Connexion réussie"
      };
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      return { 
        success: false, 
        message: "Une erreur est survenue lors de la connexion" 
      };
    }
  }

  // Déconnexion
  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  // Vérifier si l'utilisateur est connecté
  isAuthenticated(): boolean {
    return localStorage.getItem(this.STORAGE_KEY) !== null;
  }
  
  // Obtenir l'utilisateur courant
  getCurrentUser(): User | null {
    const userJson = localStorage.getItem(this.STORAGE_KEY);
    if (!userJson) return null;
    
    const user = JSON.parse(userJson);
    // Convertir la date au format Date
    return {
      ...user,
      birthDate: new Date(user.birthDate)
    };
  }
  
  // Réinitialiser le mot de passe (simulation)
  async resetPassword(email: string): Promise<{ success: boolean; message: string }> {
    await this.delay(1000);
    
    try {
      const users = this.getUsers();
      const userExists = users.some(user => user.email === email);
      
      if (!userExists) {
        return {
          success: false,
          message: "Aucun compte n'est associé à cette adresse email"
        };
      }
      
      // Simuler l'envoi d'un email de réinitialisation
      console.log(`Email de réinitialisation envoyé à: ${email}`);
      
      return {
        success: true,
        message: "Instructions de réinitialisation envoyées à votre adresse email"
      };
    } catch (error) {
      console.error('Erreur lors de la réinitialisation du mot de passe:', error);
      return {
        success: false,
        message: "Une erreur est survenue lors de la demande de réinitialisation"
      };
    }
  }
}

export default new AuthService();
