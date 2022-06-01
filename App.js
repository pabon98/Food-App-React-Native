import {useState} from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CategoryItem from "./src/components/CategoryItem";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import Categories from './src/components/Categories';
import Restaurents from './src/components/Restaurents';
import Footer from './src/components/Footer';

export default function App() {
  // let term = "Burger";
  const [term, setTerm]= useState('Burger')
  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("./assets/images/burger.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("./assets/images/pizza.png"),
    },
    {
      name: "Dessert",
      imageUrl: require("./assets/images/cake.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("./assets/images/smoothies.png"),
    },

    {
      name: "Steak",
      imageUrl: require("./assets/images/steak.png"),
    },

    {
      name: "Pasta",
      imageUrl: require("./assets/images/pasta.jpg"),
    },
  ];

  // setTimeout( ()=>{
  //   console.log('Intitial term', term)
  //   setTerm('Pizza')
  //   console.log('After Change Term', term)
  // }, 3000)
  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
     <Categories
     categories ={commonCategories}
     setTerm={setTerm}
     term={term}
     />
     <Restaurents/>
     <Footer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
