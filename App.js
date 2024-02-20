import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import MessagesScreen from "./app/screens/MessagesScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ListingEditScreen />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    padding: 20,
  },
});
