import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../../Theming/ThemeContextProvider';
import TabBarIcon from '../../components/TabBarIcon';

import Settings from '../../screens/Settings';
import NewsStack from '../NewsStack';

const Tab = createBottomTabNavigator();

function Tabs() {
  const themeContext = useContext(ThemeContext);
  const {t, i18n} = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="NewsStack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: themeContext.theme.backgroundColor},
      }}>
      <Tab.Screen
        name="NewsStack"
        component={NewsStack}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <TabBarIcon iconName="home" focused={focused} title={t('Home')} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <TabBarIcon
                iconName="gear"
                focused={focused}
                title={t('Settings')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default Tabs;
