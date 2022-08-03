import { View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/dist/Entypo'
import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import React from 'react'
import { Title } from '../components/style'
import { IconRow, RowContainer,Text } from '../components/ContactUsStyle'


const ContactUsScreen = () => {
  return (
    <View>
        <RowContainer>
            <Icon name="location" size={30} color='black'/>
            <View>
                <Title>Address</Title>
                <Text style={{color:'#aeb8b1'}}>Lorem ipsum dolar sit amet, sapian etiam,nunc amet dolar ac adio mouris justo.</Text>
            </View>    
        </RowContainer>
        <RowContainer>
            <MaterialIcon name="phone-in-talk-outline" size={30} color='black'/>
            <View>
                <Title>Phone</Title>
                <Text>09-xxxxxxxxx 09-xxxxxxxxx</Text>
            </View>    
        </RowContainer>
        <RowContainer>
            <MaterialIcon name="email" size={30} color='black'/>
            <View>
                <Title>Email</Title>
                <Text>xxxxxxxxx@xxxxx.com</Text>
            </View>    
        </RowContainer>
        <IconRow>
            <Icon name="facebook" size={30} color='blue'/>
            <Icon name="instagram" size={30} color='purple'/>
            <Icon name="twitter" size={30} color='cyan'/>
            <Icon name="youtube" size={30} color='red'/>
        </IconRow>
      
    </View>
  )
}

export default ContactUsScreen

