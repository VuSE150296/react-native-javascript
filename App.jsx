import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/home/Home.screen';
import { Ionicons } from '@expo/vector-icons';
import Favourite from './src/screens/Favourite.screen';


const Tab = createBottomTabNavigator();
const screens = [
  {
    tabBarLabel: "Home",
    component: Home,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="home" color={color} size={size} />
    ),
  },
  {
    tabBarLabel: "Favourite",
    component: Favourite,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="heart" color={color} size={size} />
    ),
  }
]
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          showIcon: true,
        })}
      >
        {
          screens.map(item => (
            <Tab.Screen key={item.tabBarLabel}  name={item.tabBarLabel} component={item.component} options={{
              tabBarLabel: item.tabBarLabel,
              tabBarIcon: item.tabBarIcon
            }} />
          ))
        }
      </Tab.Navigator>
    </NavigationContainer>

  );
}
