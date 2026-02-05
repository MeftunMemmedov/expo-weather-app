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

const Settings = () => {
  const context = use(SettingsContext);

  if (!context) return null;
  const { settings, setSettings } = context;

  const handleSetting = (title: string, label: string, index: number) => {
    const updatedSettings = settings.map((setting, i) => {
      if (i === index) {
        return { ...setting, title, selected: label };
      }
      return setting;
    });
    setSettings(updatedSettings);
  };

  return (
    <Container scroll>
      {/* <Text style={{ color: "white" }}>{JSON.stringify(settings)}</Text> */}
      <Text style={settingStyles.screenTitle}>Settings</Text>

      <Text style={settingStyles.unitText}>Units</Text>
      <View style={settingStyles.allsettingsContainer}>
        {settings.map((setting, index) => (
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
                      handleSetting(setting.title, option.label, index)
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
      <View style={[settingStyles.otherSettingsContainer, { marginTop: 40 }]}>
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
      </View>
      <View style={settingStyles.otherSettingsContainer}>
        <Text style={settingStyles.otherSettingsTitle}>General</Text>
        <View style={settingStyles.otherSettingsBox}>
          <View
            style={[
              settingStyles.otherSettingsInnerContainer,
              {
                marginBottom: 20,
              },
            ]}
          >
            <View style={settingStyles.innerBox}>
              <Text style={settingStyles.otherSettingsInnerBoxTitle}>
                12-Hour Time
              </Text>
            </View>
            <Switch
              trackColor={{ true: main_blue, false: main_blue }}
              style={settingStyles.otherSettingsSwitch}
            />
          </View>
          <View
            style={[
              settingStyles.otherSettingsInnerContainer,
              {
                marginBottom: 20,
              },
            ]}
          >
            <View style={settingStyles.innerBox}>
              <Text style={settingStyles.otherSettingsInnerBoxTitle}>
                Location
              </Text>
              <Text style={settingStyles.otherSettingsInnerBoxSubtitle}>
                Get weather of your location
              </Text>
            </View>
            <Switch
              trackColor={{ true: main_blue, false: main_blue }}
              style={settingStyles.otherSettingsSwitch}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Settings;
