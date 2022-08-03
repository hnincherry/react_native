import React from 'react'
import {Text,View,TouchableOpacity,StyleSheet,StatusBar} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer,useIsFocused } from '@react-navigation/native';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';

const HomeScreen = ({navigation}) => {
    return(
        <SafeAreaView style={[styles.container,{backgroundColor: '#fed'}]}>
            <FocusAwareStatusBar barStyle='dark-content' backgroundColor="#6a51ae"/>
            <Text>Home Screen</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Settings')}>
                <Text style={styles.text}>Go To settings</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}
const SettingsScreen = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>Settings Screen</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
                <Text style={styles.text}>Go Back Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


const FocusAwareStatusBar = (props) => {
    const isFocused = useIsFocused();
  
    return isFocused ? <StatusBar {...props} /> : null;
  }
  
const Drawer = createDrawerNavigator();


const App = () => {
    return(
        <SafeAreaProvider>
            <NavigationContainer>
                <Drawer.Navigator useLegacyImplementation initialRouteName='Home' screenOptions={{drawerPosition:'left'}}>
                    <Drawer.Screen name='Home' component={HomeScreen}/>
                    <Drawer.Screen name='Settings' component={SettingsScreen}/>
                    
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
        
    )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  btn: {
    padding: 20,
    margin: 10,
    backgroundColor: 'red'
  },
  text: {
    color: 'white',
    
  }
})