import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Car, Shield, Clock, Star, Award, Users as Team } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("aboutTitle")}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Since 2020, we've been providing exceptional car rental services in
            Marrakech, helping thousands of travelers explore Morocco with
            confidence and comfort.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800"
                alt="Car rental fleet"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At Mokafih Rent Car, we believe that your journey should begin
                the moment you step off the plane. That's why we're committed to
                providing you with reliable, well-maintained vehicles and
                exceptional customer service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're here for business or pleasure, exploring the city
                or venturing into the Atlas Mountains, we have the perfect
                vehicle for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#FFF9E6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Fleet</h3>
              <p className="text-gray-600">
                All our vehicles are regularly serviced and maintained to ensure
                your safety and comfort.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#FFF9E6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Best Prices</h3>
              <p className="text-gray-600">
                Competitive rates with no hidden fees. What you see is what you
                pay.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#FFF9E6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Team className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Our friendly team is available 24/7 to assist you throughout
                your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
