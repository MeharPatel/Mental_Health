import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state

  return (
    <motion.nav 
      className="bg-white shadow-sm py-4 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div 
            className="w-10 h-10 rounded-full bg-teal flex items-center justify-center"
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8a6 6 0 00-6-6 6 6 0 00-6 6c0 4 3 6 6 10 3-4 6-6 6-10z"></path>
              <circle cx="12" cy="8" r="2"></circle>
            </svg>
          </motion.div>
          <span className="text-2xl font-bold font-poppins text-teal">MindOasis</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link interactive-element">Home</Link>
          <Link to="/therapists" className="nav-link interactive-element">Therapists</Link>
          <Link to="/groups" className="nav-link interactive-element">Support Groups</Link>
          <Link to="/community" className="nav-link interactive-element">Community</Link>
          <Link to="/about" className="nav-link interactive-element">About</Link>
          <Link to="/contact" className="nav-link interactive-element">Contact</Link>
          
          {isLoggedIn ? (
            <button className="p-2 interactive-element">
              <Link to="/profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </Link>
            </button>
          ) : (
            <button className="bg-teal hover:bg-teal/90 text-white font-bold py-2 px-4 rounded interactive-element">
              <Link to="/auth">Sign In</Link>
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden interactive-element"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="py-2 px-4 hover:bg-mint rounded-md interactive-element" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/therapists" className="py-2 px-4 hover:bg-mint rounded-md interactive-element" onClick={() => setIsMenuOpen(false)}>Therapists</Link>
            <Link to="/groups" className="py-2 px-4 hover:bg-mint rounded-md interactive-element" onClick={() => setIsMenuOpen(false)}>Support Groups</Link>
            <Link to="/community" className="py-2 px-4 hover:bg-mint rounded-md interactive-element" onClick={() => setIsMenuOpen(false)}>Community</Link>
            <Link to="/about" className="py-2 px-4 hover:bg-mint rounded-md interactive-element" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="py-2 px-4 hover:bg-mint rounded-md interactive-element" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            {isLoggedIn ? (
              <Link to="/profile" className="py-2 px-4 hover:bg-mint rounded-md flex items-center space-x-2 interactive-element" onClick={() => setIsMenuOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Profile</span>
              </Link>
            ) : (
              <button className="w-full bg-teal hover:bg-teal/90 text-white font-bold py-2 px-4 rounded interactive-element" onClick={() => setIsMenuOpen(false)}>
                <Link to="/auth">Sign In</Link>
              </button>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;