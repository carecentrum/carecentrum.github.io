import { CheckCircle, Shield, Sparkles } from "lucide-react";
import Motorcycle from "./svgs/Motorcycle";

export default function ServicesSection() {
  const services = [
    {
      title: "Oklejanie",
      description:
        "Profesjonalne oklejanie motocykli folią ochronną i dekoracyjną",
      icon: Shield,
      features: [
        "Folia ochronna PPF",
        "Folia dekoracyjna",
        "Zmiana koloru",
        "Ochrona lakieru",
      ],
    },
    {
      title: "Regeneracja",
      description: "Kompleksowe odnawianie i regeneracja lakieru motocykla",
      icon: Sparkles,
      features: [
        "Korekta lakieru",
        "Usuwanie zarysowań",
        "Polerowanie",
        "Regeneracja plastików",
      ],
    },
    {
      title: "Detailing",
      description: "Profesjonalne czyszczenie i pielęgnacja każdego elementu",
      icon: Motorcycle,
      features: [
        "Profesjonalne mycie",
        "Czyszczenie silnika",
        "Pielęgnacja skóry",
        "Konserwacja chromu",
      ],
    },
    {
      title: "Nakładanie powłok",
      description: "Najwyższej jakości powłoki dla długotrwałej ochrony",
      icon: CheckCircle,
      features: [
        "Powłoki ceramiczne",
        "Zabezpieczenie woskiem",
        "Łatwość mycia",
        "Głęboki połysk i intensywna ochrona",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nasze Usługi</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Kompleksowa opieka nad Twoim motocyklem - od detailingu po
            zaawansowane powłoki ochronne
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 group-hover:bg-white/20 transition-colors">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
