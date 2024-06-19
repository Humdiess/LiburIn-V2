// SkeletonCard.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

const SkeletonPopular = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageSkeleton} />
      <View style={styles.overlay}>
        <View style={styles.categorySkeleton} />
      </View>
      <View style={styles.content}>
        <View style={styles.titleSkeleton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    width: '48%',
    height: 180,
    borderRadius: 10,
    backgroundColor: '#f0f0f0', // Skeleton color
    marginBottom: 16,
  },
  imageSkeleton: {
    width: '100%',
    height: 120,
    backgroundColor: '#d0d0d0', // Skeleton color
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderTopLeftRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '60%',
    borderBottomRightRadius: 10,
  },
  categorySkeleton: {
    width: '50%',
    height: 12,
    backgroundColor: '#b0b0b0', 
    marginTop: 4,
  },
  content: {
    marginTop: 8,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  titleSkeleton: {
    width: '80%',
    height: 16,
    backgroundColor: '#b0b0b0',
    marginTop: 8,
  },
});

export default SkeletonPopular;
