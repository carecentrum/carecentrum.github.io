import React, { useEffect } from "react";
import RealizationCard from "./ui/RealizationCard";
import type { Realization } from "./ui/RealizationCard";

const realizations: Realization[] = [
  {
    id: "1",
    title: "Kawasaki Ninja 1000SX",
    year: 2022,
    category: "Motocykl",
    type: "Sport-Touring",
    price: "1 200 zł",
    services: ["Detailing", "Powłoka ceramiczna", "Czyszczenie felg"],
    featured: true,
    duration: "2 dni",
    image: "/images/1000sx.jpg",
  },
  {
    id: "2",
    title: "Kawasaki Z650RS",
    year: 2023,
    category: "Motocykl",
    type: "Retro",
    price: "1 500 zł",
    services: [
      "Korekta lakieru",
      "Polerowanie",
      "Ochrona lakieru",
      "Czyszczenie silnika",
    ],
    duration: "3 dni",
    image: "/images/z650rs.jpg",
  },
  {
    id: "3",
    title: "Kawasaki H2 SX",
    year: 2021,
    category: "Motocykl",
    type: "Sport-Touring",
    price: "2 000 zł",
    services: ["Oklejanie PPF", "Zmiana koloru", "Ochrona plastików"],
    featured: true,
    duration: "1 dzień",
    image: "/images/h2sx.jpg",
  },
  {
    id: "4",
    title: "Kawasaki ZX-6R",
    additionalInfo: "Nowy",
    year: 2024,
    category: "Motocykl",
    type: "Supersport",
    price: "2 200 zł",
    services: ["Detailing", "Czyszczenie skóry", "Konserwacja chromu"],
    duration: "1 dzień",
    image: "/images/zx6r-new.jpg",
  },
  {
    id: "5",
    title: "Kawasaki ZX-6R",
    year: 2006,
    category: "Motocykl",
    type: "Supersport",
    price: "1 800 zł",
    services: ["Detailing", "Czyszczenie skóry", "Konserwacja chromu"],
    duration: "1 dzień",
    image: "/images/zx6r.jpg",
  },
  {
    id: "6",
    title: "Yamaha VMAX",
    additionalInfo: "Przód",
    year: 2017,
    category: "Motocykl",
    type: "Muscle Bike",
    price: "2 500 zł",
    services: ["Detailing", "Powłoka ceramiczna", "Czyszczenie felg"],
    duration: "2 dni",
    image: "/images/vmax-front.jpg",
  },
  {
    id: "7",
    title: "Yamaha VMAX",
    additionalInfo: "Tył",
    year: 2017,
    category: "Motocykl",
    type: "Muscle Bike",
    price: "2 500 zł",
    services: ["Detailing", "Powłoka ceramiczna", "Czyszczenie felg"],
    duration: "2 dni",
    image: "/images/vmax-back.jpg",
  },
];

const RealizationsGallery = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  // Sort so featured always first
  const sorted = [...realizations].sort(
    (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );
  return (
    <section
      id="realizations"
      className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background decorative elements (like Hero) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600 rounded-full blur-3xl"></div>
      </div>
      <div className="relative container mx-auto px-6 py-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nasze
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {" "}
              Realizacje
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Zobacz wybrane projekty, które zrealizowaliśmy dla naszych klientów.
            Każdy motocykl to dla nas nowe wyzwanie i pasja do perfekcji.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {sorted.map((item) => (
            <RealizationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealizationsGallery;
