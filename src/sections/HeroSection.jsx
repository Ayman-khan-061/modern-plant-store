import plant3 from "../assets/plant3.png";
import reviewerAvatar from "../assets/plant1.webp";

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start px-6 md:px-12 pt-10 pb-4">
        <div className="space-y-4 col-start-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Earth's Exhale
          </h1>

          <p className="text-xs text-gray-300 tracking-widest uppercase max-w-sm">
            "Earth's Exhale" symbolizes the purity and vitality of the Earth's
            natural environment.
          </p>

          <div className="flex items-center gap-4">
            <button className="py-2 px-5 rounded-lg bg-green-500 hover:bg-green-600 transition text-sm font-semibold">
              Buy Now
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition">
              <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-xs">
                ▶
              </span>
              Live Demo
            </button>
          </div>

          <div className="w-fit bg-black/30 border border-white/10 rounded-2xl p-4 flex gap-3 items-start max-w-xs mt-4">
            <img
              src={reviewerAvatar}
              alt="Bonnie Hyet"
              className="w-10 h-10 rounded-full object-cover shrink-0"
            />
            <div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold">Bonnie Hyet</p>
                <span className="text-yellow-400 text-xs">★★★★★</span>
              </div>
              <p className="text-xs text-gray-400 mt-1 leading-5">
                I can't believe how much this plant has brightened up my living
                space. It's so healthy and vibrant — truly a paradise
                difference!
              </p>
            </div>
          </div>
        </div>

        <div className="col-start-1 md:col-start-2 flex items-start justify-start md:justify-end mt-10 md:mt-0">
          <div className="relative w-[240px] sm:w-[260px]">
            <div
              className="w-full border border-white/15 shadow-2xl"
              style={{
                borderRadius: "20px",
                background: "rgba(10, 25, 10, 0.35)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <div className="flex items-center justify-center pt-4">
                <img
                  src={plant3}
                  alt="Aglaonema"
                  className="-mt-17 w-[250px] h-[250px] object-contain drop-shadow-[0_8px_20px_rgba(0,255,100,0.2)]"
                />
              </div>
              <div className="px-4 pb-4 pt-2 space-y-3">
                <p className="text-[10px] text-gray-400">Indoor Plant</p>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">Aglaonema plant</h3>
                  <span className="text-gray-400 text-lg">›</span>
                </div>
                <button className="w-full py-2 rounded-lg border border-white/20 hover:bg-white/10 transition text-xs font-medium">
                  Buy Now
                </button>
                <div className="flex gap-1 pt-1">
                  <span className="w-4 h-1 bg-green-400 rounded-full" />
                  <span className="w-1 h-1 bg-gray-500 rounded-full" />
                  <span className="w-1 h-1 bg-gray-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
