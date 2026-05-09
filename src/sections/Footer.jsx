function Footer() {
  return (
    <footer className="px-6 md:px-10 py-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Brand info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-green-400 font-bold text-lg">
            🌿 FloraVision.
          </div>
          <p className="text-xs text-gray-400 leading-6 max-w-xs">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>
          <div className="flex gap-4 text-xs text-gray-400">
            <span className="cursor-pointer hover:text-white transition">
              FB
            </span>
            <span className="cursor-pointer hover:text-white transition">
              TW
            </span>
            <span className="cursor-pointer hover:text-white transition">
              LI
            </span>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-semibold">Quick Link's</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li className="cursor-pointer hover:text-white transition">Home</li>
            <li className="cursor-pointer hover:text-white transition">
              Types Of plants
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Contact
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Privacy
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold">For Every Update.</h4>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-white/5 border border-white/10 text-xs text-gray-300 placeholder-gray-500 rounded-lg px-4 py-2 flex-1 outline-none focus:border-green-500 transition"
            />
            <button className="bg-green-500 hover:bg-green-600 transition text-xs font-medium px-4 py-2 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 text-center text-xs text-gray-500">
        FloraVision © All right reserve
      </div>
    </footer>
  );
}

export default Footer;
