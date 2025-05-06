'use client';

import React from 'react';
import Image from 'next/image';

interface Article {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

const articles: Article[] = [
  {
    id: '1',
    image: '/car/listing_main_do-car-dealerships-own-their-cars-Easterns.jpeg',
    title: '15 Most Reliable Used Cars in the UAE (2025): Best for Every Budget',
    excerpt: 'Top 15 most reliable used cars in UAE (2024): Best for budget, luxu...',
    author: 'Ahmad Rashad Al Zeer',
    date: '2025-05-04',
  },
  {
    id: '2',
    image: '/car/thumb_2.jpg',
    title: 'Star Wars 20th Anniversary: 3 Cars That Look Like They Rode the Kessel Run',
    excerpt: 'Celebrate 20 years of Star Wars with 3 Earth cars worthy of the sag...',
    author: 'Tejas Kokcha',
    date: '2025-05-04',
  },
  {
    id: '3',
    image: '/car/thumb_2027-renault-5-turbo-3e-production-version__3_.jpg',
    title: 'Renault 5 Turbo 3E: A Retro-Inspired Electric Hot Hatch with Supercar Ambitions',
    excerpt: 'The Renault 5 Turbo 3E blends 1980s nostalgia with 536 HP electric ...',
    author: 'Tejas Kokcha',
    date: '2025-05-04',
  },
  {
    id: '4',
    image: '/car/thumb_hyundai-next-gen-hybrid-tech__3_.jpg',
    title: 'Hyundai Unveils Next-Gen Hybrid Powertrains',
    excerpt: 'Hyundai unveils advanced hybrid powertrains with Smartstream tech—b...',
    author: 'Tejas Kokcha',
    date: '2025-05-04',
  },
];

export default function LatestNews() {
  const featured = articles[0];
  const others = articles.slice(1);

  return (
    <section className="px-4 md:px-18 py-10 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[22px] font-semibold  text-[#000]">
          Latest Car News and Reviews in UAE
        </h2>
        <button className="px-6 cursor-pointer py-2 border border-[#0a4ba2] shadow-lg text-[#0a4ba2] rounded   text-md">
          View All
        </button>
      </div>

      <div className="flex flex-col lg:flex-row md:gap-[15px]">
        <div className="flex-1 max-w-[700px]">
          <div className="overflow-hidden ">
            <Image
              src={featured.image}
              alt={featured.title}
              width={720}
              height={300}
              className="w-full h-[258px] object-cover "
            />
          </div>
          <h3 className="text-[18px] font-semibold mt-4 text-[#1a1a1a]">
            {featured.title}
          </h3>
          <p className="text-[15px] text-gray-600 mt-1">{featured.excerpt}</p>
          <button className="text-[#0a4ba2] text-[15px] font-semibold mt-1 hover:underline">
            Read More »
          </button>
          <p className="text-[14px] text-gray-500 mt-1">
            By: <span className="font-medium">{featured.author}</span> | {featured.date}
          </p>
        </div>

        <div className="flex flex-col w-full max-w-[680px]">
          {others.map((item, idx) => (
            <div
              key={item.id}
              className={`flex gap-4 items-start  ${idx !== 0 ? 'pt-6' : ''}`}
            >
              <div className="flex-shrink-0 w-[150px] h-[110px] overflow-hidden ">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={150}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" ">
                <h4 className="text-[15px] font-semibold text-[#1a1a1a] hover:text-[#0a4ba2] cursor-pointer">
                  {item.title}
                </h4>
                <p className="text-[14px] text-gray-600">{item.excerpt}</p>
                <button className="text-[#0a4ba2] md:text-[13px] font-semibold hover:underline">
                  Read More »
                </button>
                <p className="text-[13px] text-gray-500">
                  By: {item.author} • {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}