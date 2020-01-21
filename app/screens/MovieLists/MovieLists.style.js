import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#212121',
  },
  movieCard: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    marginBottom: 0,
    width: width * 0.92,
  },
  bannerContainer: {
    flex: 1.2,
    justifyContent: 'center',
  },
  banner: {
    height: 125,
    width: 125,
    borderRadius: 10,
  },
  movieDescription: {
    flex: 1.9,
    flexDirection: 'column',
    marginLeft: 10,
  },
  movieTitle: {
    color: 'white',
    fontSize: 18,
    paddingBottom: 10,
    lineHeight: 25,
    fontFamily: 'Raleway-SemiBold',
  },
  movieSubtitle: {
    color: 'white',
    fontSize: 15,
    paddingBottom: 10,
    fontFamily: 'Raleway-Regular',
  },
  movieSubJudul: {
    fontFamily: 'Raleway-SemiBold',
  },
  separator: {
    height: 2,
    width,
    backgroundColor: '#32414a',
  },
});

export { Styles };
