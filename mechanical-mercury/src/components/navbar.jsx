import { useEffect, useState } from "react";

export default function Navbar({ currentPath }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Load saved theme (client only)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // Shrink navbar on scroll
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  };

  const isActive = (href) =>
    currentPath === href
      ? "bg-purple-600 text-white shadow-md"
      : "text-gray-300 hover:text-white hover:bg-white/10";

  const handleNavClick = () => {
    setOpen(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
  className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-black/80 backdrop-blur-xl shadow-lg py-2"
      : "bg-gradient-to-b from-black/70 via-black/40 to-transparent py-5"
  }`}
>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
         <button
  onClick={toggleTheme}
  title="Toggle dark / light mode"
  className="w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer transition duration-300 hover:scale-110"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`w-5 h-5 transition-all duration-300 ${
      dark ? "text-yellow-300 drop-shadow-[0_0_6px_rgba(255,255,120,0.8)]" : "text-gray-400"
    }`}
    fill={dark ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Bulb */}
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 00-4 12c.5.5 1 1.5 1 2h6c0-.5.5-1.5 1-2a7 7 0 00-4-12z" />
  </svg>
</button>

          <span className="text-lg font-semibold text-white">
            MACRO ELMECH TECHNOLOGIES
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-3 text-sm">
          <a href="/" className={`px-3 py-2 rounded-lg transition ${isActive("/")}`} onClick={handleNavClick}>Home</a>
          <a href="/about" className={`px-3 py-2 rounded-lg transition ${isActive("/about")}`} onClick={handleNavClick}>About</a>
          <a href="/services" className={`px-3 py-2 rounded-lg transition ${isActive("/services")}`} onClick={handleNavClick}>Services</a>
          <a href="/contact" className={`px-3 py-2 rounded-lg transition ${isActive("/contact")}`} onClick={handleNavClick}>Contact</a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 pb-4 space-y-2 animate-fade-in">
          <a href="/" className={`block px-3 py-2 rounded-lg ${isActive("/")}`} onClick={handleNavClick}>Home</a>
          <a href="/about" className={`block px-3 py-2 rounded-lg ${isActive("/about")}`} onClick={handleNavClick}>About</a>
          <a href="/services" className={`block px-3 py-2 rounded-lg ${isActive("/services")}`} onClick={handleNavClick}>Services</a>
          <a href="/contact" className={`block px-3 py-2 rounded-lg ${isActive("/contact")}`} onClick={handleNavClick}>Contact</a>
        </div>
      )}
    </header>
  );
}
