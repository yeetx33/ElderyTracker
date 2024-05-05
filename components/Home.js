import React from "react";
import { FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS, SIZES } from "../constents/theme";
import { Ionicons } from '@expo/vector-icons';
import Item from "./Item";


const Home = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SafeAreaView style={styles.search}>
                    <Ionicons name="search" size={20} color="rgba(0,0,0,0.6)" />
                    <TextInput style={styles.inputSearch} editable  placeholder='search here...' />
                </SafeAreaView>
                <Pressable style={styles.addItem}>
                    <Ionicons name="person-add" size={26} color={COLORS.secondary} />
                </Pressable>
            </View>
            <ScrollView style={styles.list}>
                <Item />
                <Item />
                <Item />
                <Item />
                <View style={styles.emptyView}></View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    header:{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
    },
    search:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        backgroundColor: "white",
        width: '85%',
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    inputSearch:{
        width: "100%",
        fontSize: SIZES.large,

    },
    addItem: {
        
    },
    list: {
        width: "100%",
        flex: 1,
        marginTop: 20,
        paddingVertical: 10,
        borderRadius: 20,
        // marginBottom: 50,

    },
    emptyView:{
        height: 50,
        width: "100%",
    },
})

export default Home;