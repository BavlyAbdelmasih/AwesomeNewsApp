import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useContext, useState} from 'react';
import {ThemeContext} from '../../../Theming/ThemeContextProvider';

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const themeContext = useContext(ThemeContext);

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
