// wishlist.tsx
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, ScrollView, Pressable, StyleSheet } from 'react-native';
import SkeletonWishlistItem from '@/components/SkeletonWishlistItem';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Wishlist = () => {
  const { categorySlug } = useLocalSearchParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dewalaravel.com/api/places`)
      .then(response => response.json())
      .then(data => {
        setData(data.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [categorySlug]);

  const handlePress = (slug: string) => {
    router.push(`/place/${slug}`);
  };

  const addToWishlist = (name: string) => {
    // Implement logic to add item to wishlist
    console.log(`Added ${name} to wishlist`);
  };

  if (loading) {
    return (
      <ScrollView style={styles.container}>
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonWishlistItem key={index} />
        ))}
      </ScrollView>
    );
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      {data.map((item: { slug: string; photo: string; name: string }) => (
        <Pressable key={item.slug} onPress={() => handlePress(item.slug)} style={styles.card}>
          <Image source={{ uri: item.photo }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Pressable style={styles.addButton} onPress={() => addToWishlist(item.name)}>
            <MaterialCommunityIcons name='eye' size={16} color='white' />
          </Pressable>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  name: {
    flex: 1,
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 16,
  },
  addButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: 'black',
    borderRadius: 8,
    marginHorizontal: 8
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default Wishlist;
