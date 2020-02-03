import React, { Component } from 'react'
// import configureStore from './src/Components/Redux/Store'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/Redux/Reducers'
import { Platform, StatusBar } from 'react-native'
import AppNavigator from './src/Navigation/Navigator'
import { Root } from 'native-base'

export default class App extends Component {
  constructor() {
    super()
    // Create Store Redux
    this.store = createStore(reducers)
  }

  render() {
    return (
      <Root>
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        <Provider store={this.store}>
          <AppNavigator />
        </Provider>
      </Root>
    )
  }
}