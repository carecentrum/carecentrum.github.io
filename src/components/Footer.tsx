import { Mail, MapPin, Phone } from "lucide-react";
import CareCentrum from "./svgs/CareCentrum";

export default function Footer() {
  const Logo = () => (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="flex justify-center items-center gap-4 cursor-pointer text-white hover:text-gray-300 transition-colors mb-4"
    >
      <CareCentrum className="size-10" />
      <div className="text-3xl font-bold">Care Centrum</div>
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
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <Logo />
          <div className="flex flex-col sm:flex-row-reverse items-center justify-between">
            <div className="flex items-center justify-center gap-4 mb-6 lg:mb-0">
              <a
                href="#home"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={(e) => scrollToSection(e, "home")}
              >
                Home
              </a>
              <p className="text-gray-400">›</p>
              <a
                href="#services"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={(e) => scrollToSection(e, "services")}
              >
                Usługi
              </a>
              <p className="text-gray-400">›</p>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-colors text-nowrap"
                onClick={(e) => scrollToSection(e, "about")}
              >
                O nas
              </a>
              <p className="text-gray-400">›</p>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={(e) => scrollToSection(e, "contact")}
              >
                Kontakt
              </a>
            </div>
            <div className="flex flex-col items-start w-fit gap-2 mb-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 opacity-70" />
                <a
                  href="https://maps.app.goo.gl/9zcjwCtg8CoS4n9Y7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Lutycka 95A, 60-478 Poznań
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 opacity-70" />
                <a
                  href="tel:+48123456789"
                  className="hover:text-white transition-colors"
                >
                  +48 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 opacity-70" />
                <a
                  href="mailto:biuroagmwoodcraft@interia.pl"
                  className="hover:text-white transition-colors"
                >
                  CareCentrum@gmail.com
                </a>
              </div>
            </div>
          </div>
          <hr className="mt-4 bg-gray-400 text-gray-400 stroke-gray-400 block lg:hidden" />
          <div className="flex justify-center text-sm text-gray-400 mt-4 lg:mt-8">
            © 2025 Care Centrum. Wszystkie prawa zastrzeżone.
          </div>
        </div>
      </div>
    </footer>
  );
}
