import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const categories = [
    {
        name: "Cup cake",
        icon: "https://cdn-icons-png.flaticon.com/512/174/174155.png"
    },
    {
        name: "Cookies",
        icon: "https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
    },
    {
        name: "Donuts",
        icon: "https://cdn-icons-png.flaticon.com/512/877/877951.png"
    },
    {
        name: "Pastry",
        icon: "https://cdn-icons-png.flaticon.com/512/2748/2748585.png"
    },
    {
        name: "Namkeen",
        icon: "https://cdn-icons-png.flaticon.com/512/686/686589.png"
    },
    {
        name: "Tosts",
        icon: "https://cdn-icons-png.flaticon.com/512/914/914529.png"
    },
    {
        name: "Bread",
        icon: "https://cdn-icons-png.flaticon.com/512/685/685352.png"
    },
    {
        name: "Chocolate",
        icon: "https://cdn-icons-png.flaticon.com/512/220/220247.png"
    },
    {
        name: "Sweets",
        icon: "https://cdn-icons-png.flaticon.com/512/3601/3601648.png"
    },
    {
        name: "Cake",
        icon: "https://cdn-icons-png.flaticon.com/512/686/686589.png"
    },
    {
        name: "Khakhara",
        icon: "https://cdn-icons-png.flaticon.com/512/6965/6965900.png"
    },
    {
        name: "Crackers",
        icon: "https://cdn-icons-png.flaticon.com/512/921/921056.png"
    }
];

export default function CategoriesScreen() {
    return (
        <View className="flex-1 bg-[#fff7ed] pt-12">

            {/* HEADER */}
            <View className="flex-row items-center px-5 mb-4">
                <TouchableOpacity>
                    <Feather name="chevron-left" size={28} color="#E91E63" />
                </TouchableOpacity>
                <Text className="flex-1 text-center text-2xl font-bold text-gray-800">
                    Categories
                </Text>
                <View className="w-7" />
            </View>

            {/* CATEGORIES GRID */}
            <ScrollView showsVerticalScrollIndicator={false} className="px-5">
                <View className="flex-row flex-wrap justify-between">
                    {categories.map((item, index) => (
                        <View
                            key={index}
                            className="w-[30%] bg-white rounded-xl shadow p-4 mb-4 items-center"
                        >
                            <Image
                                source={{ uri: item.icon }}
                                className="w-14 h-14 mb-2"
                                resizeMode="contain"
                            />
                            <Text className="text-gray-700 font-medium text-center">{item.name}</Text>
                        </View>
                    ))}
                </View>

                <View className="h-20" />
            </ScrollView>
        </View>
    );
}
