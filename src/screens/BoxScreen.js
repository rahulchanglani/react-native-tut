import React from "react";
import {Text, View, StyleSheet} from "react-native";

const BoxScreen = () => {
    return (
        <View style={style.viewStyle}>
            <Text style={style.textOneStyle}>Box Object model1</Text>
            <Text style={style.textTwoStyle}>Box Object model2</Text>
            <Text style={style.textThreeStyle}>Box Object model3</Text>
        </View>
    )
}

const style = StyleSheet.create({
    viewStyle: {
        borderColor: 'green',
        borderWidth:3,
        alignItems: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    textOneStyle: {
        borderColor: 'red',
        borderWidth:1,
        margin: 40
    },
    textTwoStyle: {
        borderColor: 'red',
        borderWidth:1,
        flex: 1,
        margin: 40,
        ...StyleSheet.absoluteFillObject
    },
    textThreeStyle: {
        borderColor: 'red',
        borderWidth:1,
        alignSelf: 'center',
        margin: 40
    }
})

export default BoxScreen;