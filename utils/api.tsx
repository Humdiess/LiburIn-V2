// utils/api.ts

export interface Place {
  id: number;
  name: string;
  slug: string;
  photo: string;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
  };
}

interface ApiResponse {
  data: Place[];
  // tambahkan properti lain jika diperlukan, misalnya untuk paginasi
}

export const fetchPlaces = async (): Promise<Place[]> => {
  try {
    const response = await fetch('https://dewalaravel.com/api/places');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result: ApiResponse = await response.json();
    return result.data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};
