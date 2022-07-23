import React, { Component } from 'react'
import {StyleSheet,Text,View,ScrollView} from 'react-native'

class ScrollViewTest extends Component {
    state = {
        names: [
         {'name': 'Ben', 'id': 1},
         {'name': 'Susan', 'id': 2},
         {'name': 'Robert', 'id': 3},
         {'name': 'Mary', 'id': 4},
         {'name': 'Daniel', 'id': 5},
         {'name': 'Laura', 'id': 6},
         {'name': 'John', 'id': 7},
         {'name': 'Debra', 'id': 8},
         {'name': 'Aron', 'id': 9},
         {'name': 'Ann', 'id': 10},
         {'name': 'Steve', 'id': 11},
         {'name': 'Olivia', 'id': 12}
        ]
    }
    render() {
        return(
            <View>
                    {
                        this.state.names.map((item,index) => (
                            <View key={item.id} style={styles.item}>
                                <Text>{item.name}</Text>
                            </View>
                        ))
                    }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    item: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1,
        padding: 20,
        borderColor:'#2a4944',
        backgroundColor:'#d2f7f1',
        margin: 2

    }
})
export default ScrollViewTest