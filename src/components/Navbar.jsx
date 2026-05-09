import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-5 sticky top-0 z-50 bg-[#0a140a]/80 backdrop-blur-md">
      {/* Logo */}
      <div className="flex items-center gap-2 text-green-400 font-bold text-lg">
        🌿 FloraVision
      </div>

      <ul className="hidden md:flex gap-10 text-sm text-gray-300">
        <li className="cursor-pointer hover:text-white transition">Home</li>
        <li className="cursor-pointer hover:text-white transition">
          Plants Type
        </li>
        <li className="cursor-pointer hover:text-white transition">Pots</li>
        <li className="cursor-pointer hover:text-white transition">Contact</li>
      </ul>

      {/* Right side icons */}
      <div className="flex items-center gap-3">
        <button className="text-gray-300 hover:text-white text-xl">🔍</button>
        <button className="bg-green-500 text-white text-xs px-3 py-1 rounded-md font-medium">
          EN
        </button>

        <button
          className="text-gray-300 hover:text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-[#0a140a] flex flex-col gap-4 px-6 py-5 text-sm text-gray-300 md:hidden z-50">
          <li className="cursor-pointer hover:text-white transition">Home</li>
          <li className="cursor-pointer hover:text-white transition">
            Plants Type
          </li>
          <li className="cursor-pointer hover:text-white transition">Pots</li>
          <li className="cursor-pointer hover:text-white transition">
            Contact
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
