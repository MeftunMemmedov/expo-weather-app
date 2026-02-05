import { Dispatch, SetStateAction } from "react";

export type Setting = {
  title: string;
  options: { label: string }[];
  selected: string;
};

export type SettingsContextType = {
  settings: Setting[];
  setSettings: Dispatch<SetStateAction<Setting[]>>;
};
