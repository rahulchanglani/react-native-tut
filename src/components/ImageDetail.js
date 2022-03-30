import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ImageDetail = (props) => {
    console.log(props);
    return (
        <View>
            <Image source={props.imageSource} style={{ width: 200, height: 100 }} />
            <Text>{props.title}</Text>
            <Text><b>Image Score</b> - {props.score}</Text>
        </View>
    )
};

const style = StyleSheet.create({

});

export default ImageDetail;