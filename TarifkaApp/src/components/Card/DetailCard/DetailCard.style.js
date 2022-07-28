import {StyleSheet, Dimensions} from 'react-native';

const getSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: getSize.height / 3,
  },
  body_container: {
    margin: 5,
  },
  meal_name: {
    fontSize: 22,
    color: '#B62D2D',
    fontWeight: 'bold',
  },
  meal_from: {
    fontSize: 18,
    color: '#B62D2D',
    fontWeight: '500',
  },
  separator: {
    borderBottomColor: '#D2D2D2',
    borderBottomWidth: 1,
    marginTop: 3,
    marginBottom: 3,
  },
  description: {
    marginLeft: 5,
    marginRight: 5,
    color: 'black',
    textAlign: 'justify',
  },
  button: {
    borderWidth: 1,
    backgroundColor: 'red',
    margin: 6,
    padding: 4,
    height: 40,
    borderColor: 'red',
    borderRadius: 6,
  },
  button_text: {
    textAlign: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});


