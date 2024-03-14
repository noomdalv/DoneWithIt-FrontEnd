import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { useState } from "react";
import AuthContext from "./app/auth/context";

export default function App() {
  const [user, setUser] = useState();
  // const unsubscribe = NetInfo.addEventListener((state) => {
  //   console.log("Connection type", state.type);
  //   console.log("Is connected?", state.isConnected);
  // });

  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <AuthContext.Provider value={{ user, setUser }}>
          <OfflineNotice />
          <NavigationContainer>
            {user ? (
              <AppNavigator theme={navigationTheme} />
            ) : (
              <AuthNavigator theme={navigationTheme} />
            )}
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
