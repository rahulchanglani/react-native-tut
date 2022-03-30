import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'f1', key: '1' },
        { name: 'f2', key: '2' },
        { name: 'f3', key: '3' },
        { name: 'f4', key: '4' },
        { name: 'f5', key: '5' }
    ];
    console.log('>> friends', friends);

    return (
        <View>
            <Text>asas</Text>
            <FlatList
                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={({ item }) => {
                    return <Text style={styles.listStyle}>{item.name}</Text>
                }} />
        </View>
    );
};

const styles = StyleSheet.create({
    listStyle: {
        fontSize: 18,
        marginVertical: 25
    }
});

export default ListScreen;
