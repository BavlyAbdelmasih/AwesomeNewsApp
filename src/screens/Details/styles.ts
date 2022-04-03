import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  titleContainer: {
    width: '60%',
    marginLeft: 30,
  },

  authorContainer: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    padding: 2,
    height: 25,
    position: 'absolute',
    right: 10,
  },
  author: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
  title: {
    fontWeight: '900',
    lineHeight: 20,
  },
  descriptionContainer: {
    backgroundColor: 'white',
  },
  description: {
    fontSize: 17,
    lineHeight: 30,
    padding: 10,
  },
  descriptionHeader: {
    padding: 10,
    paddingVertical: 15,
  },
  leftIcon: {
    position: 'absolute',
    left: 30,
    top: 30,
    backgroundColor: 'rgb(214,214,214)',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
