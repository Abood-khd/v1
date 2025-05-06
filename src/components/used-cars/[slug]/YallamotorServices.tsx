'use client'

import Image from 'next/image';

export default function YallamotorServices() {
  return (
    <div className="mt-10 pb-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-5">Yallamotor Services</h2>

      <div className="flex md:flex-wrap   gap-6">
        <div className="w-[240px] rounded-xl bg-white p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
          <div className="flex justify-center mb-3">
            <Image src="/car/service-report (1).png" alt="Vehicle Report" width={150} height={80} />
          </div>
          <h3 className="text-start font-semibold text-sm md:text-lg text-gray-900 mb-3">VEHICLE REPORT</h3>
          <p className="text-start text-[#124d99] text-sm md:text-md font-medium flex items-center gap-1">
            Get a Full Report
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </p>
        </div>

        <div className="w-[240px] cursor-pointer rounded-xl bg-white p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer" >
          <div className="flex justify-center mb-3">
            <Image src="/car/service-export.png" alt="Car Export"width={150} height={80}/>
          </div>
          <h3 className="text-start font-semibold text-sm md:text-lg text-gray-900 mb-3">CAR EXPORT</h3>
          <p className="text-start text-[#124d99] text-sm md:text-md font-medium flex items-center gap-1">
            Explore More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}
