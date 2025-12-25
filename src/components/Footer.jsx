import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#D4AF37]">MOKAFIH</span>
              <span className="text-white text-sm ml-2">RENT CAR</span>
            </div>
            <p className="text-gray-400 mb-4">{t("aboutText")}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Mokafih-rent-car/61574935780109/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2a2a2a] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/mokafih.rent.car/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2a2a2a] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  {t("home")}
                </a>
              </li>
              <li>
                <a
                  href="/cars"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  {t("cars")}
                </a>
              </li>
              <li>
                <a
                  href="/tourist-transport"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  {t("touristTransport")}
                </a>
              </li>
              <li>
                <a
                  href="/destinations"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  {t("destinations")}
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  {t("about")}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">
              {t("contact")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-[#D4AF37]" />
                <a
                  href="tel:+212663885110"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  +212 663-885110
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-[#D4AF37]" />
                <span className="text-gray-400">mokafih.admin@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} Mokafih Rent Car. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
