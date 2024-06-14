import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{ 
                    headerTitle: "LiburIn",
                    headerTitleStyle: {
                        color: "white",
                    },
                    headerStyle: {
                        backgroundColor: "#48cae4",    
                    },
                    headerShadowVisible: false
                }}
            />
        </Tabs>
    )
}