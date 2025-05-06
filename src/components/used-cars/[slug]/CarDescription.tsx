'use client'

import { useState } from 'react';

export default function CarDescription() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-6 text-base text-gray-800 leading-relaxed">
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">Description:</h3>

      <p className="mb-2 mt-2">
        Car Inspection Report: <a href="#" className="text-[#124d99] hover:underline">click here</a>
      </p>

      <p className="mb-2">
        This 2023 NISSAN PATROL comes with: SUV | 4.0L, 6 Cyl | 41803km | Four Wheel Drive | Automatic | Petrol | Grey | 8 Seats | 2 Keys
      </p>

      {expanded && (
        <>
          <p className="mb-2 font-semibold">AED 193999</p>
          <p className="mb-2">Financing starts from EMI 3040 AED / Month</p>

          <p className="mb-2 font-semibold">About CARS24:</p>
          <p className="mb-2">
            Experience a seamless way to buy pre-owned cars in the UAE with CARS24! We`re transforming car buying...
          </p>

          <p className="mb-2">
            <a href="#" className="text-[#124d99] hover:underline">Click here</a> to view our comprehensive inspection report and drive with confidence!
          </p>

          <p className="mb-1 font-semibold">**STEPS TO BUY YOUR NEXT CAR FROM CARS24**</p>
          <ul className="list-decimal list-inside mb-3 space-y-1">
            <li>Schedule a Test Drive Appointment on a convenient date.</li>
            <li>Enjoy your test drive...</li>
            <li>Explore the car finance options...</li>
            <li>Finalize and reserve your car...</li>
            <li>Experience the Joy of Driving...</li>
          </ul>

          <p className="mb-2 font-semibold">Wondering what else CARS24 has to offer?</p>

          <p className="mb-2">
            Complimentary Warranty...<br />
            Easy Insurance...<br />
            7-Day Return Policy...<br />
            Flexible Financing...
          </p>

          <p className="mb-2 font-semibold">Explore the 2023 Nissan Patrol</p>
          <p className="mb-2">
            If you`re interested, visit our
            <a href="#" className="text-[#124d99] hover:underline"> New Cars Section</a>.
          </p>

          <p className="mb-2 font-semibold">Used Car Market Information</p>
          <p>
            <a href="#" className="text-[#124d99] hover:underline">15 Used Nissan Patrol 2023</a> for sale in Dubai...
          </p>
        </>
      )}

      {/* زر Read More / Less */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-base text-[#124d99] cursor-pointer flex items-center gap-1 transition"
        >
          {expanded ? 'Read Less' : 'Read More'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 transform transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
