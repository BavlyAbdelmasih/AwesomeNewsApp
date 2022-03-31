import {View, StyleSheet} from 'react-native';
import React from 'react';
import News from './src/screens/News';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.containerStyle}>
        <Tabs />
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'rgb(214,214,214)',
  },
});
