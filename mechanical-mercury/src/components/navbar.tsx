import { useEffect, useState } from "preact/hooks";

type Props = {
  currentPath: string;
};

export default function Navbar({ currentPath }: Props) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  };

  // Active link
  const isActive = (href: string) =>
    currentPath === href ? "active" : "";

  // Scroll + close mobile
  const handleNavClick = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header class="navbar">
      <div class="nav-left">
        <img
          src={
            dark
              ? "/assets/images/idea-dark.png"
              : "/assets/images/idea-light.png"
          }
          alt="Logo"
          class="logo theme-toggle"
          onClick={toggleTheme}
          title="Toggle dark / light mode"
        />
        <span class="brand">MACRO ELMECH TECHNOLOGY</span>
      </div>

      {/* Desktop */}
      <nav class="desktop-menu">
        <a href="/" class={isActive("/")} onClick={handleNavClick}>Home</a>
        <a href="/about" class={isActive("/about")} onClick={handleNavClick}>About</a>
        <a href="/services" class={isActive("/services")} onClick={handleNavClick}>Services</a>
        <a href="/contact" class={isActive("/contact")} onClick={handleNavClick}>Contact</a>
      </nav>

      {/* Hamburger */}
      <button class="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Mobile */}
      {open && (
        <div class="mobile-menu">
          <a href="/" class={isActive("/")} onClick={handleNavClick}>Home</a>
          <a href="/about" class={isActive("/about")} onClick={handleNavClick}>About</a>
          <a href="/services" class={isActive("/services")} onClick={handleNavClick}>Services</a>
          <a href="/contact" class={isActive("/contact")} onClick={handleNavClick}>Contact</a>
        </div>
      )}
    </header>
  );
}
