import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => {
  return (
    <section className='carousel'>
      <div className='carousel__container' />
      {children}
    </section>
  );
};
export default Carousel;
