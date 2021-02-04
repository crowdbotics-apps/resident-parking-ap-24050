import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import AddToWhitelist from './screens/AddToWhitelist';
import AddGuest from './screens/AddGuest';
import Credentials from './screens/Credentials';
import AddCar from './screens/AddCar';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    AddToWhitelist: { screen: AddToWhitelist },
    AddGuest: { screen: AddGuest },
    Credentials: { screen: Credentials },
    AddCar: { screen: AddCar },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default AppNavigator;
