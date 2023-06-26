
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
          const itemIndex = oldFavouriteLists.findIndex(item => item.id === product.id);
          
        if (itemIndex < 0){
            oldFavouriteLists.push(product);
        } else {
        
            oldFavouriteLists.splice(itemIndex, 1);
        }
          
        await asyncStorage.storeData("favouriteLists", JSON.stringify(oldFavouriteLists))
        setIsFavorite(await ProductService.checkIsFavorite(product.id))
    }
    
    const checkFavour = async() => {
          setIsFavorite(await ProductService.checkIsFavorite(product.id))  
    }
    
    useFocusEffect(() => {
        checkFavour()
    })

    return (

        <View className="px-4 mt-12 gap-5">
            <View className="shadow-xl shadow-cyan-200 w-fit h-fit">
                <View className="w-full h-96 rounded-3xl overflow-hidden relative">
                    <Image
                        source={product.imageUrl}
                        className="w-full h-full object-fill"
                    />
                    <Pressable onPress={() => addToFavourite()} key={product.id}>
                        <View className="absolute bottom-2 right-2 bg-red-800 rounded-full p-1" onPress >
                            {isFavorite ?
                                (<Ionicons size={24} name="heart" color="white" />)
                                : (<Ionicons size={24} name="heart-outline" color="white" />)
                            }
                        </View>
                    </Pressable>

                </View>
            </View>

            <View className='gap-3'>
                <Text className='text-xl font-bold'>{product.name}</Text>
                <Text className='text-xl font-bold text-right opacity-40'>{product.price}$</Text>
                <Text className='text-xl font-normal'>{product.description}</Text>
            </View>
        </View >


    );
}
