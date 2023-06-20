// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/Home.screen";
import Contact from "../screens/contact/Contact.screen";
import ProductDetailScreen from "../screens/productDetail/ProductDetail.screen";
import { CustomHeader } from "../component/CustomHeader.component";


const Stack = createStackNavigator();

const screenOptionStyle = {
  // headerShown: false,
  // headerStyle: {
  //   backgroundColor: "#9AC4F8",
  // },
  // headerTintColor: "white",
  // headerBackTitle: "Back",

  header: (headerData) => <CustomHeader headerData={headerData} />,

};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

export { HomeStackNavigator, ContactStackNavigator };
