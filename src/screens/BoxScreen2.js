import React from "react";
import {Text, View, StyleSheet} from "react-native";

const BoxScreen2 = () => {
    return (
        <View style={style.parentViewStyle}>
            <View style={style.view1Style}></View>
            <View style={style.view2Style}></View>
            <View style={style.view3Style}></View>
        </View>
    )
}

const style = StyleSheet.create({
    parentViewStyle: {
        flexDirection: 'row',
        height: 200,
        justifyContent: 'space-between'
    },
    view1Style: {
        height: 100,
        width: 100,
        backgroundColor: 'orange',
    },
    view2Style: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        alignSelf: 'flex-end',
    },
    view3Style: {
        height: 100,
        width: 100,
        backgroundColor: 'purple',
    },
})

export default BoxScreen2;