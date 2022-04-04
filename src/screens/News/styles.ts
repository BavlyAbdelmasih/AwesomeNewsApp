import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    marginBottom: 80,
  },
});
