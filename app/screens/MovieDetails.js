import React, { Component } from 'react'
import { Text, View } from 'react-native'

const MovieDetails = ({ route }) => {
  const { imdbID } = route.params
  return (
    <View>
      <Text>{imdbID}</Text>
    </View>
  );
};

export default MovieDetails;
