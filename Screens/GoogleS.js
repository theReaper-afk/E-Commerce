// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import firebase from "firebase";
// import 'firebase/auth';
// import { firebaseConfig } from '../Firebase/Config';

// import { SocialIcon } from 'react-native-elements';
import { retrieveAUser, saveAUser } from '../Firebase/FirebaseHelper';
// import { ResponseType } from 'expo-auth-session';
// import * as Google from 'expo-auth-session/providers/google';


import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
// import { firebaseConfig } from '../firebase/config';
import firebase from "firebase";
import "firebase/auth";
// import { retrieveAUser, saveAUser } from '../firebase/firebaseHelper';
// import * as Google from 'expo-google-app-auth';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import { SocialIcon } from 'react-native-elements';

const GoogleS = ({ navigation }) => {

    const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
        {
          clientId: '957226946267-piag33jii6e83fvj5bnhoejoqv7mji1t.apps.googleusercontent.com',
          },
      );
    
      React.useEffect(() => {
        if (response?.type === 'success') {
          const { id_token } = response.params;
          
          const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
          firebase.auth().signInWithCredential(credential)
          .then(user => {
              console.log("successful google signin, who is user", user, user.additionalUserInfo);
              let userData = {
                provider: user.additionalUserInfo.providerId,
                displayName: user.additionalUserInfo.profile.name,
                email: user.additionalUserInfo.profile.email,
                lastLoginAt: new Date().toString(),
                uid: user.user.uid,

            }
            console.log("userdata", userData)
            saveAUser(userData);
            navigation.navigate("Tabs");
           // navigation.navigate('Tabs');
          });
        }
      }, [response]);

      return (
        <View styles={styles.container}>

            <SocialIcon
                title='Sign In With Google'
                button
                type='google'
                onPress={() => {promptAsync();}}
                style={{borderRadius: 15, marginHorizontal: 1, marginTop: -2, height:45}}
            />    

        </View>
    )




}
export default GoogleS

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //backgroundColor: '#27b2c9',
        alignItems: 'center',
        justifyContent: 'center',
    },
});