// import * as React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import HomeScreen from '../screens/home/Home.screen';
// import FavouriteScreen from '../screens/Favourite.screen';
// import { createStackNavigator } from '@react-navigation/stack';


// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
// const screens = [
//     {
//         tabBarLabel: "Home",
//         component: HomeScreen,
//         tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" color={color} size={size} />
//         ),
//     },
//     {
//         tabBarLabel: "Favourite",
//         component: FavouriteScreen,
//         tabBarIcon: ({ color, size }) => (
//             <Ionicons name="heart" color={color} size={size} />
//         ),
//     }
// ]
// export default function Navigation() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//                 screenOptions={({ route }) => ({
//                     headerShown: false,
//                     showIcon: true,
//                 })}
//             >
//                 {
//                     screens.map(item => (
//                         <Tab.Screen key={item.tabBarLabel} name={item.tabBarLabel} component={item.component} options={{
//                             tabBarLabel: item.tabBarLabel,
//                             tabBarIcon: item.tabBarIcon
//                         }} />
//                     ))
//                 }
//             </Tab.Navigator>
//             <Stack.Navigator
//                 screenOptions={() => ({
//                     headerBackTitleVisible: false,
//                     headerTintColor: 'black',
//                     headerRight: () => <Home />,
//                     headerTitleStyle: {
//                         fontFamily: fonts.SourceSansProLight,
//                         fontSize: 24,
//                         fontWeight: '300',
//                     },
//                     headerBackImage: () => <Icon name="chevron-left" size={48} />,
//                 })}>
//             </Stack.Navigator>
//         </NavigationContainer>

//     );
// }
