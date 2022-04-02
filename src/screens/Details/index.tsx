import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const Details = ({route}: any) => {
  const navigator = useNavigation();
  const {t, i18n} = useTranslation();
  const {_, item} = route.params;

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item?.item?.urlToImage,
          }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.headerRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.item.title}</Text>
        </View>

        <View style={styles.authorContainer}>
          <Text style={styles.author}>{item.item.source.name}</Text>
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
          {t('Description')}
        </Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{item.item.description}</Text>
      </View>
      <TouchableOpacity
        style={styles.leftIcon}
        onPress={() => navigator.goBack()}>
        <Icon
          name="angle-left"
          size={30}
          color="green"
          onPress={() => navigator.goBack()}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Details;
