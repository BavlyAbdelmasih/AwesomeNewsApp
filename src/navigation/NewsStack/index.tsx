import {createStackNavigator} from '@react-navigation/stack';
import Details from '../../screens/Details';
import News from '../../screens/News';
import React from 'react';

const Stack = createStackNavigator();

function NewsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={News} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default NewsStack;
