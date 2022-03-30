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
        title="Go to Color Screen"
        onPress={() => props.navigation.navigate('Color')} />
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
