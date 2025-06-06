import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton, SecondaryButton } from '../views/components/Button';

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#FFE5B4',
      alignItems:"center",
  },
  logo:{
      height:80,
      width:40,
      marginVertical: 5,
  },
  bannerImage:{
      height:250,
      width:261,
      marginVertical: 10,
  },
  title:{
      fontSize:36,
      fontWeight: 'bold',
      paddingHorizontal: 2,
      textAlign: 'center',
      color: colors.primary,
      marginTop: 5,
  },
  SubTitle:{
    fontSize: 18,
    fontFamily:fonts.Medium,
    color:'#F9813A',
    paddingHorizontal: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  
  LoginbuttonWrapper:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius:98,
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
  button:{
    width:'100%',
    padding: 10,

  },
  button1:{
    marginBottom:10,
  },
  button2:{
    marginBottom:90,
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
      <Text style={styles.title}>Welcome Resturant App</Text>
      <Text style={styles.SubTitle}>First Mayar Waleed Nawas React Native Project</Text>
    <View style={styles.button}>
      <View style={styles.button1}>
        <SecondaryButton title="Login"  onPress={handleLogin}></SecondaryButton>
      </View>
      <View  style={styles.button2}>
        <PrimaryButton title="Sign-up"  onPress={handleSignup}></PrimaryButton>
      </View>
    </View>
    </View>
    
  );
};

export default HomeScreen
