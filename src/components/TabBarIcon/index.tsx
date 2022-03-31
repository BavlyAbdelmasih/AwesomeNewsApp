import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props {
  iconName: string;
  focused: boolean;
}
const TabBarIcon = ({iconName, focused}: Props) => {
  return (
    <View>
      <Icon name={iconName} size={30} color={focused ? 'green' : 'grey'} />
    </View>
  );
};

export default TabBarIcon;
