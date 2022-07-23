import React from 'react'
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const HomeScreen = ({navigation}) => {
  const goToDetail = () => navigation.navigate('Detail', {itemId: 96,otherParam: 'anything you want here'})
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity style={styles.btn} onPress={goToDetail}>
        <Text>Go to Details</Text>
      </TouchableOpacity>
    </View>
  )
}
const DetailScreen = ({route, navigation}) => {
  const {itemId,otherParam} = route.params;

  return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Detail Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.push('Detail', {itemId: Math.floor(Math.random() * 100), otherParam: 'Updated Text'})}>
          <Text>Go to Details...again</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
          <Text>Go to Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.popToTop()}>
          <Text>Go back to first screen in stack</Text>
        </TouchableOpacity>
      </View>
  )
}
const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} options={{title:'Overview'}}/>
          <Stack.Screen name='Detail' component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  btn : {
    padding: 10,
    margin: 10,
    backgroundColor: 'yellow'

  }
}
  

)
export default App