import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

// action >>>>>>>>>> howToChangeState
const reducer = (state, action) => {
    console.log(state, action);

    /**
     * Our action object had {colorToChange: 'red', amount: 15 }
     * Usually, by convention we prefer {type: 'change_red', payload: 15 }
     * 
     * type --> String that describes exact change operation we want to make
     * payload --> some data that is critical to the change operation
     * 
     */

    // state === {red: number, green: number, blue: number}
    // action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}

    switch (action.colorToChange.toLowerCase()) {
        case 'red':
            return (state.red + action.amount > 255 || state.red + action.amount < 0)
                ? state
                : { ...state, red: state.red + action.amount };
        case 'green':
            return (state.green + action.amount > 255 || state.green + action.amount < 0) 
                ? state 
                : { ...state, green: state.green + action.amount };
        case 'blue':
            return (state.blue + action.amount > 255 || state.blue + action.amount < 0)
                ? state
                : { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
};

const SquareScreenWithReducer = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 })
    const { red, green, blue } = state;
    const COLOR_ADJUSTMENT = 15;

    return (
        <View>
            <Text>Square Screen</Text>
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_ADJUSTMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_ADJUSTMENT })}
                color="Red" />
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_ADJUSTMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_ADJUSTMENT })}
                color="Green" />
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_ADJUSTMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_ADJUSTMENT })}
                color="Blue" />

            <View style={{ height: 100, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    )
}

const style = StyleSheet.create({

});

export default SquareScreenWithReducer;