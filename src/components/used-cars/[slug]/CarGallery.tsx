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

        <div className="flex flex-row md:flex-col md:gap- sm:block  absolute bottom-18 left-40 md:top-40  sm:top-[20%] md:left-1 z-10 space-y-2  gap-1">
    
          <span className="bg-[#A61C55] text-white text-[10px] md:text-[14px] font-semibold py-1  rounded text-center px-5">FEATURED</span>
          <div className="bg-white px-2 py-1 rounded shadow flex items-center mt-3">
            <Image src="/car/cars24_badge.png" alt="cert" className="object-cover w-[100px] h-[20px]" width={95} height={40} />
          </div>
        </div>

        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg border border-l-6 border-r-6 overflow-hidden">
          <div className="absolute top-3 right-3 bg-[#6F6D66] bg-opacity-60 text-white text-sm px-2 py-1 rounded z-10">
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
            className="w-full h-full"
            
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
                  
                  <div className="absolute bottom-2 left-2 z-10 bg-[#6F6D66] bg-opacity-60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                      <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
                    </svg>
                    {carImages.length}
                  </div>
                </div>
                <div className="swiper-button-prev-custom absolute top-1/2 md:left-3 -translate-y-1/2 z-10 bg-[#6F6C66] text-white w-10 h-10 rounded-md flex items-center justify-center cursor-pointer shadow-md">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
            <div className="swiper-button-next-custom absolute top-1/2 md:right-3 right-0 -translate-y-1/2 z-10 bg-[#6F6C66] text-white w-10 h-10 rounded-md flex items-center justify-center cursor-pointer shadow-md">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </div>
              </SwiperSlide>
            ))}
            
          </Swiper>
        </div>
      </div>

      <div className="mt-3 px-1 sm:px-1 sm:pr-10">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={48}
          slidesPerView={6}
          breakpoints={{
            0: { slidesPerView: 5.5,
                spaceBetween:20
             },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="w-full"
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

<div className="flex justify-between flex-wrap items-center gap-4 mt-6">

<div className="flex items-center flex-wrap gap-3 text-gray-800 text-lg">
  <div className="flex items-center gap-2">
          <img src="/car/date.png" className='w-5'  alt="date" />
    2023
  </div>
  <span className="text-gray-300">|</span>
  <div className="flex items-center gap-1">
  <img src="/car/auto.png" className='w-10'  alt="date" />

    41,803
  </div>
  <span className="text-gray-300">|</span>
  <div className="flex items-center gap-1">
  <img src="/car/auto1.png" className='w-6'  alt="date" />

    Automatic
  </div>
</div>

<div className="flex gap-2">
  <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 shadow-md rounded text-md text-gray-700 hover:bg-gray-50">
    <svg className="w-6 h-6 text-[#A4A4A4]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c2.04 0 3.8 1.23 4.5 3.09C12.7 4.23 14.46 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
    Save Ad
  </button>
  <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 shadow-md rounded text-md text-gray-700 hover:bg-gray-50">
          <img src="/car/share.png" className='w-6 h-6'  alt="share" />
    Share
  </button>
</div>
</div>

<div className="bg-white px-4 py-3 mt-5 rounded flex items-center gap-2 w-full text-sm text-blue-700 font-medium shadow-[0_-4px_8px_rgba(0,0,0,0.08),_0_4px_8px_rgba(0,0,0,0.08)]">
  <img src="/car/Screenshot 2025-05-05 153438.png" className="w-5" alt="success" />
  View inspection report for this car
</div>



{/* Badges */}
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

{/* Location & Updated */}
<div className="flex justify-between items-center text-md text-gray-900 font-semibold my-7">
<div className='text-gray-600'>Location: <span className=" text-gray-400">Dubai</span></div>
<div className="flex items-center gap-1"><p className='font-semibold text-gray-500 text-md'>Updated</p> <p className='font-light'>Apr 30, 2025</p></div>
</div>

{/* Vehicle Highlights */}
<div className="mt-8">
  <h2 className="text-2xl font-semibold text-gray-800 mb-5">Vehicle Highlights</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    
    {/* Model Year */}
    <div className="bg-[#F8F8F8] rounded p-5 text-center flex flex-col items-center">
      <img src="/car/sssss.png" alt="year"  className='w-10' />
      <p className="text-xs text-gray-500">Model Year</p>
      <p className="text-sm font-semibold text-blue-600">2023</p>
    </div>

    {/* Kilometers */}
    <div className="bg-[#F8F8F8] rounded p-5 text-center flex flex-col items-center">
      <img src="/car/sssss.png" alt="km"  className='w-10' />
      <p className="text-xs text-gray-500">Kilometers</p>
      <p className="text-sm font-semibold text-gray-900">41,803 KM</p>
    </div>

    {/* Location */}
    <div className="bg-[#F8F8F8] rounded p-5 text-center flex flex-col items-center">
      <img src="/car/sssss.png" className='w-10' alt="location"  />
      <p className="text-xs text-gray-500">Location</p>
      <p className="text-sm font-semibold text-blue-600">Dubai</p>
    </div>

    {/* Transmission */}
    <div className="bg-[#F8F8F8] rounded p-5 text-center flex flex-col items-center">
      <img src="/car/sssss.png" alt="gear"  className='w-10' />
      <p className="text-xs text-gray-500">Transmission</p>
      <p className="text-sm font-semibold text-gray-900">Automatic</p>
    </div>

    {/* Fuel Type */}
    <div className="bg-[#F8F8F8] rounded p-5 text-center flex flex-col items-center">
      <img src="/car/sssss.png" alt="fuel"  className='w-10' />
      <p className="text-xs text-gray-500">Fuel Type</p>
      <p className="text-sm font-semibold text-gray-900">Petrol</p>
    </div>

    {/* Exterior Color */}
    <div className="bg-[#F8F8F8] rounded p-5 text-center flex flex-col items-center">
      <img src="/car/sssss.png" alt="color"  className='w-10' />
      <p className="text-xs text-gray-500">Exterior Color</p>
      <p className="text-sm font-semibold text-blue-600">Grey</p>
    </div>

    {/* Service History */}
    <div className="bg-[#F8F8F8] rounded p-5 text-center flex flex-col items-center">
      <img src="/car/sssss.png" alt="service"  className='w-10' />
      <p className="text-xs text-gray-500">Service History</p>
      <p className="text-sm font-semibold text-gray-900">Yes</p>
    </div>

    {/* Number of Doors */}
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


    {/* العمود الأيمن */}
    <div className="space-y-2 divide-y divide-gray-200 md:pl-8 mt-6 md:mt-0 ">
      <div className="flex justify-between py-2 border-b-2 border-gray-100">
        <span>Body Style</span>
        <span className="font-semibold md:mr-30">SUV Crossover</span>
      </div>
    </div>

  </div>
</div>



<hr className=" w-full border my-5 border-gray-100" />

<div className="border-t border-gray-200 mt-8">
      {/* Header */}
      <div className="flex items-center justify-between py-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-2xl font-semibold text-gray-800">Features</h3>
        <div className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition">
          {isOpen ? <FiChevronUp className="w-5 h-5" /> : <FiChevronDown className="w-5 h-5" />}
        </div>
      </div>

      {/* Content */}
      {isOpen && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm text-gray-800 pb-4">
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