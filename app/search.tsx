import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

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

const PlaceCard = ({ place }: { place: Place }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={{ uri: place.photo }} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.name}>{place.name}</Text>
      <View style={styles.categoryContainer}>
        <MaterialIcons name="category" size={18} color="grey" />
        <Text style={styles.category}>{place.category.name}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const Search = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>([]);
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const data = await fetchPlaces();
        setPlaces(data);
        setFilteredPlaces(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPlaces();
  }, []);

  useEffect(() => {
    if (query) {
      const lowercasedQuery = query.toLowerCase();
      const filteredData = places.filter((place) =>
        place.name.toLowerCase().includes(lowercasedQuery) ||
        place.description.toLowerCase().includes(lowercasedQuery) ||
        place.category.name.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredPlaces(filteredData);
    } else {
      setFilteredPlaces(places);
    }
  }, [query, places]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search places..."
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={filteredPlaces}
        renderItem={({ item }) => <PlaceCard key={item.id} place={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    marginLeft: 5,
    fontSize: 14,
    color: 'grey',
  },
});

export default Search;