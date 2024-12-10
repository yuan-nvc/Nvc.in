import PropTypes from 'prop-types';

const Logo = ({ className = '', size = 40 }) => {
  return (
    <div 
      style={{ 
        width: size,
        height: size * 0.75
      }}
      className={`relative ${className}`}
    >
      <svg 
        viewBox="0 0 800 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-300"
      >
        {/* Main M shape */}
        <path 
          d="M100 150 L200 150 L400 450 L600 150 L700 150 L400 600 L100 150Z" 
          className="fill-current"
        />
      </svg>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

export default Logo;
