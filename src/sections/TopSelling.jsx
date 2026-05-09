import p1 from "../assets/Plant1.webp";
import p2 from "../assets/Plant2.png";
import p3 from "../assets/Plant3.png";
import p4 from "../assets/Plant4.png";
import p5 from "../assets/Plant5.webp";
import p6 from "../assets/Plant6.webp";

const plants = [
  {
    id: 1,
    name: "Aglaonema plant",
    desc: "Commonly known as the Chinese Evergreen, admired for its lush decorative foliage. Low-maintenance and perfect for homes and offices.",
    price: "Rs. 300/-",
    img: p1,
  },
  {
    id: 2,
    name: "Plantain Lilies",
    desc: "Grown for their soft decorative leaves and vibrant colors. Adds freshness and natural charm to any indoor space.",
    price: "Rs. 360/-",
    img: p2,
  },
  {
    id: 3,
    name: "Cactus",
    desc: "Highly resilient and minimal maintenance. Their unique appearance makes them a stylish addition to modern interiors.",
    price: "Rs. 259/-",
    img: p3,
  },
  {
    id: 4,
    name: "Swiss cheese Plant",
    desc: "Known for its distinctive perforated leaves. Brings a bold and refreshing aesthetic to any indoor space.",
    price: "Rs. 400/-",
    img: p4,
  },
  {
    id: 5,
    name: "Sansevieria plant",
    desc: "Striking appearance with low-maintenance care. Adds a calm and refreshing feel to any environment.",
    price: "Rs. 450/-",
    img: p5,
  },
  {
    id: 6,
    name: "Agave plant",
    desc: "Known for their bold rosette-shaped leaves. Durable, stylish and ideal for contemporary indoor decoration.",
    price: "Rs. 359/-",
    img: p6,
  },
];

function TopSelling() {
  return (
    <section className="px-6 md:px-10 py-16 max-w-7xl mx-auto">
      <div className="flex justify-center mb-14">
        <h2 className="relative text-2xl font-semibold px-6 py-2">
          <span className="absolute left-0 top-0 w-4 h-4 border-l-2 border-t-2 border-green-400 rounded-tl-md" />
          Our Top Selling Plants
          <span className="absolute right-0 bottom-0 w-4 h-4 border-r-2 border-b-2 border-green-400 rounded-br-md" />
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="bg-white/5 border border-white/10 rounded-3xl px-6 py-4 flex flex-col gap-3 overflow-visible hover:border-green-500/30 transition"
          >
            <img
              src={plant.img}
              alt={plant.name}
              className="w-[180px] sm:w-[200px] -mt-12 mx-auto object-contain drop-shadow-[0_15px_30px_rgba(0,255,100,0.25)]"
            />
            <h3 className="text-sm font-semibold">{plant.name}</h3>
            <p className="text-xs text-gray-400 leading-5">{plant.desc}</p>
            <div className="flex items-center justify-between mt-auto pt-2">
              <span className="text-green-400 font-bold text-sm">
                {plant.price}
              </span>
              <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-sm hover:bg-white/10 transition">
                🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopSelling;
