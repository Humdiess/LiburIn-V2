// Component/Category.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { fetchCategories, Category } from '../utils/api';
import SectionTitle from './SectionTitle';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import SkeletonCategory from './SkeletonCategory'; // Import SkeletonCategory

const CategorySelector = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  const colors = ['#FF6347', '#6A5ACD', '#20B2AA', '#FF4500', '#2E8B57', '#1E90FF', '#DA70D6', '#FFD700'];
  const icons = ['local-activity', 'local-dining', 'local-florist', 'local-cafe', 'local-bar', 'local-movies', 'local-hospital', 'local-hotel'];

  const hashString = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  };

  const getColor = (name: string) => {
    const index = Math.abs(hashString(name)) % colors.length;
    return colors[index];
  };

  const getIcon = (name: string) => {
    const index = Math.abs(hashString(name)) % icons.length;
    return icons[index];
  };

  if (loading) {
    return (
      <View>
        <SectionTitle title="Kategori" onViewAllPress={() => console.log('View all categories')} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingStart: 10 }} >
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCategory key={index} />
          ))}
        </ScrollView>
      </View>
    );
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <SectionTitle title="Kategori" onViewAllPress={() => console.log('View all categories')} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingStart: 10 }} >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[styles.categoryItem, { backgroundColor: getColor(category.name) }]}
            onPress={() => router.push(`/category/${category.slug}`)}
          >
            <MaterialIcons name={getIcon(category.name) as string} size={18} color="white" style={styles.icon} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
    paddingStart: 20,
    marginTop: 15,
  },
  categoryItem: {
    justifyContent: 'space-between',
    padding: 10,
    marginRight: 10,
    borderRadius: 12,
    width: 120,
    height: 90,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  categoryText: {
    color: 'white',
    textAlign: 'left',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
});

export default CategorySelector;
