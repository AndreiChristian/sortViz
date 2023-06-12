import React, { useState } from "react";

export interface ContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Create a Context with the type
export const MyContext = React.createContext<ContextType>({
  darkMode: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleDarkMode: () => {},
});

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const contextValue: ContextType = {
    darkMode: darkMode,
    toggleDarkMode: () => {
      setDarkMode((value) => !value);
    },
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default AppProvider;
