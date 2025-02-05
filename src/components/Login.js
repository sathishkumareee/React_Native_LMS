import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../shared/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Login() {
  return (
    <View>
      <Image source={require('../assests/images/login.png')} style={{width:'100%'}}/>
      <View style={styles.login_container}>
      <Text style={styles.welcome_text}>Welcome to Education App</Text>
      </View>
      <Text style={styles.login_signup_text}>Login/Signup</Text>
      <View style={styles.sign_in_google_button}>
        <AntDesign name='google' size={18} color="#fff" />
        <Text style={styles.sign_in_google_text} >Sign In with Google</Text>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    login_container:{
        paddingTop:20,
        marginTop:-20,
        backgroundColor:'#fff',
        borderTopRightRadius:25,
        borderTopLeftRadius:25
    },
    welcome_text:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold'
    },
    login_signup_text:{
        textAlign:'center',
        marginTop:'30%',
        fontSize:25,
        fontWeight:'bold'
    },
    sign_in_google_button:{
        width:'80%',
        height: 50,
        backgroundColor:Colors.primary,
        borderRadius:10,
        alignSelf:'center',
        marginTop:'5%',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    sign_in_google_text:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:Colors.white,
        marginLeft:10
    }
})