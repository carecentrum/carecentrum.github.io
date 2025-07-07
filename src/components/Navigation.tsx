import { useEffect, useState } from "react";
import CareCentrum from "./svgs/CareCentrum";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="hover:text-gray-300 transition-colors"
              onClick={(e) => scrollToSection(e, "home")}
            >
              Start
            </a>
            <a
              href="#services"
              className="hover:text-gray-300 transition-colors"
              onClick={(e) => scrollToSection(e, "services")}
            >
              Usługi
            </a>
            <a
              href="#about"
              className="hover:text-gray-300 transition-colors"
              onClick={(e) => scrollToSection(e, "about")}
            >
              O nas
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition-colors"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
