import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";

export default class LoginScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Login</Text>
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