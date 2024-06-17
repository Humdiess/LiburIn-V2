import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

interface SectionTitleProps {
  title: string;
  onViewAllPress: () => void;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, onViewAllPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button} onPress={onViewAllPress}>
        <Text style={styles.viewAllText}>View all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'transparent',
  },
  viewAllText: {
    color: 'blue',
  },
});

export default SectionTitle;