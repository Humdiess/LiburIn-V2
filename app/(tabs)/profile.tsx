import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://via.placeholder.com/100x100' }}
        />
        <Text style={styles.profileName}>Dr. Jimmy Sullivan</Text>
        <Text style={styles.profileJob}>Dentist @arisal Dental Hospital</Text>
      </View>
      <View style={styles.metrics}>
        <View style={styles.metric}>
          <Text style={styles.metricTitle}>Feedback</Text>
          <Text style={styles.metricValue}>1k+</Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.metricTitle}>Patient</Text>
          <Text style={styles.metricValue}>1M+</Text>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Review</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Information</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.reviews}>
        <View style={styles.review}>
          <View style={styles.reviewHeader}>
            <Image
              style={styles.reviewImage}
              source={{ uri: 'https://via.placeholder.com/40x40' }}
            />
            <View style={styles.reviewName}>
              <Text style={styles.reviewNameText}>Tariq Ahmed Nill</Text>
              <Text style={styles.reviewDate}>08-10-20</Text>
            </View>
          </View>
          <View style={styles.reviewRating}>
            <Text style={styles.reviewRatingText}>*****</Text>
          </View>
          <Text style={styles.reviewText}>
            I haven't see Dr. Lul in a few years & he
            welcomed me back warmly, spent a lot
            of time with me...
          </Text>
        </View>
        <View style={styles.review}>
          <View style={styles.reviewHeader}>
            <Image
              style={styles.reviewImage}
              source={{ uri: 'https://via.placeholder.com/40x40' }}
            />
            <View style={styles.reviewName}>
              <Text style={styles.reviewNameText}>Sakib Khan</Text>
              <Text style={styles.reviewDate}>08-10-20</Text>
            </View>
          </View>
          <View style={styles.reviewRating}>
            <Text style={styles.reviewRatingText}>*****</Text>
          </View>
          <Text style={styles.reviewText}>
            I haven't see Dr. Lul in a few years & he
            welcomed me back warmly, spent a lot
            of time with me...
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addReviewButton}>
        <Text style={styles.addReviewButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileInfo: {
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  profileJob: {
    fontSize: 16,
    color: '#000',
  },
  metrics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  metric: {
    alignItems: 'center',
  },
  metricTitle: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tabButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
  },
  tabButtonText: {
    fontSize: 16,
    color: '#000',
  },
  reviews: {
    padding: 16,
  },
  review: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  reviewName: {
    marginLeft: 8,
  },
  reviewNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  reviewDate: {
    fontSize: 14,
    color: '#000',
  },
  reviewRating: {
    marginBottom: 8,
  },
  reviewRatingText: {
    fontSize: 18,
    color: '#000',
  },
  reviewText: {
    fontSize: 14,
    color: '#000',
  },
  addReviewButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addReviewButtonText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default ProfileScreen;