import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {colors} from '../../constants/constants';

interface Props {
  name: string;
  selectedCategory: string;
  onPress: () => void;
}
const CategoryItem = ({name, selectedCategory, onPress}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.categoryContainer,
        {
          backgroundColor:
            selectedCategory === name ? colors.green : colors.lightGrey,
        },
      ]}>
      <Text style={styles.category}>{name}</Text>
    </Pressable>
  );
};

export default CategoryItem;
