
import { Pressable, ScrollView, Text, View } from "react-native";
import React, { useState, useEffect } from 'react';
import { asyncStorage } from "../../data/asyncStorage";
import { useIsFocused } from "@react-navigation/native";
import ItemFavourite from "./ItemFavourite.component";

export default function FavouriteScreen({navigation,...props}) {
    const isFocused = useIsFocused();
    const [favouriteLists, setFavouriteLists] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            setFavouriteLists(JSON.parse(await asyncStorage.retrieveData("favouriteLists")) || [])
        };
        fetchData();
    }, [props, isFocused]);
    const handlePressableProduct = (value) => {
        navigation.navigate("ProductDetail", { product: value })
    }
    return (
        <View className="px-4 mt-12">
            <ScrollView
                showsHorizontalScrollIndicator={false}
            >

                {favouriteLists &&
                    favouriteLists.map((product, index) => {
                        return (
                            <Pressable onPress={() => handlePressableProduct(product)} key={product.id}>
                                <ItemFavourite data={product} key={index} />
                            </Pressable>


                        )
                    }



                    )
                }

            </ScrollView>


        </View >
    );
}
