import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { Styles } from './MovieLists.style';

const MovieLists = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovies();
  }, [page]);

  const getMovies = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=Avengers&apikey=867fb0f7&page=${page}`,
    );
    const data = await response.json();
    setMovies([...movies, ...data.Search]);
  };

  const handleOnpress = item => () => {
    navigation.navigate('MovieDetails', {
      imdbID: item,
    });
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={Styles.container}>
        <TouchableOpacity
          style={Styles.movieCard}
          activeOpacity={0.8}
          onPress={handleOnpress(item.imdbID)}>
          <View style={Styles.bannerContainer}>
            <Image style={Styles.banner} source={{ uri: item.Poster }} />
          </View>
          <View style={Styles.movieDescription}>
            <Text style={Styles.movieTitle}>{item.Title}</Text>
            <Text style={Styles.movieSubtitle}>
              <Text style={Styles.movieSubJudul}>Released:</Text> {item.Year}
            </Text>
            <Text style={Styles.movieSubtitle}>
              <Text style={Styles.movieSubJudul}>imdbID:</Text> {item.imdbID}
            </Text>
            <Text style={Styles.movieSubtitle}>
              <Text style={Styles.movieSubJudul}>Type:</Text> {item.Type}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={Styles.contentContainer}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMore}
        onEndReachedThreshold={0.7}
      />
    </View>
  );
};

export default MovieLists;
