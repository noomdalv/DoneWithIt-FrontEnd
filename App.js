import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import * as Sentry from "@sentry/react-native";

import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

import { navigationRef } from "./app/navigation/rootNavigator";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Sentry.init({
//   dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
//   debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
// });

function App() {
  const [user, setUser] = useState();
  const [appReady, setAppReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await restoreUser();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) return null;

  return (
    <>
      <GestureHandlerRootView
        style={styles.container}
        onLayout={onLayoutRootView}
      >
        <AuthContext.Provider value={{ user, setUser }}>
          <OfflineNotice />
          <NavigationContainer ref={navigationRef} theme={navigationTheme}>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </AuthContext.Provider>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});

// export default Sentry.wrap(App);
export default App;
