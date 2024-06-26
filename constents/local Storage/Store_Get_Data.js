import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      console.log('Data successfully stored');
    } catch (e) {
      console.error('Failed to save the data to the storage', e);
    }
  };

  
 export const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('Failed to fetch the data from storage', e);
    }
  };
  

 export const addItem = async (key, newItem) => {
    try {
      const currentData = await getData(key);
      const updatedData = [...currentData, newItem];
      await storeData(key, updatedData);
      console.log('Item added successfully');
    } catch (e) {
      console.error('Failed to add the new item to storage', e);
    }
  };
  
//   export const removeItem = async (id) => {
//     try {
//       const currentData = await getData("myData");
//       const updatedData = currentData.filter(item => item.id !== id);
//       await storeData("myData", updatedData);
//       console.log('Item removed successfully');
//     } catch (e) {
//       console.error('Failed to remove item from storage', e);
//     }
//   };

import { PermissionsAndroid } from 'react-native';
export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'App needs access to your location',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Location permission granted');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
