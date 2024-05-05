import React, { useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES } from "../constents/theme";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Settings from "../components/Settings";
import Notifications from "../components/Notifications";

const UserScreen=({navigation}) => {
    const [currentPage, setCurrentPage] = useState("home");
    
    onChangePageHandler = (state) => {
      setCurrentPage(state);
    }

    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SafeAreaView style={styles.container}>
        {currentPage === 'settings' && <Settings />}
        {currentPage === 'home' && <Home />}
        {currentPage === 'notifications' && <Notifications />}
      </SafeAreaView>

      <NavBar fromWhere={currentPage} onChangePageHandler={onChangePageHandler}/>

    </View>
    );
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      width: "100%",
      flexDirection: "column",
      marginTop: Platform.OS === "android" && StatusBar.currentHeight,
      position: "relative",
      backgroundColor: COLORS.primary,
    }
  })

export default UserScreen;