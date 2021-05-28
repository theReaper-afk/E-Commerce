import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';


const Search = ({navigation}) => {

return (
<View style= {styles.container}>
    <Text>Cart</Text>
    <Button
    title= "Click Here"
    onPress={() => alert('Button Clicked!')}
    />
</View>

)

}

export default Search;
