import { Text, View, Image } from "react-native";
import React from 'react';

export default function ItemCard({ data, image }) {
    return (
        <View style={{ flexDirection: 'row', marginTop: 3 }}>
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
        </View>
    );
}
