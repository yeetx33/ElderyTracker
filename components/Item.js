import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES, FONTS } from "../constents/theme";
import RandomNumberGenerator from "./RandomNumberGenetator";

const Item = ({ item }) => {
  const [display, setDisplay] = useState("display");

  const heartBeatInterval = 10000;
  const bloodPreaserInterval = 4000;
  const bodyTmpInterval = 10000;

  const fun = () => {
    setDisplay("none");
  };

  return (
    <View style={[styles.container, { display: display }]}>
      <View style={styles.header}>
        <Ionicons name="person-circle" size={50} color={COLORS.secondary} />
        <Text style={{ fontSize: SIZES.large, width: "70%" }}>{item.name}</Text>
        <Ionicons
          name="close-circle-outline"
          size={26}
          color={COLORS.danger}
          onPress={fun}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.data}>
          <Ionicons name="medkit-outline" size={20} color={COLORS.green} />
          <Text>Current place:</Text>
          <Text style={styles.info}>{item.curPlace}</Text>
        </View>
        <View style={styles.data}>
          {/* {<Ionicons name="medkit-outline" size={20} color={COLORS.secondary} />} */}
          {item.heartBeat.min < item.heartBeat.lowLimit ||
          item.heartBeat.max > item.heartBeat.highLimit ? (
            <Ionicons name="medkit" size={20} color={COLORS.danger} />
          ) : (
            <Ionicons name="medkit-outline" size={20} color={COLORS.green} />
          )}
          <Text>Heart beats:</Text>
          <RandomNumberGenerator
            min={item.heartBeat.min}
            max={item.heartBeat.max}
            updateEvery={heartBeatInterval}
            lowLimit={item.heartBeat.lowLimit}
            highLimit={item.heartBeat.highLimit}
          />
          <Text style={styles.info}>bpm</Text>
        </View>
        <View style={styles.data}>
          {item.bloodPreaser[0].min < item.bloodPreaser[0].lowLimit ||
          item.bloodPreaser[0].max > item.bloodPreaser[0].highLimit ||
          item.bloodPreaser[1].min < item.bloodPreaser[1].lowLimit ||
          item.bloodPreaser[1].max > item.bloodPreaser[1].highLimit ? (
            <Ionicons name="medkit" size={20} color={COLORS.info} />
          ) : (
            <Ionicons name="medkit-outline" size={20} color={COLORS.green} />
          )}
          <Text>Blood preaser: </Text>
          <Text style={styles.info}></Text>
          <RandomNumberGenerator
            min={item.bloodPreaser[0].min}
            max={item.bloodPreaser[0].max}
            updateEvery={bloodPreaserInterval}
            lowLimit={item.bloodPreaser[0].lowLimit}
            highLimit={item.bloodPreaser[0].highLimit}
          />
          <Text>/</Text>
          <RandomNumberGenerator
            min={item.bloodPreaser[1].min}
            max={item.bloodPreaser[1].max}
            updateEvery={bloodPreaserInterval}
            lowLimit={item.bloodPreaser[1].lowLimit}
            highLimit={item.bloodPreaser[1].highLimit}
          />
          <Text>mm Hg</Text>
        </View>
        <View style={styles.data}>
          {
            (item.bodyTmp.min < item.bodyTmp.lowLimit || item.bodyTmp.lowLimit > item.bodyTmp.highLimit) ?
            <Ionicons name="medkit" size={20} color={COLORS.info} />
            :
            <Ionicons name="medkit-outline" size={20} color={COLORS.green} />
          }
          <Text>Body temp.:</Text>
          <RandomNumberGenerator
            min={item.bodyTmp.min}
            max={item.bodyTmp.max}
            updateEvery={bodyTmpInterval}
            lowLimit={item.bodyTmp.lowLimit}
            highLimit={item.bodyTmp.highLimit}
          />
          <Text style={styles.info}>C</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
    gap: 10,
  },
  body: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 15,
    margin: 5,
  },
  data: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    gap: 10,
    marginBottom: 5,
  },
  info: {
    color: COLORS.secondary,
    fontSize: SIZES.medium,
    fontWeight: "800",
  },
});

export default Item;
