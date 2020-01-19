import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MovieLists from '../screens/MovieLists';
import MovieDetails from '../screens/MovieDetails';

const Stack = createStackNavigator();

const RootNavigation = () => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: '#263238',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  return (
    <NavigationNativeContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="MovieList" component={MovieLists} options={{ title: 'The Open Movie Database' }} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default RootNavigation;
