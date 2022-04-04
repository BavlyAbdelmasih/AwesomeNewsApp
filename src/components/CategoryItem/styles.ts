import {StyleSheet} from 'react-native';
import {colors} from '../../constants/constants';

export default StyleSheet.create({
  categoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height: 25,
    width: 60,
    paddingHorizontal: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: colors.black,
    borderWidth: 1,
  },
  category: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
