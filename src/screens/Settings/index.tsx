import Container from "@/components/Container";
import { Pressable, Switch, Text, View } from "react-native";
import { settingStyles } from "./style";
import { Fragment, use, useEffect } from "react";
import { SettingsContext } from "@/context/SettingsContext";
import {
  main_blue,
  secondary_color,
  secondary_text_color,
} from "@/constants/colors";
import { GeneralSetting, SettingTitle, UnitSetting } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SETTINGS_KEY } from "@/constants/storageKeys";

const Settings = () => {
  const context = use(SettingsContext);

  if (!context) return null;
  const { settings, setSettings } = context;

  const handleSetting = async (
    type: "G" | "U",
    title: SettingTitle,
    label?: string,
  ) => {
    if (type === "U") {
      const updatedUnitSettings = settings.unit.map((setting) => {
        if (setting.title === title) {
          return { ...setting, title, selected: label };
        }
        return setting;
      }) as UnitSetting[];

      setSettings((prevSettings) => ({
        ...prevSettings,
        unit: updatedUnitSettings,
      }));
    } else if (type === "G") {
      const updatedGeneralSettings = settings.general.map((setting) => {
        if (setting.title === title) {
          return { ...setting, value: !setting.value };
        }
        return setting;
      }) as GeneralSetting[];
      setSettings((prevSettings) => ({
        ...prevSettings,
        general: updatedGeneralSettings,
      }));
    }
  };

  useEffect(() => {
    const updateSettingStorage = async () => {
      await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    };
    updateSettingStorage();
  }, [settings]);
  return (
    <Container scroll>
      {/* <Text style={{ color: "white" }}>{JSON.stringify(settings)}</Text> */}
      <Text style={settingStyles.screenTitle}>Settings</Text>

      <Text style={settingStyles.unitText}>Units</Text>
      <View style={settingStyles.allsettingsContainer}>
        {settings.unit.map((setting, index) => (
          <View
            key={`setting-${setting.title}-${index}`}
            style={settingStyles.settingsContainer}
          >
            <Text style={settingStyles.settingsTitle}>{setting.title}</Text>
            <View style={settingStyles.settingsSwitchBox}>
              {setting.options.map((option, i, arr) => (
                <Fragment
                  key={`setting-${setting.title}-${option.label}$-${i}`}
                >
                  <Pressable
                    onPress={() =>
                      handleSetting("U", setting.title, option.label)
                    }
                    style={[
                      settingStyles.settingsSwitchBtn,
                      {
                        backgroundColor:
                          setting.selected === option.label
                            ? secondary_color
                            : undefined,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        settingStyles.settingsSwitchBtnText,
                        {
                          color:
                            setting.selected === option.label
                              ? "white"
                              : secondary_text_color,
                        },
                      ]}
                    >
                      {option.label}
                    </Text>
                  </Pressable>
                  {i !== arr.length - 1 && (
                    <View
                      style={settingStyles.settingsSwitchBtnSplitterLine}
                    ></View>
                  )}
                </Fragment>
              ))}
            </View>
          </View>
        ))}
      </View>
      {/* <View style={[settingStyles.otherSettingsContainer, { marginTop: 40 }]}>
        <Text style={settingStyles.otherSettingsTitle}>Notifications</Text>
        <View style={settingStyles.otherSettingsBox}>
          <View style={settingStyles.otherSettingsInnerContainer}>
            <View style={settingStyles.innerBox}>
              <Text style={settingStyles.otherSettingsInnerBoxTitle}>
                Notifications
              </Text>
              <Text style={settingStyles.otherSettingsInnerBoxSubtitle}>
                Be aware of the weather
              </Text>
            </View>
            <Switch
              trackColor={{ true: main_blue, false: main_blue }}
              style={settingStyles.otherSettingsSwitch}
            />
          </View>
        </View>
      </View> */}
      <View style={settingStyles.otherSettingsContainer}>
        <Text style={settingStyles.otherSettingsTitle}>General</Text>
        <View style={settingStyles.otherSettingsBox}>
          {settings.general.map((setting, index) => (
            <View
              key={`gnrl-sttng-${index}`}
              style={[
                settingStyles.otherSettingsInnerContainer,
                {
                  marginBottom: 20,
                },
              ]}
            >
              <View style={settingStyles.innerBox}>
                <Text style={settingStyles.otherSettingsInnerBoxTitle}>
                  {setting.title}
                </Text>
                {setting.description && (
                  <Text style={settingStyles.otherSettingsInnerBoxSubtitle}>
                    {setting.description}
                  </Text>
                )}
              </View>
              <Switch
                onValueChange={() => {
                  handleSetting("G", setting.title);
                }}
                value={setting.value}
                trackColor={{ true: main_blue, false: main_blue }}
                style={settingStyles.otherSettingsSwitch}
              />
            </View>
          ))}
        </View>
      </View>
    </Container>
  );
};

export default Settings;
