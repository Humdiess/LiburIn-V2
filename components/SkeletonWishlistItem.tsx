// SkeletonWishlistItem.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

const SkeletonWishlistItem = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageSkeleton} />
      <View style={styles.textSkeleton} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 10,
  },
  imageSkeleton: {
    width: 80,
    height: 80,
    backgroundColor: '#d0d0d0', // Placeholder color
    borderRadius: 8,
  },
  textSkeleton: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#d0d0d0', // Placeholder color
    height: 16, // Adjust height as needed
    borderRadius: 8,
  },
});

export default SkeletonWishlistItem;
