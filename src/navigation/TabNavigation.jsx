// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContactStackNavigator, HomeStackNavigator } from "./StatckNavigator";
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const screens = [
  {
    tabBarLabel: "Home",
    component: HomeStackNavigator,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="home" color={color} size={size} />
    ),
  },
  {
    tabBarLabel: "Favourite",
    component: ContactStackNavigator,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="heart" color={color} size={size} />
    ),
  }
]
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        showIcon: true,
      })}
      >
      {
        screens.map(item => (
          <Tab.Screen key={item.tabBarLabel} name={item.tabBarLabel} component={item.component} options={{
            tabBarLabel: item.tabBarLabel,
            tabBarIcon: item.tabBarIcon
          }} />
        ))
      }
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
