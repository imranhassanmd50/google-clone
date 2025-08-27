import React, { createContext, useState } from "react";
export const SearchContext = createContext();
const SearchProvider = ({ children }) => {
  const [term, setTerm] = useState("");
  return (
    <SearchContext.Provider value={{ term, setTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
