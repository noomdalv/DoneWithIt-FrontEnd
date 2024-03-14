import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./Text";
import { Image } from "expo-image";

export default function Card({
  title,
  subtitle,
  imageUrl,
  thumbnailUrl,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
          cachePolicy="disk"
          placeholder={thumbnailUrl}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.primary,
    fontWeight: "bold",
  },
});
