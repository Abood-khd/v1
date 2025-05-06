'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ContactPanel() {
  const [downPayment, setDownPayment] = useState('');
  const [tenure, setTenure] = useState('');
  const [alertOn, setAlertOn] = useState(false);

  return (
    <div className='flex flex-col gap-4 '>
    
    <div className="bg-white rounded-lg  p-4 space-y-6">
      <div className="space-y-3">
        <div className="flex items-center justify-center gap-2">
          <span className="bg-[#FFFAE7] text-[#FFB910] text-1xs font-medium px-2 py-1 mt-2 rounded-full flex items-center gap-1">
              <img src="/car/Screenshot 2025-05-05 140121.png" className='objict-cover w-4 md:w-5 ' alt="Screenshot" />
            Fair Deal
          </span>
        </div>

        <p className="text-xl sm:text-1xl text-center  text-gray-900">
          AED <span className="text-3xl tracking-wide font-semibold">193,999</span>
        </p>


        

        <div className="space-y-2 pt-0">
          <button className="w-full bg-[#003B73] hover:bg-[#124D99] text-white text-md font-semibold py-2.5 rounded flex items-center justify-center gap-2">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.21 1.01l-2.1 2.1a11.042 11.042 0 005.05 5.05l2.1-2.1a1 1 0 011.01-.21l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Show Number
          </button>

          <button className="w-full bg-[#F7941D] hover:bg-blue-600 text-white text-md font-semibold py-2.5 rounded">
            Book Free Test Drive
          </button>

          <button className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebf58] text-white text-md font-semibold py-2.5 rounded">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.373 0 0 5.373 0 12c0 2.115.552 4.188 1.596 6.02L0 24l6.12-1.608A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12 0-3.193-1.25-6.192-3.48-8.52zM12 22.08c-1.83 0-3.637-.492-5.208-1.416l-.372-.204-3.636.96.972-3.552-.24-.384A10.003 10.003 0 012.04 12c0-5.507 4.453-9.96 9.96-9.96s9.96 4.453 9.96 9.96-4.453 9.96-9.96 9.96zM17.4 14.94c-.252-.126-1.494-.738-1.722-.822-.228-.084-.396-.126-.564.126s-.648.822-.792.99c-.144.168-.288.192-.54.066-.252-.126-1.062-.39-2.022-1.242-.747-.666-1.248-1.488-1.392-1.74-.144-.252-.015-.39.111-.516.114-.114.252-.3.378-.45.126-.15.168-.252.252-.42.084-.168.042-.312-.021-.438-.063-.126-.564-1.368-.774-1.866-.204-.492-.414-.426-.57-.435l-.486-.009c-.168 0-.438.063-.666.294s-.876.858-.876 2.094c0 1.236.894 2.43 1.02 2.598.126.168 1.758 2.682 4.266 3.762.596.258 1.062.414 1.422.531.597.189 1.14.162 1.566.099.48-.072 1.494-.612 1.704-1.203.21-.591.21-1.098.147-1.203-.063-.105-.231-.168-.483-.294z" />
            </svg>
            Whatsapp
          </button>
        </div>



      </div>

    
    </div>
    <div className="bg-gray-50 rounded-lg p-4 space-y-4 bg-white">
        <h3 className="font-semibold text-base text-gray-700 flex items-center gap-2">
            <img src="/car/Screenshot 2025-05-05 141533.png" className='w-4 ' alt="screen" />
          Car Finance Calculator
        </h3>

        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-md   text-gray-700">Down Payment:</label>
            <input
              type="type"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-md focus:outline-none focus:ring focus:ring-blue-600"
              placeholder="Enter Down Payment"
            />
          </div>

          <div className="relative space-y-1 cursor-pointer">
  <label className="text-md text-gray-700">Select Tenure (Years):</label>
  <div className="relative">
    <select
      value={tenure}
      onChange={(e) => setTenure(e.target.value)}
      className="w-full border border-gray-300 rounded mt-1 px-3 py-2 text-md bg-white focus:outline-none focus:ring focus:ring-blue-600 appearance-none pr-10"
    >
      <option value="">Select Tenure</option>
      <option value="1">1 Year</option>
      <option value="2">2 Years</option>
      <option value="3">3 Years</option>
      <option value="4">4 Years</option>
      <option value="5">5 Years</option>
    </select>

    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
      <svg
        className="w-6 h-6 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</div>

          <button
            className="w-full border border-[#ACC1DB] text-[#ACC1DB] font-semibold py-2 rounded text-md"
            disabled
          >
            Calculate
          </button>

          <button className="w-full border border-[#124D99] text-[#124D99] font-semibold py-2 rounded text-md cursor-pointer">
            Get Car Finance Now
          </button>

          <p className="text-[12px] text-gray-500 text-center">
            * Final rates, fees, and terms are determined by the bank and may vary based on their policies, which are subject to change.
          </p>

          <div className="pt-2 text-center text-sm font-semibold text-gray-700">
            Powered By
            <div className="mt-1 flex justify-center">
              <Image src="/car/image.png" alt="Finmart Logo" width={130} height={30} />
            </div>
          </div>
        </div>
      </div>

      <div className=" rounded-xl   space-y-6">
      {/* Sell Prompt */}
      <div className="bg-[#E6E6E6] p-4 rounded-md text-center space-y-2">
        <p className="text-sm text-gray-700">
          Got a similar <span className="font-semibold">Used Nisan Patrol</span> to sell in Dubai?
        </p>
        <button className="px-2 py-1 border bg-white border-[#124D99] text-[#124D99] text-sm rounded font-medium hover:bg-blue-50">
          Sell it yourself
        </button>
      </div>

      {/* Seller Details */}
      <div className="bg-white rounded-xl   space-y-4">
      <div className='p-4'>
          <h4 className="font-semibold text-gray-800 mb-2">Seller Details</h4>
          <div className="flex gap-3 items-center">
            <Image src="/car/Screenshot 2025-05-05 142629.png" alt="Cars24" width={60} height={25} className="shrink-0 mt-1" />
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-700 font-medium">Cars24</span>
              <button className="mt-2 flex cursor-pointer items-center gap-1 border border-gray-300 text-sm font-semibold text-[#124D99] px-3 py-1.5 rounded  w-fit">
                View all used cars ads &gt;
              </button>
            </div>
          </div>
        </div>


        <hr className=" w-full border-t border-gray-200" />
        <div className='px-4 pb-4'>
          <h4 className="font-semibold text-gray-800 mb-1 ">Location</h4>
          <p className="text-sm font-semibold text-gray-900 ">Jebel Ali - Dubai</p>
        </div>
      </div>



    <div className="rounded-md border border-gray-200 overflow-hidden">
        <div className="h-2 bg-[#124D99] w-full"></div>
        <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-800 bg-white">
          <div>
            <p className="font-semibold text-lg text-gray-900 mb-0.5">Create Alert</p>
            <p className="text-md text-gray-700 leading-tight">
              Would you like to receive similar cars by email?
            </p>
          </div>
          <button
            onClick={() => setAlertOn(!alertOn)}
            className={`w-[50px] h-[28px] rounded-full flex items-center px-[3px] transition-colors duration-300 ${
              alertOn ? 'bg-[#0A4DA2]' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-[22px] h-[22px] bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                alertOn ? 'translate-x-[22px]' : 'translate-x-0'
              } flex items-center justify-center`}
            >
              <svg
                className={`w-[15px] h-[15px] ${alertOn ? 'text-[#0A4DA2]' : 'text-gray-400'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 22a2 2 0 01-2-2h4a2 2 0 01-2 2zm6-6V9a6 6 0 10-12 0v7l-1.29 1.29A1 1 0 006 19h12a1 1 0 00.71-1.71L18 16z" />
              </svg>
            </div>
          </button>
        </div>
        </div>



    </div>


  </div>
  );
}
