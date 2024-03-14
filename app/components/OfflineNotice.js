import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./Text";
import colors from "../config/colors";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText>No Internet Connection</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    width: "100%",
    position: "absolute",
    top: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});

export default OfflineNotice;
