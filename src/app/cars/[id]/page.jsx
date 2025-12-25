import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Users,
  Fuel,
  Settings,
  Calendar,
  CheckCircle,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cars, touristVehicles } from "@/data/cars";

export default function CarDetailPage({ params }) {
  const { id } = params;
  const { t, language } = useLanguage();
  const { formatPrice, currency } = useCurrency();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const car = useMemo(() => {
    return [...cars, ...touristVehicles].find((c) => c.id === id);
  }, [id]);

  const totalDays = useMemo(() => {
    if (!car) return 0;
    if (pickupDate && returnDate) {
      const start = new Date(pickupDate);
      const end = new Date(returnDate);
      const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      return diff > 0 ? diff : 0;
    }
    return 0;
  }, [pickupDate, returnDate, car]);

  const totalPrice = useMemo(() => {
    if (!car) return 0;
    return totalDays * car.pricePerDay[currency];
  }, [totalDays, car, currency]);

  const handleWhatsAppBooking = () => {
    if (!car) return;
    const message = `Hello! I would like to book the ${car.name}%0A%0APickup Date: ${pickupDate || "Not specified"}%0AReturn Date: ${returnDate || "Not specified"}%0ATotal Days: ${totalDays || "Not specified"}%0APrice per Day: ${formatPrice(car.pricePerDay)}%0ATotal Price: ${currency}${totalPrice || "TBD"}%0A%0AThank you!`;
    window.open(`https://wa.me/212663885110?text=${message}`, "_blank");
  };

  const nextImage = () => {
    if (!car) return;
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    if (!car) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + car.images.length) % car.images.length,
    );
  };

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Car not found</h1>
          <a
            href="/cars"
            className="text-[#D4AF37] hover:underline mt-4 inline-block"
          >
            ← Back to cars
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <a
          href="/cars"
          className="text-[#D4AF37] hover:underline mb-6 inline-block"
        >
          ← Back to cars
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div>
            <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden mb-4">
              <img
                src={car.images[currentImageIndex]}
                alt={car.name}
                className="w-full h-full object-cover"
              />
              {car.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 p-2 rounded-full transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 p-2 rounded-full transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            <div className="grid grid-cols-4 gap-2">
              {car.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-20 rounded-lg overflow-hidden ${idx === currentImageIndex ? "ring-4 ring-[#D4AF37]" : ""}`}
                >
                  <img
                    src={img}
                    alt={`${car.name} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Details & Booking */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {car.name}
              </h1>
              <p className="text-gray-600 mb-4 capitalize">{t(car.category)}</p>

              <div className="flex items-center space-x-6 mb-6 pb-6 border-b">
                <div className="flex items-center space-x-2">
                  <Users className="text-[#D4AF37]" size={20} />
                  <span>
                    {car.seats} {t("seats")}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="text-[#D4AF37]" size={20} />
                  <span className="capitalize">{t(car.transmission)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Fuel className="text-[#D4AF37]" size={20} />
                  <span className="capitalize">{t(car.fuelType)}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">{t("features")}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {car.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#FFF9E6] rounded-lg p-6 mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold text-[#D4AF37]">
                    {formatPrice(car.pricePerDay)}
                  </span>
                  <span className="text-gray-700 ml-2">/{t("perDay")}</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("pickupDate")}
                    </label>
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("returnDate")}
                    </label>
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    />
                  </div>

                  {totalDays > 0 && (
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">
                          {totalDays} {t("days")}
                        </span>
                        <span className="font-semibold">
                          {currency}
                          {totalPrice}
                        </span>
                      </div>
                      <div className="flex justify-between text-lg font-bold">
                        <span>{t("total")}</span>
                        <span className="text-[#D4AF37]">
                          {currency}
                          {totalPrice}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={handleWhatsAppBooking}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle size={20} />
                <span>{t("bookViaWhatsApp")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
