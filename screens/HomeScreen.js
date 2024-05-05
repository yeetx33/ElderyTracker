import React from 'react';
import {SafeAreaView, Text,Image, View, StyleSheet,TextInput, TouchableOpacity,Button } from 'react-native';


const HomeScreen=({navigation}) => {
    return(
           <SafeAreaView  style={{flex:1,justifyContent:'center'  }}>
  <View style={{paddingHorizontal:25}}>
     <View style={styles.bg}>
      <Image 
   
        source={require('../assets/username1.png')}
        style={styles.image}
      />
      </View>
 <Text style={styles.text1}>E-mail:</Text>
<View style={styles.input1}>
  <TextInput placeholder='enter your email'  editable style={styles.int1}></TextInput>
    </View>
    <Text style={styles.text1}>Password:</Text>
<View style={styles.input1}>
  <TextInput secureTextEntry={true} placeholder='enter your password'  editable style={styles.int1}/>
   </View>
<View style={styles.to2} > 
<Button 
 //color="#3b95ec" 
 color="#278beb"
  title=" Log in" 
            onPress={()=> navigation.navigate('UserScreen')}/>
</View>
<View style={styles.dont}  >
    <Text >Don't have an account ?</Text></View>
<View style={styles.to3} justifyContent= 'center'>
<Button 
color="#113bb1"
 style={styles.bu2} title="Sign up" 
            onPress={()=> navigation.navigate('SignUp')}/>
</View>
        </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    text1: {
     // fontFamily: 'Velvet',
      fontSize: 15,
      color: '#003974',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    bg:{
      paddingLeft: -30,
      backgroundColor: "#ffffff",
    },
    image: {
      width: 300,
      height: 300,
    },
   
    int1 : {
  height: 40,
    },
    input1: {
  flexDirection: 'row',
  borderBottomColor: '#ccc',
  borderBottomWidth: 1,
  marginBottom: 10,
  paddingHorizontal: 10,
  backgroundColor:'#d9e6f1',
    },
    forget: {
  color: '#ccc',
  fontWeight: 700,
    },
    b1 : {

  paddingHorizontal: 95,
  alignItems: 'center',
  justifyContent: 'center',
  //marginTop: 10,
 // flexDirection: 'row', 
    },
    to1: {
  height: 50,
  
    },
    to1: {
      alignSelf: 'stretch',
       backgroundColor:'#106cbb',
       padding: 3,
       borderRadius: 4 ,
       marginBottom: 3,
       elevation:9,
     },
    to2: {
        paddingHorizontal: 95,
    paddingBottom: 30,
    paddingTop: 10,
      fontWeight: 'bold',

  textAlign: 'center',

     },
     dont:{
        color: '#003974',
      
  marginTop: 5,
        marginBottom: 8,
        alignItems: 'center',
    
     },
     to3: {
        paddingHorizontal: 95,
    //  flexDirection: row,
      justifyContent:'center',

     },
     
     bu1:{
        height: 100, 
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        elevation:30,
        flexDirection: 'row', 
        justifyContent:'center',
        backgroundColor: '#6495ed',
      
       
     },
     bu2:{
        justifyContent:'center',
        backgroundColor: '#003366',
   
     },
  });
export default HomeScreen;