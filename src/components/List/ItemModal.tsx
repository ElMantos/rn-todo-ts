import React from "react";
import { View, ScrollView, Text, Dimensions } from "react-native";
import tailwind from "tailwind-rn";
import Modal from "react-native-modal";

const { height: deviceHeight, width: deviceWidth } = Dimensions.get("window");

import { ListItemInterface } from "./ListItemInterface";

interface Props {
  item?: ListItemInterface;
  isVisible: boolean;
  onClose: () => void;
}

const ItemModal: React.FC<Props> = ({
  item: { name, description, date },
  isVisible,
  onClose
}) => {
  return (
    <Modal
      deviceHeight={deviceHeight}
      deviceWidth={deviceWidth}
      swipeDirection={["up", "down"]}
      isVisible={isVisible}
      animationIn="slideInLeft"
      animationOut="slideOutRight"
      onSwipeComplete={(): void => {
        onClose();
      }}
    >
      <View style={tailwind("p-4 rounded-lg bg-white")}>
        <Text style={tailwind("text-gray-900 text-center text-xs")}>
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
        <View>
          <Text style={tailwind("text-center text-xl mb-2")}>{name}</Text>
        </View>
        <ScrollView>
          <Text style={tailwind("text-center text-base")}>{description}</Text>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ItemModal;
