import React from "react";
import { View, Text } from "react-native";
import { NativeRouter, Route, Link, Switch } from "react-router-native";

import { Main, History } from "./Pages";

const RoutedApp: React.FC = () => {
  return (
    <View>
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/history" component={History} />
        </Switch>
      </NativeRouter>
    </View>
  );
};

export default RoutedApp;
