import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
    // let counter = 0;
    // DONT DO THIS 

    const [counter, setCounter] = useState(0); 

    return (
        <View>
            <Text><b>Current Count:</b> {counter}</Text>
            <Button title="Increase" onPress={() => {
                // counter++;
                // DONT DO THIS;
                setCounter(counter + 1);
            }} />
            <Button title="Decrease" onPress={() => {
                setCounter(counter - 1);
            }} />
        </View>
    )
};

const style = StyleSheet.create({

});

export default CounterScreen;

