import SettingsContextProvider from "@/context/SettingsContext";
import AppRouter from "@/router";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <SettingsContextProvider>
        <AppRouter />
      </SettingsContextProvider>
    </Provider>
  );
}
