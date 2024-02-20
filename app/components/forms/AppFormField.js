import { StyleSheet } from "react-native";
import React from "react";
import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

export default function AppFormField({ name, width, ...otherProps }) {
  const { errors, setFieldTouched, touched, handleChange } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
