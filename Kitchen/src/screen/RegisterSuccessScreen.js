import { View, Text,Image } from 'react-native'
import React from 'react'
import { ButtonText, Container } from '../components/LoginStyle'

import { Button, Title } from '../components/style';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const RegisterSuccessScreen = () => {
  return (
    <Container>
        <MaterialCommunityIcons name='notebook-check-outline' size={80} color='black'/>
        <Title>SUCCESS</Title>
        <Text style={{margin:20}}>Your registration has been completed!</Text>
        <Button>
            <ButtonText>Login</ButtonText>
        </Button>
    </Container>
  )
}

export default RegisterSuccessScreen