import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native"
import { elevation } from "../common/styles"
export default function CategoryItem({name, imageUrl, active, handlePress}){
    // console.log(props)
    return(
        <TouchableOpacity onPress={handlePress}>
       <View style={[styles.container, styles.elevation, active? {backgroundColor: 'rgb(241,186,87)'} : {backgroundColor: 'white'}]}>
           <View style={styles.imageContainer}>
           <Image style={styles.image} source={imageUrl}/>
           </View>
           <Text style={styles.header}>{name}</Text>
       </View>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
container:{
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    marginHorizontal: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
},
elevation,
image:{
    width: 35,
    height: 35
}, 
imageContainer:{
 width: 55,
 height: 52,
 backgroundColor: 'white',
 justifyContent: 'center',
 alignItems: 'center',
 borderRadius: 50,
 marginBottom: 5

}, 
header:{
    fontWeight: 'bold'
}
})