import plantImg from "../assets/plant4.png";

function BestO2() {
  return (
    <section className="px-10 py-16 max-w-7xl mx-auto">
      <div className="flex justify-center mb-10">
        <h2 className="relative text-2xl font-semibold px-6 py-2">
          <span className="absolute left-0 top-0 w-4 h-4 border-l-2 border-t-2 border-green-400 rounded-tl-md"></span>
          Our Best o2
          <span className="absolute right-0 bottom-0 w-4 h-4 border-r-2 border-b-2 border-green-400 rounded-br-md"></span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md overflow-visible">
        <img
          src={plantImg}
          alt="Best O2 Plant"
          className="w-[350px] -mt-25 object-contain drop-shadow-[0_10px_40px_rgba(0,255,100,0.25)]"
        />

        <div className="space-y-4 max-w-md">
          <h3 className="text-xl font-bold leading-snug">
            We Have Small And Best O2 Plants Collection's
          </h3>
          <p className="text-xs text-gray-400 leading-6">
            Oxygen-producing plants, often referred to as "O2 plants," are those
            that release oxygen into the atmosphere through the process of
            photosynthesis.
          </p>
          <p className="text-xs text-gray-400 leading-6">
            Many plants can help filter out pollutants and toxins from the air,
            such as formaldehyde, benzene, and trichloroethylene. This makes the
            air cleaner and healthier to breathe.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <button className="bg-white/10 hover:bg-white/20 transition px-6 py-2 rounded-xl text-sm">
              Explore
            </button>
            <div className="flex gap-2">
              <button className="text-gray-400 hover:text-white text-lg">
                ‹
              </button>
              <button className="text-white hover:text-green-400 text-lg">
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestO2;
