import {View, Text, ImageBackground, ImagePropTypes} from 'react-native';
import React from 'react';
import styles from './styles';
import {NewsItem} from '../../types';
import FastImage from 'react-native-fast-image';

interface Props {
  item: NewsItem;
}
const NewsListItem = ({item}: Props) => {
  return (
    <View style={styles.containerStyle}>
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
    </View>
  );
};

export default NewsListItem;
