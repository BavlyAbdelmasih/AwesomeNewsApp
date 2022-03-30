import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';

const NewsListItem = () => {
  return (
    <View style={styles.containerStyle}>
      <ImageBackground
        source={{
          uri: 'https://s.yimg.com/os/creatr-uploaded-images/2022-03/489e27a0-b01c-11ec-8f4a-cfa9c6a4e02a',
        }}
        style={styles.imageBg}
        imageStyle={styles.imageStyle}>
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <Text style={styles.source}>Engadget</Text>
          <Text style={styles.title}>
            Here’s why your iOS auto-updates often arrive late
          </Text>

          <Text style={styles.time}> 11 hours ago</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default NewsListItem;
