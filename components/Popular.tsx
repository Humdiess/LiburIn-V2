import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { fetchPlaces, Place } from '../utils/api';
import SectionTitle from './SectionTitle';
import SkeletonCard from './SkeletonPopular';
import { useRouter } from 'expo-router';

const Popular = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const data = await fetchPlaces(page);
        setPlaces((prevPlaces) => [...prevPlaces, ...data]);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
        setIsLoadingMore(false);
      }
    };

    getPlaces();
  }, [page]);

  const handlePress = (slug: string) => {
    router.push(`/place/${slug}`);
    console.log(`Pressed: ${slug}`);
  };

  const loadMore = () => {
    if (!isLoadingMore) {
      setIsLoadingMore(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  const renderItem = ({ item }: { item: Place }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePress(item.slug)}>
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

  if (loading && page === 1) {
    return (
      <View style={styles.skeletonContainer}>
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </View>
    );
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <SectionTitle title="Populer" onViewAllPress={() => console.log('View all popular')} />
      <FlatList
        data={places}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        style={{ paddingHorizontal: 15 }}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={isLoadingMore ? (
          <View style={styles.skeletonContainer}>
            {Array.from({ length: 2 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </View>
        ) : null}
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
    height: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderTopLeftRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
  skeletonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default Popular;
