import React from 'react';
import { Text, View, StyleSheet, FlatList } from "react-native";
import Hero from "@/components/Hero";
import CategorySelector from "@/components/Category";
import Recomendation from "@/components/Recomendation";
import Popular from "@/components/Popular";

const sections = [
  { id: 'hero', component: <Hero /> },
  { id: 'categorySelector', component: <CategorySelector /> },
  { id: 'recomendation', component: <Recomendation /> },
  { id: 'popular', component: <Popular /> }
];

const Index = () => {
  return (
    <FlatList
      data={sections}
      renderItem={({ item }) => <View style={styles.section}>{item.component}</View>}
      keyExtractor={(item) => item.id}
      style={styles.body}
    />
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
  }
});

export default Index;