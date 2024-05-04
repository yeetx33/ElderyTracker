import { StyleSheet,tabBarIcon,tabBarStyle, Text, View } from 'react-native';
import React from 'react';
import  {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{ NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import  Settings  from './screens/Settings';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import FontAwesome5 from'react-native-vector-icons/FontAwesome5'

import Homy from './screens/Homy';
import Update from './screens/Update';
import Login from './screens/Login';
import Signup from './screens/Signup';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const BottomTabs=()=> {
  return (
<Tab.Navigator
  screenOptions={{
    tabBarShowLabel:false,
    headerShown:false,
    tabBarStyle:styles.container,
    tabBarActiveTintColor:'grey',
    tabBarActiveBackgroundColor:'white',
  }}
   initialRouteName='Homy'>
    <Tab.Screen name="Settings" component={Settings} 
     options={{
      tabBarIcon:({focused}) => 
      <MaterialIcons  size={30}  name="settings" color={focused? 'black':'grey'}/>}}></Tab.Screen>
      <Tab.Screen name="Homy" component={Homy}  
    options={{
      tabBarIcon:({focused}) => 
      <FontAwesome5  size={30}  name="home" color={focused? 'black':'grey'}/>
    }}
    ></Tab.Screen>
    <Tab.Screen name="Update" component={Update} 
    options={{
      tabBarIcon:({focused}) =>
       <MaterialIcons name="notifications-on" size={30}  color={focused? 'black':'grey'} />
    }}></Tab.Screen>
  </Tab.Navigator>
  );
}

  const App=()=>{
return(
  <NavigationContainer>
  <Stack.Navigator >
    <Stack.Screen name ="Login" component={Login} 
    options={{contentStyle:styles.bg,
     headerShown:false}}
    ></Stack.Screen>
    <Stack.Screen name ="Signup" component={Signup}
    options={{contentStyle:{backgroundColor:"#d9e6f1"},
    headerShown:false}}
    ></Stack.Screen>
   < Stack.Screen name ="BottomTabs" component={BottomTabs}
   options={{headerShown:false}} 
   ></Stack.Screen>
    </Stack.Navigator>
</NavigationContainer>

)

  }
export default App;
const styles = StyleSheet.create({
  container:{
  position:' absolute',
  width: '90%',
  left :'5%',
  height: 60,
  bottom: 20,
  backgroundColor :'white',
//borderRadius:30,
  },

  bg:{
backgroundColor: 'white',

  }
  });
