import React from 'react';
import { Tabs, router } from 'expo-router';
import { Image, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Menggunakan MaterialCommunityIcons

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: "",
                    headerTitleStyle: {
                        color: "white",
                    },
                    headerStyle: {
                        backgroundColor: "white",
                    },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.push('../profile') } style={{ marginLeft: 15 }}>
                            <MaterialCommunityIcons name="menu" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15, gap: 20 }}>
                            <TouchableOpacity onPress={() => router.push('../search') }>
                                <MaterialCommunityIcons name="magnify" size={24} color="black" /> 
                            </TouchableOpacity>
                            <MaterialCommunityIcons name="bell-outline" size={24} color="black" /> 
                        </View>
                    ),
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialCommunityIcons name="home-outline" size={size} color={focused ? "black" : color} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="wishlist" 
                options={{
                    headerShown: true,
                    headerTitle: "Wishlist",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialCommunityIcons name="bookmark-outline" size={size} color={focused ? "black" : color} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="activity" 
                options={{
                    headerShown: true,
                    headerTitle: "Aktivitas Kamu",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialCommunityIcons name="calendar-outline" size={size} color={focused ? "black" : color} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="profile" 
                options={{
                    headerTitle: "Profil Pengguna",
                    headerTitleAlign: "center",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialCommunityIcons name="account-outline" size={size} color={focused ? "black" : color} />
                    ),
                }}
            />
        </Tabs>
    );
}
