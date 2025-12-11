import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
    return (
        <View className="flex-1 bg-[#fff7ed] pt-12">

            {/* HEADER */}
            <Text className="text-center text-2xl font-bold text-gray-800 mb-6">
                Profile
            </Text>

            <ScrollView showsVerticalScrollIndicator={false} className="px-5">

                {/* USER CARD */}
                <View className="bg-white p-4 rounded-2xl shadow flex-row items-center mb-6">
                    <Image
                        source={{
                            uri: "https://randomuser.me/api/portraits/men/75.jpg",
                        }}
                        className="w-16 h-16 rounded-full mr-4"
                    />
                    <View>
                        <Text className="text-lg font-semibold text-gray-800">José Joaquín Gúzman Loera</Text>
                        <Text className="text-gray-600">+91 1234567890</Text>
                    </View>
                </View>

                {/* MENU OPTIONS */}
                {[
                    { label: "Edit profile", icon: "user" as const },
                    { label: "My address", icon: "map-pin" as const },
                    { label: "Favourites", icon: "heart" as const },
                    { label: "Blog", icon: "rss" as const },
                    { label: "Terms and condition", icon: "file-text" as const },
                    { label: "Privacy policy", icon: "alert-triangle" as const },
                    { label: "Help and support", icon: "help-circle" as const },
                ].map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        className="bg-white p-4 rounded-xl shadow mb-3 flex-row items-center justify-between"
                    >
                        <View className="flex-row items-center">
                            <Feather name={item.icon} size={22} color="#333" />
                            <Text className="ml-4 text-gray-800 text-base">{item.label}</Text>
                        </View>
                        <Feather name="chevron-right" size={22} color="#999" />
                    </TouchableOpacity>
                ))}

                {/* LOGOUT */}
                <TouchableOpacity className="bg-white p-4 rounded-xl shadow mt-2 flex-row items-center justify-between">
                    <View className="flex-row items-center">
                        <Feather name="log-out" size={22} color="#E53935" />
                        <Text className="ml-4 text-red-600 text-base font-semibold">Logout</Text>
                    </View>
                    <Feather name="chevron-right" size={22} color="#999" />
                </TouchableOpacity>

                <View className="h-20" />
            </ScrollView>
        </View>
    );
}
