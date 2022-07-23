import React from 'react'
import {Text,Image,TextView,View,StyleSheet,TouchableOpacity, TextInput, Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const HomeScreen = ({route,navigation}) =>{
  React.useEffect(() => {
    if(route.params?.post) {

    }
  }, [route.params?.post])

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CreatePost', {name: 'Create Post Page'})}>
        <Text style={styles.text}>Create Post</Text>
      </TouchableOpacity>

      <Text style={{margin:15}}>Post: {route.params?.post}</Text>
    </View>
  )
}

const CreatePostScreen = ({route,navigation}) => {
  const [postText,setPostText] = React.useState('')

  return(
    <View>
      <TextInput 
        placeholder="What's on your mind?"
        style={{height:200, padding:10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}/>
        <TouchableOpacity 
          style={styles.btn} 
          onPress={() => navigation.navigate({name:'Home',params:{post:postText}, merge:true})}>
          <Text style={styles.text}>Done</Text>
        </TouchableOpacity>
    </View>
  )
}
const Stack = createNativeStackNavigator();

export default App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            title:"My Home", 
            headerStyle:{backgroundColor: '#f4511e'},
            headerTintColor: '#fff',
            headerTitleStyle:{fontWeight:'bold'}
          }}/>
        <Stack.Screen 
          name="CreatePost" 
          component={CreatePostScreen} 
          //options={({route}) => ({title:route.params.name})}
          options={{
            headerTitle:(props) => <LogoTitle {...props}/>,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title='Info'
                color='#ff0000'
              />
              
            )
              
            
          }}
          
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const LogoTitle = () =>{
  return(
    <Image 
      style= {{width:50,height:50}}
      source={require('./image/reactnative_logo.png')}
    />
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'

  },
  btn: {
    padding: 20,
    backgroundColor: '#de5275'
  },
  text: {
    color: 'white',
    textAlign:'center'
  }
})
