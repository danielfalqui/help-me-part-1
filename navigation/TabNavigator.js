import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HouseKepperScreen from '../screens/HouseKepperScreen ';
import GardnerScreen from '../screens/GardnerScreen';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
    render(){
        return(
            <NavigationContainer>
            <Tab.Navigator initialRouteName='HouseKepperScreen' screenOptions={{headerShown: false}}>
              <Tab.Screen name="HouseKepperScreen" component={HouseKepperScreen} />
              <Tab.Screen name="GardnerScreen" component={GardnerScreen} />
            </Tab.Navigator>

          </NavigationContainer>
        )
    }
}