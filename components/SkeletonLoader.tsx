import React from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

const SkeletonLoader = () => {
  const shimmerTranslate = new Animated.Value(-400);

  React.useEffect(() => {
    const animatedShimmer = Animated.loop(
      Animated.timing(shimmerTranslate, {
        toValue: 800,
        duration: 1200,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    animatedShimmer.start();
    return () => {
      animatedShimmer.stop();
    };
  }, []);

  return (
    <View style={styles.skeletonContainer}>
      <View style={styles.skeletonCard}>
        <View style={styles.skeletonContent}>
          <View style={styles.skeletonName} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skeletonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  skeletonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 10,
  },
  skeletonImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
  skeletonContent: {
    flex: 1,
  },
  skeletonName: {
    width: '70%',
    height: 16,
    backgroundColor: '#ccc',
    borderRadius: 4,
    marginBottom: 10,
  },
  skeletonCategory: {
    width: '50%',
    height: 14,
    backgroundColor: '#ccc',
    borderRadius: 4,
  },
});

export default SkeletonLoader;
