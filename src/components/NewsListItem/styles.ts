import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerStyle: {
    alignContent: 'center',
    flex: 1,
  },
  imageBg: {
    height: 170,
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 10,
  },
  imageStyle: {borderRadius: 20},
  overlay: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.5,
    borderRadius: 20,
    width: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  source: {color: 'white', fontWeight: '900', fontSize: 12},
  title: {
    color: 'white',
    fontWeight: '900',
    paddingRight: 50,
    textShadowColor: 'white',
    textShadowRadius: 0.7,
  },
  time: {color: 'white', fontWeight: '400', fontStyle: 'italic'},
});