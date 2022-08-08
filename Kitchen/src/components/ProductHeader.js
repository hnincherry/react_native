import React, { useState } from "react";
import { Platform, StyleSheet, Modal, Text, View, Image, TouchableOpacity } from "react-native";

import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AwesomeIcons from 'react-native-vector-icons/dist/FontAwesome5'

import { Title } from "./style";


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    paddingLeft: 10
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  },

})

export const ProductHeader = (props,{navigation}) => {

  return (
    <View style={{ flexDirection: 'row', padding: 10 }}>
      <TouchableOpacity onPress={props.OnPressBack}>
        <Ionicons name={Platform.OS === "ios" ? "ios-chevron-back" : "arrow-back"} size={30} color='black' />     
      </TouchableOpacity>
      
      <Title>Cooking Oil</Title>
      <View style={{ alignItems: 'flex-end', flex: 1 }}>
        <TouchableOpacity onPress={props.OnPress}>
          <AwesomeIcons name={'sort-amount-down'} size={25} color='black' />
        </TouchableOpacity>
      </View>

    </View>
  );
}



