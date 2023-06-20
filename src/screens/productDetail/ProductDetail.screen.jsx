
import { View, Text, Image, Button, Pressable } from "react-native";
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function ProductDetailScreen({ navigation, route: { params: { product } }, ...props }) {
    const addToFavourite = () => {

    }
    return (

        <View className="px-4 mt-12">
            <View>
                <View className="shadow-xl shadow-cyan-200 w-fit h-fit">
                    <View className="w-full h-96 rounded-3xl overflow-hidden relative">
                        <Image
                            source={product.imageUrl}
                            className="w-full h-full object-fill"
                        />
                        <Pressable onPress={() => addToFavourite()} key={product.id}>
                            <View className="absolute bottom-2 right-2 bg-red-700 rounded-full p-1" onPress >
                                <Ionicons size={24} name="heart-outline" color="white" />
                            </View>
                        </Pressable>

                    </View>

                </View>

                <Text>{product.name}</Text>
                <Text>{product.shortDescription}</Text>
                <Text>{product.price}</Text>
                <Text>{product.description}</Text>
            </View>

        </View >


    );
}
