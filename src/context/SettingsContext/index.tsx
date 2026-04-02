import { Setting, SettingsContextType } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";

export const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

const SettingsContextProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<Setting[]>([
    {
      title: "TEMPERATURE",
      options: [{ label: "Celsius" }, { label: "Fahrenheit" }],
      selected: "Celsius",
    },
    {
      title: "WIND SPEED",
      options: [{ label: "km/h" }, { label: "mph" }],
      selected: "km/h",
    },
    {
      title: "PRESSURE",
      options: [{ label: "hPa" }, { label: "Inches" }],
      selected: "hPa",
    },
    {
      title: "PRECIPITATION",
      options: [{ label: "Millmeters" }, { label: "Inches" }],
      selected: "Inches",
    },
    {
      title: "DISTANCE",
      options: [{ label: "Kilometers" }, { label: "Miles" }],
      selected: "Kilometers",
    },
  ]);

  const getSavedSettings = async () => {
    const localSavedSettings = await AsyncStorage.getItem("settings");
    const savedSettings = localSavedSettings
      ? JSON.parse(localSavedSettings)
      : null;
    if (savedSettings) {
      setSettings(savedSettings);
    }
  };

  useEffect(() => {
    getSavedSettings();
  }, []);
  return (
    <SettingsContext value={{ settings, setSettings }}>
      {children}
    </SettingsContext>
  );
};

export default SettingsContextProvider;
