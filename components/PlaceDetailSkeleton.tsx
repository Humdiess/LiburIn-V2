import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';

const PlaceDetailSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleSkeleton} />
          <View style={styles.ratingSkeleton} />
        </View>
        <View style={styles.descriptionSkeleton} />
        <View style={styles.tabsContainer}>
          <View style={[styles.tabSkeleton, { width: '20%' }]} />
          <View style={[styles.tabSkeleton, { width: '20%' }]} />
          <View style={[styles.tabSkeleton, { width: '20%' }]} />
          <View style={[styles.tabSkeleton, { width: '20%' }]} />
        </View>
        <View style={styles.commentsContainer}>
          {[1, 2, 3, 4, 5].map((index) => (
            <View key={index} style={styles.commentSkeleton}>
              <View style={styles.commentProfilePicSkeleton} />
              <View style={styles.commentContentSkeleton}>
                <View style={styles.commentAuthorSkeleton} />
                <View style={styles.commentDateSkeleton} />
                <View style={styles.commentTextSkeleton} />
              </View>
            </View>
          ))}
        </View>
        <View style={styles.mapContainer}>
          <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    height: 300,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleSkeleton: {
    width: '70%',
    height: 30,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  ratingSkeleton: {
    width: '30%',
    height: 30,
    backgroundColor: '#f0f0f0',
  },
  descriptionSkeleton: {
    height: 100,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tabSkeleton: {
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  commentsContainer: {
    marginBottom: 20,
  },
  commentSkeleton: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  commentProfilePicSkeleton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
  },
  commentContentSkeleton: {
    flex: 1,
    marginLeft: 10,
  },
  commentAuthorSkeleton: {
    width: '70%',
    height: 20,
    backgroundColor: '#f0f0f0',
    marginBottom: 5,
  },
  commentDateSkeleton: {
    width: '50%',
    height: 15,
    backgroundColor: '#f0f0f0',
    marginBottom: 5,
  },
  commentTextSkeleton: {
    width: '100%',
    height: 50,
    backgroundColor: '#f0f0f0',
  },
  mapContainer: {
    height: 300,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    marginTop: 20,
  },
});

export default PlaceDetailSkeleton;
