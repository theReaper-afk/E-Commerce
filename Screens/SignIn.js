import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import firebase from "firebase";
import 'firebase/auth';
import { firebaseConfig } from '../Firebase/Config';

import { SocialIcon } from 'react-native-elements';
import FacebookS from './FacebookS';
import GoogleS from './GoogleS';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const SignIn = ({ navigation }) => {
    

      const onSignPress = () => {
        navigation.navigate('HomeScreen')
      }
    
      
      return (
    
       <View style = {styles.color}>
       <View styles={styles.container}>            
                
                
                <Image source={{uri: 'https://www.freepnglogos.com/uploads/shopee-logo/shopee-circle-logo-design-shopping-bag-13.png'}}
                style={styles.logo} />


                <Text style = {styles.welcome}> 
                You deserve to shine!  
                 </Text>   
                 
                 <Text style = {styles.how} >
                  How would you like to Sign In?   
                 </Text>
                
                
              
                <View style = {styles.move}>
              
                 <FacebookS  navigation= {navigation} />
                 <GoogleS  navigation= {navigation} />
                 </View>
                
        </View>
        </View>
        
    )
      



}
export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fa8072',
        alignItems: 'center',
        justifyContent: 'center',
        height: -45
    },

    welcome: {
fontWeight: 'bold',
alignContent: 'center',
fontSize: 23,
justifyContent: 'center',
textAlign: 'center',
height: -30,
padding: 80,
color: 'white',
bottom: 30,



},

how: {
    alignContent: 'center',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    height: -30,
    padding: 80,
    color: 'white',
    bottom: 25

},
color: {
    backgroundColor: 'rgb(257, 90, 0)',
    
},
logo: {
width: 300,
height: 300,
alignSelf: 'center',
top: 80
},

move: {
padding: 50,
bottom: 125



}
    
});