import { View, Text,Image } from 'react-native'
import React from 'react'
import { ButtonText, Container } from '../components/LoginStyle'
import { Line, RowContainer, Title } from '../components/style'
import { Button } from '../components/ProfileStyle'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import EditProfileScreen from './EditProfileScreen'

const data = [
  {
    key:'1',
    title: 'Phone No.',
    content: '09123456789'
  },
  {
    key:'2',
    title: 'Email',
    content: 'moemoe@gmail.com'
  },
  {
    key:'3',
    title: 'State/division',
    content: 'Yangon'
  },
  {
    key:'4',
    title: 'Township',
    content: 'Hlaing'
  },
  {
    key:'5',
    title: 'Address',
    content: 'No.1.xxxxxxxxstreet.xxxxx'
  },
 
]

const name = "Moe Moe"

const list = _ => {
  return(
    data.map( element => {
      return(
        <View key={element.key}>
          <RowContainer style={{padding:3}}>
            <Text>{element.title}</Text>
            <View style={{flex:1,alignItems:'flex-end'}}>
              <Text>{element.content}</Text>
            </View>
          </RowContainer>
          <Line/>
        </View>
        
        
        
      )
    })
  )
}
const ProfileScreen = props => {
  return (
    
    <Container style={{margin:10}}>
        <Image source={require('../img/user-image.png')} style={{width:100,height:100}}/>
        <Title>{name}</Title>
        <Button onPress={_ => props.navigation.navigate('Edit Profile',{get_data:data,get_name:name})}>
          <ButtonText>Edit</ButtonText>
        </Button>

        <View style={{backgroundColor:'white',width:320,height:200,marginTop:15}}>
          {list()}
        </View>
        
    </Container>
  )
}

export default ProfileScreen

