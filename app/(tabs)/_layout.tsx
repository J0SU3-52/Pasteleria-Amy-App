import "@/global.css";
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 70,
          borderTopWidth: 0,
          elevation: 10,
        }
      }}
    >

      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className={`w-12 h-12 rounded-full ${focused ? "bg-[#fed7d7]" : ""} items-center justify-center`}>
              <Feather name="home" size={24} color={focused ? "#E91E63" : "#999"} />
            </View>
          )
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className={`w-12 h-12 rounded-full ${focused ? "bg-[#fed7d7]" : ""} items-center justify-center`}>
              <Feather name="grid" size={24} color={focused ? "#E91E63" : "#999"} />
            </View>
          )
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className={`w-12 h-12 rounded-full ${focused ? "bg-[#fed7d7]" : ""} items-center justify-center`}>
              <Feather name="shopping-bag" size={24} color={focused ? "#E91E63" : "#999"} />
            </View>
          )
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className={`w-12 h-12 rounded-full ${focused ? "bg-[#fed7d7]" : ""} items-center justify-center`}>
              <Feather name="user" size={24} color={focused ? "#E91E63" : "#999"} />
            </View>
          )
        }}
      />

    </Tabs>
  );
}
