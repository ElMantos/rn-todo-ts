import React from "react";
import { View, ScrollView, Text, Dimensions } from "react-native";
import tailwind from "tailwind-rn";
import Modal from "react-native-modal";

import { TaskInterface } from "~/interfaces";

const { height: deviceHeight, width: deviceWidth } = Dimensions.get("window");

interface Props {
  item?: TaskInterface;
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
      animationIn="pulse"
      animationOut="slideOutRight"
      onSwipeComplete={(): void => {
        onClose();
      }}
    >
      <View style={tailwind("p-4 rounded-lg bg-white")}>
        <Text style={tailwind("text-gray-900 text-center text-xs")}>
          {date}
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
