import { Car, CheckCircle, Clock, Shield, Sparkles, Star } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nowa{" "}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Jakość
            </span>{" "}
            na Rynku
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Care Centrum to świeża energia w branży detailingu motocyklowego.
            Łączymy najnowsze technologie z pasją do perfekcji, oferując usługi
            na najwyższym poziomie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 bg-black">
          <div className="text-center group">
            <div className="bg-gradient-to-r from-white/10 to-gray-600/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
              <div className="text-4xl font-bold text-white mb-2">2025</div>
              <div className="text-gray-400 mb-4">Rok założenia</div>
              <p className="text-sm text-gray-500">
                Nowa firma z nowoczesnymi standardami
              </p>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-r from-white/10 to-gray-600/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400 mb-4">Najnowszy sprzęt</div>
              <p className="text-sm text-gray-500">
                Inwestujemy w najlepsze technologie
              </p>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-r from-white/10 to-gray-600/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 mb-4">Konsultacje</div>
              <p className="text-sm text-gray-500">
                Jesteśmy dostępni dla naszych klientów
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-r from-white/5 to-gray-600/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Dlaczego Care Centrum?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 rounded-full p-2 mt-1">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">
                    Świeże Podejście
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Nowatorskie metody i najnowsze trendy w detailingu
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 rounded-full p-2 mt-1">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">
                    Premium Produkty
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Wyłącznie najwyższej klasy materiały i preparaty
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 rounded-full p-2 mt-1">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">
                    Indywidualne Podejście
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Każdy motocykl traktujemy wyjątkowo
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-white/5 to-gray-600/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Nasze Wartości
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Perfekcja</h4>
                  <p className="text-gray-400 text-sm">
                    Dążymy do idealnego rezultatu w każdym detalu
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 rounded-full p-2 mt-1">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Szybkość</h4>
                  <p className="text-gray-400 text-sm">
                    Efektywne wykonanie bez kompromisów w jakości
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 rounded-full p-2 mt-1">
                  <Car className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Passion</h4>
                  <p className="text-gray-400 text-sm">
                    Kochamy motocykle i to widać w naszej pracy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
