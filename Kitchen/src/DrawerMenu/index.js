import React from 'react'
import { Text } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import * as S from './styles'

import { CustomDrawerHeader } from '../components/CustomDrawerHeader';


export default class DrawerMenu extends React.Component {
  
  render() {
    return (
      <S.Column>
        <CustomDrawerHeader/>
        <Text>Hi</Text>
        <DrawerContentScrollView contentContainerStyle={{
          paddingTop: 10,
        }}>
        </DrawerContentScrollView>
      </S.Column>
    )
  }
}