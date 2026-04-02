import { Dispatch, SetStateAction } from "react";

export type Setting = {
  title: SettingTitle;
  options: { label: string }[];
  selected: string;
};

export type SettingsContextType = {
  settings: Setting[];
  setSettings: Dispatch<SetStateAction<Setting[]>>;
};

export type SettingTitle =
  | "TEMPERATURE"
  | "WIND SPEED"
  | "PRESSURE"
  | "PRECIPITATION"
  | "DISTANCE";
