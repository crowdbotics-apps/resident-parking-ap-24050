import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import AddGuest from './screens/AddGuest';
import Credentials from './screens/Credentials';
import AddCar from './screens/AddCar';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
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
