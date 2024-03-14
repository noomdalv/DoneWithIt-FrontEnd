import { StyleSheet } from "react-native";
import React from "react";
import AppTextInput from "../TextInput";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

export default function FormField({ name, width, ...otherProps }) {
  const { errors, setFieldTouched, touched, setFieldValue, values } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
