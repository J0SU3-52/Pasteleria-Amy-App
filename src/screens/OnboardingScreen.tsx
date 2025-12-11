import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';

// --- IMÁGENES PNG ---
const slides = [
    {
        id: 1,
        title: "Recién horneados",
        description: "Cada pieza es horneada el mismo día para garantizar la frescura y el sabor que te encanta.",
        image: "https://w7.pngwing.com/pngs/664/140/png-transparent-birthday-cake-cupcake-chocolate-cake-cream-food-happy-birthday-to-you-thumbnail.png"
    },
    {
        id: 2,
        title: "Chocolate Premium",
        description: "Usamos cacao 100% belga y técnicas artesanales para los amantes del verdadero chocolate.",
        image: "https://w7.pngwing.com/pngs/1006/312/png-transparent-chocolate-truffle-chocolate-cake-birthday-cake-sachertorte-cake-cream-baked-goods-food-thumbnail.png"
    },
    {
        id: 3,
        title: "Fruta Fresca",
        description: "Seleccionamos las mejores frutas de temporada. Del campo directamente a tu postre favorito.",
        image: "https://w7.pngwing.com/pngs/82/441/png-transparent-strawberry-fondant-cake-chocolate-cake-chocolate-truffle-tart-strawberry-chocolate-cake-cream-baked-goods-food-thumbnail.png"
    }
];

export default function OnboardingScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            console.log("Ir al Login");
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const handleSkip = () => {
        setCurrentIndex(slides.length - 1);
    };

    const isLastSlide = currentIndex === slides.length - 1;

    return (
        <View className="flex-1 bg-amy-crema">
            <StatusBar barStyle="dark-content" backgroundColor="#fff7ed" />

            {/* 1. HEADER */}
            <View className="w-full flex-row justify-between items-center px-6 pt-4 mt-8 z-10">
                {currentIndex > 0 ? (
                    <TouchableOpacity onPress={handleBack} className="p-2 bg-white/50 rounded-full">
                        <Feather name="chevron-left" size={28} color="#E91E63" />
                    </TouchableOpacity>
                ) : <View />}

                {!isLastSlide && (
                    <TouchableOpacity onPress={handleSkip} className="bg-white/50 px-3 py-1 rounded-full">
                        <Text className="text-amy-rosa font-bold text-base">Omitir</Text>
                    </TouchableOpacity>
                )}
            </View>

            {/* 2. ÁREA DE IMAGEN FLOTANTE */}
            <View className="flex-1 justify-center items-center relative">
                <View className="absolute w-64 h-64 bg-white/40 rounded-full blur-2xl" />

                <Image
                    source={{ uri: slides[currentIndex].image }}
                    className="w-full h-[380px]"
                    resizeMode="contain"
                />
            </View>

            {/* 3. PANEL INFERIOR */}
            <View className="px-6 pb-12 bg-white/60 rounded-t-[40px] shadow-lg">
                <View className="pt-8">
                    <Text className="text-3xl font-bold text-amy-morado text-center mb-3">
                        {slides[currentIndex].title}
                    </Text>
                    <Text className="text-gray-600 text-center text-base mb-8 leading-6 px-4">
                        {slides[currentIndex].description}
                    </Text>

                    <View className="items-center w-full gap-6">
                        {/* Paginación */}
                        <View className="flex-row gap-2">
                            {slides.map((_, index) => (
                                <View
                                    key={index}
                                    className={`h-2 rounded-full ${currentIndex === index
                                        ? "w-8 bg-amy-rosa"
                                        : "w-2 bg-gray-300"
                                        }`}
                                />
                            ))}
                        </View>
                        <TouchableOpacity
                            onPress={handleNext}
                            className="bg-amy-morado w-full py-4 rounded-2xl shadow-lg shadow-amy-morado/30 active:opacity-90"
                        >
                            <Text className="text-white text-center font-bold text-xl">
                                {isLastSlide ? "Empezar" : "Siguiente"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
}