
import { View, Text, Image, Button, Pressable } from "react-native";
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { asyncStorage, storeData } from "../../data/asyncStorage";
import { ProductService } from "../../services/product.service";
import { useFocusEffect } from "@react-navigation/native";

export default function ProductDetailScreen({ navigation, route: { params: { product } }, ...props }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const addToFavourite = async () => {
        const old = await asyncStorage.retrieveData("favouriteLists")
        const oldFavouriteLists = JSON.parse(old || '[]') || [];
        if (oldFavouriteLists.findIndex(item => item.id == product.id) < 0)
            oldFavouriteLists.push(product);
        await asyncStorage.storeData("favouriteLists", JSON.stringify(oldFavouriteLists))
        setIsFavorite(await ProductService.checkIsFavorite(product.id))
    }
    useFocusEffect(async () => {
        setIsFavorite(await ProductService.checkIsFavorite(product.id))
    })
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
                            <View className={`absolute bottom-2 right-2  ${isFavorite ? "bg-red-700":"bg-gray-500"} rounded-full p-1`} onPress >
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
