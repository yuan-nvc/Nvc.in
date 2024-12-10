import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [blurDataUrl, setBlurDataUrl] = useState('');

  useEffect(() => {
    // Create a tiny blur placeholder
    const canvas = document.createElement('canvas');
    canvas.width = 10;
    canvas.height = 10;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#89CFF0';
    ctx.fillRect(0, 0, 10, 10);
    setBlurDataUrl(canvas.toDataURL());
  }, []);

  // Ensure the src path is correct for GitHub Pages
  const imagePath = src.startsWith('http') || src.startsWith('data:') 
    ? src 
    : import.meta.env.BASE_URL + src.replace(/^\//, '');

  return (
    <div className="relative">
      {/* Blur placeholder */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `url(${blurDataUrl})`,
          backgroundSize: 'cover',
          filter: 'blur(20px)',
        }}
      />
      {/* Actual image */}
      <img
        src={imagePath}
        alt={alt}
        className={`transition-opacity duration-500 ${className} ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

OptimizedImage.defaultProps = {
  className: '',
};

export default OptimizedImage;
