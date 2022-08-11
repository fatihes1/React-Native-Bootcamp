import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: Platform.OS === 'android' ? 5 : 8,
  },
});
