import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Profil Pengguna</Text>
            <Text style={styles.sectionText}>Nama: John Doe</Text>
            <Text style={styles.sectionText}>Email: john.doe@example.com</Text>
            <Text style={styles.sectionText}>Bio: Penggemar traveling, suka menjelajah tempat baru dan bertemu dengan orang-orang baru.</Text>
          </View>
        );
      case 'trips':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Pernah Traveling Kemana Aja</Text>
            <View style={styles.trip}>
              <Image
                style={styles.tripImage}
                source={{ uri: 'https://via.placeholder.com/150' }}
              />
              <View style={styles.tripInfo}>
                <Text style={styles.tripTitle}>Bali, Indonesia</Text>
                <Text style={styles.tripDate}>Juli 2023</Text>
              </View>
            </View>
            <View style={styles.trip}>
              <Image
                style={styles.tripImage}
                source={{ uri: 'https://via.placeholder.com/150' }}
              />
              <View style={styles.tripInfo}>
                <Text style={styles.tripTitle}>Tokyo, Jepang</Text>
                <Text style={styles.tripDate}>Mei 2022</Text>
              </View>
            </View>
          </View>
        );
      case 'wishlist':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Wishlist Destinasi</Text>
            <View style={styles.destination}>
              <Image
                style={styles.destinationImage}
                source={{ uri: 'https://via.placeholder.com/150' }}
              />
              <Text style={styles.destinationTitle}>Paris, Prancis</Text>
            </View>
            <View style={styles.destination}>
              <Image
                style={styles.destinationImage}
                source={{ uri: 'https://via.placeholder.com/150' }}
              />
              <Text style={styles.destinationTitle}>New York, Amerika Serikat</Text>
            </View>
          </View>
        );
      case 'settings':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Pengaturan</Text>
            <View style={styles.setting}>
              <Text style={styles.settingTitle}>Notifikasi</Text>
              <Switch
                value={notificationsEnabled}
                onValueChange={(value) => setNotificationsEnabled(value)}
              />
            </View>
            <View style={styles.setting}>
              <Text style={styles.settingTitle}>Mode Gelap</Text>
              <Switch
                value={darkModeEnabled}
                onValueChange={(value) => setDarkModeEnabled(value)}
              />
            </View>
            <TouchableOpacity style={styles.logoutButton}>
              <Text style={styles.logoutButtonText}>Keluar</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
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
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'profile' && styles.activeTabButton]}
          onPress={() => setActiveTab('profile')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'profile' && styles.activeTabButtonText]}>Profil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'trips' && styles.activeTabButton]}
          onPress={() => setActiveTab('trips')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'trips' && styles.activeTabButtonText]}>Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'wishlist' && styles.activeTabButton]}
          onPress={() => setActiveTab('wishlist')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'wishlist' && styles.activeTabButtonText]}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'settings' && styles.activeTabButton]}
          onPress={() => setActiveTab('settings')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'settings' && styles.activeTabButtonText]}>Pengaturan</Text>
        </TouchableOpacity>
      </View>
      {renderTabContent()}
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
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabButtonText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  activeTabButtonText: {
    color: 'black',
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
  sectionText: {
    fontSize: 16,
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
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingTitle: {
    fontSize: 16,
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
