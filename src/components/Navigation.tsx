import { useEffect, useState } from "react";
import CareCentrum from "./svgs/CareCentrum";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Logo = () => (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }}
      className="flex justify-center items-center gap-4 cursor-pointer text-white hover:text-gray-300 transition-colors"
    >
      <CareCentrum className="size-12" />
      <div className="text-2xl font-bold ">Care Centrum</div>
    </div>
  );

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const HamburgerIcon = () => (
    <div className="flex flex-col w-6 h-6 justify-center items-center">
      <span
        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
          isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
          isMobileMenuOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
          isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      />
    </div>
  );

  const navigationItems = [
    { href: "#home", label: "Start", id: "home" },
    { href: "#services", label: "Usługi", id: "services" },
    { href: "#about", label: "O nas", id: "about" },
    { href: "#pricing", label: "Cennik", id: "pricing" },
    { href: "#contact", label: "Kontakt", id: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-black/95 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors"
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gray-300 transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <HamburgerIcon />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="block px-4 py-3 text-white hover:text-gray-300 hover:bg-white/10 rounded-lg transition-colors"
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
