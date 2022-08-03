import React from 'react'
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer'

const FeedScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>Feed Screen</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.openDrawer()}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.toggleDrawer()}>
        <Text>Toggle Drawer</Text>
      </TouchableOpacity>
    </View>
  )
}

const NotificationsScreen = () => {
  return(
    <View style={styles.container}>
      <Text>Notifications Screen</Text>
    </View>
  )
}

const CustomDrawerContent = (props) => {
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem label="Close Drawer" onPress={() => props.navigation.closeDrawer()}/>
      <DrawerItem label="Toggle Drawer" onPress={() => props.navigation.toggleDrawer()}/>
    </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return(
    <Drawer.Navigator useLegacyImplementation drawerContent={(props) => <CustomDrawerContent {...props}/>}>
      <Drawer.Screen name='Feed' component={FeedScreen}/>
      <Drawer.Screen name='NotificationsScreen' component={NotificationsScreen}/>
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  btn: {
    margin: 10,
    padding: 20,
    backgroundColor:'red'
  }
})
const App = () => {
  return(
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )
}
export default App