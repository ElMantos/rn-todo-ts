import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";
import { useHistory } from "react-router-native";
import { Button } from "~/components";

const History: React.FC = () => {
  const history = useHistory();
  return (
    <View style={tailwind("px-2")}>
      <Button
        style={tailwind("w-full")}
        label="My ToDo's"
        onPress={(): any => history.push("/")}
      />
    </View>
  );
};
export default History;
