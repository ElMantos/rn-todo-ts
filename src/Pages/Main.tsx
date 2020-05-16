import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, TextInput, Dimensions } from "react-native";
import { useHistory, Link } from "react-router-native";
import tailwind from "tailwind-rn";
import Modal from "react-native-modal";

import { Button, InputWithLabel } from "~/components";

const { height: deviceHeight, width: deviceWidth } = Dimensions.get("window");

const Main: React.FC = () => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const history = useHistory(false);
  return (
    <View style={tailwind("h-full px-2 flex justify-start")}>
      <View style={tailwind("w-full flex flex-row justify-between")}>
        <Button onPress={() => setDisplayModal(true)} label="Create new" />
        <Button
          onPress={() => {
            console.log("pushinu");
            history.push("/history");
          }}
          label="See old"
        />
        <Modal
          deviceWidth={deviceWidth}
          deviceHeight={deviceHeight}
          isVisible={displayModal}
        >
          <ScrollView style={tailwind("bg-white rounded-lg p-2")}>
            <Text style={tailwind("text-center text-lg")}>ADD NEW TASK</Text>
            <InputWithLabel label="Name" />
            <InputWithLabel label="Description" />
            <View style={tailwind("items-center flex-row justify-center mt-2")}>
              <Button
                onPress={() => setTasks([...tasks, "test"])}
                style={tailwind("mr-1")}
                label={true}
              />
            </View>
          </ScrollView>
        </Modal>
      </View>
    </View>
  );
};
export default Main;
