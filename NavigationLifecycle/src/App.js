import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import {Text,TouchableOpacity,View,StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const SettingsScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Profile')}>
        <Text>Go To Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

const ProfileScreen = ({navigation}) => {
  React.useEffect(() => navigation.addListener('focus',() => alert("Screen was focused")),[navigation]);

  React.useEffect(() => navigation.addListener('blur',() => alert("Screen was unfocused")),[navigation]);

  return(
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Settings')}>
        <Text>Go To Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

const HomeScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Details')}>
        <Text>Go To Details</Text>
      </TouchableOpacity>
    </View>
  )
}

const DetailsScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Details')}>
        <Text>Details......Again</Text>
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
    backgroundColor: 'yellow',
    padding: 10,
    margin: 10,
  }
})

const SettingStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const MyApp = _ => {
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name='First'>
          {() => (
            <SettingStack.Navigator>
              <SettingStack.Screen name='Settings' component={SettingsScreen}/>
              <SettingStack.Screen name='Profile' component={ProfileScreen}/>
            </SettingStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name='Second'>
            {() => (
              <HomeStack.Navigator>
                <HomeStack.Screen name='Home' component={HomeScreen}/>
                <HomeStack.Screen name='Details' component={DetailsScreen}/>
              </HomeStack.Navigator>
            )}
        </Tab.Screen>
      </Tab.Navigator>
      
    </NavigationContainer>
  )
}
export default MyApp