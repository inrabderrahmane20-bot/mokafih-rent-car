import { useState, useMemo, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Filter } from "lucide-react";
import { cars } from "@/data/cars";

export default function CarsPage() {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();
  const [seatsFilter, setSeatsFilter] = useState("all");
  const [sortBy, setSortBy] = useState("price-low");

  const filteredAndSortedCars = useMemo(() => {
    let filtered = [...cars];

    // Filter by seats
    if (seatsFilter !== "all") {
      filtered = filtered.filter((car) => car.seats === parseInt(seatsFilter));
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.pricePerDay.MAD - b.pricePerDay.MAD);
        break;
      case "price-high":
        filtered.sort((a, b) => b.pricePerDay.MAD - a.pricePerDay.MAD);
        break;
      case "model-az":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "model-za":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return filtered;
  }, [seatsFilter, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t("cars")}</h1>
          <p className="text-xl text-gray-600">
            Find the perfect vehicle for your journey
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter size={20} className="text-[#D4AF37]" />
            <h2 className="text-lg font-semibold">Filter & Sort</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("seats")}
              </label>
              <select
                value={seatsFilter}
                onChange={(e) => setSeatsFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              >
                <option value="all">{t("allSeats")}</option>
                <option value="5">5 {t("seats")}</option>
                <option value="7">7 {t("seats")}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("sortBy")}
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              >
                <option value="price-low">{t("priceLowest")}</option>
                <option value="price-high">{t("priceHighest")}</option>
                <option value="model-az">{t("modelAZ")}</option>
                <option value="model-za">{t("modelZA")}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedCars.map((car) => (
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
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                  {t(car.category)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <Users size={16} className="mr-1" /> {car.seats}{" "}
                    {t("seats")}
                  </span>
                  <span className="capitalize">{t(car.transmission)}</span>
                  <span className="capitalize">{t(car.fuelType)}</span>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {car.features.slice(0, 3).map((feature, idx) => (
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
                    <span className="text-2xl font-bold text-[#D4AF37]">
                      {formatPrice(car.pricePerDay)}
                    </span>
                    <span className="text-gray-600 ml-2 text-sm">
                      /{t("perDay")}
                    </span>
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

        {filteredAndSortedCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No cars found matching your criteria
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
