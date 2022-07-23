import React, { Component } from 'react'
import {View} from 'react-native'
import AsyncStorageExample from './AsyncStorage_test'
import StatusBar from './statusBar_test'
import SwitchExample from './switch_test'
import AsyncStorage from './AsyncStorage_test'

class MyApp extends Component {
  state = {
    switchValue: false,
  }
  toggleSwitch = (value) => {
    this.setState({switchValue: value})
    console.log("Switch is: " + value)
  }
  render() {
    return(
      
      <View>
        <StatusBar/>
        <SwitchExample toggleSwitch={this.toggleSwitch} switchValue={this.state.switchValue}/>
        <AsyncStorage/>
      </View>
    )
  }
  
}
export default MyApp