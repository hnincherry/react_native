import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity, ScrollView,Image} from 'react-native'
import PresentationalComponent from './PresentationalComponent';
import Input from './Input';
import ScrollViewTest from './ScrollViewTest';


class MyApp extends Component {
  state = {
    myState: "Welcome React Native!",
    names: [
      {
          id:0,
          name: 'Ben'
      },
      {
          id:1,
          name: 'Susan'
      },
      {
          id:2,
          name: 'Robert'
      },
      {
          id:3,
          name: 'Mary'
      },
  ]
  }
  updateState = () => this.setState({myState: "This is Updated State"});
  alertItemName = (item) => alert(item.name);
 
  render() {
    return(
      <ScrollView>    
        <Image source={require('./img/flutter_dash.png')} style={{width:100,height:100}}/>    
        <PresentationalComponent myState={this.state.myState} onPress={this.updateState}></PresentationalComponent>
          {
            this.state.names.map((item,index) => (
              <TouchableOpacity 
                key={item.id}
                style={styles.button}
                onPress={() => this.alertItemName(item)}
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            ))
          }        
        <Input/>
        <Image source={{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}} style={{width:100,height:100}}/>
        <ScrollViewTest/>
      </ScrollView>
    );
  }
 
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  button: {
    padding: 10,
    marginTop:3,
    backgroundColor:'#d9f9b1',
    textAlign:'center'
  }
  
});

export default MyApp