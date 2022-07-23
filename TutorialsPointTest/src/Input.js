import React,{ Component} from 'react'
import {Text,View,TextInput,StyleSheet,TouchableOpacity, ScrollView} from 'react-native'

class Input extends Component {
    state = {
        email: '',
        password: ''
    }
    handleEmail = (text) => this.setState({email: text})
    handlePassword = (text) => this.setState({password: text})
    login = () => alert('Email: ' + this.state.email + '\nPassword: ' + this.state.pass)

    render() {
        return(
            <View style={styles.container}>
                
                <TextInput 
                style={styles.input}
                    placeholder='Email'
                    placeholderTextColor= '#7a42f4'
                    autoCapitalize= 'none'
                    underlineColorAndroid = "transparent"
                    onChangeText={this.handleEmail}
                    />
                <TextInput style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='#7a42f4'
                    autoCapitalize='none'
                    underlineColorAndroid = "transparent"
                    onChangeText={this.handlePassword}/>
                <TouchableOpacity style={styles.btn}
                    onPress={this.login}>
                        <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        margin: 4,
        borderWidth:1,
        borderColor: '#7a42f4'
    },
    btn: {
        margin: 4,
        backgroundColor:'#7a42f4',
        height: 30,
        padding: 5,
    },
    text: {
        color: 'white',
        textAlign: 'center'
    }
})
export default Input