import { View, Text } from 'react-native'
import React from 'react'
import { ButtonText, Container } from '../components/LoginStyle'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { Button } from '../components/style';

const LoginScreen = () => {
  return (
    <Container>
        <AntDesign name='login' size={80} color='black'/>
        <Text style={{margin:20}}>Please Login to enter your account.</Text>
        <Button>
            <ButtonText>Login</ButtonText>
        </Button>
    </Container>
  )
}

export default LoginScreen