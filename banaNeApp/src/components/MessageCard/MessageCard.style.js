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
  dislike_count_container: {
    backgroundColor: Colors.themeblue,
    padding: 3,
    borderRadius: 20,
    marginRight: 3,
  },
  dislike_container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  dislike_text: {
    color: Colors.themeblue,
    fontWeight: 'bold',
  },
  dislike_count_text: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'flex-end',
  },
});
