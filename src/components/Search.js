import { View, Text, TextInput, StyleSheet } from "react-native";
import {FontAwesome} from '@expo/vector-icons'
import { elevation } from "../common/styles";
import {useState} from 'react'

export default function Search({setTerm}) {
  const [input, setInput] = useState('')
  const handleEndEditing =()=>{
    if(!input) return
    setTerm(input)
    setInput('')
  }
  return (
    <View style={[styles.container, styles.elevation]}> 
        <FontAwesome name="search" size={25}/>
      <TextInput 
      value={input}
      onChangeText={(text)=> {setInput(text)}}
      style={styles.input} 
      placeholder="Restuarents, food" 
      onEndEditing={handleEndEditing}
      />
      {/* <Text>{input}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 40
    },
    elevation,
    input:{
        fontSize: 20,
        marginLeft: 10
    }
})
