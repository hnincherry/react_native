import { View, Text } from 'react-native'
import React,{useEffect} from 'react'



const App = () => { 

  useEffect(() => {
    TextDetect('INV-Salt78SEkgQVpQIEtPIEdZSSBLeWF3XoDDoeX');
  }, [])
  
  var salt = 'INV-Salt'

  const TextDetect = (data) =>{
    
    data = data.replace(salt, ""); // Remove INV-Salt from String

    var number = data.charAt(0) // Count of texts to be removed
    
    var place = data.charAt(1) // Determine where odd or even
    
    str = data.substring(2) // Remove the first two Digits from String
    
    
    //If odd, delete the end of the string according to the number of 'number' else delete the start of the string
    if(parseInt(place)%2 != 0) {
      // var result = str.substring(str.length-number)
      // console.log('result ' + result)
      
      end = str.substring(0,str.length-number)
      console.log('Delete End => ' + end)
    }else{
      //str2 = str.substring(2,parseInt(number)+1)
      //str2 = str.substring(2,5)
      
      start = str.replace(str.substring(0,parseInt(number)),'')
      console.log('Delete Start =>  '+ start)
      
    }   
  } 
  return (
    <View>
      <Text>MYAPP</Text>
    </View>
  )
}

export default App