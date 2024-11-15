import { useRef, useState } from 'react';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import './CardSlider.css';

const CardSlider = ({ cards }) => {
  const sliderRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);

  const slide = (shift) => {
    sliderRef.current.scrollBy({ left: shift, behavior: 'smooth' });
    setScrollX(sliderRef.current.scrollLeft + shift);
  };

  return (
    <div className="slider-container">
      <MdArrowBackIos 
        className={`arrow ${scrollX <= 0 ? 'disabled' : ''}`} 
        onClick={() => slide(-200)} 
      />
      <div className="slider" ref={sliderRef}>
        {cards.map((card, index) => (
          <div key={index} className="card">
            {card}
          </div>
        ))}
      </div>
      <MdArrowForwardIos 
        className="arrow" 
        onClick={() => slide(200)} 
      />
    </div>
  );
};

export default CardSlider;
