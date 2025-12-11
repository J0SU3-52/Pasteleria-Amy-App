import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const notifications = [
  {
    title: "Order delivered",
    message: "Your order is successfully delivered tell us about experience",
    time: "2min ago",
  },
  {
    title: "Hello Albert Flores",
    message: "Your order is on the way for more detail check my order",
    time: "5min ago",
  },
  {
    title: "Get discount",
    message: "Hurry up Get 30% off on every cake. offer valid for 2 day.",
    time: "10min ago",
  },
];

export default function NotificationsScreen() {
  return (
    <View className="flex-1 bg-[#fff7ed] pt-12">
      {/* HEADER */}
      <View className="flex-row items-center px-5 mb-6">
        <TouchableOpacity onPress={() => router.push("/home")}>
          <Feather name="chevron-left" size={28} color="#E91E63" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-gray-800 ml-3">
          Notification
        </Text>
      </View>

      {/* CONTENT */}
      <ScrollView showsVerticalScrollIndicator={false} className="px-5">
        {notifications.map((item, index) => (
          <View
            key={index}
            className="bg-white rounded-2xl shadow p-4 mb-4 flex-row"
          >
            {/* ICON LEFT */}
            <View className="items-center mr-3">
              <Feather name="bell" size={26} color="#E07B39" />
            </View>

            {/* VERTICAL LINE */}
            <View className="w-[1px] bg-gray-300 mr-3" />

            {/* TEXT CONTENT */}
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-800">
                {item.title}
              </Text>

              <Text className="text-gray-600 mt-1">{item.message}</Text>

              <Text className="text-gray-400 mt-2">{item.time}</Text>
            </View>
          </View>
        ))}

        <View className="h-10" />
      </ScrollView>
    </View>
  );
}
