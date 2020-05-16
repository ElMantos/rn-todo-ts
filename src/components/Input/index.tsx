import React from "react";
import { TextInput, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";

interface Props {
  value?: string;
  onChangeText: (text: string) => void;
  style?: object;
}

const Input: React.FC<Props> = ({ value, onChangeText, style }) => {
  return (
    <TextInput
      multiline={true}
      value={value}
      onChangeText={onChangeText}
      style={{
        ...tailwind(
          "p-3 text-lg bg-blue-100 w-full border border-blue-600 rounded-lg"
        ),
        ...StyleSheet.flatten(style)
      }}
    />
  );
};

export default Input;
