import React from 'react';
import { View, Text } from 'react-native';

import { Styles } from './MovieDetails.component.style';

const MovieDetailsComponent = props => {
  return (
    <View style={Styles.detailContainer}>
        <Text style={Styles.title}>{props.title}</Text>
        <View style={Styles.subCategory}>
          <View style={Styles.subJudulContainer}>
            <Text style={Styles.subJudul}>Released</Text>
            <Text style={Styles.subJudulFill}>{props.released}</Text>
          </View>
          <View style={Styles.subJudulContainer}>
            <Text style={Styles.subJudul}>Genre</Text>
            <Text style={Styles.subJudulFill}>{props.genre}</Text>
          </View>
          <View style={Styles.subJudulContainer}>
            <Text style={Styles.subJudul}>Director</Text>
            <Text style={Styles.subJudulFill}>{props.director}</Text>
          </View>
          <View style={Styles.subJudulContainer}>
            <Text style={Styles.subJudul}>Awards</Text>
            <Text style={Styles.subJudulFill}>{props.awards}</Text>
          </View>
          <View style={Styles.subJudulContainer}>
            <Text style={Styles.subJudul}>Actors</Text>
            <Text style={Styles.subJudulFill}>{props.actors}</Text>
          </View>
          <View style={Styles.subJudulContainer}>
            <Text style={Styles.subJudul}>Plot</Text>
            <Text style={Styles.subJudulFill}>{props.plot}</Text>
          </View>
          <View style={Styles.subJudulContainer}>
            <Text style={Styles.subJudul}>Writer</Text>
            <Text style={Styles.subJudulFill}>{props.writer}</Text>
          </View>
        </View>
      </View>
  )
}

export { MovieDetailsComponent };