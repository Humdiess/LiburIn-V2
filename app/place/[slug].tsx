import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const PlaceDetail = () => {
  const { slug } = useLocalSearchParams();
  const [place, setPlace] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const getPlace = async () => {
    try {
      const response = await fetch(`https://dewalaravel.com/api/places/${slug}`);
      const placeData = await response.json();
      setPlace(placeData.data);
    } catch (error) {
      console.error('Error fetching place details:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlace();
  }, [slug]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!place) {
    return <Text style={{ textAlign: 'center' }}>Place not found</Text>;
  }

  return (
    <ScrollView style={{ height: '100%' }}>
      <Image source={{ uri: place.photo }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.name}>{place.name}</Text>
        <Text style={styles.description}>{place.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  image: {
    width: '100%',
    height: 250,
  },
  name: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    textAlign: 'justify',
    fontSize: 16,
    color: 'gray',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlaceDetail;
