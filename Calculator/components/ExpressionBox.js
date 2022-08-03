import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

const ExpressionBox = (props) => {
    return(
        <>
            <Text style={styles.expressionBox}>{props.expression}</Text>
        </>  
    )
}


const styles = StyleSheet.create({
    expressionBox: {
        flex: 1,
        textAlign:'right',
        paddingRight:8,
        backgroundColor:'#909090',
        fontSize:30,
        color: '#212121',
    }
})

export default ExpressionBox;