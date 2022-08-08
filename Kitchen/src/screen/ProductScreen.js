import { View, Image, ScrollView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { ProductHeader } from '../components/ProductHeader'
import Modal from "react-native-modal";
import { Text } from '../components/ContactUsStyle';
import ProductCart from '../components/ProductCart';


const styles = StyleSheet.create({
    modalView: {
        paddingBottom: 20,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        width: 170,
    },
})

const ProductScreen = props => {
    const [modalVisible, setModalVisible] = React.useState(false)

    state = [
        {
            key: '1',
            img: require('../img/oil1.png'),
        },
        {
            key: '2',
            img: require('../img/oil2.png'),
        },
        {
            key: '3',
            img: require('../img/oil3.png'),
        },
        {
            key: '4',
            img: require('../img/oil1.png'),
        },
        {
            key: '5',
            img: require('../img/oil2.png'),
        },
        {
            key: '6',
            img: require('../img/oil3.png'),
        },
        {
            key: '7',
            img: require('../img/oil1.png'),
        },
        {
            key: '8',
            img: require('../img/oil2.png'),
        },
        {
            key: '9',
            img: require('../img/oil3.png'),
        },
        {
            key: '10',
            img: require('../img/oil1.png'),
        },

    ];

    const list = _ => {
        return state.map((element) => {
            return (
                <View key={element.key}>
                    <ProductCart img={element.img} />
                    {/* <Image source={element.img} style={{width:100,height:100}}/> */}
                </View>

            )
        })
    }

    return (
        <View>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType='fade'
                backdropOpacity={0.1}
                onRequestClose={() => {
                    setModalVisible(false);
                }}>
                <View style={{ position: 'absolute', top: 25, left: 0, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'flex-end' }}>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPressOut={() => { setModalVisible(false) }}
                    >
                        <ScrollView
                            directionalLockEnabled={true}
                            contentContainerStyle={styles.scrollModal}
                        >
                            <TouchableWithoutFeedback>
                                <View style={styles.modalView}>
                                    <Text style={{ paddingBottom: 10 }}>Price high to low</Text>
                                    <Text>Price low to high</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </ScrollView>
                    </TouchableOpacity>
                </View>

            </Modal>
            <ProductHeader OnPress={_ => setModalVisible(true)} OnPressBack={_ => props.navigation.goBack()} />

            <View>
                <Image source={require('../img/rice-featured-image.jpg')} style={{ width: 370, height: 150 }} />
                <ScrollView>
                {list()}
                
                </ScrollView>
                
            </View>



        </View>
    )
}

export default ProductScreen