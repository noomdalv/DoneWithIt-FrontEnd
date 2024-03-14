import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState("");

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync({});
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log("Error getting location", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
