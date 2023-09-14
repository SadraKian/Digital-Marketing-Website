"use client";
import { createContext, useState } from "react";

// Define the type for the context value
type ThemeContextType = {
  isThemeDark: boolean;
  setIsThemeDark: React.Dispatch<React.SetStateAction<boolean>>;
};

type SettingsContextType = {
  isSettingsOpen: boolean;
  setIsSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const themeContext = createContext<ThemeContextType>({
  isThemeDark: true,
  setIsThemeDark: () => {},
});

export const settingsContext = createContext<SettingsContextType>({
  isSettingsOpen: false,
  setIsSettingsOpen: () => {},
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <settingsContext.Provider value={{ isSettingsOpen, setIsSettingsOpen }}>
      <themeContext.Provider value={{ isThemeDark, setIsThemeDark }}>
        {children}
      </themeContext.Provider>
    </settingsContext.Provider>
  );
};

export default Providers;
