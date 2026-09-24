import { Dispatch, SetStateAction } from "react";

export type SettingsType = {
  unit: UnitSetting[];
  general: GeneralSetting[];
};

export type GeneralSetting = {
  title: SettingTitle;
  description?: string;
  value: boolean;
};

export type SettingTitle =
  | "TEMPERATURE"
  | "WIND SPEED"
  | "PRESSURE"
  | "PRECIPITATION"
  | "DISTANCE"
  | "12 Hour Time"
  | "Location";

export type UnitSetting = {
  title: SettingTitle;
  options: { label: string }[];
  selected: string;
};

export type SettingsContextType = {
  settings: SettingsType;
  setSettings: Dispatch<SetStateAction<SettingsType>>;
};
