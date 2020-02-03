import React from 'react'
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Header from '../Assets/Component/Header'

// ***** Import Screen ***** //
import SplashScreen from '../Screen/Splash/SplashScreen'
import HomeScreen from '../Screen/Home/Home'
// ***** /Import Screen ***** //

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      // eslint-disable-next-line react/display-name
      header: () => <Header />,
    }
  },
})

const AppNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  AppStack: AppStack,
})

export default createAppContainer(AppNavigator)