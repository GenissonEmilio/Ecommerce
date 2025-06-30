"use client";

import Slider, { CustomArrowProps } from "react-slick";
import Image from "next/image";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const adImages = [
  "https://m.media-amazon.com/images/I/810bk6Bif-L._SX3000_.jpg",
  
];

function PrevArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-4 top-[20%] -translate-y-1/2 z-10 cursor-pointer bg-none p-2 rounded-full"
      onClick={onClick}
    >
      <GoChevronLeft className="text-black" size={40} />
    </div>
  );
}

function NextArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-4 top-[20%] -translate-y-1/2 z-10 cursor-pointer  p-2 rounded-full bg-none"
      onClick={onClick}
    >
      <GoChevronRight className="text-black" size={40} />
    </div>
  );
}

export const AdArea = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-full relative overflow-hidden">
      <Slider {...settings}>
        {adImages.map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`Ad ${index}`}
              width={300}
              height={300}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
