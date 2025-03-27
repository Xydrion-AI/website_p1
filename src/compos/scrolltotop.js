import React, { useState, useEffect } from 'react';

const arrowUp = '/assets/images/up.png'

//Petit bouton pour remonter en haut de page

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) { // Condition d'apparition du bouton (inutile en haut de page)
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility); // Ecoute d'event encore en lien avec l'apparition du bouton

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, //Position
      behavior: 'smooth' // Animation
    });
  };

  return ( // Partie affichage
    <div>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <img className="arrowUp" src={arrowUp} alt="Scroll to top" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopArrow;