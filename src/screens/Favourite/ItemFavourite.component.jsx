import { Text, View, Image, Pressable } from "react-native";
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { asyncStorage } from "../../data/asyncStorage";

export default function ItemFavourite({ data }) {

    const removeFromFavourite = async () => {
        const old = await asyncStorage.retrieveData("favouriteLists")
        let oldFavouriteLists = JSON.parse(old || '[]') || [];
        oldFavouriteLists = oldFavouriteLists.filter(item => item.id != data.id)
        await asyncStorage.storeData("favouriteLists", JSON.stringify(oldFavouriteLists))
    }
    
    return (
        <View className="flex-row items-center justify-between"
            style={{
                marginTop: 5, marginBottom:10,
                borderRadius: 10,
                shadowColor: 'green',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3, 
                shadowRadius: 4, 
                elevation: 5
            }}>
            <View className='flex-row gap-3'>
                <Image
                    source={data.imageUrl}
                    style={{ width: 100, height: 100 }}
                />
                <View style={{ paddingLeft: 4, justifyContent: 'space-evenly' }}>
                    <Text className='text-xl font-bold'>{data.name}</Text>
                    <Text className='text-xl font-bold text-start opacity-40'>{data.price} $</Text>
                </View>
            </View>
            <Pressable onPress={() => removeFromFavourite()} key={data.id}>
                <View className="p-1 pr-4" >
                    <Ionicons size={24} name="trash-bin" color="red" />
                </View>
            </Pressable>
        </View>
    );
}
