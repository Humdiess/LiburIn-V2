import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(tabs)" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen
        name="category/[categorySlug]"
        options={{ 
          headerShown: true, 
          headerTitle: "Category" }} 
      />
      <Stack.Screen
        name="search"
        options={{ 
          headerShown: true, 
          headerTitle: "Search" }} 
      />
    </Stack>
  );
}
