import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../Theming/ThemeContextProvider';
import {colors} from '../../constants/constants';

const Details = ({route}: any) => {
  const navigator = useNavigation();
  const {t, i18n} = useTranslation();
  const {item} = route.params;

  const themeContext = useContext(ThemeContext);
  useEffect(() => {
    console.log(item);

    return () => {};
  }, []);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: themeContext.theme.backgroundColor},
      ]}>
      <View style={{backgroundColor: themeContext.theme.secondaryColor}}>
        <Image
          style={styles.image}
          source={{
            uri: item?.urlToImage,
          }}
          resizeMode="cover"
        />
      </View>
      <View
        style={[
          styles.headerRow,
          {backgroundColor: themeContext.theme.secondaryColor},
        ]}>
        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.title,
              {color: themeContext.theme.secondaryTextColor},
            ]}>
            {item.title}
          </Text>
        </View>

        <View style={styles.authorContainer}>
          {/* <Text style={styles.author}>{item?.source.name}</Text> */}
        </View>
      </View>
      <View
        style={[
          styles.descriptionHeader,
          {backgroundColor: themeContext.theme.backgroundColor},
        ]}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            textShadowRadius: 10,
            textShadowOffset: {height: 10, width: 10},
            textShadowColor: colors.black,
            color: themeContext.theme.secondaryTextColor,
          }}>
          {t('Description')}
        </Text>
      </View>

      <View
        style={[
          styles.descriptionContainer,
          {backgroundColor: themeContext.theme.secondaryColor},
        ]}>
        <Text
          style={[
            styles.description,
            {color: themeContext.theme.secondaryTextColor},
          ]}>
          {item.description}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.leftIcon}
        onPress={() => navigator.goBack()}>
        <Icon
          name="angle-left"
          size={30}
          color={colors.green}
          onPress={() => navigator.goBack()}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Details;
