import {TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTranslation} from 'react-i18next';
interface Props {
  onInputChange: (value: string) => void;
  qvalue: string;
}
const SearchBar = ({onInputChange, qvalue}: Props, {routes}: any) => {
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    onInputChange(qvalue);
    setInputValue(qvalue);
  }, [qvalue]);

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
      <Icon
        name={inputValue?.length > 0 ? 'close' : 'search'}
        size={15}
        color="grey"
        onPress={() => {
          if (inputValue?.length > 0) {
            setInputValue('');
            onInputChange('');
          }
        }}
      />
    </View>
  );
};

export default SearchBar;
