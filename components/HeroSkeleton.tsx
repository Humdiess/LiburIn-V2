import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const HeroSkeleton = () => {
  return (
    <View style={styles.hero}>
      <View style={[styles.welcomeText, styles.skeletonElement]} />
      <View style={[styles.slogan, styles.skeletonElement]} />
      <View style={styles.imageContainer}>
        <View style={[styles.image, styles.skeletonElement]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hero: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  skeletonElement: {
    backgroundColor: '#f0f0f0', // Placeholder color
    borderRadius: 10,
    marginBottom: 10,
  },
  imageContainer: {
    width: viewportWidth - 30,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 80,
  },
  welcomeText: {
    height: 30, // Adjust height as needed
  },
  slogan: {
    height: 20, // Adjust height as needed
  },
});

export default HeroSkeleton;
