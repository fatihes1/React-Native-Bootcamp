import {Dimensions, Platform, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {backgroundColor: '#66a9d4', flex: 1},
  logo: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
  },
  logo_container: {
    flex: 1,
    justifyContent: 'center',
  },
  body_container: {
    flex: 1,
  },
  header: {
    color: colors.themeblue,
    fontSize: Platform.OS === 'android' ? 140 : 160,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'center',
    textShadowColor: 'white',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 5,
  },
});
