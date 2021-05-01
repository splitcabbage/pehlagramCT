
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


// const homescreen = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
// /*
// export default function App() {
//   return (
//     <NavigationContainer>{
//       <View style={styles.container}>
//         <Text>Hello World</Text>
//         <StatusBar style="auto" />
//       </View>
//       }</NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// */

// In App.js in a new project

import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import {
  NavigationContainer,
  //   DefaultTheme as NavigationDefaultTheme,
  //   DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import {
//   Provider as PaperProvider,
//   DefaultTheme as PaperDefaultTheme,
//   DarkTheme as PaperDarkTheme
// } from 'react-native-paper';

import { DrawerContent } from './screens/DrawerContent';
import { AuthContext } from './components/context';

import RootStackScreen from './screens/RootStackScreen';

// DRAWER NAVIGATION
const Drawer = createDrawerNavigator();

import MainTabScreen from './screens/MainTabScreen';
import ordersCompletedScreen from './screens/ordersCompletedScreen';
import ordersReceivedScreen from './screens/ordersReceivedScreen';
import settingsScreen from './screens/settingsScreen';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  // const CustomDefaultTheme = {
  //   ...NavigationDefaultTheme,
  //   ...PaperDefaultTheme,
  //   colors: {
  //     ...NavigationDefaultTheme.colors,
  //     ...PaperDefaultTheme.colors,
  //     background: '#ffffff',
  //     text: '#333333',
  //     color: '#000000',
  //   }
  // }
  // const CustomDarkTheme = {
  //   ...NavigationDarkTheme,
  //   ...PaperDarkTheme,
  //   colors: {
  //     ...NavigationDarkTheme.colors,
  //     ...PaperDarkTheme.colors,
  //     background: '#333333',
  //     text: '#ffffff'
  //   }
  // }
  // const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;


  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;

      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async () => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken')
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });

    },
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
    // toggleTheme: () => {
    //   setIsDarkTheme(isDarkTheme => !isDarkTheme);
    // },
  }));

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userName = null;

      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log(e);
      }

      dispatch({ type: 'REGISTER', token: 'dfklj' });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (

    <AuthContext.Provider value={authContext}>
      <NavigationContainer >
        {loginState.userToken != null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="ordersCompletedScreen" component={ordersCompletedScreen} />
            <Drawer.Screen name="ordersReceivedScreen" component={ordersReceivedScreen} />
            <Drawer.Screen name="settingsScreen" component={settingsScreen} />

          </Drawer.Navigator>
        ) :
          <RootStackScreen />
        }
      </NavigationContainer>
    </AuthContext.Provider>

  );
}

