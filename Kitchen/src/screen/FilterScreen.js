import React from "react";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import Icon from "react-native-vector-icons/dist/FontAwesome"

import { Text, RowContainer } from "../components/FilterStyle";
import { Container} from "../components/style";

export const Filter = () => {
    return(
        <Container>
            <RowContainer>
                
                <Text>By Brand</Text>
                <View style={{alignItems:"flex-end",flex:1}}>
                    <Icon name="angle-right" size={20} style={{padding:10}}/>
                </View>
            </RowContainer>    
        </Container>
    )
}


