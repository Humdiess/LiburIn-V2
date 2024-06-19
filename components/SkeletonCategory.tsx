// SkeletonCategory.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const SkeletonCategory = () => {
  return (
    <View style={styles.categoryItem}>
      <View style={styles.icon} />
      <View style={styles.textLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    justifyContent: 'space-between',
    padding: 10,
    marginRight: 10,
    borderRadius: 12,
    width: 120,
    height: 90,
    backgroundColor: '#e0e0e0',
  },
  icon: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#c0c0c0',
  },
  textLine: {
    width: '80%',
    height: 15,
    borderRadius: 5,
    backgroundColor: '#c0c0c0',
    marginVertical: 5,
  },
});

export default SkeletonCategory;
