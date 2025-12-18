import CountryPicker from "@/src/components/CountryPicker"; // IMPORTANTE
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";

const LOGIN_IMAGE =
    "https://images.unsplash.com/photo-1606851091891-6139da3d015f?auto=format&w=600&q=70";

export default function LoginScreen() {
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("+52"); // NUEVO

    const handleLogin = () => {
        if (!phone.trim()) return;
        router.push("/(intro)/verify-otp");
    };

    return (
        <View className="flex-1 bg-amy-crema">
            <StatusBar barStyle="dark-content" />

            {/* IMAGEN SUPERIOR */}
            <View className="flex-[1.5] justify-center items-center">
                <Image
                    source={{ uri: LOGIN_IMAGE }}
                    className="w-64 h-64"
                    resizeMode="contain"
                />
            </View>

            {/* PANEL INFERIOR */}
            <View className="flex-[1.5] bg-white rounded-t-[40px] px-8 pt-10 pb-16 shadow-xl">
                <Text className="text-center text-2xl font-bold text-amy-morado mb-3">
                    Iniciar Sesión
                </Text>

                <Text className="text-center text-gray-600 mb-8 leading-6">
                    Bienvenido a Pastelería Ammy.
                    Inicia sesión con tu número de teléfono para continuar.
                </Text>

                {/* INPUT */}
                <View className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 flex-row items-center px-4 mb-6">

                    {/* ← AQUÍ VA EL SELECTOR PRO DE PAÍSES */}
                    <CountryPicker value={country} onSelect={setCountry} />

                    <TextInput
                        className="flex-1 py-3 text-base text-gray-800 ml-3"
                        placeholder="Ingresa tu número"
                        placeholderTextColor="#999"
                        keyboardType="phone-pad"
                        value={phone}
                        onChangeText={setPhone}
                    />
                </View>

                {/* BOTÓN */}
                <TouchableOpacity
                    className="bg-amy-morado py-4 rounded-2xl active:opacity-90 shadow-md shadow-amy-morado/30"
                    onPress={handleLogin}
                >
                    <Text className="text-center text-white text-lg font-bold">Continuar</Text>
                </TouchableOpacity>

                {/* TEXTO DE REGISTRO */}
                <View className="flex-row justify-center mt-6">
                    <Text className="text-gray-600">¿No tienes cuenta?</Text>
                    <TouchableOpacity onPress={() => router.push("/(intro)/register")}>
                        <Text className="text-amy-morado font-bold ml-2">Crear cuenta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
