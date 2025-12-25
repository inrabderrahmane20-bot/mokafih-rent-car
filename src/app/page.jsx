import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Car,
  Shield,
  Clock,
  Star,
} from "lucide-react";
import { cars, touristVehicles } from "@/data/cars";

export default function HomePage() {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const featuredCars = cars.slice(0, 3);

  const handleSearch = () => {
    if (pickupDate && returnDate) {
      window.location.href = `/cars?pickup=${pickupDate}&return=${returnDate}`;
    } else {
      window.location.href = "/cars";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600')] bg-cover bg-center"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t("heroTitle")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {t("heroSubtitle")}
            </p>
          </div>

          {/* Search Box */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <MapPin className="text-[#D4AF37]" size={24} />
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700">
                    {t("location")}
                  </label>
                  <p className="text-gray-900 font-semibold">
                    {t("marrakech")}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Calendar className="text-[#D4AF37]" size={24} />
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700">
                    {t("pickupDate")}
                  </label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full bg-transparent text-gray-900 font-semibold outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Calendar className="text-[#D4AF37]" size={24} />
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700">
                    {t("returnDate")}
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full bg-transparent text-gray-900 font-semibold outline-none"
                  />
                </div>
              </div>

              <button
                onClick={handleSearch}
                className="bg-[#D4AF37] hover:bg-[#C49B2C] text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
              >
                <span>{t("searchCars")}</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFF9E6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">From economy to luxury vehicles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFF9E6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-600">Complete coverage included</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFF9E6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here to help you</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFF9E6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive rates guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Vehicles
            </h2>
            <p className="text-xl text-gray-600">
              Popular choices for your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={car.images[0]}
                    alt={car.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Users size={16} className="mr-1" /> {car.seats}
                    </span>
                    <span className="capitalize">{car.transmission}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-[#D4AF37]">
                        {formatPrice(car.pricePerDay)}
                      </span>
                      <span className="text-gray-600 ml-2">/{t("perDay")}</span>
                    </div>
                    <a
                      href={`/cars/${car.id}`}
                      className="bg-[#1a1a1a] hover:bg-[#D4AF37] text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      {t("viewDetails")}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/cars"
              className="inline-flex items-center space-x-2 bg-[#D4AF37] hover:bg-[#C49B2C] text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              <span>View All Cars</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Tourist Transport CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Larger Vehicle?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Check out our tourist transport options for groups
          </p>
          <a
            href="/tourist-transport"
            className="inline-flex items-center space-x-2 bg-[#D4AF37] hover:bg-[#C49B2C] text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            <span>Tourist Transport</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
