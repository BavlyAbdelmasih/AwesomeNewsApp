import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {colors} from '../../constants/constants';
interface Props {
  iconName: string;
  focused: boolean;
  title: string;
}
const TabBarIcon = ({iconName, focused, title}: Props) => {
  return (
    <View style={styles.container}>
      <Icon
        name={iconName}
        size={30}
        color={focused ? colors.green : colors.mediumGrey}
      />
      <Text
        style={[
          styles.title,
          {color: focused ? colors.green : colors.mediumGrey},
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default TabBarIcon;
