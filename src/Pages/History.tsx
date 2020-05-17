import React, { useState, useEffect } from "react";
import { View } from "react-native";
import tailwind from "tailwind-rn";
import { useHistory } from "react-router-native";

import { getData } from "~/utils";
import { Button, List } from "~/components";
import { TaskInterface } from "~/interfaces";

const History: React.FC = () => {
  const history = useHistory();

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
  return (
    <View style={tailwind("px-2")}>
      <Button
        style={tailwind("w-full")}
        label="My ToDo's"
        onPress={(): any => history.push("/")}
      />
      <List
        items={tasks.filter(
          (task: TaskInterface) =>
            new Date(task.date.replace(" ", "T")) <= new Date()
        )}
      />
    </View>
  );
};
export default History;
