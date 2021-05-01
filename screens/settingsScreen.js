import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const settingsScreen = () => {
    return (
        < View style={styles.container} >
            <Text>Settings</Text>
            <Button
                title="Click here"
                onPress={() => alert('Button Clicked')}
            />
        </View >
    );
};

export default settingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})