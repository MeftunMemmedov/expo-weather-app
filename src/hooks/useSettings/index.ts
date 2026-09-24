import { SettingsContext } from "@/context/SettingsContext";
import { GeneralSetting, SettingTitle, UnitSetting } from "@/types";
import { use } from "react";

const useSettings = (): {
  getUnitSetting: (title: SettingTitle) => UnitSetting | undefined;
  getGeneralSetting: (title: SettingTitle) => GeneralSetting | undefined;
} => {
  const context = use(SettingsContext);

  if (!context) throw Error("SETTINGS CONTEXT ERROR OCCURED");

  const { settings } = context;

  const getUnitSetting = (title: SettingTitle): UnitSetting | undefined => {
    return settings.unit.find((setting) => setting.title === title);
  };

  const getGeneralSetting = (
    title: SettingTitle,
  ): GeneralSetting | undefined => {
    return settings.general.find((setting) => setting.title === title);
  };

  return {
    getUnitSetting,
    getGeneralSetting,
  };
};

export default useSettings;
