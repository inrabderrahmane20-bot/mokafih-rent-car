import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/212663885110?text=Hello! I would like to inquire about car rental.",
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("contactTitle")}
          </h1>
          <p className="text-xl text-gray-600">
            We're here to help you plan your perfect journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFF9E6] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t("phone")}
                    </h3>
                    <a
                      href="tel:+212663885110"
                      className="text-gray-600 hover:text-[#D4AF37] transition-colors"
                    >
                      +212 663-885110
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFF9E6] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t("email")}
                    </h3>
                    <a
                      href="mailto:mokafih.admin@gmail.com"
                      className="text-gray-600 hover:text-[#D4AF37] transition-colors"
                    >
                      mokafih.admin@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFF9E6] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t("location")}
                    </h3>
                    <p className="text-gray-600">{t("marrakech")}, Morocco</p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    {t("followUs")}
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/people/Mokafih-rent-car/61574935780109/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#0D65D9] transition-colors"
                    >
                      <Facebook size={24} className="text-white" />
                    </a>
                    <a
                      href="https://www.instagram.com/mokafih.rent.car/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      <Instagram size={24} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-lg"
            >
              <MessageCircle size={24} />
              <span>Contact us on WhatsApp</span>
            </button>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Location
            </h2>
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215640.93084634!2d-8.182434!3d31.63469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech%2C%20Morocco!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
