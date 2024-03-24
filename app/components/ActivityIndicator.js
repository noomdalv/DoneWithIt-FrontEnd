import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View
      style={{
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        opacity: 0.4,
        zIndex: 1,
      }}
    >
      <LottieView
        autoPlay
        style={{ width: 200, height: 200, marginTop: 200 }}
        source={require("../assets/animation/loader.json")}
      />
    </View>
  );
}

export default ActivityIndicator;
