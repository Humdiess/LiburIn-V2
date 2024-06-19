import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://via.placeholder.com/100x100' }}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>john.doe@example.com</Text>
      </View>
      <View style={styles.metrics}>
        <View style={styles.metric}>
          <Text style={styles.metricTitle}>Trips</Text>
          <Text style={styles.metricValue}>25</Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.metricTitle}>Wishlist</Text>
          <Text style={styles.metricValue}>10</Text>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Upcoming Trips</Text>
        <View style={styles.trip}>
          <Image
            style={styles.tripImage}
            source={{ uri: 'https://via.placeholder.com/150x100' }}
          />
          <View style={styles.tripInfo}>
            <Text style={styles.tripTitle}>Paris, France</Text>
            <Text style={styles.tripDate}>June 15, 2024 - June 22, 2024</Text>
          </View>
        </View>
        <View style={styles.trip}>
          <Image
            style={styles.tripImage}
            source={{ uri: 'https://via.placeholder.com/150x100' }}
          />
          <View style={styles.tripInfo}>
            <Text style={styles.tripTitle}>Tokyo, Japan</Text>
            <Text style={styles.tripDate}>July 5, 2024 - July 12, 2024</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Wishlist Destinations</Text>
        <View style={styles.destination}>
          <Image
            style={styles.destinationImage}
            source={{ uri: 'https://via.placeholder.com/150x100' }}
          />
          <Text style={styles.destinationTitle}>Bali, Indonesia</Text>
        </View>
        <View style={styles.destination}>
          <Image
            style={styles.destinationImage}
            source={{ uri: 'https://via.placeholder.com/150x100' }}
          />
          <Text style={styles.destinationTitle}>Santorini, Greece</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
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
  profileEmail: {
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
  section: {
    padding: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  trip: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tripImage: {
    width: 150,
    height: 100,
    borderRadius: 8,
  },
  tripInfo: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  tripTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  tripDate: {
    fontSize: 14,
    color: '#000',
  },
  destination: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  destinationImage: {
    width: 150,
    height: 100,
    borderRadius: 8,
  },
  destinationTitle: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  logoutButton: {
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 32,
    width: '90%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default ProfileScreen;
