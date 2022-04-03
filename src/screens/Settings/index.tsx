import {StyleSheet, Text, View, Switch, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import {useTranslation} from 'react-i18next';
import '../../i18n/i18n';
import styles from './styles';
import {ThemeContext} from '../../Theming/ThemeContextProvider';

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const themeContext = useContext(ThemeContext);
  const {t, i18n} = useTranslation();

  const [currentLanguage, setLanguage] = useState<string>('en');

  const changeLanguage = (value: string) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  const LanguageButton = (title: string, language: string) => {
    return (
      <Pressable
        onPress={() => changeLanguage(language)}
        style={[
          styles.LanguageButton,
          {
            backgroundColor:
              language == currentLanguage ? '#33A850' : '#d3d3d3',
          },
        ]}>
        <Text>{title}</Text>
      </Pressable>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: themeContext.theme.backgroundColor},
      ]}>
      <Text style={{color: isEnabled ? 'yellow' : 'black'}}>
        {!isEnabled ? 'Light Mode is On' : 'Dark Mode is On'}
      </Text>
      <Switch
        trackColor={{false: '#767577', true: 'green'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => {
          themeContext.toggleTheme();
          toggleSwitch();
        }}
        value={isEnabled}
      />

      <View style={{flexDirection: 'row', marginVertical: 50}}>
        {LanguageButton('Choose English', 'en')}
        {LanguageButton('wähle deutsch', 'de')}
      </View>
    </View>
  );
};

export default Settings;
