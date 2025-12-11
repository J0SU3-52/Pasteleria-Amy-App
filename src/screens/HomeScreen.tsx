import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-[#fff7ed]">
      {/* HEADER */}
      <View className="px-5 pt-12 pb-4 bg-[#fff7ed]">
        <Text className="text-lg font-bold text-gray-800">Hello Albert</Text>
        <View className="flex-row items-center mt-1">
          <Feather name="map-pin" size={16} color="#E91E63" />
          <Text className="text-gray-600 ml-1">
            4140 Parker Rd. Allentown..
          </Text>
        </View>

        {/* ICONOS DERECHA */}
        <View className="flex-row absolute right-5 top-12 space-x-3">
          <TouchableOpacity
            className="bg-white p-3 rounded-xl shadow"
            onPress={() => router.push("/cart")}
          >
            <Feather name="shopping-cart" size={22} color="#E91E63" />
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-white p-3 rounded-xl shadow"
            onPress={() => router.push("/notifications")}
          >
            <Feather name="bell" size={22} color="#E91E63" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="px-5">
        {/* SEARCH BAR */}
        <View className="flex-row items-center bg-white rounded-xl px-4 py-3 shadow">
          <Feather name="search" size={20} color="#777" />
          <TextInput
            placeholder="Search here..."
            placeholderTextColor="#999"
            className="ml-3 flex-1 text-gray-700"
          />
          <TouchableOpacity>
            <Feather name="sliders" size={22} color="#E91E63" />
          </TouchableOpacity>
        </View>

        {/* BANNER */}
        <View className="mt-5 bg-white rounded-xl overflow-hidden shadow">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
            }}
            className="w-full h-40"
            resizeMode="cover"
          />
          <View className="absolute inset-0 bg-black/20 px-4 justify-center">
            <Text className="text-white font-bold text-xl">Get 50% off</Text>
            <TouchableOpacity className="bg-amy-morado px-4 py-2 rounded-xl mt-2 self-start">
              <Text className="text-white font-semibold">Shop now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* CATEGORIES */}
        <Text className="mt-6 font-bold text-lg text-gray-800">Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-3 flex-row"
        >
          {[
            {
              name: "Cake",
              icon: "https://cdn-icons-png.flaticon.com/512/685/685352.png",
            },
            {
              name: "Cookies",
              icon: "https://cdn-icons-png.flaticon.com/512/1047/1047711.png",
            },
            {
              name: "Cup cake",
              icon: "https://cdn-icons-png.flaticon.com/512/174/174155.png",
            },
            {
              name: "Donuts",
              icon: "https://cdn-icons-png.flaticon.com/512/877/877951.png",
            },
            {
              name: "Bread",
              icon: "https://cdn-icons-png.flaticon.com/512/914/914529.png",
            },
          ].map((item, idx) => (
            <View key={idx} className="mr-4 items-center">
              <View className="bg-white p-4 rounded-xl shadow">
                <Image source={{ uri: item.icon }} className="w-12 h-12" />
              </View>
              <Text className="mt-2 text-gray-700">{item.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* POPULAR CAKES */}
        <View className="flex-row justify-between items-center mt-7">
          <Text className="font-bold text-lg text-gray-800">Popular cakes</Text>
          <Text className="text-amy-morado font-semibold">View all</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4 flex-row"
        >
          {[
            {
              name: "Strawberry cake",
              price: "$20.00",
              rating: "4.5 | 15 review",
              img: "https://images.unsplash.com/photo-1605478371427-2e8d2df4b7aa",
            },
            {
              name: "Chocolate cake",
              price: "$15.00",
              rating: "3.5 | 20 review",
              img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
            },
          ].map((cake, idx) => (
            <View key={idx} className="mr-4 bg-white rounded-xl shadow p-3">
              <Image
                source={{ uri: cake.img }}
                className="w-40 h-36 rounded-lg"
              />
              <Text className="mt-2 font-semibold text-gray-800">
                {cake.name}
              </Text>
              <Text className="text-yellow-500 text-sm">⭐ {cake.rating}</Text>
              <Text className="text-amy-morado text-lg font-bold mt-1">
                {cake.price}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* SPECIALITY */}
        <View className="flex-row justify-between items-center mt-7">
          <Text className="font-bold text-lg text-gray-800">
            Our Speciality
          </Text>
          <Text className="text-amy-morado font-semibold">View all</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4 flex-row"
        >
          {[
            {
              name: "Vanilla cupcakes",
              price: "$20.00",
              rating: "3.0 | 55 review",
              img: "https://images.unsplash.com/photo-1602471614509-05ddb160f5f6",
            },
            {
              name: "Orange cake",
              price: "$15.00",
              rating: "4.0 | 25 review",
              img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
            },
          ].map((item, idx) => (
            <View key={idx} className="mr-4 bg-white rounded-xl shadow p-3">
              <Image
                source={{ uri: item.img }}
                className="w-40 h-36 rounded-lg"
              />
              <Text className="mt-2 font-semibold text-gray-800">
                {item.name}
              </Text>
              <Text className="text-yellow-500 text-sm">⭐ {item.rating}</Text>
              <Text className="text-amy-morado text-lg font-bold mt-1">
                {item.price}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* RECOMMENDED */}
        <View className="flex-row justify-between items-center mt-7">
          <Text className="font-bold text-lg text-gray-800">
            Recommended for you
          </Text>
          <Text className="text-amy-morado font-semibold">View all</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4 flex-row mb-20"
        >
          {[
            {
              name: "Black forest cake",
              price: "$40.00",
              rating: "5.0 | 80 review",
              img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
            },
            {
              name: "Red velvet cake",
              price: "$30.00",
              rating: "4.5 | 16 review",
              img: "https://images.unsplash.com/photo-1587668178277-aa2dc0cc5b37",
            },
          ].map((item, idx) => (
            <View key={idx} className="mr-4 bg-white rounded-xl shadow p-3">
              <Image
                source={{ uri: item.img }}
                className="w-40 h-36 rounded-lg"
              />
              <Text className="mt-2 font-semibold text-gray-800">
                {item.name}
              </Text>
              <Text className="text-yellow-500 text-sm">⭐ {item.rating}</Text>
              <Text className="text-amy-morado text-lg font-bold mt-1">
                {item.price}
              </Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
