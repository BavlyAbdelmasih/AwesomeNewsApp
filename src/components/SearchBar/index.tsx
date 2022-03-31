import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import styles from './styles';

const SearchBar = () => {
  return (
    <View style={styles.textInputBg}>
      <TextInput
        placeholder="seach by any name here"
        style={styles.textInput}
      />
    </View>
  );
};

export default SearchBar;
