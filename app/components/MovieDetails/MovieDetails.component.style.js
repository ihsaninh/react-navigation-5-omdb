import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  detailContainer: {
    flex: 3,
  },
  title: {
    paddingTop: 10,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontFamily: 'Raleway-SemiBold',
  },
  subCategory: {
    marginVertical: 20,
    borderRadius: 5,
  },
  subCategoryTitle: {
    fontSize: 20,
    color: '#eee',
    fontFamily: 'Raleway-SemiBold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  subJudul: {
    fontSize: 17,
    color: '#eee',
    paddingVertical: 10,
    fontFamily: 'Raleway-Medium',
  },
  subJudulFill: {
    color: '#fff',
    fontFamily: 'Raleway-Regular',
    lineHeight: 20,
    color: '#ccc',
  },
  subJudulContainer: {
    marginTop: 10,
    backgroundColor: '#333333',
    paddingTop: 10,
    padding: 20,
    borderRadius: 5,
  },
});

export { Styles };
