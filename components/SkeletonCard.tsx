// SkeletonCard.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const SkeletonCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.image} />
      <View style={styles.textLine} />
      <View style={styles.textLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 260,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    backgroundColor: '#c0c0c0',
  },
  textLine: {
    width: '80%',
    height: 15,
    borderRadius: 5,
    backgroundColor: '#c0c0c0',
    marginVertical: 5,
    alignSelf: 'center',
  },
});

export default SkeletonCard;
