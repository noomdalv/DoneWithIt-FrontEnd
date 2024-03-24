import { FlatList, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import AppText from "../components/Text";
import AppButton from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import listingsApi from "../api/listings";

// const listingsTest = [
//   {
//     id: 1,
//     title: "Red jacket for sale",
//     price: 100,
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch in great condition",
//     price: 200,
//     image: require("../assets/couch.jpg"),
//   },
// ];

export default function ListingsScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
    console.log("ListingsScreen");
  }, []);
  console.log("Loading: ", loading);
  return (
    <>
      <Screen style={styles.container}>
        {!loading && (
          <FlatList
            data={listings}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subtitle={"$" + item.price}
                imageUrl={item.images[0].url}
                onPress={() => navigation.navigate("ListingDetails", item)}
                thumbnailUrl={item.images[0].thumbnailUrl}
              />
            )}
          />
        )}
        {error && (
          <>
            <AppText>Couldn't retrieve the listings</AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </>
        )}
      </Screen>
      <ActivityIndicator visible={loading} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.shadowy,
  },
});
