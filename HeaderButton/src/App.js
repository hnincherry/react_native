import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import {Text,View,StyleSheet,TouchableOpacity,Image} from 'react-native'

const Stack = createNativeStackNavigator();

const MyApp = _ => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home' 
          component={HomeScreen}
          options={{headerTitle: props => <LogoTitle text="test title" {...props}/>}}
          
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const HomeScreen = ({navigation}) => {
  const [count,setCount] = React.useState(0)

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setCount((c) => c + 1)}>
          <Text>Update Count</Text>
        </TouchableOpacity>
      )
    })
  }, [navigation])
  
  return(
    <View>
      <Text style={styles.text}>Count: {count}</Text>
    </View>
  )
}

const LogoTitle = props => {
  return(
    <>
      <Image 
        style= {{width:130,height:50}}
        source={require('./image/react_logo.png')}
      />
      <Text>{props.text}</Text>
    </>
  )
  
}

const styles = StyleSheet.create({
  text: {
    textAlign:'center',
    fontWeight:'bold',
    fontSize:30
    
  }
})


export default MyApp