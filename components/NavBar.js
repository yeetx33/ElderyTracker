import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from "../constents/theme";

const NavBar = ({fromWhere, onChangePageHandler}) => {
    
    return (
        <View style={styles.bottomBar}>
            <Pressable style={styles.pressableIcon} onPress={() => onChangePageHandler('settings')}>
                <Ionicons style={styles.icon}  name={fromWhere === 'settings' ? "settings" : "settings-outline"} size={24} color={fromWhere === 'settings' ? COLORS.secondary : 'black'}/>
            </Pressable>
            <Pressable style={styles.pressableIcon} onPress={() => onChangePageHandler('home')}>
                <Ionicons style={styles.icon} name={fromWhere === 'home' ? "home" :"home-outline"} size={24} color={fromWhere === 'home' ? COLORS.secondary : 'black'}/>
            </Pressable>
            <Pressable style={styles.pressableIcon} onPress={() => onChangePageHandler('notifications')}>
                <Ionicons style={styles.icon} name={fromWhere === 'notifications' ? "notifications" : "notifications-outline"} size={24} color={fromWhere === 'notifications' ? COLORS.secondary : 'black'}/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomBar: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      shadowColor: "#958F8F",
      position: "absolute",
      bottom: 0,
      height: 65 + SIZES.xLarge,
      backgroundColor: COLORS.bg ,
      borderRadius: "20px 0 0 20px",
    },
    pressableIcon: {
      width: "30%",
      height: "100%",
      alignItems: "center",
      paddingTop: 15,
    },
  });


export default NavBar;
