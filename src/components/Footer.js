import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function Footer(){
    return(
       <SafeAreaView>
            <View style={styles.container}>
            <Text style={styles.footer}>@2022 All rights Reserved by Hasin Anjum Pabon</Text>
        </View>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer:{
        color: 'black',
        fontWeight: '500',
        fontSize: 15,
    }
})