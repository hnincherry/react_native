import React from 'react'
import { Container , RowContainer, Header, Title, Line, Menu} from './components/style'
import {View,StyleSheet, Text, Platform,TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import CategoryScreen from './screen/CategoryScreen';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo'
import MaterialCommunityIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from './screen/CartScreen';
import AccountScreen from './screen/AccountScreen';
import AboutUsScreen from './screen/AboutUsScreen';
import ContactUsScreen from './screen/ContactUsScreen';
import LanguageScreen from './screen/LanguageScreen';
import PrivacyScreen from './screen/PrivacyScreen';
import TermsScreen from './screen/TermsScreen';
import ProfileScreen from './screen/ProfileScreen';

import HomeScreen from './screen/HomeScreen';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { CustomDrawerHeader } from './components/CustomDrawerHeader';
import { color } from 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screen/LoginScreen';
import EmptyCartScreen from './screen/EmptyCartScreen';
import RegisterSuccessScreen from './screen/RegisterSuccessScreen';
import ForgetPassword from './screen/ForgetPassword';
import ResetPassword from './screen/ResetPassword';
import EditProfileScreen from './screen/EditProfileScreen';

import DrawerMenu from "./DrawerMenu"
import ProductScreen from './screen/ProductScreen';
import { ProductHeader } from './components/ProductHeader';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return(
    <Drawer.Navigator 
      drawerStyle={{ width: 300 }}
      overlayColor='#1F2430'
      drawerContent={props => <DrawerMenu {...props} />}
      screenOptions={{ headerShown: false }}
    // initialRouteName='TabScreen'
      // useLegacyImplementation
    
      // screenOptions={{
      //   headerShown: true,
      //   headerStyle: {
      //     backgroundColor: 'transparent',
      //     elevation: 0,
      //     shadowOpacity: 0,
      //   },
      //   headerTitle: '',
        
      // }}

      // drawerContent={props => <DrawerMenu {...props} />}
      // screenOptions={{ headerShown: false }}
      
    //   drawerContent={props => <CustomDrawerHeader {...props}
    //   backgroundColor={'#f6f6f6'}
    //    />
    // }
    >

      <Drawer.Screen 
        name='Home Drawer' 
        component={TabScreen} 
        // options={{drawerLabelStyle: {fontSize:17}}}
        />          
        
      {/* <Drawer.Screen
         
        name='About Us' 
        component={AboutUsScreen} 
        options={{drawerIcon: config => <Ionicons size={25} name={Platform.OS === 'android' ? 'information-circle' : 'ios-information-circle'}></Ionicons>,
                  drawerLabelStyle: {fontSize:17}  
        }}/>
      <Drawer.Screen 
        name='Contact Us' 
        component={ContactUsScreen}
        options={{drawerIcon: config => <MaterialCommunityIcon size={25} name='phone-in-talk-outline'></MaterialCommunityIcon>,
                  drawerLabelStyle: {fontSize:17}  
        }}/>
      <Drawer.Screen 
        name='Language' 
        component={LanguageScreen}
        options={{drawerIcon: config => <MaterialIcon size={25} name='language'></MaterialIcon>,
                  drawerLabelStyle: {fontSize:17}  
        }}/>
      <Drawer.Screen 
        name='Privacy Policy' 
        component={PrivacyScreen}
        options={{drawerIcon: config => <MaterialCommunityIcon size={25} name='shield-half-full'></MaterialCommunityIcon>,
                  drawerLabelStyle: {fontSize:17} 
        }}/>
      <Drawer.Screen 
        name='Terms & Conditions' 
        component={TermsScreen}
        options={{drawerIcon: config => <MaterialCommunityIcon size={25} name='note-text'></MaterialCommunityIcon>,
                  drawerLabelStyle: {fontSize:17} 
      }}/> */}
    </Drawer.Navigator>
    
  )
}

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return(
    <Tab.Navigator
    initialRouteName='Home'
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            let color;

            if(color = focused ? '#ffc640' : '#8f9491') {
              if(route.name === 'Home') {
                iconName = 'home-outline'
              }else if(route.name === 'All Category') {
                iconName = 'menu'
              }else if(route.name === 'Cart') {
                iconName = 'cart-outline'
              }else if(route.name === 'Account') {
                iconName = 'person-outline'
              }
            }
            
            return <Ionicons name={iconName} color={color} size={25}/>
          },
          tabBarLabel: ({focused,color,size}) => {
            let label;
            if(color = focused ? '#ffc640' : '#8f9491') {
              if(route.name === 'Home') {
                label = 'Home'
              }else if(route.name === 'All Category') {
                label = 'Category'
              }else if(route.name === 'Cart') {
                label = 'Cart'
              }else if(route.name === 'Account') {
                label = 'Account'
              }
            }
            return <Text style={{color:color}}>{label}</Text>
          },
          tabBarHideOnKeyboard: true
        })}
        
      >
        
        <Tab.Screen name='Home' component={HomeScreen} options={{headerShown:false}} />
        <Tab.Screen name='All Category' component={CategoryScreen}/>
        <Tab.Screen name='Cart' component={EmptyCartScreen} options={{tabBarBadge:4,tabBarBadgeStyle: {backgroundColor:'#ffc640'}}}/>
        <Tab.Screen name='Account' component={AccountScreen}/>
      </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();
// const ProductStack = createStackNavigator({ProductHeader})


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      //  initialRouteName='RoutesDrawerMenu'
      //  screenOptions={{ headerShown: false }}
      >
        
        <Stack.Screen name='Stack Home' component={DrawerScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='Edit Profile' component={EditProfileScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Product' component={ProductScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>

    // <Container>
    //   <Header>Header</Header>
    //   <RowContainer>
    //     <Icon name="arrow-back" size={25} color="black"/>
    //     <Title>Page Name</Title>
       
    //   </RowContainer>
    //   <Line/>
    //   <Header>Footer</Header>
    //   <Line/>
    //   <RowContainer>
    //     <Menu>
    //       <Icon name="home" size={25}/>
    //       <Text>Home</Text>
    //     </Menu>
    //     <Menu>
    //       <Icon name="menu" size={25}/>
    //       <Text>Category</Text>
    //     </Menu>
    //     <Menu>
    //       <Icon name="cart" size={25}/>
    //       <Text>Cart</Text>
    //     </Menu>
    //     <Menu>
    //       <Icon name="person" size={25}/>
    //       <Text>Account</Text>
    //     </Menu>
    //   </RowContainer>
      
      
    // </Container>
    // <View>
    //   <Filter/>
    //   <ContactUs/>
    // </View> 

    
  )
}

export default App
