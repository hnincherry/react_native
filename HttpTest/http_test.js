import React, { Component } from 'react'
import {Button, Text,TouchableOpacity,View,StyleSheet, TouchableHighlight, TouchableNativeFeedback} from 'react-native'

class HttpTest extends Component {
    state = {
        data: ''
    }
    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {method: 'GET'})
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('Response' + responseJson);
            this.setState({data: responseJson})
        })
        .catch((error) => {
            console.error(error);
        })
    }
    handleBtn = () => {
      alert("This is Button")
      console.log(this.state.data.body)} 

    
    render() {
        return(
            // <View>
                <View style={{flex:1}}>
                    {/* <Text >{this.state.data.body}</Text> */}
                    <Button title='Red Btn' color='red' onPress={this.handleBtn}/>
                    {/* <View style={styles.container}>
                        <TouchableOpacity>
                            <Text style={styles.btnText}>Button</Text>
                        </TouchableOpacity>
                        <TouchableHighlight onPress={() => alert("Highlight")}>
                            <Text style={styles.btnText}>Button</Text>
                        </TouchableHighlight>
                        <TouchableNativeFeedback onPress={() => console.log("FeedBack")}>
                            <Text style={styles.btnText}>Button</Text>
                        </TouchableNativeFeedback>
                        
                    </View> */}
                    
                </View>
                
            // </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    btnText: {
        backgroundColor:'pink',
        padding: 12,
        margin: 10,
        color: 'red'
    }
})
export default HttpTest
// import React, { Component } from 'react'
// import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native'

// class Animations extends Component {
//    componentWillMount = () => {
//       this.animatedWidth = new Animated.Value(50)
//       this.animatedHeight = new Animated.Value(100)
//    }
//    animatedBox = () => {
//       Animated.timing(this.animatedWidth, {
//          toValue: 200,
//          duration: 1000
//       }).start()
//       Animated.timing(this.animatedHeight, {
//          toValue: 500,
//          duration: 500
//       }).start()
//    }
//    render() {
//       const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }
//       return (
//          <TouchableOpacity style = {styles.container} onPress = {this.animatedBox}>
//             <Animated.View style = {[styles.box, animatedStyle]}/>
//          </TouchableOpacity>
//       )
//    }
// }
// export default Animations

// const styles = StyleSheet.create({
//    container: {
//       justifyContent: 'center',
//       alignItems: 'center'
//    },
//    box: {
//       backgroundColor: 'blue',
//       width: 50,
//       height: 100
//    }
// })