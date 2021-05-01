import React from 'react';
import { View, Text, Button, Stylesheet } from 'react-native';

function ProfileScreen({ navigation }) {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text>Account Screen</Text>

        </View>
    );
}
export default ProfileScreen;

// const style = Stylesheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });