import { createStackNavigator } from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import { createSwitchNavigator } from 'react-navigation';

import Home from './screens/Home';
import AddToWhitelist from './screens/AddToWhitelist';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    AddToWhitelist: { screen: AddToWhitelist },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default AppNavigator;
