import React from "react";
import { StyleSheet, View } from "react-native";
import tailwind from "tailwind-rn";
import { LinearGradient } from "expo-linear-gradient";

import CoreApp from "./src";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LinearGradient
          colors={["rgb(19, 194, 179)", "rgb(184, 0, 138)"]}
          style={tailwind("absolute top-0 left-0 w-full h-full")}
        />
        <CoreApp />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
