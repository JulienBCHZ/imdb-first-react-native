import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import theMatrix from "./assets/images/the-matrix-cover.jpg";

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
          <View style={styles.topSection}>
            <Text style={{ color: "white", fontSize: 32 }}>The Matrix</Text>
            <View style={{ flexDirection: "row", gap: 30 }}>
              <Text style={{ color: "grey" }}>1999</Text>
              <Text style={{ color: "grey" }}>PG13</Text>
              <Text style={{ color: "grey" }}>2h16min</Text>
              <Text style={{ color: "grey" }}>Action, Sci-Fi</Text>
            </View>
            <View style={styles.preview}>
              <Image source={theMatrix} style={{ width: 140, height: 200 }} />
              <View>
                <Text style={{ color: "white" }}>
                  Un pirate informatique découvre par de mystérieux rebelles la
                  véritable nature de sa réalité et son rôle dans la guerre
                  contre ceux qui la contrôlent.
                </Text>
              </View>
            </View>
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
  topSection: { padding: 10, backgroundColor: `#212121`, gap: 10 },
  preview: { width: 230, paddingTop: 20, flexDirection: "row", gap: 10 },
});
