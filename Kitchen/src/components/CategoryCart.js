import { View,TouchableOpacity} from 'react-native'
import React from 'react'
import { Category,Text,Image } from './CategoryStyle'

const CategoryCart = (props) => {

    return (
        <View style={{width: 100, alignItems: 'center' }}>
          
                <Category>
                    <Image source={{uri: props.img}} />
                </Category>
                <Text style={{ textAlign: 'center' }}>{props.catName}</Text>
           
            
        </View>
    )
}

export default CategoryCart