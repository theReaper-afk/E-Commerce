import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Button, StyleSheet, } from 'react-native';
import { useEffect } from 'react';
import firebase from "firebase/app";
import { firebaseConfig } from './Firebase/Config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './Screens/SignIn';
import HomeScreens from './TabScreens/HomeScreen';
import Tabs from './Navigation/Tabs';




if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

const MyStack = () => {
       
  return (
      <Stack.Navigator>
        <Stack.Screen  
          name="Signin"
          component={SignIn}
          options={{ title: 'Sign in',  header: () => null }}
        />
{/*        
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreens}
          options={{ title: 'Home Screen',  header: () => null }}
        /> */}


      </Stack.Navigator>

  )
}

const MainStack = createStackNavigator();
const MainStackNavi = ({navigation, route}) => {

  return(
      <MainStack.Navigator>
        <MainStack.Screen name="MyStack" component={MyStack} options={{ header: () => null }}/>
        <MainStack.Screen name="Tabs" component={Tabs} options={{ header: () => null }}/>
      </MainStack.Navigator>
  );
}




const App = () => {
  return (
    <NavigationContainer>
 <MainStackNavi />
    </NavigationContainer>
   
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 13.
  }
});    











