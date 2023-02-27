import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";

export default class HouseKepperScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Diaristas</Text>
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
        marginTop: 50,
        fontSize: 20
    }
})