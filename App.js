import { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";
import AppButton from "./app/components/AppButton";
import { FieldArray, Formik } from "formik";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => uri !== imageUri));
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        {/* <Formik
          initialValues={{
            images: [],
          }}
        >
          <FieldArray
            name="images"
            render={() =>
              images.map((image, index) => (
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200 }}
                  key={index}
                />
              ))
            }
          />
        </Formik> */}
        <ImageInputList
          imageUris={imageUris}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    padding: 20,
  },
});
