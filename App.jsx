import {GestureDetector} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeScreen from "./src/screen/HomeScreen";
import HomeScreenCopy from "./src/screen/HomeScreenCopy";
import LoginScreen from "./src/screen/LoginScreen";
import SignupScreen from "./src/screen/SignupScreen";
import DetailsScreen from "./src/views/screens/DetailsScreen";
import BottomNavigator from './src/views/navigation/BottomNavigator';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import CartScreen from "./src/views/screens/CartScreen";


const App = () => {
  return (
    <GestureHandlerRootView>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        
        }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Home1" component={HomeScreenCopy} />
      <Stack.Screen name="LOGIN" component={LoginScreen} />
      <Stack.Screen name={"SIGNUP"} component={SignupScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
      <Stack.Screen name="Home3" component={BottomNavigator} />
      <Stack.Screen name="CartScreen" component={CartScreen} />

    </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})