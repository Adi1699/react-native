import "react-native-gesture-handler";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Task1 from "./screens/task1";
import Task2 from "./screens/task2";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="TASK1">
        <Drawer.Screen name="TASK 1" component={Task1} />
        <Drawer.Screen name="TASK 2" component={Task2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
