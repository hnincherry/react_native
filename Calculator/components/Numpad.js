import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const Numpad = () => {
  return (
    <View style={styles.numpad}>
      <Text>Keys Will Show Up here</Text>
    </View>
  )
}

export default Numpad

const styles = StyleSheet.create({
    numpad: {
        flex:2,
        paddingBottom:8,
        paddingTop:8,
        paddingLeft:20,
        paddingRight:20
    }
})