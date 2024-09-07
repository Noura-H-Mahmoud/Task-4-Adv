import React from 'react'
import './Hero.css'
import CarouselHero from '../CarouselHero/CarouselHero'
import imgCarousel1 from '../../assets/images/hero-carousel-3.jpg';
import imgCarousel2 from '../../assets/images/hero-carousel-2.jpg';
import imgCarousel3 from '../../assets/images/hero-carousel-1.jpg';

export default function Hero() {
  const items = [
    {
      src: imgCarousel1,
      alt: 'First slide'
    },
    {
      src: imgCarousel2,
      alt: 'Second slide'
    },
    {
      src: imgCarousel3,
      alt: 'Third slide'
    }
  ];
  return (
    <div id='home'>
      <CarouselHero items={items} />
    </div>
  )
}
