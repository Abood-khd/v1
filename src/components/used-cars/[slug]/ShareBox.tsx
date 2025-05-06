import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";

export default function ShareBox() {
  return (
    <section className="bg-[#f9f9f9] py-4">
      <div className="bg-white w-full py-6 px-4 sm:px-6 md:px-18 rounded-md shadow-sm">
        <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-[#1a1a1a] mb-5 flex">
          Like this used car?{" "}
          <span className="block sm:inline font-semibold text-[#1a1a1a]">
            Come back to it later, easily.
          </span>
        </h2>

        <div className="flex flex-wrap items-center gap-3 text-sm text-[#1a1a1a]">
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition text-sm">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#A4A4A4]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
              2 5.42 4.42 3 7.5 3c2.04 0 3.8 1.23 4.5 3.09C12.7 
              4.23 14.46 3 16.5 3 19.58 3 22 5.42 22 8.5c0 
              3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>Save Ad</span>
          </button>

          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition text-sm">
            <HiOutlineBell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
            <span>Create Alert</span>
          </button>

          <span className="text-md font-semibold text-gray-700 px-2">or share</span>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition text-sm">
            <FaFacebookF className="text-[#3b5998] w-4 h-4 sm:w-5 sm:h-5" />
            <span>Facebook</span>
          </button>

          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition text-sm">
            <FaTwitter className="text-[#1da1f2] w-4 h-4 sm:w-5 sm:h-5" />
            <span>Twitter</span>
          </button>

          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition text-sm">
            <FaWhatsapp className="text-[#25D366] w-4 h-4 sm:w-5 sm:h-5" />
            <span>Whatsapp</span>
          </button>

          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition text-sm">
            <MdEmail className="text-[#0a4ba2] w-4 h-4 sm:w-5 sm:h-5" />
            <span>Email</span>
          </button>
        </div>
      </div>
    </section>
  );
}
