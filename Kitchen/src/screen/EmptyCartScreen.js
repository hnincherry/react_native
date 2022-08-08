import { View, Text,Image } from 'react-native'
import React from 'react'
import { ButtonText, Container } from '../components/LoginStyle'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { Button } from '../components/style';

const EmptyCartScreen = () => {
  return (
    <Container>
        <Image source={require('../img/emptyCart.png')} style={{width:100,height:100}}/>
        <Text style={{margin:20}}>There are no items in this cart</Text>
        <Button>
            <ButtonText>Continue Shopping</ButtonText>
        </Button>
    </Container>
  )
}

export default EmptyCartScreen