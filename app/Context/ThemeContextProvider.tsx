"use client";
import React, { useState, useEffect, useContext, createContext } from "react";
import { useSound } from "./SoundContext";
import playSound from "../utils/playSound";

type ThemeContextType = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(() => {
    const currMode = localStorage.getItem("mode");
    return currMode === "dark";
  });

  const { sound } = useSound();

  // Ensure the body class reflects the mode on mount
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  const toggleMode = () => {
    setIsDark((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("mode", newMode ? "dark" : "light");

      if (sound) {
        playSound("/Sounds/clicksound2.wav");
      }

      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};
