import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";

export default class ProfileProfessionalScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Profile Professional Screen</Text>
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