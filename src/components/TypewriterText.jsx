import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TypewriterText = ({ delay = 100, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('Yuan');

  useEffect(() => {
    const texts = ['Yuan', 'Ali'];
    let timeout;

    if (isDeleting) {
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        }, delay / 2);
      } else {
        setIsDeleting(false);
        const nextText = currentText === texts[0] ? texts[1] : texts[0];
        setCurrentText(nextText);
      }
    } else {
      if (currentIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev + currentText[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, delay);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Wait 2 seconds before starting to delete
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, delay, currentText]);

  return (
    <span className={`${className} inline-block min-w-[4ch]`}>
      <span className="text-[#89CFF0]">{displayText}</span>
      <span className="animate-blink">|</span>
    </span>
  );
};

TypewriterText.propTypes = {
  text: PropTypes.string,
  delay: PropTypes.number,
  className: PropTypes.string
};

export default TypewriterText;
