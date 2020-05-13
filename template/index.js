import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import tron from 'reactotron-react-native';

import App from './App';

require('react-native').unstable_enableLogBox();

if (__DEV__) {
  console.tron = tron;
}

AppRegistry.registerComponent('project_name', () => App);
