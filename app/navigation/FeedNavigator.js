import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{ headerTitleAlign: "center" }}
    />
    <Stack.Group
      screenOptions={{
        presentation: "modal",
        ...TransitionPresets.ModalFadeTransition,
      }}
    >
      <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export default FeedNavigator;
