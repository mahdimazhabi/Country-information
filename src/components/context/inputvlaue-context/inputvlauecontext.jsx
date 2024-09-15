import { createContext, useState } from "react";

// نام‌گذاری بهتر برای کانتکست
export const InfoContext = createContext();

function InfoProvider({ children }) {
  const [info, setInfo] = useState(""); // وضعیت برای داده‌ها

  return (
    <InfoContext.Provider value={{ info, setInfo }}>
      {children} {/* رندر کردن کودکان */}
    </InfoContext.Provider>
  );
}

export default InfoProvider;
