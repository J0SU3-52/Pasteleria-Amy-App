import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function HomeScreen() {
    const [activeTab, setActiveTab] = useState("Cakes");

    const tabs = ["Cakes", "Muffins", "Bread", "Macarons", "Coffee"];

    const recommended = [
        {
            id: 1,
            title: "Carrot Cake",
            price: "$14 • 1 serve",
            image:
                "https://via.placeholder.com/300x220.png?text=Carrot+Cake",
        },
        {
            id: 2,
            title: "White Cake",
            price: "$16 • 1 serve",
            image:
                "https://via.placeholder.com/300x220.png?text=White+Cake",
        },
        {
            id: 3,
            title: "Chocolate Cake",
            price: "$18 • 1 serve",
            image:
                "https://via.placeholder.com/300x220.png?text=Chocolate+Cake",
        },
    ];

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* 🔍 TOP SEARCH BAR */}
            <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={20} color="#999" />
                <TextInput
                    placeholder="Find cakes, muffins and bread here"
                    placeholderTextColor="#aaa"
                    style={styles.searchInput}
                />
                <Ionicons name="options-outline" size={20} color="#999" />
            </View>

            {/* 🧁 CATEGORIES */}
            <View style={styles.categoriesContainer}>
                <View style={styles.categoryCard}>
                    <Image
                        source={{
                            uri: "https://via.placeholder.com/300x220.png?text=Cakes+and+Muffins",
                        }}
                        style={styles.categoryImage}
                    />
                    <Text style={styles.categoryTitle}>Cakes and Muffins</Text>
                    <Text style={styles.categorySubtitle}>
                        Lorem ipsum dolor sit amet, consectetur.
                    </Text>
                    <TouchableOpacity style={styles.categoryButton}>
                        <Text style={styles.categoryButtonText}>Find now</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.categoryCard}>
                    <Image
                        source={{
                            uri: "https://via.placeholder.com/300x220.png?text=Bread",
                        }}
                        style={styles.categoryImage}
                    />
                    <Text style={styles.categoryTitle}>Bread</Text>
                    <Text style={styles.categorySubtitle}>
                        Lorem ipsum dolor sit amet, consectetur.
                    </Text>
                    <TouchableOpacity style={styles.categoryButton}>
                        <Text style={styles.categoryButtonText}>Find now</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* ⭐ RECOMMENDED SECTION */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Recommended Products</Text>
                <Text style={styles.sectionSeeAll}>See All</Text>
            </View>

            {/* TABS */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.tabsContainer}
            >
                {tabs.map((tab) => (
                    <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
                        <Text
                            style={[
                                styles.tabText,
                                activeTab === tab && styles.activeTabText,
                            ]}
                        >
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* 🧁 PRODUCTS LIST */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 5 }}
            >
                {recommended.map((item) => (
                    <View key={item.id} style={styles.productCard}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.productImage}
                        />
                        <Text style={styles.productTitle}>{item.title}</Text>
                        <Text style={styles.productPrice}>{item.price}</Text>
                    </View>
                ))}
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#fff",
    },

    // 🔍 SEARCH BAR
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 14,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
    },

    // 🧁 CATEGORIES
    categoriesContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    categoryCard: {
        width: "48%",
        backgroundColor: "#fff",
        borderRadius: 14,
        padding: 10,
        elevation: 3,
    },
    categoryImage: {
        width: "100%",
        height: 120,
        borderRadius: 12,
    },
    categoryTitle: {
        fontSize: 15,
        fontWeight: "700",
        marginTop: 8,
    },
    categorySubtitle: {
        fontSize: 12,
        color: "#888",
        marginTop: 4,
    },
    categoryButton: {
        marginTop: 10,
        backgroundColor: "#F4A261",
        paddingVertical: 8,
        borderRadius: 8,
        alignItems: "center",
    },
    categoryButtonText: {
        color: "#fff",
        fontWeight: "600",
    },

    // ⭐ SECTION HEADER
    sectionHeader: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
    },
    sectionSeeAll: {
        fontSize: 14,
        color: "#F4A261",
        fontWeight: "600",
    },

    // TABS
    tabsContainer: {
        marginTop: 12,
        flexDirection: "row",
    },
    tabText: {
        marginRight: 18,
        fontSize: 14,
        color: "#999",
    },
    activeTabText: {
        color: "#F4A261",
        fontWeight: "700",
        borderBottomWidth: 2,
        borderBottomColor: "#F4A261",
        paddingBottom: 4,
    },

    // PRODUCTS
    productCard: {
        width: 150,
        marginRight: 15,
        backgroundColor: "#fff",
        borderRadius: 14,
        padding: 10,
        elevation: 3,
    },
    productImage: {
        width: "100%",
        height: 120,
        borderRadius: 10,
    },
    productTitle: {
        marginTop: 8,
        fontWeight: "700",
    },
    productPrice: {
        marginTop: 4,
        color: "#F4A261",
        fontWeight: "600",
    },
});
