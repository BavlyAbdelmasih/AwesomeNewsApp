import {TextInput, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
interface Props {
  onInputChange: (value: string) => void;
}
const SearchBar = ({onInputChange}: Props) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <View style={styles.textInputBg}>
      <TextInput
        placeholder="seach by any name here"
        style={styles.textInput}
        value={inputValue}
        onChangeText={value => {
          setInputValue(value);
          onInputChange(value.trim());
        }}
      />
    </View>
  );
};

export default SearchBar;
