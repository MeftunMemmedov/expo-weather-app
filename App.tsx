import SettingsContextProvider from "@/context/SettingsContext";
import AppRouter from "@/router";
import { store } from "@/store";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";

export default function App() {
  return (
    <SettingsContextProvider>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </SettingsContextProvider>
  );
}

const styles = StyleSheet.create({});
