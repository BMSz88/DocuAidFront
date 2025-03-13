import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        ease: "easeInOut",
        duration: 0.2
      }
    }
  };

  const navItems = [
    {
      name: 'Product',
      dropdown: true,
      items: [
        { name: 'Features', link: '/feature' },
        { name: 'Benefits', link: '/benefits' },
        { name: 'Integrations', link: '/how-it-works' },
      ]
    },
    { name: 'Enterprise', link: '/enterprise' },
    { name: 'Pricing', link: '/pricing' },
    { name: 'Help Center', link: '/help-center' },
    { name: 'About', link: '/about' }
  ];

  return (
    <nav className="fixed w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 bg-clip-text text-transparent"
            >
              DocuAid
            </Link>
          </div>
          
          {}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => 
              item.dropdown ? (
                <div key={item.name} className="relative group">
                  <button 
                    className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} />
                  </button>
                  <AnimatePresence>
                    {(activeDropdown === item.name || (typeof window !== 'undefined' && window.innerWidth >= 768)) && (
                      <motion.div 
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className="absolute top-full -left-4 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block"
                      >
                        {item.items.map((subItem) => (
                          <Link 
                            key={subItem.name} 
                            to={subItem.link} 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link 
                  key={item.name} 
                  to={item.link} 
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">Sign Up</Button>
            <Button variant="ghost" size="sm">Log In</Button>
            <Button variant="primary" size="sm">Add to Chrome</Button>
          </div>

          {}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
              {navItems.map((item) => (
                <React.Fragment key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button 
                        className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-1"
                          >
                            {item.items.map((subItem) => (
                              <Link 
                                key={subItem.name} 
                                to={subItem.link} 
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link 
                      to={item.link} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
              <div className="pt-4 flex flex-col space-y-2 px-4">
                <Button variant="ghost" size="sm" className="justify-start">Sign Up</Button>
                <Button variant="ghost" size="sm" className="justify-start">Log In</Button>
                <Button variant="primary" size="sm">Add to Chrome</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;