import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CartScreen() {
  const [items, setItems] = useState([
    {
      name: "Toast Bread",
      size: "8 cm",
      price: 10,
      qty: 1,
      img: "https://images.unsplash.com/photo-1608198093002-ad4e005484e1",
    },
    {
      name: "Strawberry cake",
      size: "8 cm",
      price: 30,
      qty: 1,
      img: "https://images.unsplash.com/photo-1618213838007-42e8f1e9e3b8",
    },
    {
      name: "Vanilla cup cake",
      size: "8 cm",
      price: 20,
      qty: 2,
      img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b",
    },
  ]);

  const increment = (index: number) => {
    const newItems = [...items];
    newItems[index].qty++;
    setItems(newItems);
  };

  const decrement = (index: number) => {
    const newItems = [...items];
    if (newItems[index].qty > 1) newItems[index].qty--;
    setItems(newItems);
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = 10;
  const discount = 20;
  const total = subtotal + shipping - discount;

  return (
    <View className="flex-1 bg-[#fff7ed] pt-12">
      {/* HEADER */}
      <View className="flex-row items-center px-5 mb-6">
        <TouchableOpacity onPress={() => router.push("/home")}>
          <Feather name="chevron-left" size={28} color="#E91E63" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-gray-800 ml-3">My Cart</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="px-5">
        {/* CART ITEMS */}
        {items.map((item, index) => (
          <View
            key={index}
            className="bg-white rounded-2xl shadow p-4 mb-4 flex-row items-center"
          >
            <Image
              source={{ uri: item.img }}
              className="w-20 h-20 rounded-xl mr-4"
              resizeMode="cover"
            />

            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-800">
                {item.name}
              </Text>
              <Text className="text-gray-500 mb-1">Size : {item.size}</Text>
              <Text className="text-amy-morado text-lg font-bold">
                ${item.price.toFixed(2)}
              </Text>
            </View>

            {/* QTY CONTROL */}
            <View className="items-center mr-3">
              <TouchableOpacity
                onPress={() => increment(index)}
                className="bg-gray-100 rounded-md p-1 mb-2"
              >
                <Feather name="chevron-up" size={20} color="#333" />
              </TouchableOpacity>

              <Text className="text-lg font-semibold text-gray-800">
                {item.qty}
              </Text>

              <TouchableOpacity
                onPress={() => decrement(index)}
                className="bg-gray-100 rounded-md p-1 mt-2"
              >
                <Feather name="chevron-down" size={20} color="#333" />
              </TouchableOpacity>
            </View>

            {/* DELETE */}
            <TouchableOpacity
              onPress={() => removeItem(index)}
              className="bg-gray-100 rounded-md p-2"
            >
              <Feather name="trash" size={20} color="#E53935" />
            </TouchableOpacity>
          </View>
        ))}

        {/* PROMOCODE */}
        <Text className="text-gray-700 text-base mt-2 mb-2">
          Enter promocode
        </Text>

        <View className="bg-white rounded-xl shadow flex-row items-center px-4 py-3 mb-6">
          <TextInput
            placeholder="HDK7854Sunday"
            placeholderTextColor="#E07B39"
            className="flex-1 text-amy-morado text-base"
          />
          <Feather name="check-circle" size={24} color="#E07B39" />
        </View>

        {/* TOTALS */}
        <View className="px-2">
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-500 text-lg">Subtotal</Text>
            <Text className="text-gray-800 text-lg">
              ${subtotal.toFixed(2)}
            </Text>
          </View>

          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-500 text-lg">Shipping</Text>
            <Text className="text-gray-800 text-lg">
              +${shipping.toFixed(2)}
            </Text>
          </View>

          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-500 text-lg">Discount</Text>
            <Text className="text-gray-800 text-lg">
              -${discount.toFixed(2)}
            </Text>
          </View>

          <View className="border-t border-gray-300 my-4" />

          <View className="flex-row justify-between mb-8">
            <Text className="text-gray-800 text-xl font-bold">Total</Text>
            <Text className="text-gray-800 text-xl font-bold">
              ${total.toFixed(2)}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* CHECKOUT BUTTON */}
      <View className="px-5 pb-10">
        <TouchableOpacity
          className="bg-amy-morado py-4 rounded-2xl shadow-lg shadow-amy-morado/30 active:opacity-90"
          onPress={() => router.push("/SelectAddress")}
        >
          <Text className="text-center text-white font-bold text-xl">
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
