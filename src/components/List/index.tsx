import React from "react";
import tailwind from "tailwind-rn";
import { ScrollView, Text, View, Dimensions } from "react-native";

const { height: screenHeight } = Dimensions.get("screen");

interface ListItemProps {
  name?: string;
  description?: string;
}

interface Props {
  items: ListItemProps[];
}

const List: React.FC<Props> = ({ items }) => {
  return (
    <View
      style={{
        ...tailwind("mb-64"),
        height: (screenHeight / 100) * 80
      }}
    >
      <ScrollView
        contentContainerStyle={tailwind("flex justify-center items-center")}
        style={{
          ...tailwind("w-full rounded-lg mt-4 h-12"),
          backgroundColor: "rgba(252, 186, 3, .3)"
        }}
      >
        {items.length ? (
          items.map(({ name, description }: ListItemProps) => (
            <Text key={`${name}.${Math.random()}`}>
              {name} {description}
            </Text>
          ))
        ) : (
          <Text style={tailwind("text-xl text-gray-200 mt-4")}>
            You currently have nothing planned
          </Text>
        )}
      </ScrollView>
    </View>
  );
};
export default List;
