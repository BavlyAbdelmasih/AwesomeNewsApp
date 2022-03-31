import {TextInput, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
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
      <Icon name="search" size={15} color="grey" />
    </View>
  );
};

export default SearchBar;
