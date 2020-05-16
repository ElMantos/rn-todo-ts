import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useHistory } from "react-router-native";
import tailwind from "tailwind-rn";

import { getData, saveData } from "~/utils";
import Modal from "./Modal";
import { TaskInterface } from "./TaskInterface";
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
      <List items={tasks} />
    </View>
  );
};
export default Main;
