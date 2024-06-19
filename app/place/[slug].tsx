import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview'
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PlaceDetailSkeleton from '@/components/PlaceDetailSkeleton'; // Ganti dengan lokasi yang sesuai

const PlaceDetail = () => {
  const { slug } = useLocalSearchParams();
  const navigation = useNavigation();
  const [place, setPlace] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

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

  const renderSkeleton = () => {
    return <PlaceDetailSkeleton />;
  };

  if (loading || !place) {
    return renderSkeleton();
  }

  const description = place.description;
  const firstParagraph = description.split('\n')[0];

  // Static data for comments
  const comments = [
    {
      id: 1,
      author: 'John Doe',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
      date: 'June 20, 2024',
      text: 'Tempat ini sangat indah dan nyaman untuk dikunjungi bersama keluarga. Pelayanan yang sangat memuaskan!'
    },
    {
      id: 2,
      author: 'Jane Smith',
      profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
      date: 'June 19, 2024',
      text: 'Saya sangat menikmati waktu saya di sini. Pemandangan yang luar biasa dan fasilitas yang lengkap.'
    },
    {
      id: 3,
      author: 'Michael Johnson',
      profilePic: 'https://randomuser.me/api/portraits/men/3.jpg',
      date: 'June 18, 2024',
      text: 'Lokasi strategis, dekat dengan banyak tempat wisata menarik. Sangat direkomendasikan!'
    },
    {
      id: 4,
      author: 'Sarah Adams',
      profilePic: 'https://randomuser.me/api/portraits/women/4.jpg',
      date: 'June 17, 2024',
      text: 'Sangat menyenangkan menghabiskan waktu di sini. Suasana yang ramah dan bersih.'
    },
    {
      id: 5,
      author: 'David Brown',
      profilePic: 'https://randomuser.me/api/portraits/men/5.jpg',
      date: 'June 16, 2024',
      text: 'Tempat yang sempurna untuk liburan keluarga. Anak-anak senang!'
    }
  ];

  return (
    <ScrollView style={{ height: '100%', backgroundColor: 'white' }}>
      <View style={{ position: 'relative', borderBottomEndRadius: 20, borderBottomStartRadius: 20, overflow: 'hidden' }}>
        <Image source={{ uri: place.photo }} style={styles.image} />
        <View style={styles.imageOverlay} />
        <View style={styles.overlay}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons name="dots-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.overlay2}>
          <MaterialCommunityIcons name="dots-horizontal" size={24} color="white" style={styles.iconButton} />
          <View style={styles.imageCount}>
            <MaterialCommunityIcons name="image-multiple" size={18} color="white" />
            <Text style={{ color: 'white' }}>4</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.name}>{place.name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons name="star" size={24} color="gold" />
              <MaterialCommunityIcons name="star" size={24} color="gold" />
              <MaterialCommunityIcons name="star" size={24} color="gold" />
              <MaterialCommunityIcons name="star" size={24} color="gold" />
              <MaterialCommunityIcons name="star-half" size={24} color="gold" />
              <Text>4.9 (1639 reviews)</Text>
            </View>
          </View>
        </View>
        <Text style={styles.description}>
          {showFullDescription ? description : `${firstParagraph}`}
        </Text>
        <TouchableOpacity onPress={() => setShowFullDescription(!showFullDescription)}>
          <Text style={styles.showMore}>
            {showFullDescription ? 'Lihat lebih sedikit' : 'Lihat lebih banyak'}
          </Text>
        </TouchableOpacity>
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tab, activeTab === 'overview' && styles.activeTab]} onPress={() => setActiveTab('overview')}>
            <Text style={styles.tabText}>Ikhtisar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, activeTab === 'hotels' && styles.activeTab]} onPress={() => setActiveTab('hotels')}>
            <Text style={styles.tabText}>Hotel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, activeTab === 'restaurants' && styles.activeTab]} onPress={() => setActiveTab('restaurants')}>
            <Text style={styles.tabText}>Restoran</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, activeTab === 'stores' && styles.activeTab]} onPress={() => setActiveTab('stores')}>
            <Text style={styles.tabText}>Toko</Text>
          </TouchableOpacity>
        </View>
        {activeTab === 'overview' && (
          <View>
            {comments.map(comment => (
              <View key={comment.id} style={styles.commentContainer}>
                <Image source={{ uri: comment.profilePic }} style={styles.commentProfilePic} />
                <View style={styles.commentContent}>
                  <Text style={styles.commentAuthor}>{comment.author}</Text>
                  <Text style={styles.commentDate}>{comment.date}</Text>
                  <Text style={styles.commentText}>{comment.text}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
        {activeTab !== 'overview' && (
          <View style={styles.mapContainer}>
            {/* Replace with your actual Google Maps WebView component */}
            <WebView
              style={styles.map}
              javaScriptEnabled={true}
              source={{ uri: 'https://maps.google.com' }} // Replace with actual Google Maps URL
            />
            <View style={styles.placesList}>
              {/* Example of list of places */}
              <View style={styles.placeItem}>
                <Text style={styles.placeName}>Nama Tempat 1</Text>
                <Text style={styles.placeType}>Jenis Tempat: Hotel</Text>
                <Text style={styles.placeRating}>Rating: 4.5</Text>
              </View>
              <View style={styles.placeItem}>
                <Text style={styles.placeName}>Nama Tempat 2</Text>
                <Text style={styles.placeType}>Jenis Tempat: Restoran</Text>
                <Text style={styles.placeRating}>Rating: 4.2</Text>
              </View>
              <View style={styles.placeItem}>
                <Text style={styles.placeName}>Nama Tempat 3</Text>
                <Text style={styles.placeType}>Jenis Tempat: Toko</Text>
                <Text style={styles.placeRating}>Rating: 4.8</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // darken the image
  },
  overlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  overlay2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 250,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 50,
    padding: 5,
  },
  imageCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 100,
  },
  image: {
    width: '100%',
    height: 300,
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
  showMore: {
    marginTop: 10,
    color: 'blue',
    fontSize: 16,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  commentProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  commentContent: {
    flex: 1,
    marginLeft: 10,
  },
  commentAuthor: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentDate: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 5,
  },
  commentText: {
    fontSize: 14,
    color: 'black',
  },
  mapContainer: {
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: 300,
  },
  placesList: {
    padding: 10,
    backgroundColor: '#ffffff',
  },
  placeItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  placeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  placeType: {
    fontSize: 14,
    color: 'gray',
  },
  placeRating: {
    fontSize: 14,
    color: 'orange',
  },
});

export default PlaceDetail;
