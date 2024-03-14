import React, { useEffect, useState } from 'react';


const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
        window.removeEventListener('scroll', toggleVisibility);
    };
}, []);

const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
  return (
    <>
      <footer className="footer mt-3 py-3 bg-light text-center">
        <div className="container">
          <span className="text-muted">© 2024 Product Manager</span>
        </div>
        <div
          className={`back-to-top ${isVisible ? 'visible' : 'hidden'}`}
          onClick={scrollToTop}
        >
          <span>↑</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
