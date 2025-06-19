import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; 
import { Link, NavLink } from 'react-router-dom'; 
import NavLogo from '../assets/images/navlogo.png';

const Navbar = ({ activePage = 'Home' }) => { 
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Effect to handle scroll-based background change
  useEffect(() => {
    const handleScroll = () => {
      // Calculate 10vh in pixels
      const scrollThreshold = window.innerHeight * 0.10; 
      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  
  const navItems = [
    { name: 'Home', to: '/' },       
    { name: 'Learn', to: '/Learn' }, 
    { name: 'Quiz', to: '/Quiz' },   
  ];

  return (
    // Navbar container
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out ${scrolled ? 'bg-indigo-500 bg-opacity-95 shadow-lg' : 'bg-transparent'}`}>
      {/* Inner container to hold logo/name and nav links */}
      <div className="w-4/5 mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between h-16">
        {/* Logo and Name */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={NavLogo} alt="E-learn Logo" className="h-8 w-8 rounded-full object-cover" />
          <span className="text-white text-xl font-bold tracking-wide">E-learn</span>
        </Link>

        {/* Desktop Navigation Links - hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              // NavLink's className receives an object with 'isActive' property
              className={({ isActive }) => 
                `text-white hover:text-blue-300 transition-colors duration-200 py-2 px-4 rounded-lg
                ${isActive ? 'underline underline-offset-4' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button - visible only on mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel - slides down when opened */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${scrolled ? 'bg-indigo-500 bg-opacity-95' : 'bg-indigo-600'} pb-4 transition-all duration-300 ease-in-out`}>
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)} // Close menu when a link is clicked
                // NavLink's className for mobile also uses 'isActive'
                className={({ isActive }) => 
                  `block text-white hover:text-blue-300 transition-colors duration-200 py-2 px-4 rounded-md text-base font-medium
                  ${isActive ? 'underline underline-offset-4' : ''}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

