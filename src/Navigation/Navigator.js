import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// ***** Import Pages ***** //
import SplashScreen from '../Screen/Splash/SplashScreen'
import HomeScreen from '../Screen/Home/Home'
// ***** /Import Pages ***** //

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AppNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  AppStack: AppStack,
})

export default createAppContainer(AppNavigator)