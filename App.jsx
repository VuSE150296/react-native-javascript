import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigation/TabNavigation";


export default function App() {
  return (
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
  );
}
