import React, { Component } from 'react'
import { StatusBar } from 'react-native'

class StatusBarTest extends Component {
    render() {
        return(
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00BCD4" translucent={true}/>
        )
    }
}
export default StatusBarTest