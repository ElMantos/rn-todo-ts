import React from "react";
import { TouchableOpacity, Text } from "react-native";
import tailwind from "tailwind-rn";

const Button: React.FC = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={tailwind(
        "rounded-full border-2 rounded-lg py-2 px-4 bg-blue-100 border-blue-600"
      )}
    >
      <Text style={tailwind("text-xl")}>Testing</Text>
    </TouchableOpacity>
  );
};

export default Button;
