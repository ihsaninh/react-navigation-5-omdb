import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

import RootNavigation from './app/navigation/RootNavigation';

const AppNavigator = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#1D1D1D" />
      <RootNavigation />
    </Fragment>
  )
}

export default AppNavigator;