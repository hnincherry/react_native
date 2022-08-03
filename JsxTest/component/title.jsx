import React from 'react'
import { View, Text } from 'react-native'
const Title = (props) => {
  console.log(props,'title')
  return (
    <View>
      <Text style={[props.textStyle,{textAlign:'center',fontSize:20}]}>{props.state}</Text>
    </View>
  )
}

export default Title;