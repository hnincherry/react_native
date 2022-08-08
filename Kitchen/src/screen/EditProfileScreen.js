import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { Button, Input, Item } from '../components/style'
import { ButtonText } from '../components/LoginStyle'

const EditProfileScreen = props => {
    const [user,onChangeUser] = React.useState("Moe Moe");
    // console.log(props.route.params.get_data)
    const name = props.route.params.get_name
    const data = props.route.params.get_data

    const [phone,onChangePhone] = React.useState(data[0].content);
    const [email,onChangeEmail] = React.useState(data[1].content);
    const [state,onChangeState] = React.useState(data[2].content);
    const [township,onChangeTownship] = React.useState(data[3].content);
    const [address,onChangeAddress] = React.useState(data[4].content);    
    
  return (
    <ScrollView style={{padding:10,marginLeft:10}}>
        <Item style={{color:'black'}}>Name</Item>
        <Input
            value= {user}
            onChangeText = {onChangeUser}
        />
        <Item style={{color:'black'}}>{data[0].title}</Item>
        <Input
            value= {phone}
            keyboardType='numeric'
            onChangeText = {onChangePhone}
        />
        <Item style={{color:'black'}}>{data[1].title}</Item>
        <Input
            value= {email}
            onChangeText = {onChangeEmail}
        />
        <Item style={{color:'black'}}>{data[2].title}</Item>
        <Input
            value= {state}
            onChangeText = {onChangeState}
        />
        <Item style={{color:'black'}}>{data[3].title}</Item>
        <Input
            value= {township}
            onChangeText = {onChangeTownship}
        />
        <Item style={{color:'black'}}>{data[4].title}</Item>
        <Input
            multiline={true}
            height={100}
            value= {address}
            onChangeText = {onChangeAddress}
        />
        <Button width={330}>
            <ButtonText>Save</ButtonText>
        </Button>
    </ScrollView>
  )
}

export default EditProfileScreen