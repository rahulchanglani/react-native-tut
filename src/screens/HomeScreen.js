import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  console.log(props);

  return (
    <View>
      <Text style={styles.text}>HomeScreen!!</Text>
      <Button 
        title="Go to Components Screen"
        onPress={() => props.navigation.navigate('Components')} />
      <Button 
        title="Go to Images Screen"
        onPress={() => props.navigation.navigate('Images')} />
      <Button 
        title="Go to Counter Screen"
        onPress={() => props.navigation.navigate('Counter')} />
      <Button 
        title="Go to Counter (Reducer) Screen"
        onPress={() => props.navigation.navigate('Counter2')} />
      <Button 
        title="Go to Color Screen"
        onPress={() => props.navigation.navigate('Color')} />
      <Button 
        title="Go to Square Screen"
        onPress={() => props.navigation.navigate('Square')} />
      <Button 
        title="Go to Square (Reducer) Screen"
        onPress={() => props.navigation.navigate('Square2')} />
      <Button 
        title="Go to TextBox Screen"
        onPress={() => props.navigation.navigate('TextBox')} />
      <Button 
        title="Go to Box Object Model Screen"
        onPress={() => props.navigation.navigate('BoxObjectModel')} />
      <Button 
        title="Go to Box Object Model 2 Screen"
        onPress={() => props.navigation.navigate('BoxObjectModel2')} />
      <Button 
        title="Go to Animate Screen"
        onPress={() => props.navigation.navigate('Animater')} />
      <Button 
        title="Go to Complex Animate Screen"
        onPress={() => props.navigation.navigate('ComplexAnimater')} />
      <TouchableOpacity onPress={() => props.navigation.navigate('List')} >
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
