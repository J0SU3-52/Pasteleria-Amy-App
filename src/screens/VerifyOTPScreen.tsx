import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
    ActivityIndicator,
    Modal,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    View,
} from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSequence,
    withTiming,
} from "react-native-reanimated";

export default function VerifyOTPScreen() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(30);

    const inputsRef = useRef<(TextInput | null)[]>([]);
    const shake = useSharedValue(0);

    // Estilo animado para el shake
    const shakeStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: shake.value }],
    }));

    // Timer para el "Reenviar"
    useEffect(() => {
        if (secondsLeft <= 0) return;
        const interval = setInterval(() => {
            setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, [secondsLeft]);

    const handleChange = (text: string, index: number) => {
        if (!/^[0-9]?$/.test(text)) return; // Solo un dígito numérico

        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Ir al siguiente input si se escribe
        if (text !== "" && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }

        // Regresar si se borra
        if (text === "" && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const triggerErrorAnimation = () => {
        Vibration.vibrate(150);
        shake.value = withSequence(
            withTiming(-8, { duration: 70 }),
            withTiming(8, { duration: 70 }),
            withTiming(-6, { duration: 60 }),
            withTiming(6, { duration: 60 }),
            withTiming(0, { duration: 50 })
        );
    };

    const handleVerify = () => {
        const finalOtp = otp.join("");

        if (finalOtp.length !== 6) {
            triggerErrorAnimation();
            return;
        }

        setLoading(true);

        // Simulación verificación backend
        setTimeout(() => {
            setLoading(false);
            router.replace("/(tabs)/home");
        }, 2000);
    };

    const handleResend = () => {
        if (secondsLeft > 0) return;

        // Aquí iría la lógica real de reenviar OTP
        console.log("Reenviar OTP");
        setSecondsLeft(30);
    };

    const isComplete = otp.join("").length === 6;

    return (
        <View className="flex-1 bg-white px-8 pt-12">
            <StatusBar barStyle="dark-content" />

            {/* BACK */}
            <TouchableOpacity onPress={() => router.back()}>
                <Text className="text-2xl text-gray-600 mb-8">←</Text>
            </TouchableOpacity>

            {/* TÍTULO */}
            <Text className="text-center text-2xl font-bold text-amy-morado mb-2">
                Verificación OTP
            </Text>

            <Text className="text-center text-gray-600 mb-10 leading-6">
                Ingresa el código de 6 dígitos enviado a tu número.
            </Text>

            {/* CONTENEDOR OTP con SHAKE */}
            <Animated.View
                className="flex-row justify-center gap-3 mb-10"
                style={shakeStyle}
            >
                {otp.map((value, index) => (
                    <View
                        key={index}
                        className={`w-12 h-14 rounded-xl border ${value ? "border-amy-morado" : "border-gray-300"
                            } bg-white shadow-sm justify-center items-center`}
                    >
                        <TextInput
                            ref={(ref) => {
                                inputsRef.current[index] = ref;
                            }}
                            className="text-xl text-center"
                            keyboardType="number-pad"
                            maxLength={1}
                            value={value}
                            onChangeText={(text) => handleChange(text, index)}
                            autoFocus={index === 0}
                        />

                    </View>
                ))}
            </Animated.View>

            {/* BOTÓN VERIFICAR */}
            <TouchableOpacity
                onPress={handleVerify}
                disabled={!isComplete}
                className={`py-4 rounded-2xl shadow-md ${isComplete ? "bg-amy-morado" : "bg-gray-300"
                    }`}
            >
                <Text className="text-center text-white font-bold text-lg">
                    Verificar
                </Text>
            </TouchableOpacity>

            {/* RESEND + TIMER */}
            <View className="flex-row justify-center mt-6">
                {secondsLeft > 0 ? (
                    <Text className="text-gray-600">
                        Puedes reenviar en{" "}
                        <Text className="font-bold text-amy-morado">
                            {secondsLeft}s
                        </Text>
                    </Text>
                ) : (
                    <>
                        <Text className="text-gray-600">¿No recibiste el código?</Text>
                        <TouchableOpacity onPress={handleResend}>
                            <Text className="text-amy-morado font-bold ml-2">
                                Reenviar
                            </Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>

            {/* MODAL ESPERA */}
            <Modal transparent visible={loading} animationType="fade">
                <View className="flex-1 bg-black/40 justify-center items-center">
                    <View className="bg-white p-8 rounded-2xl shadow-xl items-center w-64">
                        <ActivityIndicator size="large" color="#9B4F96" />
                        <Text className="mt-4 text-lg font-semibold text-gray-700">
                            Por favor espera...
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
