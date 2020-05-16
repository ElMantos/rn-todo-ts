import React from "react";
import { View } from "react-native";
import RoutedApp from "./RoutedApp";
import tailwind from "tailwind-rn";

const App: React.FC = () => {
  return (
    <View style={tailwind("h-full w-full mt-20")}>
      <RoutedApp />
    </View>
  );
};

export default App;
