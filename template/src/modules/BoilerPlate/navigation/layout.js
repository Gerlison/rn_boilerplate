import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Screen from '../screens/Screen';

const BoilerPlateStack = createStackNavigator(
  {
    Screen
  },
  {
    initialRouteName: 'Screen',
    headerMode: 'none'
  }
);


export default BoilerPlateStack;