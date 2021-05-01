import React from 'react';
import { View, Text, Button, Stylesheet } from 'react-native';

function DetailsScreen({ navigation }) {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text>Details Screen</Text>
            <Button
                color="#fcad00"
                title="Home Screen"
                onPress={() => navigation.navigate('Home')} 
            />
            
            <Button
                color="#fcad00"
                title="Details Screen"
                onPress={() => navigation.push('Details')}
            />
            <Button
                color="#fcad00"
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}
export default DetailsScreen;

// const style = Stylesheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });