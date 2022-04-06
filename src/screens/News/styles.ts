import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerStyle: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    marginBottom: 200,
  },
});
