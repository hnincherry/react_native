import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//import screen
import CategoryScreen from '../screens/CategoryScreen';
import BrandScreen from '../screens/BrandScreen';
import PromotionScreen from '../screens/PromotionScreen';
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const RouteTopTabMenu = () => {
    return(
        <TopTab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12},
                tabBarActiveTintColor: '#ffffff',
                tabBarIndicatorStyle: {
                    backgroundColor: 'white',
                    height:3
                },
                tabBarInactiveTintColor: 'black',
                tabBarStyle: { backgroundColor: '#F2651D'}
            }}
        >
            <TopTab.Screen name='Categories' component={CategoryScreen}/>
            <TopTab.Screen name='Brands' component={BrandScreen}/>
            <TopTab.Screen name='Promotions' component={PromotionScreen}/>
        </TopTab.Navigator>
    )
}

const RouteTabMenu = () => {
    return(
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route, navigation }) => ({
            header: () => (
                <HeaderList name="Header"
                OnPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
                />
            ),
            tabBarStyle: {
                height: 80,
                paddingBottom: 10,
                paddingTop: 10,
                backgroundColor: '#ffffff',
                position: 'absolute',
                borderTopWidth: 0,
            },
            tabBarActiveTintColor: "black"
            })
    
            }
            activeColor="#F2651D"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#ffffff' }}
        >
            <Tab.Screen 
                name='Home' 
                component={RouteTopTabMenu}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => focused ?
                    <View
                    style={{
                        backgroundColor: "#F2651D",
                        paddingLeft: 8,
                        paddingRight: 8,
                        paddingTop: 5,
                        paddingBottom: 5,
                        borderWidth: 1,
                        borderRadius: 8,
                        borderColor: "#F2651D",
                        paddingBottom: 10
                    }}>
                    <AntDesign name="home" color="white" size={26} />
                    </View>
                    :
                    <AntDesign name="home" color={color} size={26} />
                 
                }}
            />
            <Tab.Screen 
                name='Cart' 
                component={CartScreen}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color, focused }) =>
                      focused ?
                        <View
                          style={{
                            backgroundColor: "#F2651D",
                            paddingLeft: 8,
                            paddingRight: 8,
                            paddingTop: 5,
                            paddingBottom: 5,
                            borderWidth: 1,
                            borderRadius: 8,
                            borderColor: "#F2651D",
                            paddingBottom: 10
                          }}>
                          <MaterialCommunityIcons name="cart" color="white" size={26} />
                        </View>
                        :
                        <MaterialCommunityIcons name="cart" color={color} size={26} />
                    ,
                    tabBarBadge: 3,
                    tabBarBadgeStyle: {
                      backgroundColor: "#F2651D",
                      color: "white"
                    }
                  }}        
            />
            <Tab.Screen 
                name='Account' 
                component={AccountScreen}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, focused }) =>
                      focused ?
                        <View
                          style={{
                            backgroundColor: "#F2651D",
                            paddingLeft: 8,
                            paddingRight: 8,
                            paddingTop: 5,
                            paddingBottom: 5,
                            borderWidth: 1,
                            borderRadius: 8,
                            borderColor: "#F2651D",
                            paddingBottom: 10
                          }}>
                          <MaterialCommunityIcons name="account" color="white" size={26} />
                        </View>
                        :
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                }}
            />
        </Tab.Navigator>
    )
}

const RouteDrawerMenu = () => {
    return(
        <Drawer.Navigator
            drawerStyle={{ width: 300 }}
            overlayColor='#1F2430'
            drawerContent={props => <DrawerMenu {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name='Home Drawer' component={RouteTabMenu}/>
        </Drawer.Navigator>
    )
}

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='StackHome' component={RouteDrawerMenu}/>
        <Stack.Screen/>
        <Stack.Screen/>
    </Stack.Navigator>
  )
}

export default HomeNavigator