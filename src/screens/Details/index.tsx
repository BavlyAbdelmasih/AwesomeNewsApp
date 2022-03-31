import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NewsItem} from '../../types';

interface Props {
  item: NewsItem;
}

const Details = ({item}: Props) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.urlToImage,
          }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.headerRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        <View style={styles.authorContainer}>
          <Text style={styles.author}>{item.author}</Text>
        </View>
      </View>
      <View style={styles.descriptionHeader}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            textShadowRadius: 10,
            textShadowOffset: {height: 10, width: 10},
            textShadowColor: 'black',
          }}>
          Description
        </Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.leftIcon}>
        <Icon name="angle-left" size={30} color="green" />
      </View>
    </View>
  );
};

export default Details;
