import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";

interface Props {
  label: string;
  onPress: () => null;
  style?: object;
}

const Button: React.FC<Props> = ({ label, onPress, style = [] }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...StyleSheet.flatten([
          tailwind("py-2 px-4 bg-blue-300 border-blue-800"),
          style
        ])
      }}
    >
      <Text style={tailwind("text-xl font-bold text-white text-center")}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
