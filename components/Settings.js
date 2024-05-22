import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Switch,
  Text,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constents/theme";

const Settings = () => {
  const [toggle3, setToggle3] = useState(false);


  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.pageHeader}>Settings</Text>
      </View>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.cardHead}>
            <Text style={{ fontSize: 22, fontWeight: "500", color: COLORS.secondary }}>username</Text>
            <Ionicons name="pencil" size={22} color={COLORS.secondary} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHead}>
            <Text style={{ fontSize: 22, fontWeight: "500", color: COLORS.secondary }}>user123@gmail.com</Text>
            <Ionicons name="pencil" size={22} color={COLORS.secondary} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHead}>
            <Text style={{ fontSize: 22, fontWeight: "500", color: COLORS.secondary }}>change password</Text>
            <Ionicons name="lock-closed" size={22} color={COLORS.secondary} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHead}>
            <Text style={{ fontSize: 22, fontWeight: "500", color: COLORS.secondary }}>change language</Text>
            <Ionicons name="globe-outline" size={22} color={COLORS.secondary} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHead}>
            <Text style={{ fontSize: 22, fontWeight: "500", color: COLORS.secondary }}>
              set dark mode
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={toggle3 ? COLORS.primary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              style={{transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }],}}
              onValueChange={() =>
                setToggle3((previousState) => !previousState)
              }
              value={toggle3}
            />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHead}>
            <Text style={{ fontSize: 22, fontWeight: "500", color: COLORS.secondary }}>about us</Text>
            <Ionicons name="help-circle-outline" size={22} color={COLORS.secondary} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHead}>
            <Text style={{ fontSize: 22, fontWeight: "500", color: COLORS.secondary }}>log out</Text>
            <Ionicons name="log-out-outline" size={22} color={COLORS.secondary} />
          </View>
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
    paddingBottom: 30,
  },
  pageHeader: {
    fontSize: 30,
    fontWeight: "700",
  },
  card: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    marginBottom: 15,
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

export default Settings;
