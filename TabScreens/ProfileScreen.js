import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import firebase from 'firebase'
import 'firebase/auth';


const Profile = ({navigation}) => {

    const onPressSignOut = (user) => {
		firebase.auth().signOut()
        .then(navigation.navigate('MyStack'))
		.catch((error) => {
			// An error happened.
		  });
		  console.log("user", user);
	}



return (
<View style= {styles.container}>
    <Text>Cart</Text>
    <Button
    title= "Sign Out"
    onPress={onPressSignOut}/>
</View>

)

}

export default Profile;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `rgb(257, 90, 0)`
    },
    bannerContainer: {
        flex: 1,
        height: 30
    },
    banner: {
        flex: 1,
        width: '100%',
        height: 30
    },
    Welcome: {
  
  
  
    }
  
  })
