'use client';

import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import {  Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import YallamotorServices from './YallamotorServices';
import CarDescription from './CarDescription';

const carImages = [
  { id: 1, path: '/car/webp_listing_main_1.webp' },
  { id: 2, path: '/car/webp_listing_main_6.webp' },
  { id: 3, path: '/car/webp_listing_main_14.webp' },
  { id: 4, path: '/car/webp_listing_main_21.webp' },
  { id: 5, path: '/car/webp_listing_main_27.webp' },
  { id: 6, path: '/car/webp_listing_main_32.webp' },
  { id: 7, path: '/car/webp_listing_main_camera-Anti-Glare-Rear-View-Mirror.webp' },
  { id: 8, path: '/car/webp_listing_main_camera-Apple-Play.webp' },
  { id: 9, path: '/car/webp_listing_main_camera-Automatic-Headlights.webp' },
  { id: 10, path: '/car/webp_listing_main_camera-Central-Armrest-.webp' },
  { id: 11, path: '/car/webp_listing_main_camera-Differential-Locks.webp' },
];


const features = [
    'ABS', 'Bluetooth system', 'Fridge', 'Parking sensors', 'Rear Cam',
    'Adaptive Cruise Control', 'Infotainment System', 'Blind Spot Monitor', 'Apple Car Play', 'Traction control',
    'Automatic Headlights', 'Airbags', 'Cruise control', 'Navigation system', 'Power locks',
    'Steering Mounted Audio Controls', 'Lane Departure Warning', 'Day Running Lights',
    'Power Trunk', 'Steering Column Adjuster', 'Rear Window Defogger'
  ];

export default function CarGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="bg-white rounded-lg  p-5 sm:p-3 relative overflow-hidden">
      <div className="bg-white mt-4">
        <div className="mb-3">
          <h1 className="text-2xl font-medium">Nissan Patrol 2023</h1>
          <div className="mt-4 sm:mt-5">
            <p className="uppercase font-bold text-sm">NISSAN PATROL SE TITANIUM</p>
            <p className="text-sm font-bold text-gray-600">Home Test Drive Available * Zero Down Payment</p>
          </div>
        </div>





   
  


        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg border border-l-6 border-r-6  z-10">
        <div className="absolute bottom-[-13px] md:bottom-auto md:top-5 left-1/2 md:left-[-10px] transform -translate-x-1/2 md:translate-x-0 w-full md:w-auto flex items-end md:flex-col gap-2 justify-center md:justify-start z-50">
  <span className="bg-[#A61C55] text-white text-[10px] md:text-[14px] font-semibold py-1 rounded text-center px-2 md:px-5">
    FEATURED
  </span>
    <Image
      src="/car/cars24_badge.png"
      className="w-18 h-6 md:w-26 md:h-7 "
      alt="cert"
      width={95}
      height={20}
    />
</div>


<div className="absolute bottom-2 right-2 md:right-auto md:left-2 z-20 bg-[#6F6D66] bg-opacity-60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
  <img src="/car/Screenshot 2025-05-06 172331.png" className="w-4 md:w-5" alt="icon" />
  {carImages.length}
</div>

<div className="absolute top-3 left-3 md:left-auto md:right-3 bg-[#6F6D66] bg-opacity-60 text-white text-sm px-2 py-1 rounded z-30">
  {activeIndex + 1} / {carImages.length}
</div>


  <Swiper
    modules={[Navigation, Thumbs]}
    navigation={{
      nextEl: '.swiper-button-next-custom',
      prevEl: '.swiper-button-prev-custom',
    }}
    thumbs={{ swiper: thumbsSwiper }}
    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    className="w-full h-full select-none"
  >
    {carImages.map((img, idx) => (
      <SwiperSlide key={img.id}>
        <div className="relative w-full h-full">
          <Image
            src={img.path}
            alt={`Car ${idx + 1}`}
            fill
            className="object-cover object-center w-full h-full"
          />
     
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  <div className="swiper-button-prev-custom pointer-events-auto absolute top-1/2 md:left-3 -translate-y-1/2 z-30 bg-[#6F6C66] text-white w-8 h-8 md:w-10 md:h-10 rounded-md flex items-center justify-center cursor-pointer shadow-md">
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <polyline points="15 18 9 12 15 6" />
  </svg>
</div>
<div className="swiper-button-next-custom pointer-events-auto absolute top-1/2 right-0 md:right-3 -translate-y-1/2 z-30 bg-[#6F6C66] text-white w-8 h-8 md:w-10 md:h-10 rounded-md flex items-center justify-center cursor-pointer shadow-md">
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <polyline points="9 6 15 12 9 18" />
  </svg>
</div>
        </div>


        
      </div>

      <div className="mt-5 md:mt-3 px-1 sm:px-1 sm:pr-10">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={48}
          slidesPerView={6}
          breakpoints={{
            0: { slidesPerView: 5,
                spaceBetween:20
             },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="w-full  pointer-events-auto select-none"
        >
          {carImages.map((img, idx) => (
            <SwiperSlide key={img.id}>
              <div
            
              >
                <Image
                  src={img.path}
                  alt={`Thumb ${idx + 1}`}
                  width={72}
                  height={54}
                  className={clsx(
                    'cursor-pointer w-full h-full w-full overflow-hidden rounded object-cover w-[96px] h-[64px]',
                    idx === activeIndex && 'border-2 border-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.4)]'
                  )}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>






      <div className="flex flex-col md:flex-row md:justify-between md:items-center flex-wrap gap-4 mt-6">

<div className="flex flex-row sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 text-gray-800 text-base sm:text-lg">
  <div className="flex items-center gap-2">
    <img src="/car/date.png" className='w-5' alt="date" />
    2023
  </div>
  <span className="hidden sm:inline text-gray-300">|</span>
  <div className="flex items-center gap-1">
    <img src="/car/auto.png" className='w-8 sm:w-10' alt="mileage" />
    41,803
  </div>
  <span className="hidden sm:inline text-gray-300">|</span>
  <div className="flex items-center gap-1">
    <img src="/car/auto1.png" className='w-5 sm:w-6' alt="transmission" />
    Automatic
  </div>
</div>

<div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
  <button className="flex items-center justify-center gap-1 px-3 py-2 bg-white border border-gray-200 shadow-md rounded text-sm sm:text-md text-gray-700 hover:bg-gray-50 w-full sm:w-auto">
    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#A4A4A4]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c2.04 0 3.8 1.23 4.5 3.09C12.7 4.23 14.46 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
    Save Ad
  </button>
  <button className="flex items-center justify-center gap-1 px-4 py-2 bg-white border border-gray-200 shadow-md rounded text-sm sm:text-md text-gray-700 hover:bg-gray-50 w-full sm:w-auto">
    <img src="/car/share.png" className='w-5 h-5 sm:w-6 sm:h-6' alt="share" />
    Share
  </button>
</div>

</div>

<div className="bg-white px-4 py-3 mt-5 rounded flex items-center gap-2 w-full text-sm text-blue-700 font-medium shadow-[0_-4px_8px_rgba(0,0,0,0.08),_0_4px_8px_rgba(0,0,0,0.08)]">
  <img src="/car/Screenshot 2025-05-05 153438.png" className="w-5" alt="success" />
  View inspection report for this car
</div>



<div className="flex flex-wrap gap-1 mt-5">
<span className="bg-[#991267] text-white px-3 py-1 text-sm  rounded flex items-center gap-1">
 <img src="/car/sa7.png" className='w-6' alt="Warranty" />
  Warranty Available
</span>
<span className="bg-[#FFC100]  text-white px-3 py-1 text-sm  rounded flex items-center gap-1">
<img src="/car/sec.png" className='w-6' alt="Payment" />

  No Down Payment
</span>
<span className="bg-[#2784FC] text-white px-3 py-1 text-sm  rounded flex items-center gap-1">
<img src="/car/thr.png"  className='w-4'  alt=" Drive Available" />
  Home Test Drive Available
</span>
</div>

<div className="flex justify-between items-center text-md text-gray-900 font-semibold my-7">
<div className='text-gray-600'>Location: <span className=" text-gray-400">Dubai</span></div>
<div className="flex items-center gap-1"><p className='font-semibold text-gray-500 text-md'>Updated</p> <p className='font-light'>Apr 30, 2025</p></div>
</div>

<div className="mt-8">
  <h2 className="text-2xl font-semibold text-gray-800 mb-5">Vehicle Highlights</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    
    <div className="bg-[#F8F8F8] rounded p-5 text-center flex flex-col items-center">
      <img src="/car/sssss.png" alt="year"  className='w-10' />
      <p className="text-xs text-gray-500">Model Year</p>
      <p className="text-sm font-semibold text-blue-600">2023</p>
    </div>

    <div className="bg-[#F8F8F8] rounded p-5 text-center flex flex-col items-center">
      <img src="/car/sssss.png" alt="km"  className='w-10' />
      <p className="text-xs text-gray-500">Kilometers</p>
      <p className="text-sm font-semibold text-gray-900">41,803 KM</p>
    </div>

    <div className="bg-[#F8F8F8] rounded p-5 text-center flex flex-col items-center">
      <img src="/car/sssss.png" className='w-10' alt="location"  />
      <p className="text-xs text-gray-500">Location</p>
      <p className="text-sm font-semibold text-blue-600">Dubai</p>
    </div>

    <div className="bg-[#F8F8F8] rounded p-5 text-center flex flex-col items-center">
      <img src="/car/sssss.png" alt="gear"  className='w-10' />
      <p className="text-xs text-gray-500">Transmission</p>
      <p className="text-sm font-semibold text-gray-900">Automatic</p>
    </div>

    <div className="bg-[#F8F8F8] rounded p-5 text-center flex flex-col items-center">
      <img src="/car/sssss.png" alt="fuel"  className='w-10' />
      <p className="text-xs text-gray-500">Fuel Type</p>
      <p className="text-sm font-semibold text-gray-900">Petrol</p>
    </div>

    <div className="bg-[#F8F8F8] rounded p-5 text-center flex flex-col items-center">
      <img src="/car/sssss.png" alt="color"  className='w-10' />
      <p className="text-xs text-gray-500">Exterior Color</p>
      <p className="text-sm font-semibold text-blue-600">Grey</p>
    </div>

    <div className="bg-[#F8F8F8] rounded p-5 text-center flex flex-col items-center">
      <img src="/car/sssss.png" alt="service"  className='w-10' />
      <p className="text-xs text-gray-500">Service History</p>
      <p className="text-sm font-semibold text-gray-900">Yes</p>
    </div>

    <div className="bg-[#F8F8F8] rounded p-5 text-center flex flex-col items-center">
      <img src="/car/sssss.png" alt="doors"  className='w-10' />
      <p className="text-xs text-gray-500">Number of Doors</p>
      <p className="text-sm font-semibold text-gray-900">4</p>
    </div>
    
  </div>
</div>




<hr className=" w-full border mt-10 border-gray-100" />



<div className="mt-6">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Car Details</h2>

  <div className="grid grid-cols-1 md:grid-cols-2  text-sm text-gray-800">

    {/* العمود الأيسر */}

  <div className="text-sm text-gray-800 w-full divide-y divide-gray-200">
    {[
      ['Model Year', '2023'],
      ['Location', 'Dubai'],
      ['Kilometers', '41,803'],
      ['Transmission', 'Automatic'],
      ['Service History', 'Yes'],
      ['Drive Type', 'Front Wheel Drive'],
      ['Regional Specs', 'GCC Specs'],
      ['Fuel Type', 'Petrol'],
      ['Number of Cylinders', '6'],
      ['Number of Doors', '4'],
    ].map(([label, value]) => (
      <div key={label} className="grid grid-cols-[270px_1fr] py-2">
        <span>{label}</span>
        <span className="font-semibold md:text-[16px]">{value}</span>
      </div>
    ))}
  </div>


    <div className="hidden md:block space-y-2 divide-y divide-gray-200 md:pl-8 mt-6 md:mt-0 ">
      <div className="flex justify-between py-2 border-b-2 border-gray-100">
        <span>Body Style</span>
        <span className="font-semibold md:mr-30">SUV Crossover</span>
      </div>
    </div>

  </div>
</div>



<hr className=" w-full border my-5 border-gray-100" />

<div className="md:border-t border-gray-200 md:mt-8">
      <div className="flex items-center justify-between py-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-2xl font-semibold text-gray-800">Features</h3>
        <div className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition">
          {isOpen ? <FiChevronUp className="w-5 h-5" /> : <FiChevronDown className="w-5 h-5" />}
        </div>
      </div>

      {isOpen && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-sm text-gray-800 pb-4">
         {features.map((item, idx) => (
  <div key={idx} className="flex items-start gap-2">
    <div className="w-4 h-4 mt-[3px] rounded-full bg-[#EBF1FC] flex items-center justify-center">
      <svg
        className="w-3 h-3 text-blue-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <span>{item}</span>
  </div>
))}
        </div>
      )}
    </div>

    <hr className=" w-full border my-3 border-gray-100" />

<CarDescription/>
<YallamotorServices/>



    </div>

    </>
  );
}