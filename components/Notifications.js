import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Switch,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constents/theme";

const { width: screenWidth } = Dimensions.get("window");

const Notifications = () => {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(true);
  const [toggle6, setToggle6] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.pageHeader}>Notifications</Text>
        <Ionicons name="add-circle" size={40} color={COLORS.secondary} />
      </View>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.cardHead}>
            <Text style={{ fontSize: 26, fontWeight: "500" }}>Heartbeat</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={toggle1 ? COLORS.primary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                setToggle1((previousState) => !previousState)
              }
              value={toggle1}
            />
          </View>
          <Text style={{ width: 250 }}>
            heartbeat is not in the normal case (above 100 or below 60)
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHead}>
            <Text style={{ fontSize: 26, fontWeight: "500" }}>
              Body Tempreature
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={toggle2 ? COLORS.primary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                setToggle2((previousState) => !previousState)
              }
              value={toggle2}
            />
          </View>
          <Text style={{ width: 250 }}>
            body temp is not in the normal case between (33.3 - 37.6 C)
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHead}>
            <Text style={{ fontSize: 26, fontWeight: "500" }}>
              Blood Pressure
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={toggle3 ? COLORS.primary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                setToggle3((previousState) => !previousState)
              }
              value={toggle3}
            />
          </View>
          <Text style={{ width: 250 }}>
            body temp is not in the normal case between (116/81 - 162/91)
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHead}>
            <Text style={{ fontSize: 26, fontWeight: "500" }}>Fall</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={toggle4 ? COLORS.primary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                setToggle4((previousState) => !previousState)
              }
              value={toggle4}
            />
          </View>
          <Text style={{ width: 250 }}>if the patient fall</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHead}>
            <Text style={{ fontSize: 26, fontWeight: "500" }}>
              Water Remainder
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={toggle5 ? COLORS.primary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                setToggle5((previousState) => !previousState)
              }
              value={toggle5}
            />
          </View>
          <Text style={{ width: 250 }}>
            remainds you to drink water every 2 hours.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHead}>
            <Text style={{ fontSize: 26, fontWeight: "500" }}>
              Medicine Remainder
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={toggle6 ? COLORS.primary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                setToggle6((previousState) => !previousState)
              }
              value={toggle6}
            />
          </View>
          <Text style={{ width: 250 }}>set an alarm for the medicines.</Text>
        </View>

        <View
          style={{
            width: "100%",
            display: "flex",
            padding: 10,
            alignItems: "center",
            height: 300,
          }}
        >
          <Text style={{ fontSize: 14, color: "gray", paddingBottom: 10 }}>
            You can add new notify
          </Text>
          <Ionicons
            name="add-circle-outline"
            size={30}
            color="gray"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  pageHeader: {
    fontSize: 30,
    fontWeight: "700",
  },
  card: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    marginBottom: 10,
    borderBottomColor: COLORS.dark,
    borderBottomWidth: 1,
    padding: 10,
    marginHorizontal: 20,
    gap: 10,
  },
  cardHead: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Notifications;
