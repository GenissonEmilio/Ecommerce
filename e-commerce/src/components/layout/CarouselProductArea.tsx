'use client';

import Slider from 'react-slick';
import { Product } from '../items/Product';

export const CarouselProductArea = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {[...Array(10)].map((_, index) => (
          <div key={index}>
            <Product />
          </div>
        ))}
      </Slider>
    </div>
  );
};
