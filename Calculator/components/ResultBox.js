import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

const ResultBox = (props) => {
    return(
        <>
            <Text style={styles.resultBox}>{props.result}</Text>
        </>  
    )
}

export default ResultBox;

const styles = StyleSheet.create({
    resultBox: {
        flex: 1,
        textAlign:'right',
        paddingRight:8,
        backgroundColor:'#909090',
        fontSize:26,
        color: '#424242',
    }
})


