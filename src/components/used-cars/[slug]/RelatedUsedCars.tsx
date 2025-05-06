'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface CarData {
  name: string;
  price: string;
  location: string;
  mileage?: number;
  year: number;
  transmission: string;
  image: string;
  featured?: boolean;
  photos?: number;
  certified:boolean;
}

const allCarsData: CarData[] = [
  {
    name: 'Used Nissan Murano 3.5 LE 2012',
    price: 'FromAED 12,900',
    location: 'Ajman',
    mileage: 186000,
    year: 2012,
    transmission: 'Automatic',
    image: '/webp_slide_show_67f92dc812e4d_2441972.webp',
    featured: true,
    photos: 5,
    certified:true,
  },
  {
    name: 'New Hyundai Tucson 2025',
    price: 'FromAED 98,000',
    location: 'Dubai',
    mileage: 0,
    year: 2025,
    transmission: 'Automatic',
    image: '/webp_slide_show_67f92dc812e4d_2441972.webp',
    featured: true,
    certified:false,
  },
  {
    name: 'New Hyundai Tucson 2025',
    price: 'FromAED 98,000',
    location: 'Dubai',
    mileage: 0,
    year: 2025,
    transmission: 'Automatic',
    image: '/webp_slide_show_67f92dc812e4d_2441972.webp',
    featured: false,
    certified:true,
  },
  {
    name: 'New Hyundai Tucson 2025',
    price: 'FromAED 98,000',
    location: 'Dubai',
    mileage: 0,
    year: 2025,
    transmission: 'Automatic',
    image: '/webp_slide_show_67f92dc812e4d_2441972.webp',
    featured: true,
    certified:true
  },
  {
    name: 'New Hyundai Tucson 2025',
    price: 'FromAED 98,000',
    location: 'Dubai',
    mileage: 0,
    year: 2025,
    transmission: 'Automatic',
    image: '/webp_slide_show_67f92dc812e4d_2441972.webp',
    featured: true,
    certified:true
  },
  {
    name: 'New Hyundai Tucson 2025',
    price: 'FromAED 98,000',
    location: 'Dubai',
    mileage: 0,
    year: 2025,
    transmission: 'Automatic',
    image: '/webp_slide_show_67f92dc812e4d_2441972.webp',
    featured: true,
    certified:true
  },
];


const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 right-[-18px] z-10 w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer"
    >
      <svg
        className="w-7 h-7 text-[#265CA2]"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 left-[-18px] z-10 w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer"
    >
      <svg
        className="w-7 h-7 text-[#265CA2]"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M12.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L9.414 10l3.293 3.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};


const PopularUsedCars = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: 'slick-dots custom-dots',
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4, dots: true },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, dots: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, arrows: false },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1.5, arrows: false },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: 'relative', bottom: '-20px' }}>
        <ul style={{ margin: '0', padding: '0' }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: '11px',
          height: '11px',
          borderRadius: '50%',
          backgroundColor: '#4D7AB3',
          margin: '0 4px',
        }}
      />
    ),
  };

  return (
    <div className="w-full bg-[#fff] py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-16">
      <div className="flex   sm:flex-row justify-between items-center gap-3 mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#000]">
          Related Used Cars
        </h2>
        <button className="text-sm font-semibold shadow-md text-[#124d99] border border-[#124d99] rounded-md px-4 py-1 hover:bg-[#124d99] hover:text-white transition">
          View All
        </button>
      </div>

      <Slider {...settings}>
        {allCarsData.map((car, index) => (
         <div key={index} className="px-2 pb-4">
         <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
           <div className="relative h-[160px] sm:h-[180px] md:h-[200px]">
             <Image
               src={car.image}
               alt={car.name}
               width={300}
               height={150}
               className="w-full h-full object-cover md:px-8 bg-[#EEEEEE]"
             />

             <div className="absolute top-2 left-2 flex flex-col md:flex-row gap-1 z-10">
               {car.featured && (
                 <span className="bg-[#9C2B2E] text-white text-[13px] font-semibold px-2 py-0.5 rounded">
                   FEATURED
                 </span>
               )}
               {car.certified && (
                 <span className="bg-[#027A48] text-white text-[13px] font-semibold px-2 py-0.5 rounded">
                   CERTIFIED
                 </span>
               )}
             </div>


             <div className="absolute top-2 right-1 bg-white p-1.5 rounded-full shadow-md z-10">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                      2 5.42 4.42 3 7.5 3c2.04 0 3.8 1.23 4.5 3.09 
                      C12.7 4.23 14.46 3 16.5 3 
                      19.58 3 22 5.42 22 8.5 
                      c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>

              <div className="p-2 sm:p-3 flex flex-col justify-between h-auto md:h-[120px]">
                <div>
                  <h3 className="text-sm sm:text-[14px] font-medium text-[#000] hover:text-[#124d99] line-clamp-2">
                    {car.name}
                  </h3>
                  <p className="text-sm sm:text-md font-semibold text-[#124d99]">
                    {car.price}
                  </p>
                </div>
                <div className="text-md text-[#868686] ">
                  <p>{car.location}</p>
                  <div className="flex flex-wrap gap-1 md:gap-4 text-md font-light text-[#3b3b3b] mt-1 ">
                    <span>{car.mileage?.toLocaleString() || '0'} KM</span>
                    <span>|</span>
                    <span>{car.transmission}</span>
                    <span>|</span>
                    <span>{car.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularUsedCars;
