import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';


const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    
    const COLOR_ADJUSTMENT = 10; 

    // generally state is mentioned in parent where its vlue is either read or changed.
    // state can be passed as prop to children components as callballback fns & children components can invoke that fn to change the state

    const setColor = (color, change) => {
        // color = "red, "blue, "green"
        // change = +15, -15

        switch (color.toLowerCase()) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }
    }

    return (
        <View>
            <Text>Square Screen</Text>
            <ColorCounter 
                onIncrease={() => {
                    setColor('red', COLOR_ADJUSTMENT)
                }} 
                onDecrease={() => setColor('red', -1 * COLOR_ADJUSTMENT)} 
                color="Red" />
            <ColorCounter 
                onIncrease={() => setColor('green', COLOR_ADJUSTMENT)} 
                onDecrease={() => setColor('green', -1 * COLOR_ADJUSTMENT)} 
                color="Green" />
            <ColorCounter 
                onIncrease={() => setColor('blue', COLOR_ADJUSTMENT)} 
                onDecrease={() => setColor('blue', -1 * COLOR_ADJUSTMENT)} 
                color="Blue" />

            <View style={{ height: 100, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>
        </View>
    )
}

const style = StyleSheet.create({

});

export default SquareScreen;