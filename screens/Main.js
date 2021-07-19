import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { increment } from "../redux/actions";

export function Main({ navigation, count, increment }) {
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button onPress={increment} title="Increment"></Button>
      <Text>Main</Text>
      <Button onPress={() => navigation.navigate("Sub")} title="Go to Sub" />
    </View>
  );
}

const mapStateToProps = (store) => ({
  count: store.count,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ increment }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
