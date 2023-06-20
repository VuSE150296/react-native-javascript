
import { Text, View, ScrollView, Pressable } from "react-native";
import React, { useState, useEffect } from 'react';
import { CategoryService } from "../../services/category.service";
import { ProductService } from "../../services/product.service";
import ItemCard from "./ItemCard";



export default function HomeScreen({ navigation }) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const handlePressable = (value) => {
        setSelectedCategory(value.id);
    }
    const handlePressableProduct = (value) => {
        setSelectedProduct(value);
        navigation.navigate("ProductDetail", { product: value })
    }
    useEffect(() => {
        CategoryService.listCategory().then(res => setCategories(res));
        ProductService.listProduct().then(res => setProducts(res));
    }, [])
    return (

        <View className="px-4">
            <View>
                <ScrollView horizontal
                    showsHorizontalScrollIndicator={false}
                >

                    <View className="flex flex-row mt-4">
                        {

                            categories.map((item) => {
                                const bgrColor = item.id == selectedCategory ? "bg-lime-300" : " bg-slate-200";

                                return (

                                    <Pressable onPress={() => handlePressable(item)} key={item.id}>
                                        <Text className={`${bgrColor} py-2 px-4 mr-4 rounded-xl`}>
                                            {item.name}
                                        </Text>
                                    </Pressable>


                                )
                            })

                        }


                    </View >
                </ScrollView >
            </View>
            <View className="mt-1">
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                >

                    {
                        products.map(product => {
                            return (
                                <Pressable onPress={() => handlePressableProduct(product)} key={product.id}>
                                    <ItemCard key={product.id} data={product} />
                                </Pressable>
                            )
                        }



                        )
                    }

                </ScrollView>
            </View>
            {/* {selectedProduct ? <ProductDetailScreen product={selectedProduct} /> :} */}
        </View >
    );
}
