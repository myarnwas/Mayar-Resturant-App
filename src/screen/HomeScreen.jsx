import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:colors.white,
      alignItems:"center",
  },
  logo:{
      height:80,
      width:40,
      marginVertical: 5,
  },
  bannerImage:{
      height:250,
      width:231,
      marginVertical: 20,
  },
  title:{
      fontSize:36,
      fontFamily:fonts.Bold,
      paddingHorizontal: 20,
      textAlign: 'center',
      color: colors.primary,
      marginTop: 40,
  },
  SubTitle:{
    fontSize: 18,
    fontFamily:fonts.Medium,
    color:colors.secondary,
    paddingHorizontal: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  buttonContainear:{
    flexDirection: "row",
    marginTop: 20,
    borderWidth:1,
    borderColor:colors.primary,
    width: '80%',
    height: 40,
    borderRadius:100,
    backgroundColor:'#000000',
  },
  LoginbuttonWrapper:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius:98,
    backgroundColor:'#ffffff',
  },
  LoginbuttonText:{
    color: '#ffffff',
    fontSize: 18,
    fontFamily:fonts.SemiBold,
  },
  SignupbuttonText:{
    fontSize: 18,
    fontFamily:fonts.SemiBold,
  },
});

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("LOGIN");
  }
  const handleSignup = () => {
    navigation.navigate("SIGNUP");
  }
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo}/>
      <Image source={require("../assets/man.png")} style={styles.bannerImage}/>
      <Text style={styles.title}>Welcome mayar react App</Text>
      <Text style={styles.SubTitle}>First Youtube Project</Text>
    <View style={styles.buttonContainear}>
      <TouchableOpacity style={[styles.LoginbuttonWrapper,
        {backgroundColor: colors.primary},
      ]}
      onPress={handleLogin}
      >
        <Text style={styles.LoginbuttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.LoginbuttonWrapper]} onPress={handleSignup}>
        <Text style={styles.SignupbuttonText}>Sign-up</Text>
      </TouchableOpacity>
    </View>
    </View>
    
  );
};

export default HomeScreen
