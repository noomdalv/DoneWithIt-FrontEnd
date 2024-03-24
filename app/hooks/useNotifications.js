import * as Notifications from "expo-notifications";
import pushTokensApi from "../api/expoPushTokens";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
});

export default useNotifications = (notificationListener, responseListener) => {
  const content = { title: "Sup!" };

  useEffect(() => {
    registerForPushNotifications();
    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
    if (responseListener)
      Notifications.addNotificationResponseReceivedListener(responseListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        console.log("Failed to get push token for push notification!");
        return;
      }

      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log("token", token);
      pushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };

  const register = () => {
    registerForPushNotifications();
  };

  return register;
};
