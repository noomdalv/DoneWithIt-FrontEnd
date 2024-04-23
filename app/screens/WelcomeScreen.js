import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../components/Button";
import colors from "../config/colors";

export default function WelcomeScreen({ navigation }) {
  console.log("WelcomeScreen");

  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/bg3.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need </Text>
      </View>

      <View style={styles.btnsContainer}>
        <AppButton
          title="Login"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
        <AppButton
          title="Register"
          color="tomato"
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    color: colors.light,
  },
  btnsContainer: {
    padding: 20,
    width: "100%",
  },
});
