import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import ExpressionBox from './components/ExpressionBox'
import Numpad from './components/Numpad'
import ResultBox from './components/ResultBox'


const App = () => {
  state = {
    expression: "This is dummy expression",
    result: "This is dummy result"
  }
  return(
    <View style={styles.container}>
      <ExpressionBox expression={state.expression}/>
      <ResultBox result={state.result}/>
      <Numpad/>
        {/* assembleExpression={assembleExpression}
        calculateResult={this.calculateResult}
        deletePressed={this.rollBackExpression} */}
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
})