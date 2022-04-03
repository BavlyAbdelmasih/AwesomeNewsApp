import {Text, View, Switch, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import {useTranslation} from 'react-i18next';
import '../../i18n/i18n';
import styles from './styles';
import {ThemeContext} from '../../Theming/ThemeContextProvider';
import {colors, Language} from '../../constants/constants';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const themeContext = useContext(ThemeContext);
  const {t, i18n} = useTranslation();

  const [currentLanguage, setLanguage] = useState<string>(Language.english);

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
              language == currentLanguage ? colors.green : colors.lightGrey,
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
      <Text style={{color: isEnabled ? colors.yellow : colors.black}}>
        {!isEnabled ? 'Light Mode is On' : 'Dark Mode is On'}
      </Text>
      <Switch
        trackColor={{false: colors.darkGrey, true: colors.green}}
        thumbColor={isEnabled ? colors.yellow : colors.white}
        ios_backgroundColor={colors.iosDarkBackgroundColor}
        onValueChange={() => {
          themeContext.toggleTheme();
          toggleSwitch();
        }}
        value={isEnabled}
      />

      <View style={{flexDirection: 'row', marginVertical: 50}}>
        {LanguageButton('Choose English', Language.english)}
        {LanguageButton('wähle deutsch', Language.Deutsch)}
      </View>
    </View>
  );
};

export default Settings;
