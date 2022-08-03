import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement,increment } from './counterSlice'

export const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => dispatch(increment())} style={styles.btn}>
                <Text style={{color: 'white'}}>Increment</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{count}</Text>
            <TouchableOpacity onPress={() => dispatch(decrement())} style={styles.btn}>
                <Text style={{color: 'white'}}>Decrement</Text>
            </TouchableOpacity>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    btn: {
        backgroundColor: '#405721',
        padding: 20,
        margin: 10,
    },
    text: {
        fontSize:30,
        color: '#405721',
    }
})
export default Counter