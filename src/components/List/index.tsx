import React from "react";
import tailwind from "tailwind-rn";

import { View, Text } from "react-native";

const List: React.FC = () => {
  return (
    <View
      style={tailwind(
        "w-full bg-blue-500 h-12 flex justify-center items-center"
      )}
    >
      <Text>Something</Text>
    </View>
  );
};
export default List;
