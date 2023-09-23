"use client";
import { createContext, useEffect, useState } from "react";
import { Loading } from "..";
export const themeContext = createContext<ThemeContextType>({
  isThemeDark: true,
  setIsThemeDark: () => {},
  presets: ["primary", "#00AB55"],
  setPresets: () => {},
});

export const settingsContext = createContext<SettingsContextType>({
  isSettingsOpen: false,
  setIsSettingsOpen: () => {},
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isThemeDark, setIsThemeDark] = useState<boolean>(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [presets, setPresets] = useState<string[]>(["primary", "#00AB55"]);
  const [content, setContent] = useState(false);
  // Getting the user theme from local storage
  useEffect(() => {
    const getTheme = () => {
      const localTheme = localStorage.getItem("theme");
      if (localTheme) {
        if (localTheme === "light") {
          return false;
        } else if (localTheme === "dark") {
          return true;
        }
      } else {
        return true;
      }
    };

    const themeData = getTheme() as boolean;
    setIsThemeDark(themeData);
    const getPresets = () => {
      const presetsStorage = localStorage.getItem("presets");
      if (presetsStorage) {
        const presetsData = JSON.parse(presetsStorage);
        return presetsData;
      } else {
        return ["primary", "#00AB55"];
      }
    };
    const presetsData = getPresets();

    setPresets(presetsData);
    setContent(true);
  }, []);

  let theme = isThemeDark
    ? {
        backgroundImage:
          "linear-gradient(to bottom left, #454b53 0%,#21272f 30%,#161c24 100%)",
        backgroundSize: "cover",
      }
    : {
        backgroundImage: "linear-gradient(225deg,  #bfdad6, #d6eae1)",
        backgroundSize: "cover",
      };

  if (content) {
    return (
      <settingsContext.Provider value={{ isSettingsOpen, setIsSettingsOpen }}>
        <themeContext.Provider
          value={{ isThemeDark, setIsThemeDark, presets, setPresets }}
        >
          <div className="min-h-[200vh]" style={theme}>
            {children}
          </div>
        </themeContext.Provider>
      </settingsContext.Provider>
    );
  } else {
    return <Loading />;
  }
};

export default Providers;
