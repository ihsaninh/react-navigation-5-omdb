import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import { Styles } from './MovieDetails.style';

const MovieDetails = ({ route }) => {
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    getMovieDetail();
  }, []);

  getMovieDetail = async () => {
    const { imdbID } = route.params;
    const response = await fetch(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=867fb0f7`,
    );
    const data = await response.json();
    setMovieDetail(data);
  };

  const renderBanner = () => {
    return (
      <View style={Styles.bannerContainer}>
        <Image
          style={Styles.banner}
          source={{
            uri: movieDetail.Poster,
          }}
        />
      </View>
    );
  };

  const remderDetailMovie = () => {
    return (
      <View style={Styles.detailContainer}>
        <Text style={Styles.title}>{movieDetail.Title}</Text>
        <View style={Styles.subCategory}>
          <View style={Styles.subJudulContainer}>
            <Text style={Styles.subJudul}>Released</Text>
            <Text style={Styles.subJudulFill}>{movieDetail.Released}</Text>
          </View>
          <View style={Styles.subJudulContainer}>
            <Text style={Styles.subJudul}>Genre</Text>
            <Text style={Styles.subJudulFill}>{movieDetail.Genre}</Text>
          </View>
          <View style={Styles.subJudulContainer}>
            <Text style={Styles.subJudul}>Director</Text>
            <Text style={Styles.subJudulFill}>{movieDetail.Director}</Text>
          </View>
          <View style={Styles.subJudulContainer}>
            <Text style={Styles.subJudul}>Awards</Text>
            <Text style={Styles.subJudulFill}>{movieDetail.Awards}</Text>
          </View>
          <View style={Styles.subJudulContainer}>
            <Text style={Styles.subJudul}>Actors</Text>
            <Text style={Styles.subJudulFill}>{movieDetail.Actors}</Text>
          </View>
          <View style={Styles.subJudulContainer}>
            <Text style={Styles.subJudul}>Plot</Text>
            <Text style={Styles.subJudulFill}>{movieDetail.Plot}</Text>
          </View>
          <View style={Styles.subJudulContainer}>
            <Text style={Styles.subJudul}>Writer</Text>
            <Text style={Styles.subJudulFill}>{movieDetail.Writer}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={Styles.container}>
      <ScrollView>
        {renderBanner()}
        {remderDetailMovie()}
      </ScrollView>
    </View>
  );
};

export default MovieDetails;
