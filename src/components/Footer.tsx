
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-none border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                Nota App
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Accédez facilement à vos résultats d'examens et relevés de notes. Une solution moderne pour tous les étudiants.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/results" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 text-sm">
                  Résultats d'examens
                </Link>
              </li>
              <li>
                <Link to="/services/training" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 text-sm">
                  Entraînements
                </Link>
              </li>
              <li>
                <Link to="/services/premium" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 text-sm">
                  Services Premium
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
              Liens Utiles
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 text-sm">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 text-sm">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  contact@notaapp.com
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  +223 XX XX XX XX
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Nota App. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/terms" className="text-xs text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                  Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-xs text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-xs text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
