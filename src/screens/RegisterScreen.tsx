import { router } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const REGISTER_IMAGE =
  "https://images.unsplash.com/photo-1606851091891-6139da3d015f?auto=format&w=600&q=70";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = () => {
    if (!name.trim() || !email.trim() || !phone.trim()) return;
    router.push("/(intro)/verify-otp");

  };

  return (
    <View className="flex-1 bg-amy-crema">
      <StatusBar barStyle="dark-content" />

      {/* IMAGEN SUPERIOR */}
      <View className="flex-[1.5] justify-center items-center">
        <Image
          source={{ uri: REGISTER_IMAGE }}
          className="w-64 h-64"
          resizeMode="contain"
        />
      </View>

      {/* CONTENEDOR INFERIOR */}
      <View className="flex-[1.8] bg-white rounded-t-[40px] px-8 pt-10 pb-16 shadow-xl">

        {/* BOTÓN BACK */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute left-6 top-6 bg-gray-100 p-2 rounded-full"
        >
          <Text className="text-xl text-gray-600">←</Text>
        </TouchableOpacity>

        <Text className="text-center text-2xl font-bold text-amy-morado mb-3">
          Crear Cuenta
        </Text>

        <Text className="text-center text-gray-600 mb-8 leading-6">
          Bienvenido a Pastelería Ammy.  
          Por favor completa la información para registrarte.
        </Text>

        {/* INPUT - NOMBRE */}
        <View className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 flex-row items-center px-4 mb-5">
          <Text className="text-xl text-gray-500 mr-3">👤</Text>
          <TextInput
            placeholder="Ingresa tu nombre"
            placeholderTextColor="#999"
            className="flex-1 py-3 text-base"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* INPUT - EMAIL */}
        <View className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 flex-row items-center px-4 mb-5">
          <Text className="text-xl text-gray-500 mr-3">✉️</Text>
          <TextInput
            placeholder="Ingresa tu correo"
            placeholderTextColor="#999"
            className="flex-1 py-3 text-base"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* INPUT - TELÉFONO */}
        <View className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 flex-row items-center px-4 mb-6">
          <Text className="text-xl text-gray-500 mr-3">📞</Text>
          <TextInput
            placeholder="Ingresa tu número"
            placeholderTextColor="#999"
            className="flex-1 py-3 text-base"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* BOTÓN REGISTRAR */}
        <TouchableOpacity
          onPress={handleRegister}
          className="bg-amy-morado py-4 rounded-2xl active:opacity-90 shadow-md shadow-amy-morado/30"
        >
          <Text className="text-center text-white text-lg font-bold">
            Registrarme
          </Text>
        </TouchableOpacity>

        {/* TEXTO: YA TIENES CUENTA */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-600">¿Ya tienes cuenta?</Text>
          <TouchableOpacity onPress={() => router.replace("/(intro)/login")}>
            <Text className="text-amy-morado font-bold ml-2">Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
