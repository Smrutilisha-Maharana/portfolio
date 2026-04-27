import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 flex items-center">

        {/* LEFT SIDE - Logo */}
        <div className="flex-1">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-left">
            Smrutilisha Maharana
          </h1>
        </div>

        {/* RIGHT SIDE - Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-base lg:text-lg justify-end flex-1">
          <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-purple-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
          <li><a href="#education" className="hover:text-purple-400 transition">Education</a></li>
          <li><a href="#achievements" className="hover:text-purple-400 transition">Achievements</a></li>
          <li><a href="#experience" className="hover:text-purple-400 transition">Internship</a></li>
          <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <div
          className="md:hidden text-2xl cursor-pointer ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-slate-900 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-base">
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)}>Internship</a></li>
          <li><a href="#achievements" onClick={() => setMenuOpen(false)}>Achievements</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>

    </nav>
  );
}