import { View, FlatList } from "react-native";
import CategoryItem from "./CategoryItem";
export default function Categories({categories, setTerm, term}){
    return(
        <View>
        <FlatList
          data={categories}
          renderItem={({ item }) => {
            // console.log(item)
            return <CategoryItem
            name={item.name} 
            imageUrl={item.imageUrl} 
            active={item.name === term} 
            handlePress={()=> setTerm(item.name)}
            />;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(category) => category.name}
        />
      </View>
    )
}