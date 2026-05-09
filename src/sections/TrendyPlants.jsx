import plant4 from "../assets/Plant4.png";
import plant5 from "../assets/Plant5.webp";

function TrendyPlants() {
  return (
    <section className="px-6 md:px-16 lg:px-28 pt-2 pb-16 max-w-7xl mx-auto">
      <div className="flex justify-center mb-10">
        <h2 className="relative text-2xl font-semibold px-6 py-2">
          <span className="absolute left-0 top-0 w-4 h-4 border-l-2 border-t-2 border-green-400 rounded-tl-md" />
          Our Trendy Plants
          <span className="absolute right-0 bottom-0 w-4 h-4 border-r-2 border-b-2 border-green-400 rounded-br-md" />
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-row items-center bg-white/5 border border-white/10 rounded-3xl overflow-visible backdrop-blur-none">
          <div className="shrink-0 flex items-center justify-center px-6 py-4">
            <img
              src={plant4}
              alt="Desk Plant"
              className="w-[100px] sm:w-[150px] md:w-[250px] md:-mt-10 object-contain drop-shadow-[0_10px_30px_rgba(0,255,100,0.2)]"
            />
          </div>

          <div className="flex-1 space-y-2 py-5 pr-6">
            <h3 className="text-base font-semibold">
              For Your Desks Decorations
            </h3>
            <p className="text-xs text-gray-400 leading-5">
              I recently added a beautiful desk decoration plant to my
              workspace, and it has made such a paradise difference!
            </p>
            <p className="text-green-400 font-bold text-sm">Rs. 599/-</p>
            <div className="flex items-center gap-3 pt-1">
              <button className="bg-white/10 hover:bg-white/20 transition px-5 py-2 rounded-xl text-xs">
                Explore
              </button>
              <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs hover:bg-white/10 transition">
                🛒
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center bg-white/5 border border-white/10 rounded-3xl overflow-visible backdrop-blur-none">
          {/* Plant image */}
          <div className="shrink-0 flex items-center justify-center px-6 py-4">
            <img
              src={plant5}
              alt="Desk Plant 2"
              className="w-[100px] sm:w-[150px] md:w-[250px] md:-mt-10 object-contain drop-shadow-[0_10px_30px_rgba(0,255,100,0.2)]"
            />
          </div>

          <div className="flex-1 space-y-2 py-5 pl-6">
            <h3 className="text-base font-semibold">
              For Your Desks Decorations
            </h3>
            <p className="text-xs text-gray-400 leading-5">
              This greenery adds a touch of nature and serenity to my desk,
              making it feel more inviting and calming.
            </p>
            <p className="text-green-400 font-bold text-sm">Rs. 399/-</p>
            <div className="flex items-center gap-3 pt-1">
              <button className="bg-white/10 hover:bg-white/20 transition px-5 py-2 rounded-xl text-xs">
                Explore
              </button>
              <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs hover:bg-white/10 transition">
                🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendyPlants;
