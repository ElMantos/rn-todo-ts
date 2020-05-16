import React, { useState } from "react";
import { View, ScrollView, Text, Dimensions } from "react-native";
import { useHistory } from "react-router-native";
import tailwind from "tailwind-rn";
import Modal from "react-native-modal";

import { Button, InputWithLabel, List } from "~/components";

const { height: deviceHeight, width: deviceWidth } = Dimensions.get("window");

const Main: React.FC = () => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [tasks, setTasks] = useState<object[]>([]);
  const [taskName, setTaskName] = useState<string | null>();
  const [taskDescription, setTaskDescription] = useState<string | null>();
  const history = useHistory();
  return (
    <View style={tailwind("h-full px-2 flex justify-start")}>
      <View style={tailwind("w-full flex flex-row justify-between")}>
        <Button
          style={tailwind("w-1/2 bg-green-600 border")}
          onPress={(): any => setDisplayModal(true)}
          label="Create new"
        />
        <Button
          style={tailwind("w-1/2 bg-teal-400 border border-l-0")}
          onPress={(): any => history.push("/history")}
          label="See old"
        />
      </View>
      <List items={tasks} />

      <Modal
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}
        isVisible={displayModal}
        onSwipeComplete={() => {
          setDisplayModal(false);
        }}
      >
        <ScrollView style={tailwind("bg-white rounded-lg p-2")}>
          <Text style={tailwind("text-center text-lg")}>ADD NEW TASK</Text>
          <InputWithLabel
            value={taskName}
            onChangeText={setTaskName}
            label="Name"
          />
          <InputWithLabel
            value={taskDescription}
            onChangeText={setTaskDescription}
            label="Description"
          />
          <View
            style={tailwind("items-center flex-row justify-center mt-2 mb-10")}
          >
            <Button
              onPress={(): any => {
                setTasks([
                  ...tasks,
                  {
                    name: taskName,
                    description: taskDescription
                  }
                ]);
                setTaskName(null);
                setTaskDescription(null);
                setDisplayModal(false);
              }}
              style={tailwind("mr-1")}
              label="Some label"
            />
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};
export default Main;
