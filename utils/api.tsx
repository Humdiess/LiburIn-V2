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

interface ApiResponse<T> {
  data: T[];
  // Add other properties if needed, e.g., for pagination
}

// utils/api.ts

export const fetchPlaces = async (page = 1) => {
  try {
    const response = await fetch(`https://dewalaravel.com/api/places?page=${page}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error('Failed to fetch places');
  }
};


export interface Category {
  id: number;
  name: string;
  slug: string;
}

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch('https://dewalaravel.com/api/categories');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result: ApiResponse<Category> = await response.json();
    return result.data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};