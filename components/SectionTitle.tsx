import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
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
        <MaterialIcons name="chevron-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  button: {
    backgroundColor: 'transparent',
  },
  viewAllText: {
    color: 'blue',
  },
});

export default SectionTitle;