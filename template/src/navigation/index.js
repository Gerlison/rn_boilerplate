import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Sample from '@modules/sample';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Sample} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
