import React from "react";
import { TextInput } from "react-native";
import tailwind from "tailwind-rn";

const Input: React.FC = ({ ...props }) => {
  return (
    <TextInput
      multiline={true}
      style={tailwind(
        "p-3 text-lg bg-blue-100 w-full border border-blue-600 rounded-lg"
      )}
      {...props}
    />
  );
};

export default Input;
