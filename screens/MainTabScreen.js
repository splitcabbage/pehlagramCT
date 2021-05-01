import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import ordersReceivedScreen from './ordersReceivedScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const CartStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const receivedStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

function MainTabScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="white"
            barStyle={{ backgroundColor: '#fcad00' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#fcad00',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={CartStackScreen}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarColor: '#fcad00',
                    tabBarIcon: ({ color }) => (
                        <Icon name="cart-outline" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={DetailsStackScreen}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarColor: '#fcad00',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-notifications" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarLabel: 'Account',
                    tabBarColor: '#fcad00',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-person" color={color} size={26} />
                    ),
                }}
            />



        </Tab.Navigator>
    );
}

export default MainTabScreen;

function HomeStackScreen({ navigation }) {
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#fcad00',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
                title: 'Delivery App',
                headerLeft: () => (
                    <Icon.Button name="menu" size={25}
                        backgroundColor="#fcad00" onPress={() => navigation.openDrawer()}
                    ></Icon.Button>
                )
            }} />
        </HomeStack.Navigator>
    );

}

function DetailsStackScreen({ navigation }) {
    return (
        <DetailsStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#fcad00',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>

            <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
                headerLeft: () => (
                    <Icon.Button name="menu" size={25}
                        backgroundColor="#fcad00" onPress={() => navigation.openDrawer()}
                    ></Icon.Button>
                )
            }} />
        </DetailsStack.Navigator>
    );
}

function CartStackScreen({ navigation }) {
    return (
        <CartStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#fcad00',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>

            <CartStack.Screen name="Delivery App" component={CartScreen} options={{
                headerLeft: () => (
                    <Icon.Button name="menu" size={25}
                        backgroundColor="#fcad00" onPress={() => navigation.openDrawer()}
                    ></Icon.Button>
                )
            }} />
        </CartStack.Navigator>
    );
}


function ProfileStackScreen({ navigation }) {
    return (
        <ProfileStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#fcad00',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>

            <ProfileStack.Screen name="Delivery App" component={ProfileScreen} options={{
                headerLeft: () => (
                    <Icon.Button name="menu" size={25}
                        backgroundColor="#fcad00" onPress={() => navigation.openDrawer()}
                    ></Icon.Button>
                )
            }} />
        </ProfileStack.Navigator>
    );
}

function receivedStackScreen({ navigation }) {
    return (
        <receivedStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#fcad00',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>

            <receivedStack.Screen name="Delivery App" component={ordersReceivedScreen} options={{
                headerLeft: () => (
                    <Icon.Button name="menu" size={25}
                        backgroundColor="#fcad00" onPress={() => navigation.openDrawer()}
                    ></Icon.Button>
                )
            }} />
        </receivedStack.Navigator>
    );
}
