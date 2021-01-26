import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthNavigator from '../containers/auth/navigator';
import AppNavigator from '../containers/app/navigator';
import Splash from '../containers/auth/screens/Splash';

const SwitchNavigator = createSwitchNavigator({
  Splash: { screen: Splash },
  App: AppNavigator,
  Auth: AuthNavigator,
});

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
