import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";

const key = "authToken";

const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync(key, token);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const getUser = async () => {
  try {
    const authToken = await getToken(key);
    if (authToken) console.log("🔐token 🔐:" + authToken);

    return authToken ? jwtDecode(authToken) : null;
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
    console.log("auth token removed");
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default { getToken, getUser, storeToken, removeToken };
