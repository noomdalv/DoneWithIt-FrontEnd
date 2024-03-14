import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

function UploadScreen({ progress = 0, visible = false, onDone }) {
  console.log("Progress: ", progress);
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <ProgressBar progress={progress} color={colors.primary} width={200} />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animation/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: 200,
    height: 200,
    borderColor: "red",
    borderWidth: 5,
  },
});

export default UploadScreen;
