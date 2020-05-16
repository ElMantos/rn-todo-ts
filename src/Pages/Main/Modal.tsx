import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import tailwind from "tailwind-rn";
import RNModal from "react-native-modal";

import { TaskInterface } from "./TaskInterface";
import { Button, InputWithLabel } from "~/components";

const { height: deviceHeight, width: deviceWidth } = Dimensions.get("window");

interface Props {
  tasks: TaskInterface[];
  displayModal: boolean;
  setDisplayModal: (state: boolean) => void;
  setTasks: (tasks: TaskInterface[]) => void;
}

const Modal: React.FC<Props> = ({
  tasks,
  displayModal,
  setDisplayModal,
  setTasks
}) => {
  const [taskName, setTaskName] = useState<string | null>();
  const [taskDescription, setTaskDescription] = useState<string | null>();
  return (
    <RNModal
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      isVisible={displayModal}
      swipeDirection={["up", "down"]}
      onSwipeComplete={() => {
        setDisplayModal(false);
      }}
    >
      <View style={tailwind("bg-white rounded-lg p-2")}>
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
      </View>
    </RNModal>
  );
};
export default Modal;
