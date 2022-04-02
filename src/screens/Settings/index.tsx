import {StyleSheet, Text, View, Switch, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import {ThemeContext} from '../../../Theming/ThemeContextProvider';
import {useTranslation} from 'react-i18next';
import '../../i18n/i18n';

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
        style={{
          backgroundColor: language == currentLanguage ? '#33A850' : '#d3d3d3',
          width: 150,
          height: 70,
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
