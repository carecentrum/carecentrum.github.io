import { Clock, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-xl text-gray-400">
            Jesteśmy gotowi zadbać o Twój motocykl
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <MapPin className="h-8 w-8 text-white" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Adres</h3>
                <p className="text-gray-400">Lutycka 95A, 60-478 Poznań</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="h-8 w-8 text-white" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                <p className="text-gray-400">+48 123 456 789</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Clock className="h-8 w-8 text-white" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Godziny otwarcia</h3>
                <p className="text-gray-400">
                  Pon-Pt: 8:00-18:00
                  <br />
                  Sob: 9:00-15:00
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">
              Umów wizytę lub zapytaj o cenę
            </h3>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name =
                  (
                    form.elements.namedItem(
                      "Imię i nazwisko"
                    ) as HTMLInputElement
                  )?.value || "";
                const phone =
                  (form.elements.namedItem("Telefon") as HTMLInputElement)
                    ?.value || "";
                const service =
                  (form.elements.namedItem("Usługa") as HTMLSelectElement)
                    ?.value || "";
                const info =
                  (
                    form.elements.namedItem(
                      "Dodatkowe informacje"
                    ) as HTMLTextAreaElement
                  )?.value || "";
                const subject = encodeURIComponent("Umów wizytę w CareCentrum");
                const bodyRaw = `Dzień dobry,\r\nChciałbym umówić wizytę.\r\n\r\nImię i nazwisko: ${name}\r\nTelefon: ${phone}\r\nUsługa: ${service}\r\nDodatkowe informacje: ${info}`;
                const body = encodeURIComponent(
                  bodyRaw.replace(/\r?\n/g, "\r\n")
                );
                window.location.href = `mailto:kontakt@carecentrum.pl?subject=${subject}&body=${body}`;
              }}
            >
              <div>
                <input
                  name="Imię i nazwisko"
                  type="text"
                  placeholder="Imię i nazwisko"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                  required
                />
              </div>
              <div>
                <input
                  name="Telefon"
                  type="tel"
                  placeholder="Telefon"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                  required
                />
              </div>
              <div>
                <select
                  name="Usługa"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40"
                  required
                >
                  <option className="bg-gray-800 text-white" value="">
                    Wybierz usługę
                  </option>
                  <option className="bg-gray-800 text-white" value="oklejanie">
                    Oklejanie
                  </option>
                  <option className="bg-gray-800 text-white" value="odnawianie">
                    Odnawianie
                  </option>
                  <option className="bg-gray-800 text-white" value="detailing">
                    Detailing
                  </option>
                  <option className="bg-gray-800 text-white" value="powloka">
                    Powłoka Ceramiczna
                  </option>
                  <option className="bg-gray-800 text-white" value="inne">
                    Inne
                  </option>
                </select>
              </div>
              <div>
                <textarea
                  name="Dodatkowe informacje"
                  placeholder="Dodatkowe informacje"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Wyślij zapytanie
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
