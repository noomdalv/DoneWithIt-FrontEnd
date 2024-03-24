import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import AppText from "../components/Text";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import { Image } from "expo-image";

import GestureSwipeDownBack from "../components/GestureSwipeDown";
import ContactSellerForm from "../components/ContactSellerForm";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;
  console.log("ListingDetailsScreen", listing, "platform", Platform.OS);
  return (
    <GestureSwipeDownBack>
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <Image
            style={styles.image}
            source={listing.images[0].url}
            placeholder={listing.images[0].thumbnailUrl}
          />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.price}>${listing.price}</AppText>
            <View style={styles.userContainer}>
              <ListItem
                image={require("../assets/vlad_cv.png")}
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                subtitle="5 Listings"
              />
            </View>
            <ContactSellerForm listing={listing} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </GestureSwipeDownBack>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shadowy,
    flex: 1,
    flexGrow: 1,
  },
  image: {
    width: "100%",
    height: 220,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
  },
  userContainer: {
    marginVertical: 10,
  },
});
