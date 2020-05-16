import React from "react";
import tailwind from "tailwind-rn";

import { View, Text } from "react-native";
interface ListItemProps {
  name: string;
  description: string;
}

interface Props {
  items: ListItemProps[];
}

const List: React.FC<Props> = ({ items }) => {
  return (
    <View
      style={tailwind(
        "w-full bg-blue-500 h-12 flex justify-center items-center"
      )}
    >
      {items.map(({ name, description }: ListItemProps) => (
        <Text key={`${name}.${Math.random()}`}>
          {name} {description}
        </Text>
      ))}
    </View>
  );
};
export default List;
