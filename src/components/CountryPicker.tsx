import React, { useState } from "react";
import {
    FlatList,
    Image,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const COUNTRIES = [
    { code: "+1", name: "Estados Unidos", flag: "https://flagcdn.com/us.png" },
    { code: "+52", name: "México", flag: "https://flagcdn.com/mx.png" },
    { code: "+57", name: "Colombia", flag: "https://flagcdn.com/co.png" },
    { code: "+51", name: "Perú", flag: "https://flagcdn.com/pe.png" },
    { code: "+54", name: "Argentina", flag: "https://flagcdn.com/ar.png" },
    { code: "+34", name: "España", flag: "https://flagcdn.com/es.png" },
    { code: "+91", name: "India", flag: "https://flagcdn.com/in.png" },
];

interface Props {
    value: string;
    onSelect: (code: string) => void;
}

export default function CountryPicker({ value, onSelect }: Props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [search, setSearch] = useState("");

    const filtered = COUNTRIES.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {/* BOTÓN PRINCIPAL */}
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                className="flex-row items-center bg-gray-100 px-3 py-2 rounded-xl"
            >
                <Image
                    source={{ uri: COUNTRIES.find((c) => c.code === value)?.flag }}
                    className="w-6 h-6 rounded-full mr-2"
                />
                <Text className="font-semibold text-gray-700">{value}</Text>
            </TouchableOpacity>

            {/* MODAL */}
            <Modal visible={modalVisible} transparent animationType="slide">
                <View className="flex-1 bg-black/40 justify-end">
                    <View className="bg-white p-6 rounded-t-3xl h-[70%]">

                        <Text className="text-xl font-bold text-amy-morado mb-4 text-center">
                            Selecciona tu país
                        </Text>

                        {/* BUSCADOR */}
                        <TextInput
                            placeholder="Buscar país"
                            placeholderTextColor="#999"
                            className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
                            value={search}
                            onChangeText={setSearch}
                        />

                        {/* LISTA */}
                        <FlatList
                            data={filtered}
                            keyExtractor={(item) => item.code}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        onSelect(item.code);
                                        setModalVisible(false);
                                    }}
                                    className="flex-row items-center py-3 border-b border-gray-100"
                                >
                                    <Image source={{ uri: item.flag }} className="w-8 h-8 rounded-full mr-4" />
                                    <Text className="text-lg text-gray-800">{item.name}</Text>
                                    <Text className="ml-auto text-gray-600">{item.code}</Text>
                                </TouchableOpacity>
                            )}
                        />

                        {/* BOTÓN CERRAR */}
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            className="mt-4 bg-amy-morado py-3 rounded-xl"
                        >
                            <Text className="text-center text-white font-bold">Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}
