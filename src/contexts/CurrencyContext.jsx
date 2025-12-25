import { createContext, useContext, useState, useEffect } from "react";

const CurrencyContext = createContext();

export const currencySymbols = {
  MAD: "MAD",
  EUR: "€",
  USD: "$",
};

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("MAD");

  useEffect(() => {
    const savedCurrency = localStorage.getItem("currency");
    if (savedCurrency && currencySymbols[savedCurrency]) {
      setCurrency(savedCurrency);
    }
  }, []);

  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
    localStorage.setItem("currency", newCurrency);
  };

  const formatPrice = (priceObj) => {
    const price = priceObj[currency] || priceObj.MAD;
    return `${currencySymbols[currency]}${price}`;
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, changeCurrency, formatPrice, currencySymbols }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return context;
}
