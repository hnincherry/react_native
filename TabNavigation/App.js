import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {Text,View,StyleSheet,TouchableOpacity} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailsScreen = () => {
  return(
      <View style={styles.container}>
          <Text>Details Screen</Text>    
      </View>
  )
}

const ModalScreen = ({navigation}) => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <TouchableOpacity style={styles.btn}
        onPress={() => {
          navigation.goBack()
        }}>
        <Text>Dismiss</Text>
      </TouchableOpacity>
    </View>
  )
}
const HomeScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity style={styles.btn}
        onPress={() => {
          navigation.navigate('Details')
        }}>
        <Text>Go To Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}
        onPress={() => {
          navigation.navigate('Modal')
        }}>
        <Text>Open Modal</Text>
      </TouchableOpacity>
    </View>
  )
}

const SettingsScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <TouchableOpacity style={styles.btn}
        onPress={() => {
          navigation.navigate('Details')
        }}>
        <Text>Go To Details</Text>
      </TouchableOpacity>
    </View>
  )
}

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return(
    <HomeStack.Navigator>
      <HomeStack.Group>
        <HomeStack.Screen name='Home' component={HomeScreen}/>
        <HomeStack.Screen name='Details' component={DetailsScreen}/>
      </HomeStack.Group>
      <HomeStack.Group screenOptions={{presentation:'modal'}}>
        <HomeStack.Screen name='Modal' component={ModalScreen}/>
      </HomeStack.Group>
      
    </HomeStack.Navigator>
  )
  
}

const SettingsStack = createNativeStackNavigator();

const SettingsStackScreen = () => {
  return(
    <SettingsStack.Navigator>
      <SettingsStack.Screen name='Settings' component={SettingsScreen}/>
      <SettingsStack.Screen name='Details' component={DetailsScreen}/>
    </SettingsStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const MyApp = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused,color,size}) => {
            let iconName;

            if(route.name === 'Home') {
              iconName = focused ? 'home' : 'ios-information-circle-outline';
            } else if(route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            return <Ionicons name={iconName} color={color} size={size}/>
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          headerShown: false
          
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{tabBarBadge:3}}/>
        <Tab.Screen name="Settings" component={SettingsStackScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MyApp

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  btn: {
    margin: 10,
    padding: 15,
    backgroundColor: 'red'
  }
})