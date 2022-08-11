import {StyleSheet} from 'react-native';

import Colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.themeblue,
    margin: 10,
    borderRadius: 5,
    padding: 10,
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: 'white',
    fontStyle: 'italic',
  },
  title: {
    color: 'white',
    marginTop: 8,
  },
});
