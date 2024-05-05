import {SafeAreaView,StyleSheet,TextInput, Button, Text,View} from "react-native";

const SignUp=({navigation}) => {

    return(
        <SafeAreaView>
         <View>
          
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

        <View style={styles.ca}>
            <Button  color="#326586"
            title="Create Account" 
         
            onPress={()=> navigation.navigate('UserScreen')}/>
        </View>
       
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    ca: {
  
        paddingHorizontal: 95,
        //  flexDirection: row,
          justifyContent:'center',
          
    },
    Text: {
        paddingTop: 130,
        fontSize: 20,
        paddingBottom: 40,
        fontWeight: 'bold',
        color: '#676767',
        textAlign: 'center',
    },
    TextInput: {
     
   backgroundColor:'white',
    marginBottom: 30,
   
    margin: 20,
    padding: 3,
    height: 40,
    borderWidth: 1,
    borderRadius: 1,
    fontSize: 22,
    },
    
});
export default SignUp;