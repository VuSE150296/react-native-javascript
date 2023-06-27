
import { Pressable, ScrollView, Text, View } from "react-native";
import React, { useState, useEffect } from 'react';
import { asyncStorage } from "../../data/asyncStorage";
import { useFocusEffect } from "@react-navigation/native";
import ItemFavourite from "./ItemFavourite.component";

export default function FavouriteScreen() {
    const [favouriteLists, setFavouriteLists] = useState([])
    useFocusEffect(() => {
        const fetchData = async () => {
            setFavouriteLists(JSON.parse(await asyncStorage.retrieveData("favouriteLists")) || [])
        };
        fetchData();
    });

     const removeAllFromFavourite = async() => {
        await asyncStorage.removeData("favouriteLists")
    }


    return (
        <View className="px-4 mt-12">
            <ScrollView
                showsHorizontalScrollIndicator={false}
            >

                {favouriteLists &&
                    favouriteLists.map((product, index) => {
                        return (

                            <ItemFavourite data={product} key={index} />

                        )
                    })
                }
            </ScrollView>
            {favouriteLists.length>0?
            <Pressable onPress={() => removeAllFromFavourite()}>
                <View className="bg-green-900" >
                    <Text className='text-center text-2xl text-white p-2 rounded-lg'>Clear all</Text>
                </View>
            </Pressable>:''}

        </View >
    );
}
