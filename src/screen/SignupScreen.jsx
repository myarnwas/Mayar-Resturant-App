import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import { useNavigation } from '@react-navigation/native'


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.white,
    padding:20,
  },
  backbuttonWrapper:{
    height:50,
    width:50,
    backgroundColor: '#D9D9D9',
    borderRadius:25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textcontainer:{
    marginVertical: 20,
  },
  headingText:{
    fontSize:32,
    color:colors.primary,
    fontFamily:fonts.SemiBold,
  },
  formContainer:{
    marginTop:20,

  },
  inputContainer:{
    color:colors.secondary,
    borderWidth:1,
    flexDirection:"row",
    borderRadius:100,
    paddingHorizontal:20,
    alignItems: 'center',
    padding:2,
    marginVertical: 5,
  },
  textInput:{
    paddingHorizontal:10,
    flex: 1,
    fontFamily:fonts.Light,
  },
  ForgetPasswordText:{
    textAlign: 'right',
    color:colors.primary,
    fontFamily:fonts.SemiBold,
    marginVertical: 5,
  },
  LoginButtonWrapper:{
    backgroundColor:'#F9813A',
    borderRadius:100,
    width:'100%',
    height:50,
    marginVertical: 10,

  },
  LoginText:{
    color:'#ffffff',
    fontWeight:'bold',
    fontSize:18,
    textAlign:'center',
    padding:10, 
  },
  continueText:{
    textAlign:'center',
    marginVertical: 20,
    fontSize:14,
    fontFamily:fonts.Regular,
    color:colors.primary,
    
  },
  googleImage:{
    height:18,
    width:17,
  },
  googleButtonContinue:{
    borderWidth:3,
    borderRadius:100,
    borderColor:'#F9813A'
  },
  googleText:{
    fontSize:20,
    padding:10,
    textAlign:'center',
    fontFamily: fonts.SemiBold,
  },
  footerContainer:{
    flexDirection:'row',
    justifyContent:'center',
    marginVertical:20,
    gap:5,   
  },
  accountText:{
    color: '#000000',
    fontFamily:fonts.Regular,

  },
  signupText:{
    color: '#000000',
    fontFamily:fonts.Bold,

  },
})
const SignupScreen = () => {
  const [SecureEntry, setSecureEntry] = useState(true);
  
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleLogin = () => {
    navigation.navigate("LOGIN")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backbuttonWrapper} onPress={handleGoBack}>
          <Ionicons name={"arrow-back-outline"} color={colors.primary} size={30}></Ionicons>
      </TouchableOpacity>
      <View style={styles.textcontainer}>
        <Text style={styles.headingText}>Lets get, </Text>
        <Text style={styles.headingText}>Started </Text>
       {/* <Text style={styles.headingText}>Back </Text>*/} 
    </View>
   { /*form */}
    <View style={styles.formContainer}>
       <View style={styles.inputContainer}>
       <Ionicons name={"mail-outline"} color={colors.secondary} size={30}></Ionicons>
          <TextInput style={styles.textInput} placeholder='Enter your email' 
          placeholderTextColor={colors.secondary}
          keyboardType='email-address'
          />
        </View>
    </View>
    <View style={styles.formContainer}>
       <View style={styles.inputContainer}>
       <SimpleLineIcons name={"lock"} color={colors.secondary} size={30}></SimpleLineIcons>
          <TextInput style={styles.textInput} placeholder='Enter your password' 
          placeholderTextColor={colors.secondary}
          secureTextEntry={SecureEntry}
          />
          <TouchableOpacity onPress={() => {
            setSecureEntry((prev)=> !prev);
          }}>
            <SimpleLineIcons name={"eye"} color={colors.secondary} size={20}></SimpleLineIcons>
          </TouchableOpacity>
          

        </View>
        <View style={styles.inputContainer}>
       <SimpleLineIcons name={"screen-smartphone"} color={colors.secondary} size={30}></SimpleLineIcons>
          <TextInput style={styles.textInput} placeholder='Enter your phone Number' 
          placeholderTextColor={colors.secondary}
          secureTextEntry={SecureEntry}
          keyboardType='number-pad'
          />
          
          

        </View>
        {/*<TouchableOpacity>
          <Text style={styles.ForgetPasswordText}>Forget Password?</Text>
        </TouchableOpacity>*/}
        
        <TouchableOpacity style={styles.LoginButtonWrapper}>
          <Text style={styles.LoginText}>Sign up</Text>
        </TouchableOpacity>

        <Text style={styles.continueText}>or continue with</Text>
        
        <TouchableOpacity style={styles.googleButtonContinue}>
         {/*  <image source={require('../assets/man.png')}
          style={styles.googleImage}
          ></image>*/}
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity >
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
          
        </View>
    </View>
    </View>   
  )
}

export default SignupScreen

