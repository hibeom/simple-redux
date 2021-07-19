import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { increment } from "../redux/actions";

export function Sub({ navigation, count, increment }) {
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button onPress={increment} title="Increment"></Button>
      <Text>Sub</Text>
    </View>
  );
}

const mapStateToProps = (store) => ({
  count: store.count,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ increment }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sub);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
