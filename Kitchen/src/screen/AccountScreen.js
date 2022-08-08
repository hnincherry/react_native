import { View } from 'react-native'
import React from 'react'
import { AccountCom } from '../components/AccountCom'

const AccountScreen = props => {

  state= [
    {
      key:'1',
      name: 'Profile',
      routeName:'Profile'
    }, 
    {
      key:'2',
      name: 'Order History',
      routeName:'Profile'
    },
    {
      key:'3',
      name: 'Wishlist',
      routeName:'Profile'
    }, 
    {
      key:'4',
      name: 'Change Password',
      routeName:'Profile'
    }
    
  ]

  const list = () => {  
    return state.map(element => { 
      return(
        <View key={element.key}>
          
          <AccountCom
           name={element.name}
           OnPress={_=>props.navigation.navigate(element.routeName)}
           />
          
        </View>
      )
      //console.log("Name => " + element.name)
    })
    
  }

  
  return (
    <View style={{marginTop:15}}>
      {list()}
    </View>
  )
}

export default AccountScreen