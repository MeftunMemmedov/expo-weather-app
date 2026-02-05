import { Setting, SettingsContextType } from "@/types";
import { createContext, ReactNode, useState } from "react";

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
      options: [{ label: "km/h" }, { label: "m/s" }, { label: "Knots" }],
      selected: "km/h",
    },
    {
      title: "PRESSURE",
      options: [
        { label: "hPa" },
        { label: "Inches" },
        { label: "kPa" },
        { label: "mm" },
      ],
      selected: "mm",
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

  return (
    <SettingsContext value={{ settings, setSettings }}>
      {children}
    </SettingsContext>
  );
};

export default SettingsContextProvider;
