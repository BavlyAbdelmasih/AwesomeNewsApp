import {
  View,
  Text,
  ImageBackground,
  ImagePropTypes,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {NewsItem} from '../../types';
import FastImage from 'react-native-fast-image';

interface Props {
  item: NewsItem;
  onClick: () => void;
}
const NewsListItem = ({item, onClick}: Props) => {
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
          <Text style={styles.source}>{item.source.name}</Text>
          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.time}>{item.publishedAt}</Text>
        </View>
      </FastImage>
    </TouchableOpacity>
  );
};

export default NewsListItem;
