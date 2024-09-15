import { useState, createContext } from "react";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [sharedata, setsharedata] = useState("");

  return (
    <DataContext.Provider value={{ sharedata, setsharedata }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
