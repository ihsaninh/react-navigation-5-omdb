import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121'
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  bannerContainer: {
    margin: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    height: 200,
    width: 200,
    borderRadius: 100
  },
  detailContainer: {
    flex: 3,
  },
  title: {
    paddingTop: 10,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontFamily: 'Raleway-SemiBold'
  },
  subCategory: {
    marginVertical: 20,
    borderRadius: 5,
    // padding: 20
  },
  subCategoryTitle: {
    fontSize: 20,
    color: '#eee',
    fontFamily: 'Raleway-SemiBold',
    paddingLeft: 20,
    paddingTop: 20
  },
  subJudul: {
    fontSize: 17,
    color: '#eee',
    paddingVertical: 10,
    fontFamily: 'Raleway-Medium'
  },
  subJudulFill: {
    color: '#fff',
    fontFamily: 'Raleway-Regular',
    lineHeight: 20,
    color: '#ccc'
  },
  subJudulContainer: {
    marginTop: 10,
    backgroundColor: '#333333',
    padding: 20
  }
});

export { Styles };