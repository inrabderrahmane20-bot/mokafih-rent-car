import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Menu, X, Globe, DollarSign } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, changeLanguage } = useLanguage();
  const { currency, changeCurrency, currencySymbols } = useCurrency();

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "ar", name: "العربية" },
    { code: "es", name: "Español" },
    { code: "de", name: "Deutsch" },
    { code: "it", name: "Italiano" },
    { code: "pt", name: "Português" },
  ];

  return (
    <header className="bg-[#1a1a1a] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <div className="text-2xl font-bold">
              <span className="text-[#D4AF37]">MOKAFIH</span>
              <span className="text-white text-sm ml-2">RENT CAR</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-[#D4AF37] transition-colors">
              {t("home")}
            </a>
            <a href="/cars" className="hover:text-[#D4AF37] transition-colors">
              {t("cars")}
            </a>
            <a
              href="/tourist-transport"
              className="hover:text-[#D4AF37] transition-colors"
            >
              {t("touristTransport")}
            </a>
            <a
              href="/destinations"
              className="hover:text-[#D4AF37] transition-colors"
            >
              {t("destinations")}
            </a>
            <a href="/about" className="hover:text-[#D4AF37] transition-colors">
              {t("about")}
            </a>
            <a
              href="/contact"
              className="hover:text-[#D4AF37] transition-colors"
            >
              {t("contact")}
            </a>
          </nav>

          {/* Language & Currency Selectors */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors">
                <Globe size={18} />
                <span className="text-sm">{language.toUpperCase()}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-[#2a2a2a] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`block w-full text-left px-4 py-2 hover:bg-[#3a3a3a] first:rounded-t-lg last:rounded-b-lg ${
                      language === lang.code ? "text-[#D4AF37]" : ""
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors">
                <DollarSign size={18} />
                <span className="text-sm">{currency}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-[#2a2a2a] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {Object.keys(currencySymbols).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => changeCurrency(curr)}
                    className={`block w-full text-left px-4 py-2 hover:bg-[#3a3a3a] first:rounded-t-lg last:rounded-b-lg ${
                      currency === curr ? "text-[#D4AF37]" : ""
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="hover:text-[#D4AF37] transition-colors">
                {t("home")}
              </a>
              <a
                href="/cars"
                className="hover:text-[#D4AF37] transition-colors"
              >
                {t("cars")}
              </a>
              <a
                href="/tourist-transport"
                className="hover:text-[#D4AF37] transition-colors"
              >
                {t("touristTransport")}
              </a>
              <a
                href="/destinations"
                className="hover:text-[#D4AF37] transition-colors"
              >
                {t("destinations")}
              </a>
              <a
                href="/about"
                className="hover:text-[#D4AF37] transition-colors"
              >
                {t("about")}
              </a>
              <a
                href="/contact"
                className="hover:text-[#D4AF37] transition-colors"
              >
                {t("contact")}
              </a>

              <div className="pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Language</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`px-3 py-2 rounded-lg bg-[#2a2a2a] hover:bg-[#3a3a3a] text-sm ${
                        language === lang.code ? "text-[#D4AF37]" : ""
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Currency</p>
                <div className="flex space-x-2">
                  {Object.keys(currencySymbols).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => changeCurrency(curr)}
                      className={`px-4 py-2 rounded-lg bg-[#2a2a2a] hover:bg-[#3a3a3a] text-sm ${
                        currency === curr ? "text-[#D4AF37]" : ""
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
