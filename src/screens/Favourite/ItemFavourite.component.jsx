import { Text, View, Image, Pressable } from "react-native";
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { asyncStorage } from "../../data/asyncStorage";

export default function ItemFavourite({ data }) {

    const removeToFavourite = async () => {
        const old = await asyncStorage.retrieveData("favouriteLists")
        let oldFavouriteLists = JSON.parse(old || '[]') || [];
        oldFavouriteLists = oldFavouriteLists.filter(item => item.id != data.id)
        await asyncStorage.storeData("favouriteLists", JSON.stringify(oldFavouriteLists))
    }
    return (
        <View className="flex-row relative mt-3">
            <Image
                source={data.imageUrl}
                style={{ width: 100, height: 100 }}
            />
            <View style={{ paddingLeft: 4, justifyContent: 'space-evenly' }}>
                <View>
                    <Text numberOfLines={1} style={{ width: 160, fontWeight: 'bold', fontSize: 16 }}>{data.name}</Text>
                    <Text style={{ color: 'gray' }}>{data.shortDescription}</Text>
                </View>
                <Text>{data.price} $</Text>
            </View>

            <Pressable onPress={() => removeToFavourite()} key={data.id}>
                <View className="absolute bottom-2 right-2 rounded-full p-1" >
                    <Ionicons size={24} name="close-circle" color="red" />
                </View>
            </Pressable>
        </View>
    );
}
