import {StyleSheet} from 'react-native';
import {colors} from '../../constants/constants';

export default StyleSheet.create({
  textInputBg: {
    width: '85%',
    backgroundColor: colors.white,
    height: 40,
    alignSelf: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
    shadowRadius: 100,
    shadowColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  textInput: {
    width: '80%',
  },
});
