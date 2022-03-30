import React from "react";
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => {
    const greeting = 'Hi there!';
    // const greetingNotValid = {text: 'Hi there!'};

    return (
        <View>
            <Text style={styles.textStyle}>Hello World</Text>
            <Text style={{color: 'red'}}>{greeting}</Text>
            {/* <Text style={styles.textStyle}>{greetingNotValid}</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 35
    }
});

export default ComponentScreen;