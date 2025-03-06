
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                Nota App
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" 
              className={`transition-colors ${isActive('/') ? 'text-blue-500 font-medium' : 'text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400'}`}>
              Accueil
            </Link>
            <Link to="/about"
              className={`transition-colors ${isActive('/about') ? 'text-blue-500 font-medium' : 'text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400'}`}>
              À propos
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white/90 backdrop-blur-md dark:bg-gray-800/90">
                <DropdownMenuItem asChild>
                  <Link to="/services/results" className="w-full">Résultats d'examens</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/training" className="w-full">Entraînements</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/premium" className="w-full">Services Premium</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/contact"
              className={`transition-colors ${isActive('/contact') ? 'text-blue-500 font-medium' : 'text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400'}`}>
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="ghost">
              <Link to="/login">Se connecter</Link>
            </Button>
            <Button asChild>
              <Link to="/register">S'inscrire</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-2 pb-4 space-y-1 sm:px-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
          <Link to="/" 
            className={`block px-3 py-2 rounded-md ${isActive('/') ? 'bg-blue-50 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-500 dark:text-gray-300 dark:hover:bg-blue-900/20 dark:hover:text-blue-400'}`}
            onClick={closeMenu}>
            Accueil
          </Link>
          <Link to="/about"
            className={`block px-3 py-2 rounded-md ${isActive('/about') ? 'bg-blue-50 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-500 dark:text-gray-300 dark:hover:bg-blue-900/20 dark:hover:text-blue-400'}`}
            onClick={closeMenu}>
            À propos
          </Link>
          <div className="relative">
            <Link to="/services/results"
              className={`block px-3 py-2 rounded-md ${isActive('/services/results') ? 'bg-blue-50 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-500 dark:text-gray-300 dark:hover:bg-blue-900/20 dark:hover:text-blue-400'}`}
              onClick={closeMenu}>
              Résultats d'examens
            </Link>
            <Link to="/services/training"
              className={`block px-3 py-2 rounded-md ${isActive('/services/training') ? 'bg-blue-50 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-500 dark:text-gray-300 dark:hover:bg-blue-900/20 dark:hover:text-blue-400'}`}
              onClick={closeMenu}>
              Entraînements
            </Link>
            <Link to="/services/premium"
              className={`block px-3 py-2 rounded-md ${isActive('/services/premium') ? 'bg-blue-50 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-500 dark:text-gray-300 dark:hover:bg-blue-900/20 dark:hover:text-blue-400'}`}
              onClick={closeMenu}>
              Services Premium
            </Link>
          </div>
          <Link to="/contact"
            className={`block px-3 py-2 rounded-md ${isActive('/contact') ? 'bg-blue-50 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-500 dark:text-gray-300 dark:hover:bg-blue-900/20 dark:hover:text-blue-400'}`}
            onClick={closeMenu}>
            Contact
          </Link>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-3">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-500" />
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800 dark:text-gray-200">Compte</div>
              </div>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <Link to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-500 dark:text-gray-300 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
                onClick={closeMenu}>
                Se connecter
              </Link>
              <Link to="/register"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-500 dark:text-gray-300 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
                onClick={closeMenu}>
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
