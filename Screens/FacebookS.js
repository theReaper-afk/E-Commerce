import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';


import { SocialIcon } from 'react-native-elements';
import { firebaseConfig } from '../Firebase/Config';

import  firebase from "firebase";
import * as Facebook from 'expo-facebook';
import { retrieveAUser, saveAUser } from '../Firebase/FirebaseHelper';
import HomeScreens from '../TabScreens/HomeScreen';

const FacebookS = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const onFacebookSigninPress = async () => {
        setLoading(true);
        try {
            await Facebook.initializeAsync({
                appId: '3018859261659325',
            }); // enter your Facebook App Id 
            const { type,
                token,
                expirationDate,
                permissions,
                declinedPermissions, } = await Facebook.logInWithReadPermissionsAsync({
                    permissions: ['public_profile', 'email'],
                });
            if (type === 'success') {
                // SENDING THE TOKEN TO FIREBASE TO HANDLE AUTHyarn
               
                const credential = firebase.auth.FacebookAuthProvider.credential(token);
                firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                    .then(() => {
                        return firebase.auth().signInWithCredential(credential)
                            .then(user => {
                                // All   the details about user are in here returned from firebase            
                                // console.log("fb signin", user);   
                                console.log("facebook login ", user, user.additionalUserInfo);
                                let userData = {
                                    provider: user.additionalUserInfo.providerId,
                                    family_name: user.additionalUserInfo.profile.last_name,
                                    given_name: user.additionalUserInfo.profile.first_name,
                                    displayName: user.additionalUserInfo.profile.name,
                                    email: user.additionalUserInfo.profile.email,
                                    lastLoginAt: new Date().toString(),
                                    photoURL: user.additionalUserInfo.profile.picture.data.url,
                                    uid: user.user.uid,

                                }
                                console.log("userdata", userData)

                                saveAUser(userData);
                                navigation.navigate('Tabs', {userData: userData})
                                // navigation.navigate('Tabs', {userData: userData})
                                // onLoginSuccess(userData);
                            })
                            .catch((error) => {
                                console.log('Error occurred ', error)
                                setLoading(false);
                            });
                    });


            } else {
                // type === 'cancel'
                setLoading(false);
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }




    return (

        <View style={styles.container} >


            <SocialIcon
                title='Sign In With Facebook'
                button
                type='facebook'
                onPress={onFacebookSigninPress}
                style={{borderRadius: 15, marginHorizontal: 1, marginTop: -2, height:45}}
            />


        </View>
    )

}

const styles = StyleSheet.create({

    textinput: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 2,
        marginTop: 100

    },
    button: {
        borderColor: 'red',
        borderWidth: 5,
    },
    // container: {
    //     flex: 1,
    //     flexDirection: 'row'
    // },
    // bannerContainer: {
    //     flex: 1,
    //     height: 30
    // },
    // banner: {
    //     flex: 1,
    //     width: '100%',
    //     height: 30
    // }

})

export default FacebookS;