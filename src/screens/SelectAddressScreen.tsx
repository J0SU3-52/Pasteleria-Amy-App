import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function SelectAddressScreen() {
  const [selected, setSelected] = useState("home");

  const addresses = [
    {
      id: "home",
      title: "Home",
      address: "4517 Washington Ave. Manchester, Kentucky 39495",
    },
    {
      id: "office",
      title: "Office",
      address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    },
  ];

  return (
    <View className="flex-1 bg-[#fff7ed] pt-12">
      {/* HEADER */}
      <View className="flex-row items-center px-5 mb-6">
        <TouchableOpacity
        onPress={() => router.push("/cart")}
        >
          <Feather name="chevron-left" size={28} color="#E91E63" />
        </TouchableOpacity>

        <Text className="text-2xl font-bold text-gray-800 ml-3">
          Select delivery address
        </Text>
      </View>

      {/* ADDRESS LIST */}
      <ScrollView className="px-5" showsVerticalScrollIndicator={false}>
        {addresses.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setSelected(item.id)}
            className="bg-white rounded-2xl shadow p-4 mb-4 flex-row justify-between items-center"
          >
            {/* LEFT SIDE */}
            <View className="flex-row items-start flex-1">
              {/* RADIO BUTTON */}
              <View
                className={`w-6 h-6 rounded-full border-2 mr-4 ${
                  selected === item.id
                    ? "border-[#E07B39] justify-center items-center"
                    : "border-gray-400"
                }`}
              >
                {selected === item.id && (
                  <View className="w-3 h-3 rounded-full bg-[#E07B39]" />
                )}
              </View>

              {/* TEXT INFO */}
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-800">
                  {item.title}
                </Text>
                <Text className="text-gray-600 mt-1">{item.address}</Text>
              </View>
            </View>

            {/* EDIT ICON */}
            <TouchableOpacity>
              <Feather name="edit" size={22} color="#E07B39" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}

        {/* ADD NEW ADDRESS */}
        <TouchableOpacity className="mt-4">
          <Text className="text-center text-lg text-[#E07B39] font-semibold">
            Add new address
          </Text>
        </TouchableOpacity>

        {/* CONTINUE BUTTON */}
        <TouchableOpacity className="bg-amy-morado w-full py-4 rounded-2xl mt-6 shadow-lg shadow-amy-morado/30 active:opacity-90"
        onPress={() => router.push("/(screens)/paymentMethod")}
        >
          <Text className="text-white text-center text-xl font-bold">
            Continue
          </Text>
        </TouchableOpacity>

        <View className="h-10" />
      </ScrollView>
    </View>
  );
}
