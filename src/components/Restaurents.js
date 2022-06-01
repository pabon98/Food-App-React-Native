import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";

export default function Restaurents() {
  const [foods, setFood] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => res.json())
      .then((data) => setFood(data.meals));
  }, []);
  //   console.log(foods)
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Top Foods</Text>

        <FlatList
          data={foods}
          keyExtractor={(item) => item.idMeal}
          numColumns={3}
          renderItem={({ item, index }) => (
            <View style={styles.food}>
                 <Image style={styles.image} source={{uri: item.strMealThumb}} />
              <Text style={{ fontSize: 15, textAlign: 'center'}}>{item.strMeal}</Text>
  
            </View>
          )}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    marginVertical: 15,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 15
  },
  food: {
    width: 100,
    marginTop: 10,
    marginLeft: 10,
    padding: 5
  },
  image:{
    width: 90,
    height: 90,
    borderWidth: 10,
    borderRadius: 10,
    shadowColor: '#B2BEB5',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    resizeMode: 'cover',
  }
});
