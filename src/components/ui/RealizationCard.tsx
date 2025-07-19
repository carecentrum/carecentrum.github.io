export type Realization = {
  id: string;
  title: string;
  year: number;
  additionalInfo?: string;
  category: string;
  type: string;
  price: string;
  services: string[];
  featured?: boolean;
  duration: string;
  image: string;
};

export default function RealizationCard({ item }: { item: Realization }) {
  return (
    <div className="group cursor-pointer flex flex-col h-full">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 flex flex-col h-full">
        {/* Motorcycle image */}
        <div className="aspect-[16/10] bg-gradient-to-br from-slate-700 to-slate-900 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
          <img
            src={item.image}
            alt={item.title}
            className="object-cover w-full h-full max-h-56 sm:max-h-72 rounded-3xl"
            loading="lazy"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4 sm:p-6">
            <div className="w-full">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex gap-2 flex-wrap">
                  {item.services.slice(0, 3).map((service, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white border border-white/30 whitespace-nowrap"
                    >
                      {service}
                    </span>
                  ))}
                  {item.services.length > 3 && (
                    <span className="text-xs bg-blue-500/80 backdrop-blur-sm rounded-full px-3 py-1 text-white whitespace-nowrap">
                      +{item.services.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Featured badge (moved to top-left) */}
          {item.featured && (
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-gradient-to-r from-blue-500 to-purple-500 text-xs font-bold px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg">
              WYRÓŻNIONE
            </div>
          )}
        </div>

        {/* Enhanced Content */}
        <div className="flex flex-col flex-1 p-4 sm:p-8">
          <div className="flex sm:items-start sm:justify-between mb-4 gap-2 sm:gap-0">
            <div className="flex-1 min-w-0">
              <div className="flex flex-col gap-1 mb-2 flex-wrap">
                <div className="flex gap-2">
                  <div className="text-xs sm:text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded w-fit">
                    {item.year}
                  </div>
                  {item.additionalInfo && (
                    <div className="text-xs sm:text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded w-fit">
                      {item.additionalInfo}
                    </div>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold group-hover:text-blue-400 transition-colors truncate">
                  {item.title}
                </h3>
              </div>
              <div className="text-gray-400 mb-3 text-sm truncate">
                {item.category} • {item.type}
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-xl sm:text-2xl font-bold text-green-400 mb-1">
                {item.price}
              </div>
              <div className="text-xs text-gray-500">Cena od</div>
            </div>
          </div>

          {/* Services List */}
          <div className="mb-4">
            <div className="text-xs sm:text-sm font-semibold text-gray-300 mb-2">
              Zawarte usługi:
            </div>
            <div className="flex flex-wrap gap-2">
              {item.services.map((service, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-gray-300 whitespace-nowrap"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-white/10 gap-3 mt-auto">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs sm:text-sm text-green-400 font-medium">
                  Zrealizowano
                </span>
              </div>
              <div className="text-xs sm:text-sm text-gray-400">
                Czas realizacji:{" "}
                <span className="text-white font-medium">{item.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
