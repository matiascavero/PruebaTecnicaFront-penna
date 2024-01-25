import React, { useEffect, useRef, useState } from 'react';
import data from './dataImgs';

const Carrusel = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;

    if (!isHovered) {
      // Si no se está pasando el mouse sobre el carrusel, activar el movimiento automático
      interval = setInterval(() => {
        scrollToImage('next');
      }, 2000);
    }

    return () => clearInterval(interval);

  }, [currentIndex, isHovered]);

  const handleMouseEnter = () => {
    // Cuando el mouse entra en el carrusel, detener el movimiento automático
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Cuando el mouse sale del carrusel, reanudar el movimiento automático
    setIsHovered(false);
  };

  useEffect(() => {
    const listNode = listRef.current;
    const imgNodes = listNode.querySelectorAll("li > img");

    if (imgNodes.length > 0) {
      imgNodes.forEach((imgNode, index) => {
        if (index === currentIndex) {
          imgNode.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    }

  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = curr === 0;
        return isFirstSlide ? data.length - 1 : curr - 1;
      });
    } else {
      setCurrentIndex(curr => {
        const isLastSlide = curr === data.length - 1;
        return isLastSlide ? 0 : curr + 1;
      });
    }
  };

  return (
    <div className="main-container">
      <div className="slider-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
        <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
        <div className="container-images">
          <ul ref={listRef}>
            {data.map((item, index) => (
              <li key={item.id} className={index === currentIndex ? 'active' : ''}>
                <img
                  src={item.urlImg}
                  width={index === currentIndex ? 500 : 150}
                  height={index === currentIndex ? 280 : 150}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
