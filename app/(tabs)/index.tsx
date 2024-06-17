import PlaceList from "@/components/PlaceList";
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Hero from "@/components/Hero";
import CategorySelector from "@/components/Category";
import Recomendation from "@/components/Recomendation";
import Popular from "@/components/Popular";

export default function Index() {
  return (
    <ScrollView style={styles.body}>
      <Hero />
      <CategorySelector />
      <Recomendation />
      <Popular />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
  },
});