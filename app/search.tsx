import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useRouter, useNavigation } from 'expo-router'; // Adjusted import
import { fetchPlaces, Place } from '@/utils/api'; // Assuming fetchPlaces and types are imported from appropriate files
import SkeletonLoader from '@/components/SkeletonLoader'; // Import the SkeletonLoader component

const Search = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>([]);
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const navigation = useNavigation();

  const loadPlaces = async (page: number = 1) => {
    try {
      const data = await fetchPlaces(page);
      setPlaces((prevPlaces) => (page === 1 ? data : [...prevPlaces, ...data]));
      setFilteredPlaces((prevFiltered) => (page === 1 ? data : [...prevFiltered, ...data]));
      setCurrentPage(page);
      // Assuming the total pages is known and can be set here
      setTotalPages(2); // Update this if you have a dynamic way to get total pages
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPlaces();
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

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      loadPlaces(currentPage + 1);
    }
  };

  const handleCancelSearch = () => {
    setQuery('');
    setFilteredPlaces(places);
  };

  const renderPlaceCard = ({ item }: { item: Place }) => (
    <PlaceCard place={item} />
  );

  const PlaceCard = ({ place }: { place: Place }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.push(`place/${place.slug}`)}>
      <Text style={styles.name}>{place.name}</Text>
      <MaterialCommunityIcons name='arrow-up-right' size={16} color={'grey'} />
    </TouchableOpacity>
  );

  if (loading && currentPage === 1) {
    return (
      <View style={styles.container}>
        <SkeletonLoader />
      </View>
    );
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={{ marginEnd: 2 }} onPress={() => navigation.goBack()}>
          <MaterialIcons name='chevron-left' size={32} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari tempat wisata..."
          value={query}
          onChangeText={setQuery}
          placeholderTextColor="#AAAAAA"
        />
        {query.length > 0 && (
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancelSearch}>
            <MaterialIcons name="close" size={16} color="#AAAAAA" />
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={filteredPlaces}
        renderItem={renderPlaceCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading && currentPage > 1 ? <SkeletonLoader /> : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white',
    height: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },
  searchInput: {
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    width: '85%',
  },
  cancelButton: {
    position: 'absolute',
    right: 10,
  },
  flatListContainer: {
    marginTop: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    padding: 8,
  },
  name: {
    color: 'gray',
  },
});

export default Search;
  