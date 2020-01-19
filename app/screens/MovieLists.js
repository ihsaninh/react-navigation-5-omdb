import React, { useState, useEffect } from 'react'
import { 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  FlatList, 
  Dimensions,
  TouchableOpacity 
} from 'react-native'

const width = Dimensions.get('window').width;

const MovieLists = props => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = () => {
      fetch('http://www.omdbapi.com/?s=Harry Potter&apikey=867fb0f7')
        .then(res => res.json())
        .then(movies => {
          setMovies(movies.Search);
          setLoading(false);
        })
        .catch(err => console.log(err))
    }
    getMovies();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={Styles.container}>
        <TouchableOpacity style={Styles.movieCard} activeOpacity={0.8}>
          <View style={Styles.bannerContainer}>
            <Image style={Styles.banner} source={{uri: item.Poster}} />
          </View>
          <View style={Styles.movieDescription}>
            <Text style={Styles.movieTitle}>{item.Title}</Text>
            <Text style={Styles.movieSubtitle}>Released: {item.Year}</Text>
            <Text style={Styles.movieSubtitle}>ImdbId: {item.imdbID}</Text>
            <Text style={Styles.movieSubtitle}>Type: {item.Type}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList 
      data={movies}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}  
    />
  )
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3940',
  },
  movieCard: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    marginBottom: 0,
    width: (width * 0.92)
  },
  bannerContainer: {
    flex: 1.2,
    justifyContent: 'center'
  },
  banner: {
    height: 125,
    width: 125,
    borderRadius: 5
  },
  movieDescription: {
    flex: 1.9,
    flexDirection: 'column',
    marginLeft: 10,
  },
  movieTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
    lineHeight: 25
  },
  movieSubtitle: {
    color: 'white',
    fontSize: 15,
    paddingBottom: 10
  }
})

export default MovieLists;
