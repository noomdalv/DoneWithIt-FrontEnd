import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LottieView
        autoPlay
        style={{ width: 200, height: 200 }}
        source={require("../assets/animation/loader.json")}
      />
    </View>
  );
}

export default ActivityIndicator;
