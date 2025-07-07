import { Car, CheckCircle, Shield, Sparkles, Star, Clock } from "lucide-react";

export default function PriceSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pricingPlans = [
    {
      title: "Oklejanie",
      description: "Profesjonalne oklejanie folią ochronną i dekoracyjną",
      icon: Shield,
      price: "Od 800 zł",
      duration: "1-2 dni",
      popular: false,
      features: [
        "Folia ochronna PPF",
        "Folia dekoracyjna",
        "Zmiana koloru",
        "Ochrona lakieru",
        "Gwarancja 5 lat",
        "Bezpłatna konsultacja",
      ],
    },
    {
      title: "Detailing Premium",
      description: "Kompleksowy detailing z powłoką ceramiczną",
      icon: Star,
      price: "Od 1200 zł",
      duration: "2-3 dni",
      popular: true,
      features: [
        "Mycie dokładne",
        "Korekta lakieru",
        "Powłoka ceramiczna",
        "Czyszczenie silnika",
        "Pielęgnacja skóry",
        "Gwarancja 3 lata",
        "Odbiór i dowóz",
      ],
    },
    {
      title: "Odnawianie",
      description: "Regeneracja i odnowa lakieru motocykla",
      icon: Sparkles,
      price: "Od 600 zł",
      duration: "1-2 dni",
      popular: false,
      features: [
        "Korekta lakieru",
        "Usuwanie zarysowań",
        "Polerowanie",
        "Regeneracja plastików",
        "Ochrona woskiem",
        "Gwarancja 1 rok",
      ],
    },
    {
      title: "Detailing Basic",
      description: "Podstawowe czyszczenie i pielęgnacja",
      icon: Car,
      price: "Od 350 zł",
      duration: "4-6 godzin",
      popular: false,
      features: [
        "Mycie zewnętrzne",
        "Czyszczenie felg",
        "Pielęgnacja plastików",
        "Konserwacja chromu",
        "Ochrona woskiem",
        "Czyszczenie szyb",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nasz{" "}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Cennik
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparentne ceny za profesjonalne usługi. Każdy motocykl jest
            wyceniany indywidualnie po bezpłatnej konsultacji.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="relative group">
              <div
                className={`
                relative h-full rounded-2xl p-8 backdrop-blur-sm border transition-all duration-300 
                hover:transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between
                ${
                  plan.popular
                    ? "bg-gradient-to-br from-white/15 to-gray-600/15 border-white/30 shadow-lg"
                    : "bg-gradient-to-br from-white/5 to-gray-600/5 border-white/10 hover:border-white/20"
                }
              `}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-white to-gray-300 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Najpopularniejszy
                    </div>
                  </div>
                )}
                <div>
                  <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 group-hover:bg-white/20 transition-colors">
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {plan.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-sm">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white mb-1">
                      {plan.price}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      {plan.duration}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <CheckCircle className="h-4 w-4 mr-3 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`
                  w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 cursor-pointer
                  ${
                    plan.popular
                      ? "bg-white text-black hover:bg-gray-400"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }
                `}
                  onClick={() => {
                    scrollToSection("contact");
                  }}
                >
                  Napisz do nas
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-white/5 to-gray-600/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Potrzebujesz czegoś więcej?
            </h3>
            <p className="text-gray-300 mb-6">
              Oferujemy również usługi indywidualne i pakiety dostosowane do
              Twoich potrzeb. Skontaktuj się z nami, aby otrzymać
              spersonalizowaną wycenę.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  scrollToSection("contact");
                }}
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-400 transition-all cursor-pointer"
              >
                Bezpłatna konsultacja
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact");
                }}
                className="bg-white/10 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all cursor-pointer"
              >
                Zapytaj o cenę
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
