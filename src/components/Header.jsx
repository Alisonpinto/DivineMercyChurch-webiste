import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleScrollTo = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      // It will navigate to home first, we can let the native anchor jump handle it if we use simple a-tags for hash routes.
      // But we are using Link to="/#id". React Router doesn't always jump on load, but we'll try standard approaches.
    }
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Novena', path: '/novena' },
    { name: 'Way of the Cross', path: '/way-of-the-cross' },
    { name: 'Hymns', path: '/hymns' },
    { name: 'About Church', path: '/#about', hash: 'about' },
    { name: 'Contact Us', path: '/#contact', hash: 'contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo/Title */}
        <Link to="/" className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-extrabold text-gray-800 tracking-tight">
            Divine Mercy Church
          </h1>
          <span className="text-sm font-medium text-red-700 uppercase tracking-widest">
            Kalher - Bhiwandi
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8 font-medium text-gray-600">
          {navLinks.map((link) => (
            link.hash ? (
              <a 
                key={link.name} 
                href={link.path}
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    handleScrollTo(link.hash);
                  }
                }}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.path} 
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col px-6 py-4 space-y-4 font-medium text-gray-700">
          {navLinks.map((link) => (
             link.hash ? (
              <a 
                key={link.name} 
                href={link.path}
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    handleScrollTo(link.hash);
                  } else {
                    setIsOpen(false);
                  }
                }}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
