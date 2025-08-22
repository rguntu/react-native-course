
import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "coral",
            tabBarInactiveTintColor: "black", 
            tabBarStyle: { backgroundColor: "white", height: 60, paddingBottom: 5, paddingTop: 5 },
            headerShown: false,
            tabBarLabelStyle: { fontSize: 14, fontWeight: "bold"  },
         }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size, focused }) => 
                         <FontAwesome5 name="home" size={size} color={color} />
                    //     {
                    //     return focused ? (  
                    //         <FontAwesome5 name="home" size={size} color={color} />
                    //     ) : (   
                    //         // You can use a different icon or style for unfocused state
                    //         // For example, you can use a different color or size
                    //         // or even a different icon altogether
                    //         // Here we keep it the same for simplicity              
                    //     <FontAwesome5 name="home" size={size} color="black" />
                    // )},
                }}
            />
            <Tabs.Screen name="login" options={{ title: "Login" }} />
        </Tabs>
    );
}