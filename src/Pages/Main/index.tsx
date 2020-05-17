import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useHistory } from "react-router-native";
import tailwind from "tailwind-rn";

import { getData, saveData } from "~/utils";
import Modal from "./Modal";
import { TaskInterface } from "~/interfaces";
import { Button, List } from "~/components";

const Main: React.FC = () => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  useEffect(() => {
    getData(
      "tasks",
      (value: any) => {
        setTasks(value);
      },
      []
    );
  }, []);

  useEffect(() => {
    saveData("tasks", JSON.stringify(tasks));
  }, [tasks]);

  tasks.filter((task: TaskInterface) => {
    const date = new Date(task.date.replace(" ", "T"));
    console.log(task.date);
    console.log(date);
    const val = date >= new Date();
    console.log(val);
    console.log("_---------------____-");
  });

  const history = useHistory();
  return (
    <View style={tailwind("h-full px-2 flex justify-start")}>
      <View style={tailwind("w-full flex flex-row justify-between")}>
        <Button
          style={{
            ...tailwind("w-1/2"),
            backgroundColor: "rgb(19, 194, 179)"
          }}
          onPress={(): null => {
            setDisplayModal(true);
            return null;
          }}
          label="Create new"
        />
        <Button
          style={{
            ...tailwind("w-1/2"),
            backgroundColor: "rgb(184, 0, 138)"
          }}
          onPress={(): null => {
            history.push("/history");
            return null;
          }}
          label="See old"
        />
      </View>
      <Modal
        tasks={tasks}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        setTasks={setTasks}
      />
      <List
        items={tasks.filter(
          (task: TaskInterface) =>
            new Date(task.date.replace(" ", "T")).valueOf() >=
            new Date().valueOf()
        )}
      />
    </View>
  );
};
export default Main;
