import { useLanguage } from "@/contexts/LanguageContext";
import { X, Globe } from "lucide-react";

export default function LanguageModal() {
  const { showLanguageModal, changeLanguage, setShowLanguageModal } =
    useLanguage();

  if (!showLanguageModal) return null;

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "ar", name: "العربية", flag: "🇲🇦" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        <button
          onClick={() => setShowLanguageModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Select Your Language
          </h2>
          <p className="text-gray-600">Choose your preferred language</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center space-x-3 p-4 rounded-lg border-2 border-gray-200 hover:border-[#D4AF37] hover:bg-[#FFF9E6] transition-all"
            >
              <span className="text-3xl">{lang.flag}</span>
              <span className="text-gray-800 font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
