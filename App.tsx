import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import News from './src/screens/News';

const App = () => {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <News />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});
