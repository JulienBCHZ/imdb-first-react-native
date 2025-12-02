import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

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
      <StatusBar style="light" />
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
              <View style={styles.details}>
                <Text
                  style={{
                    color: "white",
                    textAlign: "justify",
                    fontSize: 13,
                    lineHeight: 18,
                  }}
                >
                  Un pirate informatique découvre par de mystérieux rebelles la
                  véritable nature de sa réalité et son rôle dans la guerre
                  contre ceux qui la contrôlent.
                </Text>
                <TouchableOpacity style={styles.watchButton}>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    + ADD TO WATCHLIST
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.scoreRatings}>
              <View style={styles.ratings}>
                <Entypo name="star" size={24} color="gold" />
                <Text style={{ color: `white`, fontWeight: 800 }}>
                  8,7
                  <Text style={{ fontWeight: 400 }}> /10</Text>
                </Text>
              </View>
              <View style={styles.ratings}>
                <Ionicons name="star-outline" size={24} color="white" />
              </View>
              <View style={styles.ratings}>
                <View style={styles.scores}>
                  <Text style={{ color: `white` }}>85</Text>
                </View>
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
    padding: 2,
  },
  headerView: {
    height: 60,
    backgroundColor: "#393939",
    justifyContent: "center",
    paddingLeft: 30,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  topSection: { padding: 10, backgroundColor: `#212121`, gap: 10 },
  preview: {
    paddingTop: 20,
    flexDirection: "row",
    gap: 12,
  },
  details: { paddingTop: 2, gap: 25, flex: 1 },
  watchButton: {
    backgroundColor: `#0277BD`,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreRatings: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  ratings: { gap: 3, alignItems: "center" },
  scores: {
    height: 25,
    width: 25,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
