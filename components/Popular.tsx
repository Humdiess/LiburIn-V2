import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { fetchPlaces, Place } from '../utils/api';
import SectionTitle from './SectionTitle';
import { MaterialIcons } from '@expo/vector-icons';

const Popular = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const data = await fetchPlaces();
        setPlaces(data);
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

  const renderItem = ({ item }: { item: Place }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.photo }} style={styles.image} />
      <View style={styles.overlay}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{item.category.name}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <SectionTitle title="Popular" onViewAllPress={() => console.log('View all popular')} />
      <FlatList
        data={places}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        style={{ paddingHorizontal: 15 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: 'black',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    overflow: 'hidden',
    width: '48%',
    height: 180,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderTopLeftRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    width: '60%',
    borderBottomRightRadius: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    fontSize: 12,
    color: 'white',
    marginLeft: 4,
  },
  content: {
    marginTop: 8,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
});

export default Popular;