import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MovieLists from '../screens/MovieLists';
import MovieDetails from '../screens/MovieDetails';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen name="Movie Lists" component={MovieLists} />
        <Stack.Screen name="Movie Details" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default RootNavigation;