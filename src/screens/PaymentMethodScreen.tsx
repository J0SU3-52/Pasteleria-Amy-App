import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function PaymentMethodScreen() {
  const [selected, setSelected] = useState("credit");

  const methods = [
    {
      id: "credit",
      name: "Credit card",
      image: "https://cdn-icons-png.flaticon.com/512/217/217425.png",
    },
    {
      id: "paypal",
      name: "Paypal",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    },
    {
      id: "google_pay",
      name: "Google pay",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png",
    },
    {
      id: "visa",
      name: "Visa card",
      image:
        "https://seeklogo.com/images/V/visa-logo-A2F03F5FE0-seeklogo.com.png",
    },
    {
      id: "cash",
      name: "Cash on delivery",
      image: "https://cdn-icons-png.flaticon.com/512/2331/2331941.png",
    },
  ];

  return (
    <View className="flex-1 bg-[#fff7ed] pt-12">
      {/* HEADER */}
      <View className="flex-row items-center px-5 mb-6">
        <TouchableOpacity onPress={() => router.push("/(screens)/SelectAddress")}>
          <Feather name="chevron-left" size={28} color="#E91E63" />
        </TouchableOpacity>

        <Text className="text-2xl font-bold text-gray-800 ml-3">
          Payment method
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="px-5">
        <Text className="text-gray-600 text-lg mb-4">
          Select payment method
        </Text>

        {methods.map((method) => (
          <TouchableOpacity
            key={method.id}
            onPress={() => setSelected(method.id)}
            className="flex-row items-center justify-between bg-white rounded-2xl shadow p-4 mb-4"
          >
            {/* Left side: image + name */}
            <View className="flex-row items-center">
              <Image
                source={{ uri: method.image }}
                className="w-10 h-10 mr-4"
                resizeMode="contain"
              />
              <Text className="text-gray-800 text-lg font-medium">
                {method.name}
              </Text>
            </View>

            {/* Radio button */}
            <View
              className={`w-6 h-6 rounded-full border-2 ${
                selected === method.id ? "border-[#E07B39]" : "border-gray-400"
              } items-center justify-center`}
            >
              {selected === method.id && (
                <View className="w-3 h-3 rounded-full bg-[#E07B39]" />
              )}
            </View>
          </TouchableOpacity>
        ))}

        {/* CONTINUE BUTTON */}
        <TouchableOpacity className="bg-amy-morado w-full py-4 rounded-2xl mt-6 shadow-lg shadow-amy-morado/30 active:opacity-90">
          <Text className="text-white text-center text-xl font-bold">
            Continue
          </Text>
        </TouchableOpacity>

        <View className="h-16" />
      </ScrollView>
    </View>
  );
}
