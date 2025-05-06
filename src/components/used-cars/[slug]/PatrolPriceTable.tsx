import Link from "next/link";

interface PriceRow {
  year: number;
  url: string;
  start: string;
  max: string;
  avg: string;
  count: number;
}

const prices: PriceRow[] = [
  { year: 2025, url: "#", start: "AED 195,000", max: "AED 390,000", avg: "AED 321,158", count: 14 },
  { year: 2024, url: "#", start: "AED 185,000", max: "AED 380,000", avg: "AED 252,704", count: 20 },
  { year: 2023, url: "#", start: "AED 170,000", max: "AED 336,000", avg: "AED 221,513", count: 30 },
  { year: 2022, url: "#", start: "AED 95,000", max: "AED 325,000", avg: "AED 214,679", count: 29 },
  { year: 2021, url: "#", start: "AED 125,000", max: "AED 250,000", avg: "AED 183,002", count: 27 },
  { year: 2020, url: "#", start: "AED 43,000", max: "AED 250,000", avg: "AED 153,404", count: 41 },
  { year: 2019, url: "#", start: "AED 40,000", max: "AED 170,000", avg: "AED 106,061", count: 39 },
  { year: 2018, url: "#", start: "AED 39,900", max: "AED 168,000", avg: "AED 106,573", count: 26 },
  { year: 2017, url: "#", start: "AED 50,000", max: "AED 175,000", avg: "AED 99,263", count: 38 },
  { year: 2016, url: "#", start: "AED 59,000", max: "AED 160,000", avg: "AED 89,576", count: 46 },
  { year: 2015, url: "#", start: "AED 45,000", max: "AED 105,000", avg: "AED 76,113", count: 45 },
  { year: 2014, url: "#", start: "AED 42,000", max: "AED 700,000", avg: "AED 78,849", count: 63 },
];

export default function PatrolPriceTable() {
  return (
    <section className="bg-[#f9f9f9] md:py-18 px-4 md:px-18">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#000]">
        Used Nissan Patrol by price in UAE
      </h2>

      <div className="bg-[#f3f3f3] p-2 md:px-4 rounded-xl shadow-sm overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full text-[15px] text-gray-800 bg-white rounded-lg overflow-hidden border-separate border-spacing-0">
            <thead className="bg-[#f3f3f3] text-center text-gray-700 font-semibold border-b border-gray-300">
              <tr>
                <th className="py-3 font-semibold text-gray-500 text-md px-6 border-b border-gray-200">Used Cars</th>
                <th className="py-3 font-semibold text-gray-500 text-md px-6 border-b border-gray-200">Starting Price</th>
                <th className="py-3 font-semibold text-gray-500 text-md px-6 border-b border-gray-200">Maximum Price</th>
                <th className="py-3 font-semibold text-gray-500 text-md px-6 border-b border-gray-200">Average Price</th>
                <th className="py-3 font-semibold text-gray-500 text-md px-6 border-b border-gray-200">Cars Available</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((row, idx) => (
              <tr key={idx} className="text-center border-b border-gray-50  ">
              <td className="py-5 px-6 border-r border-gray-100 text-[#0a4ba2] border-b font-medium ">
                <Link href={row.url}>Used Nissan Patrol {row.year}</Link>
              </td>
              <td className="py-5 px-6 border-r border-b border-gray-100">{row.start}</td>
              <td className="py-5 px-6 border-r border-gray-100 border-b">{row.max}</td>
              <td className="py-5 px-6 border-r border-gray-100 border-b">{row.avg}</td>
              <td className="py-5 px-6 border-r border-gray-100 border-b">{row.count}</td>
            </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
