import React from 'react'
import {StyleSheet,View,Text} from 'react-native'

const PresentationalComponent = props => {
    
    return (
        <View>
            <Text style={styles.text} {...props}>{props.myState}</Text>

            <View style={{alignItems:'center',justifyContent:'center'}}>
                <View style={styles.box1}></View>
                <View style={styles.box2}></View>
                <View style={styles.box3}></View>
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        fontSize:30,
        fontWeight:'bold',
        color: 'blue'
    },
    box1: {
        backgroundColor: 'red',
        width: 100,
        height: 100
    },
    box2: {
        backgroundColor: 'yellow',
        width: 100,
        height: 100
    },
    box3: {
        backgroundColor: 'green',
        width: 100,
        height: 100
    }
   
})
export default PresentationalComponent