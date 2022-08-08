import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Category, CategoryItem, Image, RowContainer, Text } from '../components/CategoryStyle'
import CategoryCart from '../components/CategoryCart'
import { Line } from '../components/style'
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import { Category,Text,Image } from '../components/CategoryStyle'


const CategoryScreen = props => {
  const [id, setID] = React.useState('1');
  // const [active, setActive] = React.useState(false)

  state = [
    {
      key: '1',
      image: 'https://media.istockphoto.com/photos/dry-white-long-rice-basmati-in-wooden-bowl-and-burlap-sack-with-on-picture-id1193536444?k=20&m=1193536444&s=612x612&w=0&h=QveYIc3ZekC0oPZcda9Ab65LaTeYL9af_6FI2aWcPN8=',
      catName: 'Rice'
    },
    {
      key: '2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCpQtxkQm443DmTGsQQBig0WvZsRTFUFaaQ&usqp=CAU',
      catName: 'Oil'
    }, {
      key: '3',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfTopKmox0jbe1xFyuLUFLb2-Y162pJoZww&usqp=CAU',
      catName: 'Kitchen Products'
    }, {
      key: '4',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTX89evSrBAa1UAchQf8JiiJrHeFCT8sFlPg&usqp=CAU',
      catName: 'Other Products'
    }, {
      key: '5',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpz8f5xNLl7Rhlty9ljFKihpAgFHYpWj4oQA&usqp=CAU',
      catName: 'Vegetables'
    }

  ];

  const list = () => {
    return state.map((element) => {
      return (
        <View key={element.key} style={{ width: 100, alignItems: 'center' }}>

          <TouchableOpacity onPress={_ => setID(element.key)}>
            <Category style={{ borderColor: element.key === id ? '#ffc640' : '#8f9491' }}>
              <Image source={{ uri: element.image }} />
            </Category>
            <Text style={{ textAlign: 'center', color: element.key === id ? '#ffc640' : '#8f9491' }}>{element.catName}</Text>
          </TouchableOpacity>

        </View>

      )
    })
  }
  return (
    <RowContainer>
      <View style={{ backgroundColor: 'white', alignItems: 'center', width: 130 }}>
        <ScrollView>
          {list()}
        </ScrollView>
      </View>

      {
        id === '1' &&
        <View style={{ flex: 1 }}>
          <CategoryItem onPress={_ => props.navigation.navigate('Product')}><Text>Lone Tee</Text></CategoryItem>
          <Line />
          <CategoryItem><Text>Lone Tee</Text></CategoryItem>
          <Line />
          <CategoryItem><Text>Lone Tee</Text></CategoryItem>
          <Line />
          <CategoryItem><Text>Lone Tee</Text></CategoryItem>
          <Line />
          <CategoryItem><Text>Lone Tee</Text></CategoryItem>
          <Line />
        </View>
      }
      {/* {
        id === '2' &&
        <View style={{ flex: 1 }}>
          <CategoryItem>Sunflower</CategoryItem>
          <Line />
          <CategoryItem>Nut</CategoryItem>
          <Line />

        </View>
      }
      {
        id === '3' &&
        <View style={{ flex: 1 }}>
          <CategoryItem>Pan</CategoryItem>
          <Line />
          <CategoryItem>Spon</CategoryItem>
          <Line />

        </View>
      }
      {
        id === '4' &&
        <View style={{ flex: 1 }}>
          <CategoryItem>Milk</CategoryItem>
          <Line />
          <CategoryItem>Pepper</CategoryItem>
          <Line />

        </View>
      }
      {
        id === '5' &&
        <View style={{ flex: 1 }}>
          <CategoryItem>Cabage</CategoryItem>
          <Line />
          <CategoryItem>Tomato</CategoryItem>
          <Line />
          <CategoryItem>Onion</CategoryItem>
          <Line />

        </View>
      } */}

    </RowContainer>
  )
}

export default CategoryScreen

