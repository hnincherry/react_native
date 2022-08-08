import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { Title } from './style';

//Custom Drawer Header
export const CustomDrawerHeader = props => {
  return (
    <View style={{ flex: 1 }}>
      {/* <DrawerContentScrollView {...props}> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#ffc640',
          marginBottom: 20,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name='person-circle' size={55} color='black' />
          <TouchableOpacity onPress={_ => props.navigation.navigate('Login')}>
            <Title>Login</Title>
          </TouchableOpacity>

          <Ionicons name='arrow-forward' size={25} color='black' style={{ padding: 10 }} />
        </View>
        {/* <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
              }}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            /> */}
      </View>
      {/* <DrawerItemList {...props} /> */}
      {/* </DrawerContentScrollView> */}

    </View>
  );
};
  //Custom Drawer Header