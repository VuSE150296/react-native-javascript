
import { View, Text, Image } from "react-native";
import React from 'react';


export default function ProductDetailScreen({ product }) {
    console.log(product)
    return (
        <View className="px-4 mt-12">
            <Text> ProductDetail</Text>
            <View>
                <Image
                    source={{ uri: 'asset:/brassia-orchid.png' }}
                    style={{ width: 200, height: 200 }} />
                <Text>{product.name}</Text>
                <Text>{product.shortDescription}</Text>
                <Text>{product.price}</Text>
                <Text>{product.longDescription}</Text>
            </View>
        </View >
    );
}
