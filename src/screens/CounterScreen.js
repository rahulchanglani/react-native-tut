import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
    /**
     * for setting State, it shouldanswer 3 questions
     * 
     * 1) What Piece of data is changing in our app?
     * 2) What data type is it?
     * 3) What is the data's starting (default) value?
     *  
     */

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

