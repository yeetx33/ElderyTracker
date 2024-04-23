import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignUp from './screens/SignUp';
import UserScreen from './screens/UserScreen';
import {NavigationContainer} from '@react-navigation/native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function App() {
  const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

  return (
  
    <NavigationContainer  >
   <Stack.Navigator initialRouteName='LogIn' >
        
        <Stack.Screen  name="HomeScreen"component={HomeScreen} options={{contentStyle:{backgroundColor:'white'}, headerShown:false,initialRouteName:'LogIn' }}/>
        <Stack.Screen name="SignUp" component={SignUp}  options={{contentStyle:{backgroundColor:"#d9e6f1"},headerShown:false}} />
        <Stack.Screen name="UserScreen" component={UserScreen}  options={{headerShown:false}}  />
      </Stack.Navigator>
 
    </NavigationContainer>
  
 

);
}

export default App;