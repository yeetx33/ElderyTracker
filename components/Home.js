import React from "react";
import { FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS, SIZES } from "../constents/theme";
import { Ionicons } from '@expo/vector-icons';
import Item from "./Item";

const data= [
    {
        name: "saja",
        curPlace: "(from GPS)",
        heartBeat:"100 bpm",
        bloodPreaser: "115/75 mm Hg",
        bodyTmp:"36.3 C"
    },
    {
        name: "ahmad",
        curPlace: "(from GPS)",
        heartBeat:"78 bpm",
        bloodPreaser: "122/85 mm Hg",
        bodyTmp:"38.3 C"
    },
    {
        name: "ali",
        curPlace: "(from GPS)",
        heartBeat:"75 bpm",
        bloodPreaser: "122/85 mm Hg",
        bodyTmp:"63.3 C"
    },
    {
        name: "sam",
        curPlace: "(from GPS)",
        heartBeat:"75 bpm",
        bloodPreaser: "122/85 mm Hg",
        bodyTmp:"63.3 C"
    },
]

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
            <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
                {data.map((item, index) => {
                    return <Item key={index} item={item}/>
                })}
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
