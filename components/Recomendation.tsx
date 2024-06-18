import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import SectionTitle from './SectionTitle';

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Place {
  id: number;
  name: string;
  slug: string;
  photo: string;
  description: string;
  category: Category;
}

const fetchPlaces = async (): Promise<Place[]> => {
  try {
    const response = await fetch('https://dewalaravel.com/api/places');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};

const PlaceCard = ({ place }: { place: Place }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: place.photo }} style={styles.image} />
      <View style={styles.overlay}>
        <View style={styles.topRow}>
          <MaterialIcons name="star" size={20} color="white" />
          <Text style={styles.rating}>4.8</Text>
        </View>
      </View>
      <Text style={styles.name}>{place.name}</Text>
      <View style={styles.locationContainer}>
        <MaterialIcons name="category" size={18} color="grey" />
        <Text style={styles.location}>{place.category.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Recommendations = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const data = await fetchPlaces();
        // Shuffle the array to randomize order
        setPlaces(data.sort(() => Math.random() - 0.5));
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPlaces();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <SectionTitle title="Recommendations" onViewAllPress={() => console.log('View all recommendations')} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingStart: 10}} >
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 20,
  },
  card: {
    width: 260,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    padding: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    paddingVertical: 6,
    borderRadius: 100,
    maxWidth: 68,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rating: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
    marginTop: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  location: {
    color: 'gray',
  },
});

export default Recommendations;