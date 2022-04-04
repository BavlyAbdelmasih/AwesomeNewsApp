import {View, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';
import linking from './src/navigation/linking';
import WithThemingProvider from './src/Theming/WithThemingProvider';

const App = () => {
  return (
    <View style={styles.containerStyle}>
      <NavigationContainer linking={linking}>
        <Tabs />
      </NavigationContainer>
    </View>
  );
};

export default WithThemingProvider(App);

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});
