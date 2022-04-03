import {
  View,
  Text,
  ImageBackground,
  ImagePropTypes,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import styles from './styles';
import {NewsItem} from '../../types';
import FastImage from 'react-native-fast-image';
import {ThemeContext} from '../../Theming/ThemeContextProvider';

interface Props {
  item: NewsItem;
  onClick: () => void;
}
const NewsListItem = ({item, onClick}: Props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <TouchableOpacity style={styles.containerStyle} onPress={onClick}>
      <FastImage
        source={{
          uri: item.urlToImage,
        }}
        style={[styles.imageBg, styles.imageStyle]}
        resizeMode="cover">
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <Text style={[styles.source, {color: themeContext.theme.textColor}]}>
            {item.source.name}
          </Text>
          <Text style={[styles.title, {color: themeContext.theme.textColor}]}>
            {item.title}
          </Text>

          <Text style={[styles.time, {color: themeContext.theme.textColor}]}>
            {item.publishedAt}
          </Text>
        </View>
      </FastImage>
    </TouchableOpacity>
  );
};

export default NewsListItem;
