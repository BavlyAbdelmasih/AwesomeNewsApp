import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBarIcon from '../../components/TabBarIcon';
import News from '../../screens/News';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={News}
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
        component={News}
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
