import { ScrollView,Text, Image } from 'react-native'
import React from 'react'
import { Title } from '../components/style'
import { SafeAreaView } from 'react-native-safe-area-context'



const AboutUsScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Image source={require('../img/raw_food.jpg')} style={{width:370,height:250}}/>
        <Title>About Our Company</Title>
        <Text style={{textAlign:'justify',padding:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus, tortor ullamcorper eleifend molestie, nibh risus feugiat mauris, vel scelerisque eros lorem in leo. Vestibulum metus elit, semper quis ullamcorper et, condimentum id sapien. In pulvinar non turpis sed pellentesque. Etiam ac varius tortor, eu rhoncus ligula. Nulla at sapien sollicitudin, blandit elit nec, vehicula enim. Sed quis pulvinar eros. Duis dignissim erat at lacus pellentesque auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Nullam in tincidunt leo. Quisque vestibulum nisi ut placerat cursus. Praesent a ante euismod, commodo orci at, tincidunt enim. Vivamus dapibus nibh eu ligula congue porta. Duis vel leo pellentesque, posuere lorem quis, sollicitudin ex.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus, tortor ullamcorper eleifend molestie, nibh risus feugiat mauris, vel scelerisque eros lorem in leo. Vestibulum metus elit, semper quis ullamcorper et, condimentum id sapien. In pulvinar non turpis sed pellentesque. Etiam ac varius tortor, eu rhoncus ligula. Nulla at sapien sollicitudin, blandit elit nec, vehicula enim. Sed quis pulvinar eros. Duis dignissim erat at lacus pellentesque auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Nullam in tincidunt leo. Quisque vestibulum nisi ut placerat cursus. Praesent a ante euismod, commodo orci at, tincidunt enim. Vivamus dapibus nibh eu ligula congue porta. Duis vel leo pellentesque, posuere lorem quis, sollicitudin ex.
        </Text>
        
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default AboutUsScreen