import React, {useEffect} from 'react'
import {View,Text,StyleSheet,BackHandler,Alert} from 'react-native'

import StatusBar from './statusBar_test'
import SwitchExample from './switch_test'
import AsyncStorage from './AsyncStorage_test'

const MyApp = () => {
  state = {
    switchValue: false,
  }
  toggleSwitch = (value) => {
    this.setState({switchValue: value})
    console.log("Switch is: " + value)
  }

  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert("Hold on!","Are you sure you want to go back?",[
  //       {
  //         text: "Cancel",
  //         onPress: () => null,
  //         style: "cancel"
  //       },
  //       {text:'Yes', onPress: () => BackHandler.exitApp()}
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener("hardwareBackPress",backAction)
  //   return() => backHandler.remove();
  // })
  return(
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.text}>Click Back Button!</Text>
      <StatusBar/>
      <SwitchExample toggleSwitch={this.toggleSwitch} switchValue={this.state.switchValue}/>
      <AsyncStorage/>
    </View>
  ) 
}

export default MyApp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  }
});