import {View, StyleSheet} from 'react-native';
import React from 'react';
import News from './src/screens/News';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import linking from './src/navigation/linking';
import WithThemingProvider from './src/Theming/WithThemingProvider';

const App = () => {
  return (
    <View style={styles.containerStyle}>
      <NavigationContainer linking={linking}>
        <Provider store={store}>
          <Tabs />
        </Provider>
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
