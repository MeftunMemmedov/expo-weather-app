import { SettingsContext } from "@/context/SettingsContext";
import { Setting, SettingTitle } from "@/types";
import { use } from "react";

const useSettings = (): { getSetting: (title: SettingTitle) => Setting } => {
  const context = use(SettingsContext);
  if (!context) throw Error("CONTEXT FUCKED UP");

  const { settings } = context;
  const getSetting = (title: SettingTitle): Setting => {
    return settings.find((setting) => setting.title === title) as Setting;
  };

  return {
    getSetting,
  };
};

export default useSettings;
