import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import { Styles } from './MovieDetails.style';
import { MovieDetailsComponent } from '../../components/MovieDetails/MovieDetails.component';

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

  const remderDetailMovie = props => {
    return (
      <MovieDetailsComponent
        title={movieDetail.Title}
        released={movieDetail.Released}
        genre={movieDetail.Genre}
        director={movieDetail.Director}
        awards={movieDetail.Awards}
        actors={movieDetail.Actors}
        plot={movieDetail.Plot}
        writer={MovieDetails.Writer}
        {...props}
      />
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
