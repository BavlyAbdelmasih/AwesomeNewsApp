import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useContext} from 'react';
import {ThemeContext} from '../../../Theming/ThemeContextProvider';
import TabBarIcon from '../../components/TabBarIcon';

import Settings from '../../screens/Settings';
import NewsStack from '../NewsStack';

const Tab = createBottomTabNavigator();

function Tabs() {
  const themeContext = useContext(ThemeContext);
  return (
    <Tab.Navigator
      initialRouteName="News"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: themeContext.theme.backgroundColor},
      }}>
      <Tab.Screen
        name="News"
        component={NewsStack}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <TabBarIcon iconName="home" focused={focused} title="Home" />
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
              <TabBarIcon iconName="gear" focused={focused} title="Settings" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default Tabs;
