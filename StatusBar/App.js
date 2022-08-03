// import * as React from 'react'
// import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
// import createNativeStackNavigator from '@react-navigation/stack'
// import { NavigationContainer } from '@react-navigation/native'

// const FirstScreen = ({navigation}) => {
//   return(
//     <View style={styles.container}>
//       <Text>FIRST SCREEN</Text>
//       <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Second')}>
//         <Text>Go to Second</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// const SecondScreen = ({navigation}) => {
//   return(
//     <View style={styles.container}>
//       <Text>SECOND SCREEN</Text>
//       <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Second')}>
//         <Text>Go to First</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     alignItems:'center',
//     justifyContent:'center'
//   },
//   btn: {
//     backgroundColor:'red',
//     padding: 20,
//     margin: 10,
//   }
// })
// const Stack = createNativeStackNavigator();

// const App = () => {
//   return(
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name='First' component={FirstScreen}/>
//         <Stack.Screen name='Second' component={SecondScreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }
// export default App

import React from "react";
import {createNativeStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();

const FirstScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>FIRST SCREEN</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Second')}>
        <Text>Go to Second</Text>
      </TouchableOpacity>
    </View>
  )
}

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='First' component={FirstScreen}/>
        {/* <Stack.Screen name='Second' component={SecondScreen}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App