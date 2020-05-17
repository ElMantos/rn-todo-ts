import React, { useState } from "react";
import tailwind from "tailwind-rn";
import {
  ScrollView,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";

import ItemModal from "./ItemModal";
import ListItem from "./ListItem";
import { TaskInterface } from "~/interfaces";

const { height: screenHeight } = Dimensions.get("screen");

interface Props {
  items: TaskInterface[];
}

const List: React.FC<Props> = ({ items }) => {
  const [visibleItem, setVisibleItem] = useState<number | null>();
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <View
      style={{
        ...tailwind("mb-64"),
        height: (screenHeight / 100) * 80
      }}
    >
      {isModalVisible && (
        <ItemModal
          onClose={(): void => {
            setModalVisible(false);
            setVisibleItem(null);
          }}
          item={items[visibleItem] || {}}
          isVisible={isModalVisible}
        />
      )}
      <ScrollView
        contentContainerStyle={tailwind("flex justify-center items-center")}
        style={{
          ...tailwind("w-full rounded-lg mt-4 h-12 p-2"),
          backgroundColor: "rgba(252, 186, 3, .3)"
        }}
      >
        {items.length ? (
          items
            .sort((a: TaskInterface, b: TaskInterface): number =>
              a.date < b.date ? 1 : -1
            )
            .map(
              ({ name, description, date }: TaskInterface, index: number) => (
                <TouchableOpacity
                  key={`${name}-${index}`}
                  style={tailwind("w-full")}
                  onPress={() => {
                    setModalVisible(true);
                    setVisibleItem(index);
                  }}
                >
                  <ListItem name={name} date={date} description={description} />
                </TouchableOpacity>
              )
            )
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
