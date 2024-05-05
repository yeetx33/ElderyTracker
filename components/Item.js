import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONTS } from "../constents/theme";

const Item = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="person-circle" size={50} color={COLORS.secondary} />
                <Text style={{fontSize: SIZES.large, width: "70%"}}>Mohammad Khalil</Text>
                <Ionicons name="close-circle-outline" size={26} color={COLORS.danger} />
            </View>
            <View style={styles.body}>
                <Text>Current place: <Text style={styles.info}>(from GPS)</Text></Text>
                <Text>Heart beats: <Text style={styles.info}>75 bpm</Text></Text>
                <Text>Blood preaser: <Text style={styles.info}>122/85 mm Hg</Text></Text>
                <Text>Body temp.: <Text style={styles.info}>63.3 C</Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        marginBottom: 20,
        backgroundColor: "white",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        
    },
    header:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingTop: 10,
        gap: 10,
    },
    body:{
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 10,
        margin: 5,
    },
    info:{
        color: COLORS.secondary,
        fontSize: SIZES.medium,
        fontWeight: "800",
    },
})

export default Item;