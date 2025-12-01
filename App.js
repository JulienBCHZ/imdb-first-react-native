import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Platform } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import Constants from "expo-constants";

export default function App() {
  // console.log(Constants);
  return (
    // <ScrollView style={{ marginTop: Constants.statusBarHeight }}>
    //   <View style={{ height: 400, backgroundColor: "crimson" }}></View>
    //   <View style={{ height: 400, backgroundColor: "pink" }}></View>
    //   <View style={{ height: 400, backgroundColor: "salmon" }}></View>
    //   <View style={{ height: 400, backgroundColor: "white" }}></View>
    //   <View style={{ height: 400, backgroundColor: "deeppink" }}></View>
    // </ScrollView>
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style={{ marginTop: Constants.statusBarHeight }}>
        <View style={styles.headerView}>
          <FontAwesome6 name="imdb" size={40} color="white" />
        </View>
        <View>
          <View>
            <Text style={{ color: "white" }}>The Matrix</Text>
          </View>
          <View></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  headerView: {
    height: 60,
    backgroundColor: "#393939",
    justifyContent: "center",
    paddingLeft: 30,
  },
});
