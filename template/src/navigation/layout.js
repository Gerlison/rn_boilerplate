import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import BoilerPlate from '~/modules/BoilerPlate/navigation/layout';

const AppNavigator = createStackNavigator(
  {
    Home: BoilerPlate
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);


export default createAppContainer(AppNavigator);