import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MovieLists from '../screens/MovieLists/MovieLists.screen';
import MovieDetails from '../screens/MovieDetails/MovieDetails.screen';

const Stack = createStackNavigator();

const RootNavigation = () => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: '#393939',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Raleway-SemiBold'
    },
  };
  return (
    <NavigationNativeContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="MovieList" component={MovieLists} options={{ title: 'The Open Movie Database' }} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} options={{ title: 'Movie Details' }} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default RootNavigation;
