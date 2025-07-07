import { ChevronDown } from "lucide-react";
import Kawasaki from "./svgs/Kawasaki";

export default function Hero() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600 rounded-full blur-3xl"></div>
      </div>

      <div className="mb-6 relative z-10">
        <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white font-medium mb-6">
          <Kawasaki className="size-5 mr-3" />
          Partner Kawasaki Centrum
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Care Centrum
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Profesjonalne usługi detailingowe dla motocykli
        </p>
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">
            Oklejanie
          </span>
          <span className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">
            Odnawianie
          </span>
          <span className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">
            Detailing
          </span>
          <span className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">
            Powłoka Ceramiczna
          </span>
        </div> */}
        <div className="flex sm:flex-row flex-col justify-center items-center gap-4 sm:gap-6">
          <button
            onClick={(e) => scrollToSection(e, "services")}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all transform hover:scale-105 cursor-pointer"
          >
            Sprawdź nasze usługi
          </button>
          <button
            onClick={(e) => scrollToSection(e, "contact")}
            className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-600 transition-all transform hover:scale-105 cursor-pointer"
          >
            Skontaktuj się z nami
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/60" />
      </div>
    </section>
  );
}
