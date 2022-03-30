import {View, Text, ImageBackground, ImagePropTypes} from 'react-native';
import React from 'react';
import styles from './styles';
import {NewsItem} from '../../types';

interface Props {
  item: NewsItem;
}
const NewsListItem = ({item}: Props) => {
  return (
    <View style={styles.containerStyle}>
      <ImageBackground
        source={{
          uri: item.urlToImage,
        }}
        style={styles.imageBg}
        imageStyle={styles.imageStyle}>
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <Text style={styles.source}>{item.source.name}</Text>
          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.time}>{item.publishedAt}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default NewsListItem;
