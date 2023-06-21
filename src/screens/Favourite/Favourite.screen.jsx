
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
                    }



                    )
                }

            </ScrollView>


        </View >
    );
}
