import { View, Text,Image,TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { ButtonText, Container } from '../components/LoginStyle'

import { Button, Title } from '../components/style';

import { ForgetText, Input, Label } from '../components/ForgetPasswordStyle';

const ForgetPassword = () => {
  return (
    <>
        <Container>
            <Image source={require('../img/forgot-password-icon-22.png')} style={{width:100,height:100}}/>
            <Title>FORGET PASSWORD?</Title>
            <ForgetText>Please type your phone number that your used for registration. We will  send a OTP code to verify.</ForgetText>
            
        </Container>
        <View style={{padding:10}}>
          <Label>Phone No.</Label>
          <Input
               underlineColorAndroid = "transparent"
               keyboardType='numeric'
               //onChangeText = {this.handleEmail}
          />
          <Button>
            <ButtonText>Submit</ButtonText>
        </Button>
        </View>
        
        
    </>
    
  )
}

export default ForgetPassword


