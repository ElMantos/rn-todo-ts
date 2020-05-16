import React from "react";
import tailwind from "tailwind-rn";
import { ScrollView, Text } from "react-native";

interface ListItemProps {
  name?: string;
  description?: string;
}

interface Props {
  items: ListItemProps[];
}

const List: React.FC<Props> = ({ items }) => {
  return (
    <ScrollView
      contentContainerStyle={tailwind("flex justify-center items-center")}
      style={tailwind("w-full bg-blue-200 rounded-lg mt-4 h-12")}
    >
      {items.map(({ name, description }: ListItemProps) => (
        <Text key={`${name}.${Math.random()}`}>
          {name} {description}
        </Text>
      ))}
    </ScrollView>
  );
};
export default List;
