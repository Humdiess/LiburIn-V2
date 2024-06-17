import React from 'react';
import { Tabs } from 'expo-router';
import { Image, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

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
                        <Image
                            source={{ uri: 'https://dummyimage.com/40x40/000/fff&text=P' }}
                            style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 15 }}
                        />
                    ),
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15, gap: 20 }}>
                            <MaterialIcons name="search" size={24} color="black" />
                            <MaterialIcons name="notifications-none" size={24} color="black" />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen name="search" options={{ headerShown: false }} />
        </Tabs>
    );
}