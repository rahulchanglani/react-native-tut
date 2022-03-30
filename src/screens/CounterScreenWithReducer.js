import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
    console.log(state, action)
    // state === {counter: number}
    // action === {type: 'increaseCount' || 'decreaseCount', payload: 15 || -15}

    switch (action.type) {
        case 'increaseCount':
            return state.counter >= 0
                ? {...state, counter: state.counter + action.payload}
                : state;
        case 'decreaseCount':
            return state.counter > 0
                ? {...state, counter: state.counter - action.payload}
                : state;
        default:
            return state;
    }
}

const CounterScreenWithReducer = () => {

    const [state, dispatch] = useReducer(reducer, {counter: 0})
    console.log('>>', state)
    const ADJUSTMENT_AMOUNT = 1;

    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({type: 'increaseCount', payload: ADJUSTMENT_AMOUNT})
            }} />
            <Button title="Decrease" onPress={() => {
                dispatch({type: 'decreaseCount', payload: ADJUSTMENT_AMOUNT})
            }} />
            <Text><b>Current Count:</b> {state.counter}</Text>
        </View>
    )
};

const style = StyleSheet.create({

});

export default CounterScreenWithReducer;

