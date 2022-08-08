import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const ProductCart = props => {
    return (
        <View style={styles.container}>
            <Image source={props.img} />
            <Text style={{ flex: 1, color: 'black' }}>Mukwano Vegetable Cooking Oil</Text>
            <Text style={styles.text}>9,000 Ks</Text>
        </View>
    )
}

export default ProductCart

const styles = StyleSheet.create({
    container: {
        width: 160,
        borderRadius: 5,
        backgroundColor: 'white',
        padding: 10,
        height: 200,
        margin: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    text: {
        color: '#ffc640',
        fontSize: 18,
        fontWeight: 'bold'
        // paddingTop:8,

    }
})