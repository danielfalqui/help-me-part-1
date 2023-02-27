import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";

export default class HomeScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Tela inicial</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        alingItems: "center"
    },
    text:{
        marginTop: 10,
        fontSize: 20
    }
})