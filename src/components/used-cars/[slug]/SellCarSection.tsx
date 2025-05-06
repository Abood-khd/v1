// components/SellCarSection.tsx
import Image from "next/image";

export default function SellCarSection() {
  return (
    <section className="bg-[#F7F7F7] py-6 px-2 md:px-20 w-full">
      <div className="text-center md:text-left">
        <h2 className="text-[23px] md:text-3xl font-semibold text-[#111]">
          Do you want to sell your car for{" "}
          <span className="text-[#124d99]">FREE</span>?
        </h2>
        <p className="mt-3 text-[#444] text-base md:text-lg">
          We have everything that makes it easier for you to{" "}
          <span className="font-semibold text-[#111]">sell your car</span> on
          our platform quickly
        </p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row md:items-start items-center  gap-10 md:gap-30 ">
        <div className="flex-shrink-0 w-[300px]">
          <Image
            src="/car/ym-car1-750d6e0ea0667b9a10a258e58bc13fc0b0aadc17d676a766d5784e6cd62b2d70.png"
            alt="Car"
            width={320}
            height={200}
            className="w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12 text-[#222] text-base md:text-[16px]">
          {[
            "Sell your car 100% absolutely free on YallaMotor.",
            "200+ Cars Sold Everyday.",
            "115,000+ Satisfied Sellers.",
            "500,000+ Monthly Buyers.",
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="mt-1">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-[#3b82f6] flex-shrink-0"
                >
                  <circle cx="12" cy="12" r="12" fill="#E0EDFF" />
                  <path
                    d="M8 12l2 2 4-4"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: highlightNumbers(text),
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className=" flex items-center justify-center gap-4 relative md:bottom-15">
      <img src='/car/right.png' className="mb-5" alt="right"  />
        <button className="bg-[#00d084] hover:bg-[#00b874] text-white text-[11px] md:text-sm font-bold md:py-3 md:px-8 py-2 px-4 rounded shadow-md transition">
          SELL YOUR CAR FOR FREE
        </button>
        <img src='/car/left.png'className="mb-5"      alt="left" />

      </div>
    </section>
  );
}


  
function highlightNumbers(text: string): string {
  return text.replace(
    /(\d[\d,\.]*)/g,
    `<span class="font-semibold text-[#111]">$1</span>`
  );
}
