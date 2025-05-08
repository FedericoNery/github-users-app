import { FontAwesome } from "expo-vector-icons";
import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, GestureResponderEvent } from "react-native";

type PropsType = {
    isFavourite: boolean;
    setIsFavourite: (event: GestureResponderEvent) => void;
}

const FavouriteButton = ({isFavourite, setIsFavourite}: PropsType) => {
  return (
    <TouchableOpacity onPress={setIsFavourite} style={styles.button}>
      {isFavourite ? <FontAwesome name="star" size={24} color="black" /> : <FontAwesome name="star-o" size={24} color="black" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavouriteButton;