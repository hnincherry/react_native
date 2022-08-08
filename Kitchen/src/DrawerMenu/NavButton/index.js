import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Image, View } from "react-native";

import * as S from './styles'

export default function NavButton(props) {
  return (
    <S.Row onPress={props.onPress}>
      <View style={{ width: 30, alignItems: "flex-start" }}>
        <Image source={props.photo} style={{ width: props.width, height: props.height }} />
      </View>
      <S.Text>{props.text}</S.Text>
    </S.Row>
  )
}