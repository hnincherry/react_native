import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/dist/FontAwesome"
import { Item } from './style'

export const AccountCom = props => {
    
    // const onPressHanlde = _ => {
    //     props.OnPress()
    // }

  return (
    <View style={styles.list}>
        <TouchableOpacity onPress={props.OnPress}>
        <View style={styles.direction}>
            <Item>{props.name}</Item>
            <View style={{alignItems:"flex-end",flex:1}}>
                <Icon name="angle-right" size={20} style={{padding:10}}/>
            </View>
           
        </View>
        </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight:15,
        marginTop:2,
        height: 50,
        borderRadius: 3
    },

    direction: {
        flexDirection: 'row',
        alignItems:'center',
        
    },
})

