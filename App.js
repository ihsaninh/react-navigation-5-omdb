import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';

import RootNavigation from './app/navigation/RootNavigation';

enableScreens();

const AppNavigator = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#1D1D1D" />
      <RootNavigation />
    </Fragment>
  )
}

export default AppNavigator;