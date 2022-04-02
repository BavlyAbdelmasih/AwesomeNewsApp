import {TextInput, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTranslation} from 'react-i18next';
interface Props {
  onInputChange: (value: string) => void;
}
const SearchBar = ({onInputChange}: Props) => {
  const [inputValue, setInputValue] = useState('');
  const {t, i18n} = useTranslation();
  return (
    <View style={styles.textInputBg}>
      <TextInput
        placeholder={t('search titles')}
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
