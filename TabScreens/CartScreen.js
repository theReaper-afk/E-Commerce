import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const Cart = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Cart</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>

    )

};

export default Cart;


