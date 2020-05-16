import React from "react";
import { View, Text, ScrollView } from "react-native";
import tailwind from "tailwind-rn";

import { ListItemInterface } from "./ListItemInterface";

const ListItem: React.FC<ListItemInterface> = ({ name, description, date }) => {
  return (
    <View
      style={{
        ...tailwind("rounded-lg w-full p-2 mb-2"),
        backgroundColor: "rgba(55, 79, 61, .8)"
      }}
    >
      <View style={tailwind("border-b-2 border-teal-800 mb-2 pb-2")}>
        <Text style={tailwind("text-gray-900 text-xs text-white")}>
          {date
            ? `${date.getFullYear()}-${
                String(date.getMonth()).length === 1
                  ? `0${date.getMonth()}`
                  : date.getMonth() + 1
              }-${date.getDate()}  ${
                String(date.getHours()).length === 1
                  ? `0${date.getHours()}`
                  : date.getHours()
              }:${date.getMinutes()}`
            : "0000-00-00 00:00"}
        </Text>
        <Text style={tailwind("text-gray-200 text-xl text-center")}>
          {name}
        </Text>
      </View>
      <ScrollView
        style={{
          maxHeight: 100
        }}
      >
        <Text style={tailwind("text-white text-base text-center")}>
          {description}
        </Text>
      </ScrollView>
    </View>
  );
};

export default ListItem;
