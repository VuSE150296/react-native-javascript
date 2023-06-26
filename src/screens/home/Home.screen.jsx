
import { Text, View, ScrollView, Pressable, Image, Dimensions } from "react-native";
import React, { useState, useEffect } from 'react';
import { CategoryService } from "../../services/category.service";
import { ProductService } from "../../services/product.service";
import ItemCard from "./ItemCard";
import Carousel from 'react-native-snap-carousel';


const screenWidth = Dimensions.get('screen').width;
export default function HomeScreen({ navigation }) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [products, setProducts] = useState([]);
    const [productsInCarousel, setProductsInCarousel] = useState([]);
    const handlePressable = (value) => {
        setSelectedCategory(value.id);
        ProductService.getListByCategoryId(value.id).then(res => setProducts(res));
    }
    const handlePressableProduct = (value) => {
        navigation.navigate("ProductDetail", { product: value })
    }
    useEffect(() => {
        CategoryService.listCategory().then(res => setCategories(res));
        ProductService.listProduct().then(res => setProducts(res));
        ProductService.listProduct().then(res => setProductsInCarousel(res));
    }, [])

    const padding = 10

    const CarouselItem = ({ item }) => {
        return (
            <Pressable
                key={item.id}
                onPress={() => handlePressableProduct(item)}>
                <View className="bg-green-700 p-5 rounded-xl" style={{width:screenWidth-(padding*2)}}>
                    <Image
                        source={item.imageUrl}
                        style={{width:screenWidth-(padding*6), height: 200 }}
                        resizeMode="cover"
                        alt="Image example"
                    />
                    <View className='pt-3 flex-row justify-between'>
                        <Text className="text-2xl text-white">{item.name}</Text>
                        <Text className="text-xl text-white opacity-40">{item.price}</Text>
                    </View>
                </View>
            </Pressable>
        );
    }

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}>
            <View>
                <View className="my-5" style={{ paddingLeft: padding }}>
                    <Carousel
                        layout="tinder"
                        layoutCardOffset={`9`}
                        data={productsInCarousel}
                        renderItem={CarouselItem}
                        sliderWidth={screenWidth}
                        windowSize={screenWidth}
                        itemWidth={screenWidth}
                        containerCustomStyle='mt-5  overflow-visible'
                        loop
                        autoplay
                        autoplayDelay={1000}
                    />
                </View>
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
                                })
                            }

                        </ScrollView>
                    </View>
                {/* {selectedProduct ? <ProductDetailScreen product={selectedProduct} /> :} */}
                </View >
            </View>
        </ScrollView>
    );
}
