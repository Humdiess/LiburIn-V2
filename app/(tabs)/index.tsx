import PlaceList from "@/components/PlaceList";
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Index() {
  return (
    <ScrollView>
      <View style={styles.hero}>
        <View style={styles.heroTextWrapper}>
          <Text style={styles.heroText}>Let's Explore The World Together!</Text>
        </View>
        <View style={styles.searchInputWrapper}>
          <TextInput style={styles.searchInput} placeholder="Search Destination" />
          <AntDesign style={styles.searchIcon} name="search1" size={24} color="black" />
        </View>
      </View>
      <PlaceList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  hero: {
    backgroundColor: "#48cae4",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 50,
    position: "relative",
  },
  heroTextWrapper: {
    padding: 16,
    marginBottom: 50,
  },
  heroText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  searchInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 120,
  },
  searchInput: {
    height: 55,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 100,
    paddingHorizontal: 16,
    backgroundColor: "white",
    width: 300,
  },
  searchIcon: {
    position: "absolute",
    right: 16,
  }
});