import React, { useEffect, useState } from 'react';
import {Image, StyleSheet, View, Text, Button} from 'react-native';
import { Avatar } from "react-native-elements";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import Signin from '../Screens/SignIn';
import FacebookS from '../Screens/FacebookS';
import { ScrollView } from 'react-native-gesture-handler';


const HomeScreens = ({route}) => {
    const {params} = route;

    const [user, setUser] = useState(null);

    useEffect(()=> {
        if(params){
            const {userData} = params;
            if(userData){
                setUser(userData);
            }
        }
    }, [])

    return (
    <ScrollView>
    <View style = {styles.container}>

     <Text style = {styles.row1}>
     New Items! 
     </Text>
     
    
    </View> 
    </ScrollView>
  )
} 



export default HomeScreens;

const styles = StyleSheet.create({
  container: {
      backgroundColor: `white`
  },
  row1: {
 fontSize: 25,
 backgroundColor: 'rgb(257, 120, 0)',
 borderTopLeftRadius: 100,
 borderTopRightRadius: 100,
 borderBottomLeftRadius: 100,
 borderBottomRightRadius: 100,
 width: 482,
 marginTop: 80,
 textAlign: 'center',
 fontFamily: 'tahoma'
 
}
})