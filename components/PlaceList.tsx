import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchPlaces, Place } from '../utils/api';

const PlaceList: React.FC = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const placesData = await fetchPlaces();
        console.log('Fetched places:', placesData);
        setPlaces(placesData);
      } catch (error: any) {
        setError(error.message);
      }
    };

    getPlaces();
  }, []);

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View>
      {places.length === 0 ? (
        <Text>No places found.</Text>
      ) : (
        places.map((place) => (
          <Text key={place.id}>{place.name}</Text>
        ))
      )}
    </View>
  );
};

export default PlaceList;