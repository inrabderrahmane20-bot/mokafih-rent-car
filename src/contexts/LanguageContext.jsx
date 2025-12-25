import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navigation
    home: "Home",
    cars: "Cars",
    touristTransport: "Tourist Transport",
    destinations: "Destinations",
    about: "About",
    contact: "Contact",

    // Homepage
    heroTitle: "Premium Car Rental in Marrakech",
    heroSubtitle: "Explore Morocco with the perfect vehicle for your journey",
    bookNow: "Book Now",
    searchCars: "Search Cars",
    pickupDate: "Pickup Date",
    returnDate: "Return Date",
    location: "Location",
    marrakech: "Marrakech",
    seats: "Seats",
    allSeats: "All Seats",
    sortBy: "Sort By",
    priceLowest: "Price: Lowest",
    priceHighest: "Price: Highest",
    modelAZ: "Model: A-Z",
    modelZA: "Model: Z-A",

    // Car Details
    perDay: "per day",
    features: "Features",
    specifications: "Specifications",
    year: "Year",
    transmission: "Transmission",
    fuelType: "Fuel Type",
    manual: "Manual",
    automatic: "Automatic",
    diesel: "Diesel",
    hybrid: "Hybrid",
    bookViaWhatsApp: "Book via WhatsApp",

    // Categories
    economy: "Economy",
    compact: "Compact",
    sedan: "Sedan",
    suv: "SUV",
    tourist: "Tourist Transport",

    // About
    aboutTitle: "About Mokafih Rent Car",
    aboutText:
      "Your trusted partner for car rental in Marrakech since 2020. We offer a wide range of vehicles to suit every need and budget.",

    // Contact
    contactTitle: "Contact Us",
    phone: "Phone",
    email: "Email",
    followUs: "Follow Us",

    // Destinations
    destinationsTitle: "Popular Destinations",
    distance: "Distance from Marrakech",

    // Footer
    allRightsReserved: "All rights reserved",

    // Admin
    adminDashboard: "Admin Dashboard",
    manageCars: "Manage Cars",
    viewBookings: "View Bookings",
    totalCars: "Total Cars",
    availableCars: "Available Cars",
    totalBookings: "Total Bookings",
    logout: "Logout",

    // Common
    loading: "Loading...",
    viewDetails: "View Details",
    available: "Available",
    unavailable: "Unavailable",
    days: "days",
    total: "Total",
  },

  fr: {
    // Navigation
    home: "Accueil",
    cars: "Voitures",
    touristTransport: "Transport Touristique",
    destinations: "Destinations",
    about: "À Propos",
    contact: "Contact",

    // Homepage
    heroTitle: "Location de Voitures Premium à Marrakech",
    heroSubtitle:
      "Explorez le Maroc avec le véhicule parfait pour votre voyage",
    bookNow: "Réserver",
    searchCars: "Rechercher",
    pickupDate: "Date de Prise",
    returnDate: "Date de Retour",
    location: "Lieu",
    marrakech: "Marrakech",
    seats: "Places",
    allSeats: "Toutes Places",
    sortBy: "Trier Par",
    priceLowest: "Prix: Croissant",
    priceHighest: "Prix: Décroissant",
    modelAZ: "Modèle: A-Z",
    modelZA: "Modèle: Z-A",

    // Car Details
    perDay: "par jour",
    features: "Caractéristiques",
    specifications: "Spécifications",
    year: "Année",
    transmission: "Transmission",
    fuelType: "Carburant",
    manual: "Manuelle",
    automatic: "Automatique",
    diesel: "Diesel",
    hybrid: "Hybride",
    bookViaWhatsApp: "Réserver via WhatsApp",

    // Categories
    economy: "Économique",
    compact: "Compact",
    sedan: "Berline",
    suv: "SUV",
    tourist: "Transport Touristique",

    // About
    aboutTitle: "À Propos de Mokafih Rent Car",
    aboutText:
      "Votre partenaire de confiance pour la location de voitures à Marrakech depuis 2020. Nous offrons une large gamme de véhicules pour tous les besoins et budgets.",

    // Contact
    contactTitle: "Contactez-Nous",
    phone: "Téléphone",
    email: "Email",
    followUs: "Suivez-Nous",

    // Destinations
    destinationsTitle: "Destinations Populaires",
    distance: "Distance de Marrakech",

    // Footer
    allRightsReserved: "Tous droits réservés",

    // Admin
    adminDashboard: "Tableau de Bord Admin",
    manageCars: "Gérer les Voitures",
    viewBookings: "Voir les Réservations",
    totalCars: "Total Voitures",
    availableCars: "Voitures Disponibles",
    totalBookings: "Total Réservations",
    logout: "Déconnexion",

    // Common
    loading: "Chargement...",
    viewDetails: "Voir Détails",
    available: "Disponible",
    unavailable: "Indisponible",
    days: "jours",
    total: "Total",
  },

  ar: {
    // Navigation
    home: "الرئيسية",
    cars: "السيارات",
    touristTransport: "النقل السياحي",
    destinations: "الوجهات",
    about: "عن",
    contact: "اتصل",

    // Homepage
    heroTitle: "تأجير سيارات فاخر في مراكش",
    heroSubtitle: "اكتشف المغرب بالسيارة المثالية لرحلتك",
    bookNow: "احجز الآن",
    searchCars: "بحث",
    pickupDate: "تاريخ الاستلام",
    returnDate: "تاريخ الإرجاع",
    location: "الموقع",
    marrakech: "مراكش",
    seats: "المقاعد",
    allSeats: "جميع المقاعد",
    sortBy: "ترتيب حسب",
    priceLowest: "السعر: الأقل",
    priceHighest: "السعر: الأعلى",
    modelAZ: "الموديل: أ-ي",
    modelZA: "الموديل: ي-أ",

    // Car Details
    perDay: "في اليوم",
    features: "المميزات",
    specifications: "المواصفات",
    year: "السنة",
    transmission: "ناقل الحركة",
    fuelType: "نوع الوقود",
    manual: "يدوي",
    automatic: "أوتوماتيك",
    diesel: "ديزل",
    hybrid: "هجين",
    bookViaWhatsApp: "احجز عبر واتساب",

    // Categories
    economy: "اقتصادية",
    compact: "مدمجة",
    sedan: "سيدان",
    suv: "SUV",
    tourist: "نقل سياحي",

    // About
    aboutTitle: "عن موكافح لتأجير السيارات",
    aboutText:
      "شريكك الموثوق لتأجير السيارات في مراكش منذ 2020. نقدم مجموعة واسعة من المركبات لتناسب كل احتياج وميزانية.",

    // Contact
    contactTitle: "اتصل بنا",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    followUs: "تابعنا",

    // Destinations
    destinationsTitle: "الوجهات الشعبية",
    distance: "المسافة من مراكش",

    // Footer
    allRightsReserved: "جميع الحقوق محفوظة",

    // Admin
    adminDashboard: "لوحة الإدارة",
    manageCars: "إدارة السيارات",
    viewBookings: "عرض الحجوزات",
    totalCars: "إجمالي السيارات",
    availableCars: "السيارات المتاحة",
    totalBookings: "إجمالي الحجوزات",
    logout: "تسجيل خروج",

    // Common
    loading: "جاري التحميل...",
    viewDetails: "عرض التفاصيل",
    available: "متاح",
    unavailable: "غير متاح",
    days: "أيام",
    total: "المجموع",
  },

  es: {
    // Navigation
    home: "Inicio",
    cars: "Coches",
    touristTransport: "Transporte Turístico",
    destinations: "Destinos",
    about: "Acerca de",
    contact: "Contacto",

    // Homepage
    heroTitle: "Alquiler Premium de Coches en Marrakech",
    heroSubtitle: "Explora Marruecos con el vehículo perfecto para tu viaje",
    bookNow: "Reservar",
    searchCars: "Buscar",
    pickupDate: "Fecha de Recogida",
    returnDate: "Fecha de Devolución",
    location: "Ubicación",
    marrakech: "Marrakech",
    seats: "Asientos",
    allSeats: "Todos Asientos",
    sortBy: "Ordenar Por",
    priceLowest: "Precio: Menor",
    priceHighest: "Precio: Mayor",
    modelAZ: "Modelo: A-Z",
    modelZA: "Modelo: Z-A",

    // Car Details
    perDay: "por día",
    features: "Características",
    specifications: "Especificaciones",
    year: "Año",
    transmission: "Transmisión",
    fuelType: "Combustible",
    manual: "Manual",
    automatic: "Automático",
    diesel: "Diésel",
    hybrid: "Híbrido",
    bookViaWhatsApp: "Reservar vía WhatsApp",

    // Categories
    economy: "Económico",
    compact: "Compacto",
    sedan: "Sedán",
    suv: "SUV",
    tourist: "Transporte Turístico",

    // About
    aboutTitle: "Sobre Mokafih Rent Car",
    aboutText:
      "Tu socio de confianza para alquiler de coches en Marrakech desde 2020. Ofrecemos una amplia gama de vehículos para cada necesidad y presupuesto.",

    // Contact
    contactTitle: "Contáctanos",
    phone: "Teléfono",
    email: "Correo",
    followUs: "Síguenos",

    // Destinations
    destinationsTitle: "Destinos Populares",
    distance: "Distancia desde Marrakech",

    // Footer
    allRightsReserved: "Todos los derechos reservados",

    // Admin
    adminDashboard: "Panel de Admin",
    manageCars: "Administrar Coches",
    viewBookings: "Ver Reservas",
    totalCars: "Total Coches",
    availableCars: "Coches Disponibles",
    totalBookings: "Total Reservas",
    logout: "Cerrar Sesión",

    // Common
    loading: "Cargando...",
    viewDetails: "Ver Detalles",
    available: "Disponible",
    unavailable: "No Disponible",
    days: "días",
    total: "Total",
  },

  de: {
    // Navigation
    home: "Startseite",
    cars: "Autos",
    touristTransport: "Touristentransport",
    destinations: "Reiseziele",
    about: "Über Uns",
    contact: "Kontakt",

    // Homepage
    heroTitle: "Premium Autovermietung in Marrakesch",
    heroSubtitle:
      "Erkunden Sie Marokko mit dem perfekten Fahrzeug für Ihre Reise",
    bookNow: "Jetzt Buchen",
    searchCars: "Suchen",
    pickupDate: "Abholtermin",
    returnDate: "Rückgabetermin",
    location: "Standort",
    marrakech: "Marrakesch",
    seats: "Sitze",
    allSeats: "Alle Sitze",
    sortBy: "Sortieren Nach",
    priceLowest: "Preis: Niedrigster",
    priceHighest: "Preis: Höchster",
    modelAZ: "Modell: A-Z",
    modelZA: "Modell: Z-A",

    // Car Details
    perDay: "pro Tag",
    features: "Merkmale",
    specifications: "Spezifikationen",
    year: "Jahr",
    transmission: "Getriebe",
    fuelType: "Kraftstoff",
    manual: "Manuell",
    automatic: "Automatik",
    diesel: "Diesel",
    hybrid: "Hybrid",
    bookViaWhatsApp: "Über WhatsApp Buchen",

    // Categories
    economy: "Wirtschaft",
    compact: "Kompakt",
    sedan: "Limousine",
    suv: "SUV",
    tourist: "Touristentransport",

    // About
    aboutTitle: "Über Mokafih Rent Car",
    aboutText:
      "Ihr vertrauenswürdiger Partner für Autovermietung in Marrakesch seit 2020. Wir bieten eine breite Palette von Fahrzeugen für jeden Bedarf und jedes Budget.",

    // Contact
    contactTitle: "Kontaktieren Sie Uns",
    phone: "Telefon",
    email: "E-Mail",
    followUs: "Folgen Sie Uns",

    // Destinations
    destinationsTitle: "Beliebte Reiseziele",
    distance: "Entfernung von Marrakesch",

    // Footer
    allRightsReserved: "Alle Rechte vorbehalten",

    // Admin
    adminDashboard: "Admin-Dashboard",
    manageCars: "Autos Verwalten",
    viewBookings: "Buchungen Ansehen",
    totalCars: "Gesamt Autos",
    availableCars: "Verfügbare Autos",
    totalBookings: "Gesamt Buchungen",
    logout: "Abmelden",

    // Common
    loading: "Laden...",
    viewDetails: "Details Ansehen",
    available: "Verfügbar",
    unavailable: "Nicht Verfügbar",
    days: "Tage",
    total: "Gesamt",
  },

  it: {
    // Navigation
    home: "Home",
    cars: "Auto",
    touristTransport: "Trasporto Turistico",
    destinations: "Destinazioni",
    about: "Chi Siamo",
    contact: "Contatto",

    // Homepage
    heroTitle: "Noleggio Auto Premium a Marrakech",
    heroSubtitle:
      "Esplora il Marocco con il veicolo perfetto per il tuo viaggio",
    bookNow: "Prenota Ora",
    searchCars: "Cerca",
    pickupDate: "Data di Ritiro",
    returnDate: "Data di Restituzione",
    location: "Posizione",
    marrakech: "Marrakech",
    seats: "Posti",
    allSeats: "Tutti i Posti",
    sortBy: "Ordina Per",
    priceLowest: "Prezzo: Più Basso",
    priceHighest: "Prezzo: Più Alto",
    modelAZ: "Modello: A-Z",
    modelZA: "Modello: Z-A",

    // Car Details
    perDay: "al giorno",
    features: "Caratteristiche",
    specifications: "Specifiche",
    year: "Anno",
    transmission: "Trasmissione",
    fuelType: "Carburante",
    manual: "Manuale",
    automatic: "Automatico",
    diesel: "Diesel",
    hybrid: "Ibrido",
    bookViaWhatsApp: "Prenota tramite WhatsApp",

    // Categories
    economy: "Economica",
    compact: "Compatta",
    sedan: "Berlina",
    suv: "SUV",
    tourist: "Trasporto Turistico",

    // About
    aboutTitle: "Su Mokafih Rent Car",
    aboutText:
      "Il tuo partner di fiducia per il noleggio auto a Marrakech dal 2020. Offriamo una vasta gamma di veicoli per ogni esigenza e budget.",

    // Contact
    contactTitle: "Contattaci",
    phone: "Telefono",
    email: "Email",
    followUs: "Seguici",

    // Destinations
    destinationsTitle: "Destinazioni Popolari",
    distance: "Distanza da Marrakech",

    // Footer
    allRightsReserved: "Tutti i diritti riservati",

    // Admin
    adminDashboard: "Pannello Admin",
    manageCars: "Gestisci Auto",
    viewBookings: "Visualizza Prenotazioni",
    totalCars: "Auto Totali",
    availableCars: "Auto Disponibili",
    totalBookings: "Prenotazioni Totali",
    logout: "Esci",

    // Common
    loading: "Caricamento...",
    viewDetails: "Vedi Dettagli",
    available: "Disponibile",
    unavailable: "Non Disponibile",
    days: "giorni",
    total: "Totale",
  },

  pt: {
    // Navigation
    home: "Início",
    cars: "Carros",
    touristTransport: "Transporte Turístico",
    destinations: "Destinos",
    about: "Sobre",
    contact: "Contato",

    // Homepage
    heroTitle: "Aluguel Premium de Carros em Marrakech",
    heroSubtitle: "Explore o Marrocos com o veículo perfeito para sua viagem",
    bookNow: "Reservar",
    searchCars: "Pesquisar",
    pickupDate: "Data de Retirada",
    returnDate: "Data de Devolução",
    location: "Localização",
    marrakech: "Marrakech",
    seats: "Assentos",
    allSeats: "Todos Assentos",
    sortBy: "Ordenar Por",
    priceLowest: "Preço: Menor",
    priceHighest: "Preço: Maior",
    modelAZ: "Modelo: A-Z",
    modelZA: "Modelo: Z-A",

    // Car Details
    perDay: "por dia",
    features: "Características",
    specifications: "Especificações",
    year: "Ano",
    transmission: "Transmissão",
    fuelType: "Combustível",
    manual: "Manual",
    automatic: "Automático",
    diesel: "Diesel",
    hybrid: "Híbrido",
    bookViaWhatsApp: "Reservar via WhatsApp",

    // Categories
    economy: "Econômico",
    compact: "Compacto",
    sedan: "Sedan",
    suv: "SUV",
    tourist: "Transporte Turístico",

    // About
    aboutTitle: "Sobre Mokafih Rent Car",
    aboutText:
      "Seu parceiro confiável para aluguel de carros em Marrakech desde 2020. Oferecemos uma ampla gama de veículos para cada necessidade e orçamento.",

    // Contact
    contactTitle: "Fale Conosco",
    phone: "Telefone",
    email: "Email",
    followUs: "Siga-nos",

    // Destinations
    destinationsTitle: "Destinos Populares",
    distance: "Distância de Marrakech",

    // Footer
    allRightsReserved: "Todos os direitos reservados",

    // Admin
    adminDashboard: "Painel Admin",
    manageCars: "Gerenciar Carros",
    viewBookings: "Ver Reservas",
    totalCars: "Total Carros",
    availableCars: "Carros Disponíveis",
    totalBookings: "Total Reservas",
    logout: "Sair",

    // Common
    loading: "Carregando...",
    viewDetails: "Ver Detalhes",
    available: "Disponível",
    unavailable: "Indisponível",
    days: "dias",
    total: "Total",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    const hasSeenModal = localStorage.getItem("hasSeenLanguageModal");

    if (savedLang) {
      setLanguage(savedLang);
    }

    if (!hasSeenModal) {
      setShowLanguageModal(true);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    localStorage.setItem("hasSeenLanguageModal", "true");
    setShowLanguageModal(false);
  };

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
        showLanguageModal,
        setShowLanguageModal,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
