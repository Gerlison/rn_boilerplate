import { createAppContainer } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';

import BoilerPlate from '@modules/sample';

const AppNavigator = createStackNavigator(
  {
    Home: BoilerPlate,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
