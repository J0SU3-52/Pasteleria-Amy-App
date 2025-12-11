import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const TABS = ["Pending", "Cancelled", "Delivered"];

const ordersData: Record<string, {
    id: string;
    date: string;
    name: string;
    price: string;
    img: string;
}[]> = {
    Pending: [
        {
            id: "#45215",
            date: "25 jan 2022",
            name: "Toast Bread",
            price: "$10.00",
            img: "https://images.unsplash.com/photo-1608198093002-ad4e005484e1"
        },
        {
            id: "#35215",
            date: "24 jan 2022",
            name: "Strawberry cake",
            price: "$30.00",
            img: "https://images.unsplash.com/photo-1618213838007-42e8f1e9e3b8"
        },
        {
            id: "#12542",
            date: "24 jan 2022",
            name: "Vanilla cup cake",
            price: "$20.00",
            img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b"
        }
    ],
    Cancelled: [],
    Delivered: []
};

export default function OrdersScreen() {
    const [activeTab, setActiveTab] = useState("Pending");

    return (
        <View className="flex-1 bg-[#fff7ed] pt-12">

            {/* HEADER */}
            <Text className="text-center text-2xl font-bold text-gray-800 mb-5">
                My orders
            </Text>

            {/* TABS */}
            <View className="flex-row justify-around mb-4 px-5">
                {TABS.map((tab) => {
                    const active = activeTab === tab;
                    return (
                        <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
                            <Text
                                className={`text-lg font-semibold ${active ? "text-amy-morado" : "text-gray-400"
                                    }`}
                            >
                                {tab}
                            </Text>

                            {active && (
                                <View className="w-full h-1 bg-amy-morado mt-1 rounded-full" />
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* ORDER LIST */}
            <ScrollView showsVerticalScrollIndicator={false} className="px-5">
                {ordersData[activeTab].length === 0 ? (
                    <Text className="text-center text-gray-500 mt-10">
                        No orders in {activeTab.toLowerCase()}.
                    </Text>
                ) : (
                    ordersData[activeTab].map((order, index) => (
                        <View
                            key={index}
                            className="bg-white rounded-2xl shadow p-4 mb-4 flex-row items-center"
                        >
                            <Image
                                source={{ uri: order.img }}
                                className="w-20 h-20 rounded-xl mr-4"
                            />

                            <View className="flex-1">
                                <Text className="font-semibold text-gray-700">
                                    Order ID : {order.id} | {order.date}
                                </Text>

                                <Text className="text-gray-600 mt-1">{order.name}</Text>

                                <Text className="text-amy-morado font-bold mt-1 text-lg">
                                    {order.price}
                                </Text>
                            </View>
                        </View>
                    ))
                )}

                <View className="h-10" />
            </ScrollView>
        </View>
    );
}
