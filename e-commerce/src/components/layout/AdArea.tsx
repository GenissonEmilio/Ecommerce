"use client";

import Slider, { CustomArrowProps } from "react-slick";
import Image from "next/image";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const adImages = [
  "/images/notebookAd.jpg",
  "/images/carAd.jpg",
  "/images/controllerAd.jpg",
];

function PrevArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-4 top-[20%] -translate-y-1/2 z-10 cursor-pointer bg-none p-2 rounded-full hidden md:block"
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
      className="absolute right-4 top-[20%] -translate-y-1/2 z-10 cursor-pointer  p-2 rounded-full bg-none hidden md:block"
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
              width={900}
              height={100}
              className="object-cover w-full h-[300px] sm:h-[250px] md:h-[400px] lg:h-[500px]"
              priority
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
