import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// thunk 가 없는 경우
// Actions must be plain objects. Instead, the actual type was: 'function'.
// You may need to add middleware to your store setup to handle dispatching other values,
// such as 'redux-thunk' to handle dispatching functions.

import { reducer } from "./redux/reducer";
import Main from "./screens/Main";
import Sub from "./screens/Sub";

const Stack = createStackNavigator();

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Sub" component={Sub} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
