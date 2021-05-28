import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Cart from '../TabScreens/CartScreen';
import Exclusive from '../TabScreens/ExclusiveScreen';
import HomeScreens from '../TabScreens/HomeScreen';
import Profile from '../TabScreens/ProfileScreen';
import Search from '../TabScreens/SearchScreen';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';




const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
    style= {{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ... styles.shadow
    }}
    onPress={onPress}
    >
        <View style = {{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'rgb(257, 90, 0)', 
        }}>
            {children}
        </View>
    </TouchableOpacity>
)
const Tabs = ({ navigation }) => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            style: {
                position: 'absolute',
                bottom: 10,
                elevation: 0,
                backgroundColor: '#faebd7',
                borderRadius: 15,
                height: 90,
            }
        }}>
            <Tab.Screen name="Home" component={HomeScreens}
             options = {{ tabBarIcon: ({focused}) => (
                <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                    <Image
                        source= {require('../Homes/home.png')}
                        resizeMode= "contain"
                        style = {{
                            width: 33,
                            height: 33,
                        tintColor: focused ? 'black' : 'black',
                        }} 
                       />
                    {/* <Text style={{color: focused ? 'black' : 'black', fontSize: 12 }}>
                        Home
                    </Text> */}
                </View>
                ),
                    }}/>
            <Tab.Screen name="Search" component={Search}
            options = {{ tabBarIcon: ({focused}) => (
                <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                    <Image
                        source = {require('../Searchs/search.png')}
                        resizeMode= "contain"
                        style = {{
                            width: 33,
                            height: 33,
                        tintColor: focused ? 'white' : 'black',
                        }} 
                        
                        />
                  
                </View>
                ),
                    }} />
            <Tab.Screen name="Exclusive" component={Exclusive}
            options = {{ 
                tabBarIcon: ({focused}) => (
                    <Image
                        source= {require('../Exclusives/shopping.png')}
                        resizeMode= "contain"
                        style = {{
                            width: 40,
                            height: 40,
                            
                        tintColor: 'black'
                        }} 
                    />
                ),
               
                    }} />

            <Tab.Screen name="Cart" component={Cart} 
            options = {{ tabBarIcon: ({focused}) => (
                <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                    <Image
                        source= {require('../Carts/carteu.png')}
                        resizeMode= "contain"
                        style = {{
                        width: 33,
                        height: 33,
                        tintColor: focused ? 'black' : 'black',
                        }} 
                        
                        />
                 
                </View>
                ),
                    }}/>
            <Tab.Screen name="Profile" component={Profile}
            options = {{ tabBarIcon: ({focused}) => (
                <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                    <Image
                        source= {require('../Profiles/profile.png')}
                        resizeMode= "contain"
                        style = {{
                        width: 33,
                        height: 33,
                        tintColor: focused ? 'black' : 'black',
                        }} 
                        
                        />
                  
                </View>
                ),
                    }} />
        </Tab.Navigator>


    );
}
export default Tabs;