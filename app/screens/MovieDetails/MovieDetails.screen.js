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

  const renderDetailMovie = props => {
    const {
      Title,
      Released,
      Genre,
      Director,
      Awards,
      Actors,
      Plot,
      Writer,
    } = movieDetail;
    return (
      <MovieDetailsComponent
        title={Title}
        released={Released}
        genre={Genre}
        director={Director}
        awards={Awards}
        actors={Actors}
        plot={Plot}
        writer={Writer}
        {...props}
      />
    );
  };

  return (
    <View style={Styles.container}>
      <ScrollView>
        {renderBanner()}
        {renderDetailMovie()}
      </ScrollView>
    </View>
  );
};

export default MovieDetails;
