import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users } from "lucide-react";
import { touristVehicles } from "@/data/cars";

export default function TouristTransportPage() {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("touristTransport")}
          </h1>
          <p className="text-xl text-gray-600">
            Perfect for groups and tours across Morocco
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {touristVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={vehicle.images[0]}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                <div className="flex items-center space-x-2 text-lg text-gray-600 mb-4">
                  <Users className="text-[#D4AF37]" size={24} />
                  <span className="font-semibold">
                    {vehicle.seats} {t("seats")}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-3xl font-bold text-[#D4AF37]">
                      {formatPrice(vehicle.pricePerDay)}
                    </span>
                    <span className="text-gray-600 ml-2">/{t("perDay")}</span>
                  </div>
                  <a
                    href={`/cars/${vehicle.id}`}
                    className="bg-[#1a1a1a] hover:bg-[#D4AF37] text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {t("viewDetails")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
