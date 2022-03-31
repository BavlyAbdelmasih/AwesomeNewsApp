import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBarIcon from '../../components/TabBarIcon';
import Details from '../../screens/Details';
import News from '../../screens/News';
import NewsStack from '../NewsStack';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="News"
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
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
        component={Details}
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
