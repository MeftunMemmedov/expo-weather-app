import SettingsContextProvider from "@/context/SettingsContext";
import AppRouter from "@/router";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <SettingsContextProvider>
      <AppRouter />
    </SettingsContextProvider>
  );
}

const styles = StyleSheet.create({});
