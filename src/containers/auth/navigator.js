import { createStackNavigator } from 'react-navigation-stack';

import SignInScreen from './screens/SignIn';
import RequestScreen from './screens/Request';

const AuthNavigator = createStackNavigator(
  {
    SignIn: { screen: SignInScreen },
    Request: { screen: RequestScreen },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default AuthNavigator;
