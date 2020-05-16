import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

import Input from "../Input";

interface Props {
  label: string;
}

const InputWithLabel: React.FC<Props> = ({ label }) => {
  return (
    <View style={tailwind("flex flex-col items-center mt-3")}>
      <Text style={tailwind("text-lg mb-1")}>{label}</Text>
      <Input />
    </View>
  );
};

export default InputWithLabel;
