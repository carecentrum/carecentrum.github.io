import {
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  ArrowUp,
  ShieldCheck,
} from "lucide-react";
import CareCentrum from "./svgs/CareCentrum";
import Kawasaki from "./svgs/Kawasaki";
import { useRouter, useNavigate, Link } from "@tanstack/react-router";
import React from "react";

export default function Footer() {
  const router = useRouter();
  const navigate = useNavigate();

  // Helper to scroll to section after navigation
  const scrollToSectionById = (id: string) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  // Handles section navigation from any page
  const handleSectionNav = async (
    e: React.MouseEvent<HTMLAnchorElement | HTMLLIElement>,
    id: string
  ) => {
    e.preventDefault();
    if (router.state.location.pathname !== "/") {
      await navigate({ to: "/" });
      scrollToSectionById(id);
    } else {
      scrollToSectionById(id);
    }
  };

  // Handles logo click from any page
  const handleLogoClick = async () => {
    if (router.state.location.pathname !== "/") {
      await navigate({ to: "/" });
      scrollToSectionById("home");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const Logo = () => (
    <div
      onClick={handleLogoClick}
      className="py-4 flex justify-center items-center gap-4 cursor-pointer text-white hover:text-gray-300 transition-all duration-300 group"
    >
      <div className="relative">
        <CareCentrum className="size-10 lg:size-12 group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Care Centrum
      </div>
    </div>
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "Usługi", id: "services" },
    { name: "O nas", id: "about" },
    { name: "Cennik", id: "pricing" },
    { name: "Kontakt", id: "contact" },
    { name: "Galeria", id: "gallery", isRoute: true },
  ];

  const services = [
    "Oklejanie motocykli",
    "Detailing premium",
    "Odnawianie lakieru",
    "Powłoki ceramiczne",
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-white/10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gray-400 rounded-full blur-3xl"></div>
      </div>

      {/* MOBILE LAYOUT (hidden on lg+) */}
      <div className="relative z-10 lg:hidden">
        <div className="container mx-auto px-6 py-12">
          {/* Mobile Logo */}
          <div className="text-center mb-8">
            <Logo />
          </div>

          {/* Mobile Description */}
          <div className="text-center mb-8">
            <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-sm mx-auto">
              Profesjonalne usługi detailingowe dla motocykli w Poznaniu.
            </p>
            <div className="flex flex-col gap-3 items-center">
              <div className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/20 flex items-center">
                <Kawasaki className="size-5 mr-3" />
                Partner Kawasaki Centrum
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/20 flex items-center">
                <ShieldCheck className="size-5 mr-3" />
                Gwarancja jakości
              </div>
            </div>
          </div>

          {/* Mobile Contact Cards */}
          <div className="space-y-4 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 rounded-full p-2">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Adres</p>
                  <a
                    href="https://maps.app.goo.gl/D5pYMpYgGf2zvXH67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    Lutycka 95A, 60-478 Poznań
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 rounded-full p-2">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Telefon</p>
                  <a
                    href="tel:+48514608526"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    +48 514 608 526
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 rounded-full p-2">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <a
                    href="mailto:m.szlosowski@motocyklicentrum.pl"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    m.szlosowski@motocyklicentrum.pl
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Quick Links */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold mb-4 text-white">Szybkie linki</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {quickLinks.map((link, index) =>
                link.isRoute ? (
                  <Link
                    key={index}
                    to="/gallery"
                    className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={`#${link.id}`}
                    onClick={(e) => handleSectionNav(e, link.id)}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10"
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Mobile Bottom */}
          <div className="text-center pt-6 border-t border-white/10">
            <div className="flex justify-center mb-4">
              <button
                onClick={scrollToTop}
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </button>
            </div>
            <p className="text-gray-400 text-xs mb-3">
              © 2025 Care Centrum. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex justify-center gap-4 text-xs text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Polityka prywatności
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Regulamin
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP LAYOUT (hidden on mobile) */}
      <div className="relative z-10 hidden lg:block">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div
                onClick={handleLogoClick}
                className="flex justify-start items-center gap-4 cursor-pointer text-white hover:text-gray-300 transition-colors duration-300 group mb-6"
              >
                <div className="relative">
                  <CareCentrum className="size-12 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Care Centrum
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
                Profesjonalne usługi detailingowe dla motocykli. Łączymy pasję z
                najnowszymi technologiami, aby zapewnić Twojemu motocyklowi
                najwyższą jakość opieki.
              </p>
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/20 flex items-center">
                  <Kawasaki className="size-5 mr-3" />
                  Partner Kawasaki Centrum
                </div>
                <div className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/20 flex items-center">
                  <ShieldCheck className="size-5 mr-3" />
                  Gwarancja jakości
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                Szybkie linki
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) =>
                  link.isRoute ? (
                    <li key={index}>
                      <Link
                        to="/gallery"
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300" />
                        {link.name}
                      </Link>
                    </li>
                  ) : (
                    <li key={index}>
                      <a
                        href={`#${link.id}`}
                        onClick={(e) => handleSectionNav(e, link.id)}
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300" />
                        {link.name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                Nasze usługi
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li
                    onClick={(e) => {
                      handleSectionNav(e, "services");
                    }}
                    key={index}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info Bar */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 group">
                <div className="bg-white/10 rounded-full p-3 group-hover:bg-white/20 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Adres</p>
                  <a
                    href="https://maps.app.goo.gl/D5pYMpYgGf2zvXH67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    Lutycka 95A, 60-478 Poznań
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-white/10 rounded-full p-3 group-hover:bg-white/20 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Telefon</p>
                  <a
                    href="tel:+48514608526"
                    className="text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    +48 514 608 526
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-white/10 rounded-full p-3 group-hover:bg-white/20 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a
                    href="mailto:m.szlosowski@motocyklicentrum.pl"
                    className="text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    m.szlosowski@motocyklicentrum.pl
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Care Centrum. Wszystkie prawa zastrzeżone.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Polityka prywatności
                </a>
                <span>•</span>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Regulamin
                </a>
              </div>

              <button
                onClick={scrollToTop}
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300 group cursor-pointer"
              >
                <ArrowUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </footer>
  );
}
