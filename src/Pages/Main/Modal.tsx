import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import tailwind from "tailwind-rn";
import RNModal from "react-native-modal";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TaskInterface } from "./TaskInterface";
import EventInterface from "./Event";
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
  const [nameError, setNameError] = useState<boolean>(false);
  const [taskDescription, setTaskDescription] = useState<string | null>();
  const [descriptionError, setDescriptionError] = useState<boolean>(false);
  const [displayDatepicker, setDisplayDatepicker] = useState<boolean>(false);
  const [selectedDatetime, setSelectedDatetime] = useState<Date>(new Date());
  console.log(selectedDatetime);
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
          onChangeText={(value: string) => {
            if (value) {
              setNameError(false);
            } else {
              setNameError(true);
            }
            setTaskName(value);
          }}
          label="Name"
        />
        {nameError && (
          <Text style={tailwind("text-red-700 text-center")}>
            Please type in task name
          </Text>
        )}
        <InputWithLabel
          value={taskDescription}
          onChangeText={(value: string) => {
            if (value) {
              setDescriptionError(false);
            } else {
              setDescriptionError(true);
            }
            setTaskDescription(value);
          }}
          label="Description"
        />
        {descriptionError && (
          <Text style={tailwind("text-red-700 text-center")}>
            Please type in task description
          </Text>
        )}
        <RNModal
          deviceHeight={deviceHeight}
          deviceWidth={deviceWidth}
          isVisible={displayDatepicker}
          animationIn="slideInLeft"
          animationOut="slideOutRight"
        >
          <View style={tailwind("bg-white py-10 rounded-lg px-2")}>
            <DateTimePicker
              minuteInterval={10}
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={selectedDatetime}
              mode="datetime"
              onChange={(
                event: EventInterface,
                selectedDatetime: Date
              ): null => {
                setSelectedDatetime(selectedDatetime);
                //TODO: find some other way around this hack :|
                return event && null;
              }}
            />
            <Text></Text>
            <Button
              onPress={(): null => {
                setDisplayDatepicker(false);
                return null;
              }}
              style={tailwind("mr-1 bg-teal-600 w-full mt-4")}
              label="Set datetime"
            />
          </View>
        </RNModal>
        <Text style={tailwind("w-full text-lg text-center mt-4")}>
          {`${selectedDatetime.getFullYear()}-${selectedDatetime.getMonth() +
            1}-${selectedDatetime.getDate()}  ${selectedDatetime.getHours()}:${selectedDatetime.getMinutes()}`}
        </Text>
        <Button
          onPress={(): null => {
            setDisplayDatepicker(true);
            return null;
          }}
          style={tailwind("mr-1 bg-teal-600 w-full mt-4")}
          label="Select datetime"
        />
        <Button
          onPress={(): null => {
            if (!taskName) {
              setNameError(true);
            }
            if (!taskDescription) {
              setDescriptionError(true);
            }
            if (!taskDescription || !taskName) {
              return null;
            }
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
            return null;
          }}
          style={tailwind("mr-1 w-full mt-4")}
          label="Save"
        />
      </View>
    </RNModal>
  );
};
export default Modal;
