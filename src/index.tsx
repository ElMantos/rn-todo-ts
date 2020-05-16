import React, { useState } from "react";
import { View } from "react-native";
import { List, Button } from "./components";
import RoutedApp from "./RoutedApp";
import tailwind from "tailwind-rn";

const App: React.RC = () => {
  return (
    <View style={tailwind("h-full w-full mt-20")}>
      <RoutedApp />
    </View>
  );
};

export default App;
