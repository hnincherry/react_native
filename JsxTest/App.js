import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Title from './component/title.jsx'

const App = () => {
  const [state,setState] = React.useState('')
  return (
    // <View>
    <TouchableOpacity onPress={_ => setState('red')}>
      <Title state={state} textStyle={{color:'red',fontWeight:'100'}}/>
    </TouchableOpacity>
  )
}

export default App