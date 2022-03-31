import React, {useState} from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native'

const TextInputScreen = () => {
    const [name, setName] = useState('');
    const [pswd, setPswd] = useState('');

    return (
        <View>
            <Text>Enter name:</Text>
            <TextInput style={style.textInput} autoCapitalize="none" autoCorrect={false}
                value={name} onChangeText={(newVal) => setName(newVal)} />
            <Text>My name is {name}</Text>

            <Text>Enter password:</Text>
            <TextInput secureTextEntry style={style.textInput} autoCapitalize="none" autoCorrect={false}
                value={pswd} onChangeText={(newVal2) => setPswd(newVal2)} />
            {pswd.length < 5 
                ? <Text  style={{color: 'red'}}>password must be 5 letters</Text>
                : null}
        </View>
    )
}

const style = StyleSheet.create({
    textInput: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextInputScreen;