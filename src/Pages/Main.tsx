import React, { useState } from "react";
import { View, ScrollView, Text, Dimensions } from "react-native";
import { useHistory } from "react-router-native";
import tailwind from "tailwind-rn";
import Modal from "react-native-modal";

import { Button, InputWithLabel } from "~/components";

const { height: deviceHeight, width: deviceWidth } = Dimensions.get("window");

const Main: React.FC = () => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [tasks, setTasks] = useState<object[]>([]);
  const history = useHistory();
  return (
    <View style={tailwind("h-full px-2 flex justify-start")}>
      <View style={tailwind("w-full flex flex-row justify-between")}>
        <Button onPress={(): any => setDisplayModal(true)} label="Create new" />
        <Button onPress={(): any => history.push("/history")} label="See old" />
        <Modal
          swipeDirection={["down", "up"]}
          deviceWidth={deviceWidth}
          deviceHeight={deviceHeight}
          isVisible={displayModal}
          onSwipeComplete={() => {
            setDisplayModal(false);
          }}
        >
          <ScrollView style={tailwind("bg-white rounded-lg p-2")}>
            <Text style={tailwind("text-center text-lg")}>ADD NEW TASK</Text>
            <InputWithLabel label="Name" />
            <InputWithLabel label="Description" />
            <View
              style={tailwind(
                "items-center flex-row justify-center mt-2 mb-10"
              )}
            >
              <Button
                onPress={(): any => {
                  setTasks([...tasks, { name: "some name" }]);
                }}
                style={tailwind("mr-1")}
                label="Some label"
              />
            </View>
          </ScrollView>
        </Modal>
      </View>
    </View>
  );
};
export default Main;
