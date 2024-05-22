import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES } from "../constents/theme";
import { Ionicons } from "@expo/vector-icons";
import Item from "./Item";

const data = [
  {
    name: "hisham",
    curPlace: "(from GPS)",
    heartBeat: "100 bpm",
    bloodPreaser: "115/75 mm Hg",
    bodyTmp: "36.3 C",
  },
  {
    name: "ahmad",
    curPlace: "(from GPS)",
    heartBeat: "78 bpm",
    bloodPreaser: "122/85 mm Hg",
    bodyTmp: "38.3 C",
  },
  {
    name: "ali",
    curPlace: "(from GPS)",
    heartBeat: "75 bpm",
    bloodPreaser: "122/85 mm Hg",
    bodyTmp: "63.3 C",
  },
  {
    name: "sam",
    curPlace: "(from GPS)",
    heartBeat: "75 bpm",
    bloodPreaser: "122/85 mm Hg",
    bodyTmp: "63.3 C",
  },
];

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [patiants, setPatiants] = useState(data);
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");



  const addPatiant = () => {
    const patiant = {
        name: username,
        curPlace: location || "(from GPS)",
        heartBeat: "75 bpm",
        bloodPreaser: "122/85 mm Hg",
        bodyTmp: "63.3 C",
    };
    setPatiants([...patiants, patiant]);
    setUsername('');
    setLocation('');
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView style={styles.search}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TouchableOpacity
                    style={[styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Ionicons
                      name="close-circle-outline"
                      size={26}
                      color="gray"
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 20,
                      alignSelf: "center",
                      color: COLORS.secondary,
                      fontWeight: "700",
                      textTransform: "uppercase",
                    }}
                  >
                    Add new patiant
                  </Text>
                  <ScrollView style={styles.modalBody}>
                    <View style={styles.modalInput}>
                      <Ionicons
                        name="person"
                        size={16}
                        color={COLORS.secondary}
                      />
                      <TextInput
                        style={{
                          color: COLORS.secondary,
                          fontSize: 16,
                          width: "100%",
                        }}
                        placeholder="patiant username"
                        value={username}
                        onChangeText={setUsername}
                      />
                    </View>
                    <View style={styles.modalInput}>
                      <Ionicons
                        name="location"
                        size={16}
                        color={COLORS.secondary}
                      />
                      <TextInput
                        style={{
                          color: COLORS.secondary,
                          fontSize: 16,
                          width: "50%",
                        }}
                        placeholder="location"
                        value={location}
                        onChangeText={setLocation}
                      />
                      <TouchableOpacity
                        style={{
                          backgroundColor: "white",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 5,
                          paddingHorizontal: 5,
                          borderRadius: 15,
                        }}
                        onPress={() => setLocation("(from GPS)")}
                      >
                        <Text style={{ color: "gray" }}> or from GPS</Text>
                        <Ionicons
                          name="navigate-circle"
                          size={20}
                          color={COLORS.secondary}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.modalInput}>
                      <Ionicons
                        name="watch"
                        size={16}
                        color={COLORS.secondary}
                      />
                      <TextInput
                        style={{
                          color: COLORS.secondary,
                          fontSize: 16,
                          width: "100%",
                        }}
                        placeholder="#device number"
                      />
                    </View>
                  </ScrollView>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonAdd]}
                    onPress={addPatiant}
                  >
                    <Text style={styles.textStyle}>Add patiant</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <Ionicons name="search" size={20} color="rgba(0,0,0,0.6)" />
          <TextInput
            style={styles.inputSearch}
            editable
            placeholder="search here..."
          />
        </SafeAreaView>
        <TouchableOpacity
          style={styles.addItem}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="person-add" size={26} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        {patiants.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
        <View style={styles.emptyView}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  search: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "white",
    width: "85%",
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  inputSearch: {
    width: "100%",
    fontSize: SIZES.large,
  },
  addItem: {},
  list: {
    width: "100%",
    flex: 1,
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 20,
    // marginBottom: 50,
  },
  emptyView: {
    height: 50,
    width: "100%",
  },
  centeredView: {
    marginTop: "50%",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: 150,
    borderRadius: 20,
    marginBottom: 20,
    padding: 10,
    elevation: 2,
  },
  buttonAdd: {
    backgroundColor: COLORS.secondary,
    alignSelf: "center",
  },
  buttonClose: {
    alignSelf: "flex-end",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalBody: {
    minHeight: 150,
    marginVertical: 20,
  },
  modalInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: COLORS.primary,
    padding: 10,
    margin: 5,
    borderRadius: 15,
  },
});

export default Home;
