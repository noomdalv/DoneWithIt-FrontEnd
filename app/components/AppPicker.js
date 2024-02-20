import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
import Screen from "./Screen";

import defaultStyles from "../config/styles";
import ListItemSeparator from "./ListItemSeparator";

export default function AppPicker({
  icon,
  placeholder,
  items,
  onSelectItem,
  selectedItem,
  width = "100%",
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              color={defaultStyles.colors.medium}
              size={20}
              style={styles.icon}
            />
          )}
          <AppText
            style={selectedItem ? styles.notSelectedtext : styles.selectedText}
          >
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name={"chevron-down"}
            color={defaultStyles.colors.medium}
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
            ItemSeparatorComponent={ListItemSeparator}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  notSelectedtext: {
    flex: 1,
  },
  selectedText: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
});
