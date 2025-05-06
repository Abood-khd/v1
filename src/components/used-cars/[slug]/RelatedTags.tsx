import Link from "next/link";

const tags = [
  { label: "Cars in UAE", count: "33,000+", href: "#" },
  { label: "Cars in Dubai", count: "17,000+", href: "#" },
  { label: "Cars for Sale in UAE", count: "33,000+", href: "#" },
  { label: "Nissan Cars", count: "5,400+", href: "#" },
  { label: "Nissan Cars in Dubai", count: "2,200+", href: "#" },
  { label: "Nissan Patrol", count: "500+", href: "#" },
  { label: "Nissan Patrol in Dubai", count: "230+", href: "#" },
  { label: "Nissan Patrol 2023 Cars", count: "30+", href: "#" },
  { label: "Cars from 2023 in UAE", count: "1,900+", href: "#" },
  { label: "2023 Nissan Cars in UAE", count: "140+", href: "#" },
  { label: "Certified Nissan Cars", count: "230+", href: "#" },
  { label: "Nissan SUV Cars in Dubai", count: "950+", href: "#" },
  { label: "SUV Cars in Dubai", count: "7,500+", href: "#" },
  { label: "New Nissan Cars", count: "2025", href: "#" },
  { label: "New Nissan Cars Prices in UAE", count: "2025", href: "#" },
  { label: "New Nissan Patrol", count: "2025", href: "#" },
];

export default function RelatedTags() {
  return (
    <section className="md:py-10 px-4 md:px-18 bg-white">
      <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">
        People also search for
      </h2>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Link
            key={index}
            href={tag.href}
            className="bg-gray-100 hover:underline transition-colors text-[15px] rounded-lg px-5 py-2.5 text-[#2784fc] whitespace-nowrap"
          >
            {tag.label}{" "}
            <span className="text-gray-600 font-normal">({tag.count})</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
