import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = (props) => (

    <View style={style.container}>
        <Text style={style.title}>{ props.title}</Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: '#42f4d1',
    
        alignItems: 'center',
        justifyContent: 'center',  
    },
    title: {
        fontSize: 50,
        color: '#000000',
    }
});

export default Header;