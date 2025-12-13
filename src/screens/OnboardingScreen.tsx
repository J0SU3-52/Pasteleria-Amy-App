import { router } from "expo-router";
import React, { useState } from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";

// NUEVAS IMÁGENES PREMIUM (estilo Bakery)
const slides = [
    {
        id: 1,
        title: "Bienvenido a Pastelería Ammy",
        description:
            "Disfruta productos frescos, hechos cada día con ingredientes de alta calidad.",
        image:
            "https://images.unsplash.com/photo-1606851091891-6139da3d015f?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        title: "Delicias recién hechas",
        description:
            "Panques, galletas, pasteles y más. Todo preparado artesanalmente para ti.",
        image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        title: "Listos para tu evento",
        description:
            "Ordena pasteles personalizados y sorprende a tus seres queridos.",
        image:
            "https://images.unsplash.com/photo-1587668178277-aa2dc0cc5b37?auto=format&fit=crop&w=800&q=80",
    },
];

export default function OnboardingScreen() {
    const [index, setIndex] = useState(0);

    const next = () => {
        if (index < slides.length - 1) {
            setIndex(index + 1);
        } else {
            router.replace("/(intro)/login");
        }
    };

    const skip = () => {
        router.replace("/(intro)/login");
    };

    const slide = slides[index];

    return (
        <View className="flex-1 bg-white">
            <StatusBar barStyle="dark-content" />

            {/* TOP AREA WITH IMAGE */}
            <View className="flex-[2] justify-end">
                <Image
                    source={{ uri: slide.image }}
                    className="w-full h-full"
                    resizeMode="cover"
                />

                {/* SKIP BUTTON */}
                <TouchableOpacity
                    onPress={skip}
                    className="absolute right-6 top-12 bg-white/80 px-4 py-1 rounded-full"
                >
                    <Text className="text-amy-morado font-semibold">Skip</Text>
                </TouchableOpacity>
            </View>

            {/* BOTTOM PANEL */}
            <View className="flex-[1.2] bg-white rounded-t-[40px] px-8 pb-12 pt-10 shadow-xl">
                <Text className="text-center text-2xl font-bold text-amy-morado mb-3">
                    {slide.title}
                </Text>

                <Text className="text-gray-600 text-center leading-6 mb-8">
                    {slide.description}
                </Text>

                {/* PAGINATION DOTS INTERACTIVOS */}
                <View className="flex-row justify-center mb-8">
                    {slides.map((_, i) => (
                        <TouchableOpacity
                            key={i}
                            onPress={() => setIndex(i)}
                            className={`
                mx-1 h-2 rounded-full 
                ${index === i ? "w-6 bg-amy-morado" : "w-2 bg-gray-300"}
              `}
                        />
                    ))}
                </View>

                {/* BUTTON */}
                <TouchableOpacity
                    onPress={next}
                    className="bg-amy-morado py-4 rounded-2xl"
                >
                    <Text className="text-center text-white font-bold text-lg">
                        {index === slides.length - 1 ? "Comenzar" : "Siguiente"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
