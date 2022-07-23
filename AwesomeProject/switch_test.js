import React from 'react'
import {View,Switch,StyleSheet} from 'react-native'

const SwitchExample = (props) => {
    return(
        <View style={styles.container}>
            <Switch value={props.switchValue} onValueChange={props.toggleSwitch}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        marginTop:100
    }
})
export default SwitchExample