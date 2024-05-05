import {SafeAreaView,StyleSheet,TextInput, Button, Text,View} from "react-native";

const Signup=({navigation}) => {

    return(
        <SafeAreaView style={{backgroundColor:"#D6EAF8"}}>
         <View style={{backgroundColor:"#D6EAF8"}}>
          
          <Text style={styles.Text}
          >Fill your info to create a new account :</Text>
          </View>
            <View style={styles.TextInput}>
            <TextInput keyboardType="phone-pad"
             placeholder="Enter your Phone number"
             style={styles.ca}/>
            </View>
            <View style={styles.TextInput}>
            <TextInput placeholder="Enter your Name" 
            style={styles.ca}/>
            </View>
            <View style={styles.TextInput}>
            <TextInput secureTextEntry={true} 
            placeholder="Enter your password" 
            style={styles.ca}/>
            </View>
            <View style={styles.TextInput}>
            <TextInput keyboardType="email-address" 
            placeholder="Enter your E-mail" style={styles.ca}
           
            />
            
            </View>

        <View style={styles.btn}>
            <Button 
            
            color="#326586"
            title="Create Account" 
            
            onPress={()=> navigation.navigate('BottomTabs')}/>
        </View>
       
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btn:{
        paddingTop: 70,
        marginBottom:1000,
        paddingHorizontal: 120,
          justifyContent:'center',
          
    },
    ca: {
  
        paddingHorizontal: 90,
        //  flexDirection: row,
          justifyContent:'center',
          
    },
    Text: {
        paddingTop: 180,
        fontSize: 20,
        paddingBottom: 30,
        fontWeight: 'bold',
        color: '#676767',
        textAlign: 'center',
    },
    TextInput: {
     
   backgroundColor:'white',
    marginBottom: 10,
   
    margin: 40,
    padding: 3,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 22,
    },
    
});
export default Signup;
