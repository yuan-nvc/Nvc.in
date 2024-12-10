import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../Logo';

const NavLink = ({ to, children, className = '', onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group hover:bg-[#89CFF0]/5
        ${isActive ? 'text-[#89CFF0]' : 'text-white/80 hover:text-white'} ${className}`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#89CFF0]/0 via-[#89CFF0]/5 to-[#89CFF0]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Text Content */}
      <span className="relative z-10">{children}</span>
      
      {/* Animated Underline */}
      <span 
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#89CFF0] to-transparent transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100
          ${isActive ? 'scale-x-100 bg-[#89CFF0]' : ''}`}
        aria-hidden="true"
      />
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center justify-start">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#89CFF0] to-[#89CFF0]/50 rounded-full blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                <div className="absolute -inset-2 bg-[#89CFF0]/10 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                <Logo className="w-8 h-8 text-white transform transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 relative" />
              </div>
              <span className="text-white text-xl font-semibold group-hover:text-[#89CFF0] transition-all duration-300">NvC</span>
            </Link>
          </div>

          {/* Navigation Links - Center */}
          <div className="flex items-center justify-center">
            <div className="flex space-x-6 bg-black/20 backdrop-blur-md rounded-2xl px-4 py-2">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/projects">Projects</NavLink>
            </div>
          </div>

          {/* Right Section - Empty for balance */}
          <div className="flex justify-end">
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
